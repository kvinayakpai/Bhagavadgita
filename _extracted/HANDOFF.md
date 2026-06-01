# Bhagavadgita Project — Session Handoff

**Last updated:** 2026-06-01 (session C)
**Project:** `C:\Antigravity\Bhagavadgita`
**GitHub:** https://github.com/kvinayakpai/Bhagavadgita

---

## Goal

Build a clean multilingual deliverable of the Bhagavadgītā with:
1. All 702 verses (Sanskrit śloka + Bannanje Govindacharya's Kannada commentary) extracted from `Bhagavad_Gita.pdf` (576 pages).
2. Commentary translated into English, Hindi, and Sanskrit (Devanāgarī) — 702 entries × 4 languages.
3. An interactive viewer (Browse / Focus / Map / Chapters) with one-click quad-script toggle.
4. Concept Knowledge Graph: 112 nodes, 124 typed edges, 12 tiers, Madhva siddhānta lens.

---

## Current status (after session C, 2026-06-01)

**Verse extraction: COMPLETE**
- 702 entries in `_extracted/clean_verses_700.json` (the Bannanje edition uses its own verse numbering)
- 694 / 695 actual Bannanje verses (99.9%) — 1 verse still missing (BG 15.2 / see Known Issues)
- 7 phantom rows: BG 3.43, 11.52, 11.54, 11.55, 13.35, 8.22, 1.21

**Commentary translation: COMPLETE (all 4 languages)**
| File | Language | Status |
|---|---|---|
| `bannanje_kn_private.js` | Kannada (source) | ✅ Complete — 702 entries |
| `bannanje_en_private.js` | English | ✅ Complete — 702 entries |
| `bannanje_hi_private.js` | Hindi | ✅ Complete — 702 entries |
| `bannanje_dev_private.js` | Sanskrit / Devanāgarī | ✅ Complete — 702 entries, contamination-cleaned |

**DEV contamination cleanup: COMPLETE (2026-06-01)**
- Google Translate API systematically hallucinated Kannada negation particle `ಅಲ್ಲ` (alla) → `अल्लाह`
- All 702 entries scanned and cleaned using `detect_contamination.py`
- Residual hallucinations replaced: `अल्लाह` → `न`, `इल्लाह` → `न विद्यते`
- Post-clean scan: **0 contaminated entries** out of 702

**Viewer: COMPLETE**
- Quad-script toggle: EN / DEV / HI / KN
- Chapters tab: all 18 chapters, full Bannanje commentary per shloka per language
- `viewer-bundled.html`: 15.7 MB self-contained bundle

**Documents: REBUILT (2026-06-01)**
- `Bhagavad_Gita_All_Verses_CLEAN.docx` — rebuilt from JSON
- `decks/Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pptx` — all 4 rebuilt

---

## Key file locations

```
C:\Antigravity\Bhagavadgita\
├── Bhagavad_Gita.pdf                          # source (576 pages, 2.9 MB)
├── data.js                                    # 112 concepts, 124 edges, 112 shlokas
├── positions.js                               # map coordinates
├── viewer.html / index.html                   # main SPA (byte-identical)
├── viewer-bundled.html                        # self-contained 15.7 MB bundle
│
├── bannanje_kn_private.js                     # Kannada commentary — SOURCE OF TRUTH
├── bannanje_en_private.js                     # English translation
├── bannanje_hi_private.js                     # Hindi translation
├── bannanje_dev_private.js                    # Sanskrit/Devanāgarī translation (cleaned)
│
├── build-bundle.py                            # builds viewer-bundled.html
├── build-decks.js                             # builds 4 pptx decks (needs pptxgenjs + Node.js)
├── build_docx.py                              # builds CLEAN.docx from JSON
├── translate_all_meanings.py                  # KN → EN/HI/DEV via Google Translate gtx API
├── detect_contamination.py                    # QA scan for DEV contamination
├── verify.py                                  # Python integrity auditor
├── verify.js                                  # JS structural auditor
│
├── decks/
│   ├── Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pptx   # 4 language decks (rebuilt 2026-06-01)
│   └── Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pdf    # PDF versions
│
├── Bhagavad_Gita_All_Verses_CLEAN.docx        # CURRENT — rebuilt 2026-06-01
├── Bhagavad_Gita_All_Verses_CLEAN.xlsx        # STALE — needs rebuild from JSON
├── Bhagavad_Gita_Bannanje_Clean.docx          # 112-verse concept-curated subset (stale)
│
└── _extracted/
    ├── clean_verses_700.json                  # SOURCE OF TRUTH for docx/xlsx build
    ├── bannanje_clean.json                    # 112-verse concept set (kn/en/dev/hi)
    ├── clean_verses_112.json                  # same, flattened
    ├── patched_refs.json                      # screenshot-patched verse list
    ├── HANDOFF.md                             # this file
    ├── clean_ocr/p-001.txt … p-576.txt        # 576 clean OCR pages
    ├── clean_concat.txt                       # all pages concatenated
    └── clean_markers.json                     # detected verse markers
```

> **Node.js location:** `C:\Claude\node-portable\node-v22.11.0-win-x64\node.exe`
> (not on PATH — call with full path)

---

## What's still missing / pending

### 1 verse (low priority)
- **BG 15.2** (book p~470) — Bannanje's renumbering displaces it.
  Bannanje 15.1 = conventional 15.2; need screenshot of p~470 to patch.

### XLSX needs rebuild (medium priority)
- `Bhagavad_Gita_All_Verses_CLEAN.xlsx` is stale.
- Run `python build_xlsx.py` (script exists; schema: 20 sheets, color fills by status, freeze header).
- Close Excel before rebuilding to avoid PermissionError.

### PDFs for decks (low priority)
- Convert 4 pptx → pdf using LibreOffice:
  ```bash
  for L in en dev hi kn; do
    soffice --headless --convert-to pdf --outdir decks "decks/Bhagavadgita_Concept_KG_${L}.pptx"
  done
  ```

---

## Known issues / caveats

**1. Bannanje verse numbering ≠ conventional Bhagavad Gita numbering.**
Bannanje compresses or splits verses differently. Known mappings:
- Bannanje 1.10 = conventional 1.21 ("senayor ubhayor madhye")
- Bannanje 8.10/11 = conventional 8.21/22
- Bannanje 11.30 = conventional 11.51
- Bannanje 11.34 = conventional 11.54
- Bannanje 11.35 = conventional 11.55
- Bannanje 15.1 = conventional 15.2

The JSON/DOCX/XLSX use **Bannanje's numbering** (the markers printed in the book).

**2. Phantom rows.**
7 rows in JSON are flagged `phantom_disregard` (gray when rebuilt):
BG 3.43, 11.52, 11.54, 11.55, 13.35, 8.22, 1.21

Ch 11 likely has more phantom rows in the 36–55 range from OCR mis-reads — needs audit if comprehensive Ch 11 coverage is needed.

**3. DEV translation hallucination (fixed).**
Google Translate API maps Kannada `ಅಲ್ಲ` (alla = "not") → `अल्लाह` every time.
This was discovered and fixed in session C. `detect_contamination.py` catches it going forward.
Post-processing: `अल्लाह` → `न`, `इल्लाह` → `न विद्यते`, `ನಮ್ಮ` → `अस्माकम्`.

**4. Translation method (DEV/HI/EN).**
Uses the lightweight `translate.googleapis.com/translate_a/single?client=gtx` endpoint with:
- SSL verification disabled (corporate proxy workaround)
- 800-char micro-chunking for long entries
- 3–5s delays between requests to avoid rate limiting
See `translate_all_meanings.py` and `final_cleanup.py` for implementation.

**5. Auto-extracted shloka/meaning split is imperfect.**
For the 18 rows with status `auto_extracted` in the JSON, the column split is heuristic.
Reading both columns together gives the right content.

**6. XLSX file lock.**
If user has XLSX open, saves fail with PermissionError. Tell user to close Excel before rebuilding.

**7. PDF page vs book page off-by-one.**
PDF has 576 pages; book footer page numbering is one less. Book page N = PDF page N+1.

---

## How to continue (next session)

**Standard rebuild sequence:**
```powershell
# In C:\Antigravity\Bhagavadgita

# 1. Verify everything is consistent
python verify.py

# 2. Rebuild bundle after any data change
python build-bundle.py

# 3. Rebuild XLSX (if stale)
python build_xlsx.py

# 4. Rebuild DOCX
python build_docx.py

# 5. Rebuild pptx decks
C:\Claude\node-portable\node-v22.11.0-win-x64\node.exe build-decks.js

# 6. Check DEV commentary for contamination
python detect_contamination.py

# 7. Push
git add -A
git commit -m "..."
git push origin main
```

**If retranslating commentary:**
```python
# translate_all_meanings.py handles KN → EN/HI/DEV
# Uses gtx API with SSL bypass and chunking
# Run detect_contamination.py afterward and fix any DEV issues with final_cleanup.py
```

---

## Cumulative session changes

**Session A (2026-05-30):**
- 19 verses patched from user screenshots
- BG 8.22 phantom marked
- HANDOFF.md written
- XLSX/DOCX rebuilt

**Session B (2026-05-31):**
- 18 verses auto-extracted from clean OCR via chunk-between-markers
- Coverage went 674 → 692
- XLSX rebuilt (DOCX stale)

**Session B continuation (2026-05-31):**
- 2 more screenshot patches (BG 12.3, BG 16.18) → 694 good
- 5 phantoms flagged (BG 3.43, 11.52, 11.54, 11.55, 13.35) from chapter-ending screenshots
- VM unavailable — JSON edited directly; XLSX/DOCX rebuild deferred

**Session C (2026-06-01):**
- Translated Kannada commentary into EN, HI, DEV — 702 entries × 4 languages
- Integrated multilingual commentary into Chapters tab and Focus cards
- Discovered and fixed systematic DEV contamination (अल्लाह hallucination across all chapters)
- Built `detect_contamination.py` and `verify.py` for ongoing QA
- Rebuilt `Bhagavad_Gita_All_Verses_CLEAN.docx` from JSON (fixed stale path in build_docx.py)
- Rebuilt all 4 concept KG decks (fixed missing `TIER_COLOR` export in data.js)
- Updated README.md to reflect quad-script viewer and all new files
- All changes pushed to `kvinayakpai/Bhagavadgita` (main)
