# OCR Garble Propagation Plan: en.js / hi.js / dev.js

**Created:** 2026-06-14  
**Source of truth for fixes:** `GARBLED_TERMS_FIXPLAN.md` (Phase 1 + Phase 2, all done in kn.js)  
**Remaining work:** Apply equivalent fixes to `bannanje_en.js`, `bannanje_hi.js`, `bannanje_dev.js`

---

## How to Resume (read this first in every session)

1. Read this file — find the first verse row where not all three files show ✅
2. Grep the target file for the verse key: `grep -n '"X.Y"' bannanje_en.js`
3. Read that line in the file to find the actual garbled string (it will differ from kn.js)
4. Fix with the Edit tool using the correct English term from the "Fix As" column
5. Update the status row in this file (change ⏳ → ✅ or ❌ if absent)
6. After completing all three files for a verse: `git add -A && git commit -m "fix: OCR verse X.Y en/hi/dev"`
7. Move to the next pending verse

**Key rules:**
- Garble strings differ per file — always read the target file before editing; never assume the same string as kn.js
- en.js garbles tend to be ASCII-digit strings mixed into English words
- hi.js garbles mix Devanagari numerals and ASCII with Hindi text  
- dev.js garbles are similar to hi.js (Devanagari context)
- Some Phase 2 fixes are Kannada-word typos (marked KN-ONLY) — those verses still need the English-term garbles checked in en/hi/dev

---

## Progress Table

Legend: ✅ done · ⏳ pending · ❌ term absent in this file · 🔍 needs manual verify

