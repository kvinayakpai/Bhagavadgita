# Canvas-Based Graph Implementation Plan for Tatvam Jalam

## Overview

The current `renderMapHandLaid` and `renderMapAuto` produce a **static SVG** string
injected into `.map-wrap`. The replacement is a **canvas-based renderer** with a
`transform` state (pan + zoom), a minimap, pointer events, and an optional
force-directed simulation for the chapter-filtered views. The hand-laid
`KG_POSITIONS` data is kept and used as the stable starting layout; the physics
simulation is only used when a chapter-filter forces a dynamic subgraph.

---

## Phase 1 — HTML/CSS scaffolding ✅ COMPLETE

**File: `viewer-src.html`**

Replace the current `.map-wrap` placeholder with a canvas container. Currently
`.map-wrap` holds an injected SVG. The new structure:

```html
<div class="map-canvas-wrap" id="map-canvas-wrap">
  <canvas id="map-canvas"></canvas>
  <div class="map-minimap">
    <canvas id="minimap-canvas" width="150" height="100"></canvas>
  </div>
  <div class="map-zoom-btns">
    <button id="map-zoom-in">+</button>
    <button id="map-zoom-out">−</button>
    <button id="map-zoom-reset">⊙</button>
  </div>
  <div id="map-tooltip" class="map-tooltip"></div>
</div>
```

New CSS (replacing `.map-wrap`):

```css
.map-canvas-wrap { position:relative; width:100%; height:100%; overflow:hidden; }
#map-canvas { display:block; width:100%; height:100%; cursor:grab; touch-action:none; }
#map-canvas:active { cursor:grabbing; }
.map-minimap { position:absolute; bottom:12px; right:12px; border:1px solid var(--rule);
               border-radius:4px; overflow:hidden; background:var(--paper); }
.map-zoom-btns { position:absolute; top:12px; right:12px; display:flex;
                 flex-direction:column; gap:4px; }
.map-tooltip { position:absolute; pointer-events:none; background:var(--paper-2);
               border:1px solid var(--rule); border-radius:6px; padding:6px 10px;
               font-size:12px; max-width:200px; opacity:0; transition:opacity .15s;
               white-space:pre-line; z-index:10; }
.map-tooltip.visible { opacity:1; }
```

The control panel (chapter dropdown, verse dropdown) remains as a separate `div`
above the canvas wrap — same as now.

---

## Phase 2 — Canvas state and initialization ✅ COMPLETE

**New module in `viewer-src.html`** (replaces `renderMapHandLaid` + `renderMapAuto`):

```js
// ── Canvas Map State ──────────────────────────────────────────────────────
let mapCanvas, mapCtx, mmCanvas, mmCtx;
let mapTransform = { x: 0, y: 0, scale: 1 };
let mapNodes = [];      // [{...nodeData, x, y, vx, vy}] — working copy
let mapActiveSet = new Set();
let mapSelectedId = null;
let mapAnimFrame = null;
let mapSimRunning = false;
let mapDragging = false, mapDragStart = null, mapTransformStart = null;
let mapDidDrag = false;

// World dimensions (canvas logical space before transform)
const MAP_W = 1000;
const MAP_H = 1500;

// Color lookup (resolved from CSS vars once at init)
const TIER_HEX = {};  // populated from getComputedStyle on init
const EDGE_HEX = {};
```

`initMapCanvas()` — called once when the Map view is first shown:

1. Get canvas elements, set physical pixel size via `devicePixelRatio` for retina
   sharpness.
