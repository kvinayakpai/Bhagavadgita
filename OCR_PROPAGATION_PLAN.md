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
| **1.24** | `(Father of Psychology)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **1.27** | `(Convince)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **2.22** | `"Living with Himalayan Masters"` | ⏳ | ⏳ | ⏳ | Phase 2; book title garble |
| **2.44** | `(Awareness of self)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **2.72** | `(Contradiction)` ×2 | ⏳ | ⏳ | ⏳ | Phase 1; appears twice in verse |
| **3.28** | `(Action)`, `(Intentional Action)`, `(Attachment)` | ✅ | ✅ | ✅ | Done 2026-06-14 |
| **3.31** | `Human being` | ⏳ | ⏳ | ⏳ | Phase 2; check en/hi/dev for equivalent garble |
| **3.34** | `(Attachment)`, `(Desire)` | ⏳ | ⏳ | ⏳ | Phase 2; Kannada word typos are KN-ONLY; English terms still need fixing |
| **4.10** | `(Attachment)` | ⏳ | ⏳ | ⏳ | Phase 2 |
| **4.13** | `(Service Quality)`, `(Production)` | ⏳ | ⏳ | ⏳ | Phase 1; two garbles in same verse |
| **4.18** | `(Cosmos)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **4.20** | `(Depression)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **4.21** | `(be content with whatever you have)`, `(Detached attachment)` | ⏳ | ⏳ | ⏳ | Phase 1; two garbles |
| **4.30** | `(Protocol)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **4.35** | `(intuitional composition)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **4.36** | `Yesterday was history, tomorrow is a mystery, today is God's gift, that's why we call it 'the present'.` | ⏳ | ⏳ | ⏳ | Phase 1; full quote garble |
| **5.4** | `(Spiritual Wisdom)`, `(Spiritual Practice)` | ⏳ | ⏳ | ⏳ | Phase 2; prefix words are KN-ONLY; English terms need fixing |
| **5.18** | `(Exclusive Quality)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **6.12** | `(Posture)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **6.25** | `(State of Resonance)`, `(conviction)`, `(courage)` | ⏳ | ⏳ | ⏳ | Phase 1; three garbles in same verse |
| **6.29** | `The Socrates Triple Filter Test.` | ⏳ | ⏳ | ⏳ | Phase 1; full sentence garble |
| **6.35** | `(Why tell it to me at all?)` ×4 | ⏳ | ⏳ | ⏳ | Phase 1; same phrase garbled 4 times |
| **6.46** | `(There are nowadays professors of philosophy, but not philosophers - Henry David Thoreau, Walden).` | ⏳ | ⏳ | ⏳ | Phase 1; full Thoreau quote |
| **7.4** | `(Ultraviolet)`, `(awareness of self)` | ⏳ | ⏳ | ⏳ | Phase 2; `ನೀಲ ವರ್ಣದ` prefix is KN-ONLY; English terms need fixing |
| **10.32** | `(Exclusive Quality)` | ⏳ | ⏳ | ⏳ | Phase 2; Kannada prefix is KN-ONLY |
| **10.35** | `(Foundation)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **10.38** | `(Punishment)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **11.53** | `(Reputation)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **12.4** | `(Reputation)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **12.19** | `(Movable and immovable)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **13.6** | `(Steadfastness)` ×2 | ⏳ | ⏳ | ⏳ | Phase 1; appears twice |
| **13.11** | `(Practical)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **13.18** | `(In a nutshell)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **14.3** | `(Raw materials)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **14.9** | `(Raw materials)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **14.27** | `The quintessence of entire Indian Philosophy is 15th Chapter of Bhagavad Gita.` | ⏳ | ⏳ | ⏳ | Phase 2; full sentence garble |
| **15.9** | abbreviation formula | 🔍 | 🔍 | 🔍 | Phase 2; formula is KN-script-specific; verify if en/hi/dev have equivalent |
| **15.13** | `Gravitational force` | ⏳ | ⏳ | ⏳ | Phase 2 |
| **15.15** | `(Space)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **16.3** | `(Quality)`, `(Conviction)` | ⏳ | ⏳ | ⏳ | Phase 1; two garbles |
| **17.9** | `(Tasteless food)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **17.19** | `(Tasteless food)` | ⏳ | ⏳ | ⏳ | Phase 1 |
| **17.24** | `(Abbreviation)` | ⏳ | ⏳ | ⏳ | Phase 2; Kannada prefix is KN-ONLY |

---

## Commit Log

| Date | Commit | Verses |
|------|--------|--------|
| 2026-06-14 | (initial plan) | — |

---

## Notes

- `bannanje_dev.js` appears to be the Devanagari-transliterated version of the Kannada commentary (not a translation), so its garble patterns are closest to hi.js
- For verses with KN-ONLY notes: the Kannada word/prefix fix does not apply to en/hi/dev, but the English term in parentheses still needs to be checked and fixed if garbled
- `viewer-bundled.html` has inline KN blocks — those were already fixed in Phase 1 + Phase 2 and do not need re-fixing here
- Git push requires VM (bash) — if VM unavailable, changes are saved to disk and will be committed in the next session when VM is available
