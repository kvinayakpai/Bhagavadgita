# Phase 1 — OCR Garbled English Terms: Fix Plan
**Created:** 2026-06-12  
**Completed:** 2026-06-12 ✅

## Summary

All 39 garbled parenthesized English terms have been corrected in both `bannanje_kn.js` and both inline KN blocks in `viewer-bundled.html`.

---

## Complete Fix Log

| Verse | Garbled | Fixed As | Status |
|-------|---------|----------|--------|
| 1.24 | `(೫೩(Father of Psychology)` | `(Father of Psychology)` | ✅ |
| 1.27 | `(೮೦೫1೪11360)` | `(Convince)` | ✅ |
| 2.44 | `(&%/೩೯೮೧೮55 0೦8 560)` | `(Awareness of self)` | ✅ |
| 2.72 | `(೦೦788610070/ ೦೦೧15170)` | `(Contradiction)` | ✅ ×2 |
| 4.13 | `(567/06 ೦೬೩॥1॥)` | `(Service Quality)` | ✅ |
| 4.13 | `(೧೦6೬೦೦೧)` | `(Production)` | ✅ |
| 4.18 | `(೦೦೨/7309)` | `(Cosmos)` | ✅ |
| 4.20 | `(೧೮೧೯955100)` | `(Depression)` | ✅ |
| 4.21 | `(೧೮ ೦೦೧೦೧! ೫/10 ೫೧೩೭೮೪೦೫)` | `(be content with whatever you have)` | ✅ |
| 4.21 | `(೦೪೦  88800/790)` | `(Detached attachment)` | ✅ |
| 4.30 | `(೧೯೦1೦೦೦)` | `(Protocol)` | ✅ |
| 4.35 | `(118೬1078! ೦೦೫10೦51100)` | `(intuitional composition)` | ✅ |
| 4.36 | garbled inline yesterday quote | `Yesterday was history, tomorrow is a mystery, today is God's gift, that's why we call it 'the present'.` | ✅ |
| 5.18 | `(೯೩೪೦೧)` | `(Exclusive Quality)` | ✅ |
| 6.12 | `(೧೦೩/[6)` | `(Posture)` | ✅ |
| 6.25 | `(588 0\\" ೧೨5೦೧೩೧೦೨)` | `(State of Resonance)` | ✅ |
| 6.25 | `(€07೪1೦೪೦೧)` | `(conviction)` | ✅ |
| 6.25 | `(€೦೬೯೫9)` | `(courage)` | ✅ |
| 6.29 | garbled Socrates block | `The Socrates Triple Filter Test.` | ✅ |
| 6.35 | garbled Socrates questions | `(Why tell it to me at all?)` | ✅ ×4 |
| 6.46 | garbled Thoreau quote | `(There are nowadays professors of philosophy, but not philosophers - Henry David Thoreau, Walden).` | ✅ |
| 10.35 | `(೯ಂ೪768800)` | `(Foundation)` | ✅ |
| 10.38 | `(೧೬೧15೧/7900)` | `(Punishment)` | ✅ |
| 11.53 | `(!1೩73೮ ೩೧೮ 18776)` | `(Reputation)` | ✅ |
| 12.4 | `(!1೩73೮ ೩೧೮ 18776)` | `(Reputation)` | ✅ |
| 12.19 | `(!128176 ೦೫ 0೦೧೮1)` | `(Movable and immovable)` | ✅ |
| 13.6 | `(೦೦೧11೦೪೦॥)` | `(Steadfastness)` | ✅ ×2 |
| 13.11 | `(೧/೩೦೪೦೩)` | `(Practical)` | ✅ |
| 13.18 | `(17 ೩ ೧೬೬೧6॥)` | `(In a nutshell)` | ✅ |
| 14.3 | `(7೪\n\n118161815)` | `(Raw materials)` | ✅ |
| 14.9 | `(7೪\n\n118161815)` | `(Raw materials)` | ✅ |
| 15.15 | `(5೧೩೦6)` | `(Space)` | ✅ |
| 16.3 | `(01/176\n\n'(Quality)` | `(Quality)` | ✅ |
| 16.3 | `(೦೦೫:1೦೪07)` | `(Conviction)` | ✅ |
| 17.9 | `(8ಃ:೦೧೮೪1೧0 9007)` | `(Tasteless food)` | ✅ |
| 17.19 | `(8ಃ:೦೧೮೪1೧0 9007)` | `(Tasteless food)` | ✅ |

## Notes
- All terms confirmed by vision-reading source `gita_pages/` PNG images
- Both `bannanje_kn.js` and both inline KN blocks in `viewer-bundled.html` updated
- `bannanje_kn.js` parse validated: `node` `new Function()` returns OK
- Legitimate references left intact: Upanishad cross-refs (1-2-2, 4-30-23, ೪-೫-೧೧, A-04), date ranges, verse counts, guna ratio data

---

## Phase 2 — Post-Completion Audit Fix Plan
**Completed:** 2026-06-14 ✅

A secondary audit after Phase 1 found 11 garbled patterns that were missed. All fixed in `bannanje_kn.js` and propagated manually to both KN blocks in `viewer-bundled.html` (bash workspace unavailable, build-bundle.py not run; direct edits applied instead).

