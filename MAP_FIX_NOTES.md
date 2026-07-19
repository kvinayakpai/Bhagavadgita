# Canvas Map — Tap / Pinch / Language Contamination: Analysis & Fix Plan

Status as of this note: **node tap now works** (transform bug fixed in the build
labelled `viewer_fixed7`). Two issues remain: **(A) pinch-to-zoom spuriously
selects a node and jumps to Focus**, and **(B) node/edge labels fall back to
English when Hindi/Sanskrit is selected**. This note records what was wrong, what
was tried, and the concrete remaining work.

---

## 1. The tap bug (RESOLVED)

### Symptom
Tapping a node did nothing. Diagnostic overlay reported `hit=null` on every tap,
even when tapping dead-centre on a clearly-rendered node.

### False leads chased (in order)
1. **Drag threshold too tight (4px).** Real fingers jitter; raised to 10px in
   client space. Real improvement, but not the cause.
2. **`pointerup`/`setPointerCapture` unreliable on Android `content://`.** Switched
   to `mousedown`/`touchstart`+`touchend`+window `mouseup`. Legitimate, not the cause.
3. **Single vs double `devicePixelRatio` in `mapGetPos`.** Removed a `*scaleX`.
   Half-right, but incomplete — see below.
4. **`mapResetView` showed only a corner.** World is 1000×1500; viewport ~391×518.
   Old reset centred at scale 1.0 so most nodes were off-screen. Rewrote reset to
   fit the active-node bounding box into the viewport. Real bug, needed fixing, but
   still didn't make taps land.

### Actual root cause
**Draw and hit-test used inconsistent coordinate transforms.**
- `mapResizeCanvas` set the canvas base transform to `setTransform(dpr,…)`.
- `mapDrawFrame` then *additionally* applied `translate(x*dpr)` and `scale(s*dpr)`.
  Net effect: nodes were drawn under a `dpr`-squared-ish composite.
- `mapHitNode` inverted only the clean CSS-space transform
  `world = (cssTap − mapTransform)/scale`.

So a node was **drawn** in one space and **hit-tested** in another; taps landed in
the gap → `hit=null`.

### The fix that worked
One explicit, identical transform on both paths:

```
device_px = dpr * (mapTransform + scale * worldCoord)
```

- `mapResizeCanvas` keeps the base transform at **identity** (`setTransform(1,…)`).
- `mapDrawFrame` applies `translate(x*dpr)`, `scale(s*dpr)` itself; clears/fills the
  full backing store in device px.
- `mapHitNode` receives CSS-pixel taps (from `getBoundingClientRect`) and inverts
  `world = (cssTap − mapTransform)/scale`, which is exactly `device/dpr` inverted.

Verified under Pixel-5 emulation (dpr 2.75): 6/6 sampled nodes hit-test back to
themselves; 42/47 nodes visible on screen; tapping selects + opens Focus.

### Hardening still worth doing (optional but recommended)
Make hit-testing **impossible** to desync from drawing: have `mapDrawNodes`
record each node's on-screen circle (centre in CSS px + radius in CSS px) into a
`mapNodeScreenRects[]` array as it draws. `mapHitNode` then just does a
point-in-circle test against those recorded rects — no transform math at all. This
removes a whole class of future regressions.

---

## 2. The pinch bug (OPEN — highest priority)

### Symptom
Pinch-to-zoom ends by selecting whatever node is under a finger and jumping to
Focus view. Zoom itself may also feel wrong.

### Root cause (confirmed by reading the handlers)
Finger sequence during a pinch:
1. Finger 1 down → single-finger `touchstart` (len==1) sets `mapDragging = true`,
   `mapDidDrag = false`.
2. Finger 2 down → pinch `touchstart` (len==2) starts zoom, **but never clears
   `mapDragging`.**
3. During pinch, the single-finger `touchmove` early-returns (`length !== 1`), so
   **`mapDidDrag` is never set true.**
4. Fingers lift. `touchend` fires with `mapDragging===true && mapDidDrag===false`.
   The tap branch runs → `mapHitNode` → **spurious node selection + Focus jump.**

### Fix (do all three)
1. **Track pinch state.** Add `let mapPinching = false;`. Set it `true` in the
   2-finger `touchstart`; keep it true until *all* fingers are up.