| Verse | Fix As | en.js | hi.js | dev.js | Notes |
|-------|--------|-------|-------|--------|-------|
| **1.24** | `(Father of Psychology)` | ✅ | ✅ | ✅ | Phase 1; also unlisted garble `(?9)€0116880))` in same verse — needs source image verify |
| **1.27** | `(Arguments)`, `(Convince)` | ✅ | ✅ | ✅ | Phase 1; kn.js had (Arguments) clean but en/hi/dev had it garbled too |
| **2.22** | `"Living with Himalayan Masters"` | ❌ | ❌ | ❌ | Content absent in en/hi/dev (short paraphrase, no book title) |
| **2.44** | `(Awareness of self)` | ❌ | ❌ | ❌ | Content absent in en/hi/dev |
| **2.72** | `(Contradiction)` ×2 | ❌ | ❌ | ❌ | Content absent in en/hi/dev |
| **3.28** | `(Action)`, `(Intentional Action)`, `(Attachment)` | ✅ | ✅ | ✅ | Done 2026-06-14 |
| **3.31** | `Human being` | ❌ | ❌ | ❌ | Content absent in en/hi/dev |
| **3.34** | `(Attachment)`, `(Desire)` | ❌ | ❌ | ❌ | Content absent in en/hi/dev |
| **4.10** | `(Attachment)` | ✅ | ✅ | ✅ | Done 2026-06-14 |
| **4.13** | `(Service Quality)`, `(Production)` | ✅ | ✅ | ✅ | Done 2026-06-14; unlisted garbles (133]010/)), (19080401...), (॥/156018) still in all files — need source img |
| **4.18** | `(Cosmos)` | ✅ | ✅ | ✅ | Done 2026-06-14; unlisted garbles (135॥ळ...), (66181108), (01) 316...) still present — need source img |
| **4.20** | `(Depression)` | ✅ | ✅ | ✅ | Done 2026-06-14; unlisted (7685101), (1158...Katitta Butti!) still present — need source img |
| **4.21** | `(be content with whatever you have)`, `(Detached attachment)` | ✅ | ✅ | ✅ | Done 2026-06-14; unlisted (116130//), (18130180...) still present — need source img |
| **4.30** | `(Protocol)` | ✅ | ✅ | ✅ | Done 2026-06-14 |
| **4.35** | `(intuitional composition)` | ✅ | ✅ | ✅ | Done 2026-06-14; unlisted garbled quote "7% 15 31..." still present — need source img |
| **4.36** | `Yesterday was history, tomorrow is a mystery, today is God's gift, that's why we call it 'the present'.` | ❌ | ✅ | ✅ | Phase 1; full quote garble; absent in en.js; fixed hi/dev 2026-06-15 |
| **5.4** | `(Spiritual Wisdom)`, `(Spiritual Practice)` | ✅ | ✅ | ✅ | Phase 2; prefix words are KN-ONLY; done 2026-06-14 |
| **5.18** | `(Exclusive Quality)` | ❌ | ✅ | ❌ | Phase 1; absent in en.js and dev.js; done hi.js 2026-06-14 |
| **6.12** | `(Posture)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **6.25** | `(State of Resonance)`, `(conviction)`, `(courage)` | ❌ | ✅ | ✅ | Phase 1; absent in en.js; done hi/dev 2026-06-14 |
| **6.29** | `The Socrates Triple Filter Test.` | ❌ | ✅ | ✅ | Phase 1; absent in en.js; 6.29 had undecodable Bible quote — deleted entire block (intro + garble + closing sentence) in hi/dev, per kn.js precedent; fixed 2026-06-15 |
| **6.35** | `(Why tell it to me at all?)` ×4 | ❌ | ✅ | ✅ | Phase 1; absent in en.js; Socrates Triple Filter Test dialogue — 11 garbles fixed in hi/dev (6 restored from kn.js, 3 deleted undecodable, 2 title/subtitle deleted); fixed 2026-06-15 |
| **6.46** | `(There are nowadays professors of philosophy, but not philosophers - Henry David Thoreau, Walden).` | ❌ | ✅ | ✅ | Phase 1; absent in en.js; Thoreau quote fixed in hi/dev (two-step: core quote + attribution); fixed 2026-06-15 |
| **7.4** | `(Ultraviolet)`, `(awareness of self)` | ❌ | ❌ | ❌ | Phase 2; absent in en/hi/dev (short paraphrase, no parenthetical terms) |
| **10.32** | `(Exclusive Quality)` | ✅ | ✅ | ✅ | Phase 2; done 2026-06-14 |
| **10.35** | `(Foundation)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **10.38** | `(Punishment)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **11.53** | `(Reputation)` | ❌ | ✅ | ❌ | Phase 1; absent in en.js and dev.js; done hi.js 2026-06-14 |
| **12.4** | `(Reputation)` | ❌ | ❌ | ✅ | Phase 1; absent in en.js and hi.js; done dev.js 2026-06-14 |
| **12.19** | `(Movable and immovable)` | ✅ | ✅ | ✅ | Phase 1; done 2026-06-14 |
| **13.6** | `(Steadfastness)` ×2 | ✅ | ✅ | ✅ | Phase 1; done 2026-06-14 |
| **13.11** | `(Practical)` | ✅ | ✅ | ✅ | Phase 1; done 2026-06-14 |
| **13.18** | `(In a nutshell)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **14.3** | `(Raw materials)` | ✅ | ✅ | ✅ | Phase 1; done 2026-06-14 |
| **14.9** | `(Raw materials)` | ✅ | ✅ | ✅ | Phase 1; done 2026-06-14 |
| **14.27** | `The quintessence of entire Indian Philosophy is 15th Chapter of Bhagavad Gita.` | ❌ | ✅ | ❌ | Phase 2; absent in en.js and dev.js; done hi.js 2026-06-14 |
| **15.9** | abbreviation formula | ❌ | 🔍 | 🔍 | Phase 2; formula is KN-script-specific; absent in en.js; verify hi/dev |
| **15.13** | `Gravitational force` | ❌ | ❌ | ❌ | Phase 2; absent in en/hi/dev (short paraphrase) |
| **15.15** | `(Space)` | ❌ | ❌ | ❌ | Phase 1; absent in en/hi/dev (short paraphrase) |
| **16.3** | `(Quality)`, `(Conviction)` | ❌ | ❌ | ❌ | Phase 1; absent in en/hi/dev (short paraphrase) |
| **17.9** | `(Tasteless food)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **17.19** | `(Tasteless food)` | ✅ | ✅ | ❌ | Phase 1; done 2026-06-14; absent in dev.js |
| **17.24** | `(Abbreviation)` | ✅ | ✅ | ✅ | Phase 2; done 2026-06-14 |

---

## Commit Log

| Date | Commit | Verses |
|------|--------|--------|
| 2026-06-14 | (initial plan) | — |
| 2026-06-14 | fix: OCR verse 1.24, 1.27 en/hi/dev | 1.24 ✅, 1.27 ✅ |
| 2026-06-14 | fix: OCR verse 4.10, 4.13, 4.18, 4.20, 4.21, 4.30, 4.35 en/hi/dev | all ✅ |
| 2026-06-14 | fix: OCR verse 5.4, 6.12, 10.32, 10.35, 10.38, 12.19, 13.6, 13.11, 13.18, 14.3, 14.9, 17.9, 17.19, 17.24 en/hi/dev | en ✅ (14 fixed, 14 absent); hi ✅ (all 14); dev ✅ (8 fixed, 6 absent) |
| 2026-06-14 | fix: OCR verse 5.18, 6.25, 11.53, 12.4, 14.27 hi/dev | hi: 5.18 ✅, 6.25 ✅ ×3, 11.53 ✅, 14.27 ✅; dev: 6.25 ✅ ×3, 12.4 ✅; absent in en for all; 12.4 absent hi, 5.18/11.53/14.27 absent dev |
| 2026-06-15 | fix: OCR complex blocks 4.36, 6.29, 6.35, 6.46 hi/dev | hi: all 4 ✅; dev: all 4 ✅; all absent in en.js |

---

## Notes

- `bannanje_dev.js` appears to be the Devanagari-transliterated version of the Kannada commentary (not a translation), so its garble patterns are closest to hi.js
- For verses with KN-ONLY notes: the Kannada word/prefix fix does not apply to en/hi/dev, but the English term in parentheses still needs to be checked and fixed if garbled
- `viewer-bundled.html` has inline KN blocks — those were already fixed in Phase 1 + Phase 2 and do not need re-fixing here
- Git push requires VM (bash) — if VM unavailable, changes are saved to disk and will be committed in the next session when VM is available