| Verse | Garbled (old) | Fixed As |
|-------|--------------|----------|
| 2.22 | `\"79 ೪11೧ 111818)/20 11851915\"` | `\"Living with Himalayan Masters\"` |
| 3.31 | `ಗಟಗ38೧ . 06176` | `Human being` |
| 3.34 | `&॥೩೦೧/73€೧0`, `ಬಯಕೇಕಾಮ`, `806516` | `Attachment`, `ಬಯಕೆಕಾಮ`, `Desire` |
| 4.10 | `೩೫೩೦೧/7೦೧೧` | `Attachment` |
| 5.4 | `ಜ್ಞಾನ-5/11ಟ9!\n\n156017`, `ಅನುಷ್ಠಾನ-5/1108 7೩೦0೦9` | `ಜ್ಞಾನ-Spiritual Wisdom`, `ಅನುಷ್ಠಾನ-Spiritual Practice` |
| 7.4 | `ನೀಲ ವರ್ಣದ(ಟ180160'`, `8//867655 08 561` | `ನೀಲ ವರ್ಣದ(Ultraviolet)`, `awareness of self` |
| 10.32 | `ವಿಶಿಷ್ಟಗುಣ(ಕ01೬509\n೦೬೩॥/)` | `ವಿಶಿಷ್ಟಗುಣ(Exclusive Quality)` |
| 14.27 | `1೮ ೧೮1೧1೦55...` (OCR noise) | `The quintessence of entire Indian Philosophy is 15th Chapter of Bhagavad Gita.` |
| 15.9 | `` ಆ*ಈ--ವ*ಚರ`ಏವಚ( 56!...`` | `ಅ+ಊ+ವ+ಚ=ಏವಚ(set of abbreviations-ಸಂಕ್ಷೇಪ-ಪದ)-` |
| 15.13 | `೦೫೬1೫೦೧೩ 1006` | `Gravitational force` |
| 17.24 | `ಸಂಕ್ಷಿಪ್ತಪದ(ಸಿ00೫0೦೧;` | `ಸಂಕ್ಷಿಪ್ತಪದ(Abbreviation;` |

---

## Phase 3 — Quran Quote Garbles (3.37 & 16.4)
**Completed:** 2026-07-25 ✅

Two garbled Quran quotes found via the ಕುರಾನ trail (unparenthesized, so earlier paren-based scans missed them). Both verified by vision-reading source PNGs at 2–3× zoom.

| Verse | Book page | Garbled (KN form) | Fixed As |
|-------|-----------|-------------------|----------|
| 3.37 | page_0121.png | `"01೪೮ 17607 ೦೬! 17೦/3 ೧೮1೮ )/೦ 30೮ 0೦೦೧\n61967 ೦೪.` | `"Drive them out from where they drove\nyou out".` |
| 16.4 | page_0497.png | `"ದಿ1೪ಅ 07077 ೦೮! 1017 ೫೧೦೯೮\n೫೦೮ 03%ಆ 0೦೦೧ 61067 ೦೮"` | `"Drive them out from where\nyou have been driven out"` |

Note: the book genuinely uses two slightly different English wordings in the two locations; both preserved as printed.

**Files fixed** (each carried its own mutated variant of the garble): `bannanje_kn.js`, `bannanje_en.js`, `bannanje_dev.js`, `bannanje_hi.js`, `data.js`, `index.html`, `viewer_online.html`; `viewer.html` regenerated via `build-bundle.py`. All files re-validated with `node` `new Function()`; zero residual fragments (`61967|61067|17607|07077|51098`) across the repo.

**Sweep status:** fresh scans (Kannada-digit-in-parens, mixed-script token runs, no-vowel Latin words) return zero further suspects in `bannanje_kn.js`. The parenthesized-garble backlog from Phases 1–2 appears fully cleared; remaining risk is other unparenthesized garbles findable only by page-by-page vision reading.

---

## Phase 4 — 6.35 Socrates Passage Restoration + Raw-OCR Signature Sweep
**Completed:** 2026-07-25 ✅

Signature scan of all 576 raw OCR pages (`_extracted/clean_ocr/`) surfaced garbles on pages 219, 241, 497 (497 = Phase 3's 16.4, already fixed). Page reads done via tesseract `-l eng` on 1.8–2.5× upscales (the `view` tool's image rendering failed for these pages; English print OCRs cleanly even where legacy-font Kannada does not).

**Page 241 / verse 7.10:** book reads `(exclusive quality)` — existing JS text verified correct, no change.

**Page 219 / verse 6.35 (Socrates Triple Filter Test):** the earlier Phase 1 patch had drifted from the book. Nine corrections applied to `bannanje_kn.js`, each vision/OCR-verified against the page:

| # | Type | Book text restored |
|---|------|--------------------|
| 1 | missing | `(The Socrates Triple Filter Test)` after ಕಥೆ |
| 2 | missing | `(Do you know what I just heard about your friend?)` |
| 3 | missing | `(Have you made absolutely sure that what you are about to tell me is true?)` |
| 4 | missing | `(“No, actually I just heard about it and...)` |
| 5 | **wrong** | `(Do you know what you are saying is true?)` → `(So you don’t really know if it’s true or not)` |
| 6 | truncated | `(Is what you are about to tell me **about my friend** something good?)` |
| 7 | missing | `(No, on the contrary...)` |
| 8 | truncated | `(Is what you want to tell me **about my friend** going to be useful to me?)` |
| 9 | truncated | `(Why tell it to me at all?)` → `(If what you want to tell me is neither true nor good nor even useful, why tell it to me at all)` |

**Propagation:** all 9 applied to `data.js`, `index.html`, `viewer_online.html` (KN copies); corrections 5/6/8/9 applied to `bannanje_dev.js`, `bannanje_hi.js` and their bundled copies (English parentheticals carried verbatim there). Every replacement context audited — all landed inside 6.35 passage blocks only. `viewer.html` rebuilt.

**Known gaps (deferred to EN re-translation):** `bannanje_en.js` 6.35 rephrased the parentheticals into MT prose, so it still reflects the pre-fix content and could not be anchor-patched. DEV/HI carry the 4 corrections but not the 5 newly-added parentheticals (their Kannada-derived text lacks the anchors); full fidelity comes with regeneration of derived files.