2. **Suppress tap after pinch.** In the tap `touchend`, guard with
   `if (mapDragging && !mapDidDrag && !mapPinching && e.touches.length === 0)`.
   Only treat as a tap when no pinch happened and it's the last finger up.
3. **Clean handoff.** When the 2-finger `touchstart` fires, set
   `mapDragging = false` (cancel any in-progress single-finger drag) and
   `mapPinching = true`. On `touchend`, when `e.touches.length === 0`, reset
   `mapPinching = false`, `mapDragging = false`, `mapDidDrag = false`.
4. **Pinch centre uses CSS px consistently.** The pinch handler already computes
   `cx,cy` as `midpoint − rect.left/top` (CSS px) and applies the same
   `world = (c − mapTransform)/scale` math as `mapZoomAt`. This is now consistent
   with the fixed draw/hit transform — leave the math, just fix the state machine.

### Test matrix for pinch
- Two-finger pinch out → zoom in, **no** node selected on release.
- Two-finger pinch in → zoom out, no selection.
- One-finger tap on node → selects + Focus (unchanged).
- One-finger drag → pans, no selection.
- Pinch, lift one finger, keep dragging with the remaining finger → should pan,
  not select, and not re-trigger a tap when the last finger lifts.

---

## 3. Language contamination (OPEN — separate from map mechanics)

### Symptom
With Hindi (`hi`) or Sanskrit/Devanagari (`dev`) selected, node labels, edge
labels, and some detail text render in **English**.

### Root cause (confirmed in data)
`data.js` `NODES` (47 total) contain only `en` and `kn` fields. **Zero** have `hi`
or `dev`. `labelOf()` does `n.hi || n.dev || … || n.en`, so Hindi/Sanskrit always
fall through to English. This is a **data gap**, not a rendering bug — it has always
been present; the map just made it visible because labels are drawn directly.

Edge labels had a *separate* bug (now fixed): `mapDrawEdges` drew `e.type` (the raw
English relation key) instead of `UI(e.type)`. That one line is corrected.

### Chosen approach (user selected option 1)
**Mechanically transliterate the Kannada (`kn`) label into Devanagari** to populate
`dev`, and use `dev` as the `hi` fallback (Hindi and Sanskrit share Devanagari
script; acceptable for node *labels*, which are proper-noun tatva names).

Important caveat re: project's source-fidelity rule: this is **transliteration of an
existing label**, not authoring commentary. It does not touch Bannanje's commentary
text. If any node label's authoritative Devanagari spelling matters, it should be
spot-checked against the book pages — but mechanical KN→Devanagari is acceptable for
the node/edge *labels* per the user's explicit choice.

### Implementation plan
1. Build a KN→Devanagari transliteration map (both are Brahmic; a codepoint/akshara
   mapping via a small table or an existing lib such as `aksharamukha`/`indic-transliteration`
   run offline as a build step).
2. For each node: `node.dev = translit(node.kn)`. Do **not** overwrite existing
   fields. Leave `hi` unset and let `labelOf` fall back `hi → dev`.
3. Do the same for edge relation labels if they carry KN text; otherwise ensure
   `UI(e.type)` has `dev`/`hi` entries in the translations table.
4. Regenerate `data.js` (or a derived positions/labels file) via a script, keep the
   script in-repo so it's reproducible. Run the standard `data.js` JS-validity check.
5. Rebuild `viewer.html` with `build-bundle.py`.

### Verification
- Switch EN/DEV/HI/KN: every node label changes script; **no English leaks** in
  DEV/HI/KN modes (except intentional romanised subtitles if any).
- Edge labels localise too.

---

## 4. Build / commit checklist (unchanged project rules)

- Edit `viewer-src.html` (never `viewer.html` directly).
- After any `data.js` edit, run the JS-validity check:
  `node -e "const s=require('fs').readFileSync('data.js','utf-8'); new Function(s.replace('const NODES','var NODES')); console.log('OK')"`
- `python3 build-bundle.py` → commit `viewer-src.html` **and** `viewer.html` together.
- Verify on the live GitHub Pages URL (expect CDN cache lag).

---

## 5. Recommended order of work

1. **Pinch state-machine fix** (Section 2) — small, self-contained, unblocks touch UX.
2. **Hit-rect hardening** (Section 1) — prevents transform regressions.
3. **KN→Devanagari transliteration** (Section 3) — removes contamination.
4. Commit + push, verify live.
