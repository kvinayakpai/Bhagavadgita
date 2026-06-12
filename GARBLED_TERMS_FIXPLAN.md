# Phase 1 — OCR Garbled English Terms: Fix Plan
**Created:** 2026-06-12  
**Status:** IN PROGRESS

## Overview

~39 garbled parenthesized English terms remain in `bannanje_kn.js` across 14 chapters. Each was corrupted by OCR when the original PDF (legacy Kannada font) was scanned. The correct English text must be recovered by vision-reading the relevant `gita_pages/page_NNNN.png` images.

**Fix method per entry:**
1. Vision-read the relevant page PNG
2. Identify the correct English term
3. Replace garbled text in `bannanje_kn.js`
4. Apply same fix to BOTH inline KN blocks in `viewer-bundled.html` (~line 600 and ~line 6450)
5. Parse-validate, commit, push

---

## Complete Inventory by Chapter

### Chapter 1 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 1.24 | `(೫೩(Father of Psychology` | ⬜ TODO |
| 1.27 | `(೮೦೫1೪11360)` | ⬜ TODO |

### Chapter 2 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 2.44 | `(&%/೩೯೮೧೮55 0೦8 560)` | ⬜ TODO |
| 2.72 | `(೦೦788610070/ ೦೦೧15170)` | ⬜ TODO |

### Chapter 4 — 9 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 4.13 | `(567/06 ೦೬೩॥1॥)` | ⬜ TODO |
| 4.13 | `(೧೦6೬೦೦೧)` | ⬜ TODO |
| 4.18 | `(೦೦೨/7309)` | ⬜ TODO |
| 4.20 | `(೧೮೧೯955100)` | ⬜ TODO |
| 4.21 | `(೧೮ ೦೦೧೦೧! ೫/10 ೫೧೩೭೮೪೦೫)` | ⬜ TODO |
| 4.21 | `(೦೪೦  88800/790)` | ⬜ TODO |
| 4.30 | `(೧೯೦1೦೦೦)` | ⬜ TODO |
| 4.35 | `(118೬1078! ೦೦೫10೦51100)` | ⬜ TODO |
| 4.36 | `(205 ೫/೧)` | ⬜ TODO |

### Chapter 5 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 5.18 | `(೯೩೪೦೧)` | ⬜ TODO |
| 5.20 | `(1-2-2)` | ⬜ TODO |

### Chapter 6 — 6 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 6.12 | `(೧೦೩/[6)` | ⬜ TODO |
| 6.25 | `(588 0\" ೧೨5೦೧೩೧೦೨)` | ⬜ TODO |
| 6.25 | `(€07೪1೦೪೦೧)` | ⬜ TODO |
| 6.25 | `(€೦೬೯೫9)` | ⬜ TODO |
| 6.29 | `(1700077 15 17 07 5...)` | ⬜ TODO |
| 6.35 | `(8 ೫08! ೦೮ ೫೩೧!...)` | ⬜ TODO |
| 6.46 | `(7೧೦೮ ೩೯೮ ೧0%/202)` | ⬜ TODO |

### Chapter 7 — 1 entry
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 7.8 | `(೧೨,೦೦೦)` | ⬜ TODO |

### Chapter 10 — 3 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 10.35 | `(೯ಂ೪768800)` | ⬜ TODO |
| 10.37 | `(24+101+12+1000)` | ⬜ TODO |
| 10.38 | `(೧೬೧15೧/7900)` | ⬜ TODO |

### Chapter 11 — 1 entry
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 11.53 | `(!1೩73೮ ೩೧೮ 18776)` | ⬜ TODO |

### Chapter 12 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 12.4  | `(!1೩73೮ ೩೧೮ 18776)` | ⬜ TODO |
| 12.19 | `(!128176 ೦೫ 0೦೧೮1)` | ⬜ TODO |

### Chapter 13 — 3 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 13.6  | `(೦೦೧11೦೪೦॥)` | ⬜ TODO |
| 13.11 | `(೧/೩೦೪೦೩)` | ⬜ TODO |
| 13.18 | `(17 ೩ ೧೬೬೧6॥)` | ⬜ TODO |

### Chapter 14 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 14.3  | `(7೪\n\n118161815)` | ⬜ TODO |
| 14.9  | `(7೪\n\n118161815)` | ⬜ TODO |

### Chapter 15 — 2 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 15.6  | `(A-04)` | ⬜ TODO — investigate (may be legitimate cross-ref) |
| 15.15 | `(5೧೩೦6)` | ⬜ TODO |

### Chapter 16 — 3 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 16.3  | `(01/176\n\n'(Quality)` | ⬜ TODO — malformed; needs investigation |
| 16.3  | `(೦೦೫:1೦೪07)` | ⬜ TODO |
| 16.3  | `(4-30-23)` | ⬜ TODO |

### Chapter 17 — 1 entry
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 17.9  | `(8ಃ:೦೧೮೪1೧0 9007)` | ⬜ TODO |
| 17.19 | `(8ಃ:೦೧೮೪1೧0 9007)` | ⬜ TODO |

### Chapter 18 — 4 entries
| Verse | Garbled text | Status |
|-------|-------------|--------|
| 18.20 | `(೪-೫-೧೧)` | ⬜ TODO |
| 18.40 | `(೫೫:೩೫:೧೦)` | ⬜ TODO |
| 18.40 | `(೪೦:೪೦:೨೦)` | ⬜ TODO |
| 18.40 | `(೩೫:೩೫:೩೦)` | ⬜ TODO |

---

## Anomalous / Special Cases
| Entry | Issue |
|-------|-------|
| `(A-04)` in 15.6 | Possibly a legitimate Upanishad cross-reference, not garbled — verify against page |
| `(01/176\n\n'(Quality)` in 16.3 | Malformed: contains embedded newline + partial word — needs page read |
| `(typeof module !== 'undefined' && module.exports)` | JS code in data — location TBD, must be removed |

---

## Progress Log

| Chapter | Date | Fixes Applied | Commit |
|---------|------|--------------|--------|
| — | — | — | — |

---

## Validation Command
```
node -e "const s=require('fs').readFileSync('bannanje_kn.js','utf-8'); try{new Function(s.replace('window.BANNANJE_KN','const X'));console.log('OK');}catch(e){console.error('FAIL',e.message);}"
```

**IMPORTANT:** After every fix, both inline KN blocks in `viewer-bundled.html` (~line 600 and ~line 6450) must also be updated.