2. Walk CSS variables `--t-{tier}` and `--e-{type}` with `getComputedStyle` to
   populate `TIER_HEX` and `EDGE_HEX` (canvas can't read CSS vars directly).
3. Initialize `mapNodes` from `NODES` + `KG_POSITIONS`: each node gets
   `{...n, x: KG_POSITIONS[n.id][0], y: KG_POSITIONS[n.id][1], r: KG_POSITIONS[n.id][2], vx:0, vy:0}`.
   Nodes without a position entry get a tier-based default position.
4. Set up pointer events, wheel zoom, zoom buttons.
5. Start the render loop via `requestAnimationFrame`.

---

## Phase 3 — Rendering ✅ COMPLETE

**`drawFrame(activeSet, selectedId)`** — the main render function, called every frame:

```
ctx.clearRect(0, 0, canvas.width, canvas.height)
fill background with --paper color
ctx.save()
ctx.translate(transform.x, transform.y)
ctx.scale(transform.scale, transform.scale)
  drawTierBands(activeSet)
  drawEdges(activeSet, selectedId)
  drawNodes(activeSet, selectedId)
ctx.restore()
drawMinimap(activeSet, selectedId)
```

**`drawTierBands(activeSet)`**

For the full graph (all-chapters mode): iterate `KG_TIER_BANDS` (added to
`positions.js` in Phase 5) and draw alternating translucent rect fills. For
chapter-filtered mode: derive tier band y-extents dynamically from active node
positions.

**`drawEdges(activeSet, selectedId)`**

For each edge where both source and target are in `activeSet`:
- Look up source and target node positions from `mapNodes`
- Cubic Bézier curve with a gentle lateral offset (`cx1 = src.x + dx*0.3 + dy*0.2`)
- Edge color from `EDGE_HEX[e.type]` with alpha 0.5 normally, 0.9 when connected to
  `selectedId`
- Non-highlighted edges fade to alpha 0.08 when a node is selected
- Dashed style for `is-a`, solid for `leads-to`, etc. (configurable per edge type)
- Arrow head at target end using the tangent direction at t=0.85 along the cubic
- Edge label at midpoint, shown only for the selected node's edges

**`drawNodes(activeSet, selectedId)`**

For each node in `activeSet`:
- Circle at `(n.x, n.y)` with radius `n.r`
- Fill: `lighten(TIER_HEX[n.tier], 0.85)` normally; solid `TIER_HEX[n.tier]` when
  selected
- Stroke: `TIER_HEX[n.tier]`, width 2 normal / 3 selected
- Glow `shadowBlur = 20` on selected node (shadowColor = tier color)
- Alpha: 1 if active + matches search; 0.15 if filtered out; 0.25 if
  selection-dimmed
- Label: short name inside the circle (truncated to ~10 chars), font from
  `state.lang` (Tiro Kannada / Tiro Devanagari / Cormorant Garamond)
- Full label appears below the circle (outside), same as the SVG version

**`drawMinimap()`**

150×100 canvas. Scale factor = minimap dimensions / world dimensions. Draw:
- Background fill
- All edges as thin lines (alpha 0.3)
- All nodes as dots (3px radius, tier color)
- Viewport rectangle: `(-transform.x / transform.scale, -transform.y / transform.scale,
  canvas.width/transform.scale, canvas.height/transform.scale)` scaled to minimap
  — drawn as a red-outlined rect showing the current view window

---

## Phase 4 — Interaction ✅ COMPLETE

**Pan**: `mousedown`/`touchstart` → save `dragStart` and `transformStart`.
`mousemove`/`touchmove` → `transform.x += dx; transform.y += dy`.
`mouseup`/`touchend` → if `!didDrag`, run hit test and select or deselect.

**Zoom**: `wheel` event with `preventDefault()`. `zoomAt(cx, cy, factor)` —
preserves world point under cursor:

```js
const wx = (cx - transform.x) / transform.scale;
const wy = (cy - transform.y) / transform.scale;
transform.scale = clamp(transform.scale * factor, 0.25, 5);
transform.x = cx - wx * transform.scale;
transform.y = cy - wy * transform.scale;
```

Pinch-to-zoom via `touchmove` with two touches.

**Hit test**: `hitNode(cx, cy)` — convert canvas pointer coords to world coords,
find first node within `r + 4` px. Returns node or null.

**Node selection**: clicking a node calls `setView('focus', nodeId)` — unchanged
from the SVG version. The canvas map is a navigation aid, not a detail view.

**Tooltip**: `mousemove` without drag → `hitNode` → if found, show `.map-tooltip`
with node label + first 80 chars of the note. Position it offset from cursor in
screen space.

**Zoom buttons**: `+` / `−` / `⊙` call `zoomAt(canvasW/2, canvasH/2, factor)` or
reset transform.

---

## Phase 5 — `KG_TIER_BANDS` in positions.js ✅ COMPLETE (implemented alongside Phase 3)

`KG_TIER_BANDS` is currently referenced by `renderMapHandLaid` but never defined —
so `HAS_HANDLAID` is always false and the hand-laid positions are never used for the
full-graph view. This is an existing bug that this phase fixes as a side effect.

Add to `positions.js`:

```js
const KG_TIER_BANDS = [
  { tier:'parabrahma',  yTop:  40, yBottom: 280, label:{x:8, y: 58} },
  { tier:'shritattva',  yTop: 280, yBottom: 420, label:{x:8, y:298} },
  { tier:'jivatattva',  yTop: 420, yBottom: 560, label:{x:8, y:438} },
  { tier:'prakriti',    yTop: 560, yBottom: 700, label:{x:8, y:578} },
  { tier:'yoga',        yTop: 700, yBottom: 800, label:{x:8, y:718} },
  { tier:'antahkarana', yTop: 800, yBottom: 900, label:{x:8, y:818} },
  { tier:'sadhana',     yTop: 900, yBottom:1010, label:{x:8, y:918} },
  { tier:'dharma',      yTop:1010, yBottom:1120, label:{x:8, y:1028} },
  { tier:'dosha',       yTop:1120, yBottom:1270, label:{x:8, y:1138} },
  { tier:'phala',       yTop:1270, yBottom:1400, label:{x:8, y:1288} },
];
```

Y-ranges are derived from the min/max y values per tier in `KG_POSITIONS`, with
small margins.

---

## Phase 6 — Force simulation (chapter-filtered views) ✅ COMPLETE

When `chSel !== 0` (a chapter or verse is selected), the active subgraph is small
(typically 3–15 nodes). A brief physics simulation runs to settle nodes into a
clean layout:

```js
function simTick() {
  const REPEL = 8000, ATTRACT = 0.03, DAMP = 0.82, CENTER = 0.005;
  let moving = false;
  for (const ni of mapNodes) {
    if (!mapActiveSet.has(ni.id)) continue;
    let fx = 0, fy = 0;
    // Repulsion from all other active nodes
    for (const nj of mapNodes) {
      if (!mapActiveSet.has(nj.id) || ni === nj) continue;
      const dx = ni.x - nj.x, dy = ni.y - nj.y;
      const d = Math.sqrt(dx*dx+dy*dy) || 1;
      const f = REPEL / (d*d);
      fx += (dx/d)*f; fy += (dy/d)*f;
    }
    // Spring attraction along edges
    for (const e of EDGES) {
      let other = null;
      if (e.source === ni.id && mapActiveSet.has(e.target))
        other = mapNodes.find(n => n.id === e.target);
      if (e.target === ni.id && mapActiveSet.has(e.source))
        other = mapNodes.find(n => n.id === e.source);
      if (!other) continue;
      const dx = other.x-ni.x, dy = other.y-ni.y;
      const d = Math.sqrt(dx*dx+dy*dy) || 1;
      fx += (dx/d)*(d-120)*ATTRACT;
      fy += (dy/d)*(d-120)*ATTRACT;
    }
    // Weak center pull
    fx += (MAP_W/2 - ni.x)*CENTER;
    fy += (MAP_H/2 - ni.y)*CENTER;
    ni.vx = (ni.vx+fx)*DAMP;
    ni.vy = (ni.vy+fy)*DAMP;
    ni.x += ni.vx; ni.y += ni.vy;
    // Boundary clamping
    ni.x = Math.max(50, Math.min(MAP_W-50, ni.x));
    ni.y = Math.max(50, Math.min(MAP_H-50, ni.y));
    if (Math.hypot(ni.vx, ni.vy) > 0.3) moving = true;
  }
  return moving;
}
```

The simulation runs for at most 300 frames and stops when kinetic energy drops
below threshold. For the full graph (`chSel === 0`), positions come directly from
`KG_POSITIONS` — no simulation.

When switching between chapter filters, active node positions are **reset to their
`KG_POSITIONS` values** (or tier-band defaults) before the simulation restarts,
preventing accumulation of drift.

---

## Phase 7 — Integration with existing `renderMap()` ✅ COMPLETE

`renderMap()` currently calls `renderMapHandLaid` or `renderMapAuto` and replaces
`root.innerHTML`. The new approach:

```js
function renderMap() {
  const root = document.getElementById('map-root');
  // Render control panel HTML as before (chapter/verse dropdowns)
  root.innerHTML = controlPanelHtml + '<div class="map-canvas-wrap" ...></div>';

  // Initialize canvas once
  if (!mapCanvas) initMapCanvas();

  // Compute active set from state.mapChapterSel + state.mapVerseSel
  const newActive = computeActiveSet(state.mapChapterSel, state.mapVerseSel);
  updateActiveSet(newActive);  // resets positions if needed, restarts sim if filtered

  // Kick render loop
  if (!mapAnimFrame) mapAnimFrame = requestAnimationFrame(mapTick);
}
```

The canvas element must **not** be destroyed on re-render. The canvas-wrap is kept
outside the re-rendered control panel zone — only the control panel `div` is
replaced on dropdown changes.

---

## Phase 8 — `build-bundle.py` update ✅ COMPLETE (no-op as predicted)

`positions.js` now exports both `KG_POSITIONS` and `KG_TIER_BANDS`. The build
script already inlines `positions.js` verbatim — **no change to `build-bundle.py`
is needed**.

---

## Implementation sequence

1. **Add `KG_TIER_BANDS` to `positions.js`** — fixes the existing `HAS_HANDLAID`
   always-false bug as a side effect.
2. ✅ **Add canvas HTML + CSS to `viewer-src.html`** — scaffold without logic.
   - Replaced `.map-wrap` CSS with `.map-canvas-wrap`, `#map-canvas`, `.map-minimap`,
     `.map-zoom-btns`, `.map-tooltip` rules.
   - Both `renderMapHandLaid` and `renderMapAuto` now emit the canvas scaffold HTML.
   - Old SVG scroll auto-centering removed (replaced by canvas pan/zoom in Phase 4).
3. ✅ **Add `initMapCanvas`, `TIER_HEX` resolution, pointer events** — panning/zooming
   works, canvas is blank.
4. ✅ **Add `drawNodes` + `drawEdges` + `drawTierBands`** — full graph renders from
   hand-laid positions.
5. ✅ **Add minimap** — `drawMinimap` + minimap canvas.
6. **Wire up `renderMap()`** — replaces SVG path; control panel dropdown unchanged.
7. **Add chapter-filter simulation** — `simTick` + position reset on filter change.
8. ✅ **Add tooltip** — hover shows node label and note excerpt.
9. ✅ **Run `build-bundle.py`** and smoke-test.
10. **Delete old `renderMapHandLaid` and `renderMapAuto`** once stable.

---

## Key invariants

- `viewer-src.html` is the source of truth; `viewer.html` is always a build artifact.
  Every edit goes to source first, then `python3 build-bundle.py`.
- `positions.js` is inlined by the build script; it must remain valid standalone JS.
- Node click behaviour is unchanged: clicking a node calls `setView('focus', nodeId)`.
- Chapter/verse dropdown state (`state.mapChapterSel`, `state.mapVerseSel`) is
  unchanged — `renderMap()` still reads them and computes the active set.
- The empty-state message for chapters with no mapped nodes is preserved.
- `KG_TIER_BANDS` y-ranges must stay consistent with `KG_POSITIONS` coordinates.
  If new nodes are added to `positions.js`, verify they fall within their tier's band.
