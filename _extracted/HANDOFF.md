# Bhagavadgita Project — Session Handoff

**Last updated:** 2026-05-31 (session B continuation)
**Project:** `C:\Claude\gita-concept-kg`
**GitHub:** https://github.com/kvinayakpai/Bhagavadgita

---

## Goal

Build a clean Kannada deliverable containing all Bhagavadgītā verses (Sanskrit śloka + Bannanje Govindacharya's Kannada commentary) extracted from `Bhagavad_Gita.pdf` (576 pages).

## Current status

**694 / 695 actual Bannanje verses (99.9%)** delivered in clean Unicode Kannada.

Six rows previously flagged as "missing" turned out to be **phantoms** — verses that don't exist in Bannanje's edition. Phantom count now: 7 (BG 3.43, 11.52, 11.54, 11.55, 13.35, 8.22, and the older "BG 1.21" placeholder).

Breakdown by extraction method (in `_extracted/clean_verses_700.json`):
- 655 clean (recovered from previously-lost OCR pass)
- 21 patched from user-shared screenshots (BG 12.3 and BG 16.18 added this round)
- 18 auto-extracted from clean OCR pages (some have imperfect shloka/meaning column split)
- 7 phantom_disregard (gray rows — actual content lives elsewhere, see notes)
- 1 missing_marker remaining: BG 15.2 (Bannanje's renumbering displaces it; user said "everything else attached")

## Important discovery this round

**Bannanje's verse counts DIFFER from conventional BG:**

| Chapter | Conventional | Bannanje (this edition) |
|---------|-------------:|------------------------:|
| Ch 3    | 43 verses    | **42** (3.42 = conv 3.42-43 combined) |
| Ch 11   | 55 verses    | **35** (compresses ~20 verses) |
| Ch 13   | 35 verses    | **34** |
| Ch 15   | 20 verses    | renumbered (Bannanje 15.1 = conv 15.2) |
| Ch 8, 1 | known shifts | (see Known issues) |

This means: any verse numbers higher than Bannanje's chapter limit are phantoms. The data file may still have phantom rows in Ch 11 (verses 36–55) where OCR misread Bannanje's lower numbers as higher ones. **Recommended next-session task:** audit Ch 11 verses 36-55 in the JSON; many should be re-flagged as `phantom_disregard`.

## Primary deliverables (on host)

- [`Bhagavad_Gita_All_Verses_CLEAN.xlsx`](computer://C:\Claude\gita-concept-kg\Bhagavad_Gita_All_Verses_CLEAN.xlsx) — 1.5 MB, **stale (does not reflect this round's edits)**; needs rebuild from JSON
- [`Bhagavad_Gita_All_Verses_CLEAN.docx`](computer://C:\Claude\gita-concept-kg\Bhagavad_Gita_All_Verses_CLEAN.docx) — stale; needs rebuild
- [`_extracted/clean_verses_700.json`](computer://C:\Claude\gita-concept-kg\_extracted\clean_verses_700.json) — **CURRENT source of truth; includes today's edits**

**VM is currently down**, so I couldn't rebuild XLSX/DOCX this round. Next session should run the rebuild scripts (saved in earlier bash history; schema is straightforward — openpyxl with status-based fills, python-docx with title page + per-chapter layout).

**Color legend (when rebuilt):**
- White rows = clean OCR text
- Green rows = screenshot patches
- Blue rows = auto-extracted (imperfect column split)
- Yellow rows = still placeholder
- Gray rows = phantom

## This round's changes (session B continuation, 2026-05-31)

Direct JSON edits via Edit tool (VM was down):

**Two screenshot patches applied:**
- **BG 12.3** — "Ye tv akṣaram anirdeśyam avyaktaṃ paryupāsate..." with Bannanje commentary on avyakta lakṣmī upāsanā (book p399)
- **BG 16.18** — "Ahaṅkāraṃ balaṃ darpaṃ kāmaṃ krodhaṃ ca saṃśritāḥ..." with Bannanje commentary on the āsurī svabhāva (book p503)

**Five phantoms flagged:**
- BG 3.43 → phantom (Bannanje Ch 3 has 42 verses; user-confirmed via book p124 chapter-end image)
- BG 11.52, 11.54, 11.55 → phantoms (Bannanje Ch 11 has 35 verses; user-confirmed via book p394 chapter-end image; conv BG 11.54/55 are at BG 11.34/35)
- BG 13.35 → phantom (Bannanje Ch 13 has 34 verses; user explicitly confirmed)

## Key file locations

```
C:\Claude\gita-concept-kg\
├── Bhagavad_Gita.pdf                              # source (576 pages, 2.9 MB)
├── gita_pages\page_NNNN.png                       # PDF pages rasterized (NNNN=0001..0576)
├── Bhagavad_Gita_text.txt                         # OLD garbled OCR
├── Bhagavad_Gita_All_Verses_CLEAN.xlsx            # NEEDS REBUILD from JSON
├── Bhagavad_Gita_All_Verses_CLEAN.docx            # NEEDS REBUILD from JSON
├── Bhagavad_Gita_All_Verses_RAW_OCR.xlsx          # legacy garbled fallback (keep for ref)
├── Bhagavad_Gita_All_Verses_RAW_OCR.docx          # legacy garbled fallback
├── Bhagavad_Gita_Bannanje_Clean.xlsx              # earlier 112-verse subset with 4 langs
├── Bhagavad_Gita_Bannanje_Clean.docx              # earlier 112-verse subset
└── _extracted\
    ├── clean_verses_700.json                      # SOURCE OF TRUTH — current
    ├── patched_refs.json                          # screenshot-patched list
    ├── HANDOFF.md                                 # this file
    ├── clean_ocr\p-001.txt ... p-576.txt          # 576 clean OCR pages (the gold)
    ├── clean_concat.txt                           # all pages concatenated
    ├── clean_markers.json                         # detected verse markers
    ├── bannanje_clean.json                        # 112-verse concept-curated set (kn/en/dev/hi)
    └── clean_verses_112.json                      # same, flattened
```

## What's still missing (1 verse)

- **BG 15.2** (book p~469) — Bannanje's renumbering displaces it. Bannanje 15.1 = conventional 15.2 ("adhaś cordhvaṃ prasṛtās tasya śākhā..."), so Bannanje 15.2 = conventional 15.3 ("na rūpam asyeha tathopalabhyate..."). Need screenshot of book p~470 to confirm and patch.

## How to continue (next session)

**Immediate priorities:**

1. **Restart workspace VM** (was unavailable this round)
2. **Rebuild XLSX from current JSON** — schema:
   - 20 sheets: README + "All Verses" + 18 per-chapter
   - Color fills by status (yellow/green/blue/gray)
   - Freeze pane on header, wrap-text on shloka/meaning columns
3. **Rebuild DOCX from current JSON** — title page, contents, per-verse blocks with status colors
4. **Audit Ch 11 phantoms** (verses 36-55) — many in JSON are likely also phantoms from OCR mis-reads; mark them as `phantom_disregard`
5. **Patch BG 15.2** if user provides the next page screenshot
6. Update HANDOFF.md again with the new counts

**Process notes for screenshot patches:**

When user sends screenshots:
1. Identify chapter (top banner `ಭಗವದ್ಗೀತಾ-ಅಧ್ಯಾಯ-NN`), book page (footer), verse markers visible (`॥N॥` in Kannada digits).
2. Transcribe directly from the image (Kannada renders cleanly — read verbatim, including pada-by-pada gloss and prose commentary).
3. Find matching `(chapter, verse)` row in JSON, update shloka/meaning/source_page/status='screenshot_patch'.
4. Rebuild deliverables.

If user shows a **chapter-ending page** (with "ಮುಗಿಯಿತು" text and stars `**`), it confirms what Bannanje's actual last verse number is — use that to identify phantoms.

## Known issues / caveats

**1. Bannanje verse numbering ≠ conventional Bhagavad Gita numbering.**
This is the biggest source of confusion. Bannanje compresses or splits verses differently than the standard count. Known mappings:
- Bannanje 1.10 = conventional 1.21 ("senayor ubhayor madhye")
- Bannanje 8.10/11 = conventional 8.21/22
- Bannanje 11.30 = conventional 11.51
- Bannanje 11.34 = conventional 11.54
- Bannanje 11.35 = conventional 11.55
- Bannanje 15.1 = conventional 15.2

The XLSX uses **Bannanje's numbering** (the markers printed in the book).

**2. Phantom rows.**
7 rows in JSON are flagged `phantom_disregard` (gray when rebuilt) because Bannanje's edition doesn't have those verse numbers. Ch 11 likely has more phantom rows in the 36-55 range that haven't been flagged yet — needs audit.

**3. Auto-extracted shloka/meaning split is imperfect.**
For the 18 rows with status `auto_extracted`, the chunk text is clean Kannada but the column split is heuristic. Sometimes pada-by-pada ends up in the Shloka column, or part of the formal shloka spills into Meaning. Reading both columns together gives the right content.

**4. Excel file lock.**
If user has XLSX open, saves fail with PermissionError. Rebuild script falls back to `_v5`, `_v6` etc. Tell user to close Excel before rebuilding.

**5. PDF page vs book page off-by-one.**
PDF has 576 pages; book footer page numbering is one less. Book page N = PDF page N+1.

## Cumulative session changes

**Session A (2026-05-30):**
- 19 verses patched from user screenshots
- BG 8.22 phantom marked
- HANDOFF.md written
- XLSX/DOCX rebuilt

**Session B (2026-05-31):**
- 18 verses auto-extracted from already-on-disk clean OCR via chunk-between-markers
- Coverage went 674 → 692
- XLSX rebuilt (DOCX was stale)

**Session B continuation (2026-05-31):**
- 2 more screenshot patches (BG 12.3, BG 16.18) → 694 good
- 5 phantoms flagged (BG 3.43, 11.52, 11.54, 11.55, 13.35) based on user-shared chapter-ending screenshots
- VM unavailable — JSON edited directly; XLSX/DOCX rebuild deferred to next session
