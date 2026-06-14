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
