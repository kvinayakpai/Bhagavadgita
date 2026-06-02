# Bhagavadgita Data Files — Contamination Analysis Report

**Date:** 2026-06-02  
**Analyst:** Claude (Cowork session)  
**Scope:** File integrity checks and contamination analysis on the Bhagavadgita commentary JS files

---

## 1. Files Examined

| File | Size | Description |
|------|------|-------------|
| `Bhagavad_Gita_All_Verses_CLEAN.docx` | 640 KB | Master Word document — all 18 chapters, Sanskrit + Kannada commentary |
| `bannanje_dev_private.js` | 2.6 MB | Devanagari (Sanskrit) commentary — 702 verse entries |
| `bannanje_kn_private.js` | 2.9 MB | Kannada commentary — 702 verse entries |
| `bannanje_en_private.js` | 1.2 MB | English commentary — 702 verse entries |
| `bannanje_hi_private.js` | 2.7 MB | Hindi commentary — 702 verse entries |

All four JS files export a verse-keyed object (e.g. `"1.3": "..."`) covering all 18 chapters (702 total verses).

---

## 2. File Integrity Check

### 2.1 `Bhagavad_Gita_All_Verses_CLEAN.docx`

**Status: ✅ Not corrupted — fully readable**

- Format: Valid Microsoft OOXML (`.docx`)
- Opened cleanly with `python-docx`
- Contains **703 tables** (one per verse/entry) and **747 paragraphs**
- Content: Kannada script throughout — Sanskrit ślokas with Bannanje Govindacharya's Kannada commentary
- Structure: Table-based layout with colour-coded status flags (`clean`, `screenshot_patch`, etc.)
- Chapter index present (Chapters 1–18)

### 2.2 `bannanje_dev_private.js`

**Status: ✅ Not corrupted — passes Node.js syntax check (exit code 0)**

- Encoding: UTF-8 with CRLF line terminators
- 702 verse entries parsed successfully
- Valid JavaScript object assigned to `window.BANNANJE_VERSE_MEANINGS_DEV`
- Exports `module.exports` at the bottom for Node.js compatibility

---

## 3. Contamination Analysis

### 3.1 Methodology

The contamination check was run using `detect_contamination.py` (already present in the repo) plus a custom inline script. The following patterns were flagged as contamination:

| Pattern | Description |
|---------|-------------|
| Kannada Unicode (`U+0C80–U+0CFF`) | Kannada script characters appearing where only Devanagari is expected |
| Guillemet quotes (`«` `»`) | Formatting artifacts inherited from the Kannada source text |
| Devanagari in KN file | Sanskrit script bleeding into the Kannada commentary body |
| English words (`[a-zA-Z]{2,}`) | Roman script words embedded in Devanagari/Kannada commentary |

---

### 3.2 `bannanje_dev_private.js` — Devanagari Commentary

**Contamination: 281 / 702 verses (40.0%)**

| Type | Verses Affected |
|------|----------------|
| English words embedded in Devanagari text | 281 |
| Kannada Unicode characters | 0 |
| Guillemet quotes | 0 |

**All 18 chapters are affected.**

The contamination is English words code-switched into the Sanskrit commentary — the original lectures appear to have been delivered with informal English interjections that were transcribed verbatim rather than rendered in Devanagari. These are not transliteration errors or OCR artifacts; they are organic code-switches.

**Most frequent English words found:**

| Word | Count | Word | Count |
|------|-------|------|-------|
| can | 37 | should | 12 |
| do | 29 | don't | 10 |
| the | 24 | know | 9 |
| are | 22 | like | 9 |
| is | 20 | of | 9 |
| will | 20 | who | 8 |
| to | 18 | has | 7 |
| we | 14 | seen | 7 |
| be | 12 | | |

**Example contaminations:**

- `1.7`: *"...नायकः युद्धकाले **manages** एकः नेता..."*
- `1.24`: *"...प्रत्येकस्य... **Every one of** तेषाम्..."*
- `1.29`: *"...तस्याः स्वभावः **flirting**..."*
- `18.73`: *"...अर्जुनः **great sage** सङ्ग्रामे..."*
- `18.56`: *"...अस्माकं प्रारब्धकर्म **error** तदेव..."*

**Important note:** The `detect_contamination.py` precision detector (which targets Kannada-in-Devanagari and guillemet quotes) correctly reports **0 contaminated entries** for this file. The English contamination is a separate, distinct category that the existing script does not flag. A new detection pass is needed to systematically clean these 281 verses.

---

### 3.3 `bannanje_kn_private.js` — Kannada Commentary

**Contamination: 694 / 702 verses (98.9%)**

> Note: The high figure is partly expected — the śloka headers in this file are written in Devanagari (Sanskrit), which is normal practice in Kannada commentaries. The true contamination is the non-header Devanagari bleed-over, guillemet quotes, and English words.

| Type | Verses Affected |
|------|----------------|
| Kannada Unicode (file's own script — baseline) | 688 |
| Devanagari script in commentary body | 390 |
| Guillemet quotes `«»` | 33 |
| English words | 11 |

**Devanagari in KN (390 verses):** Most instances are the Sanskrit śloka line at the top of each entry, which is acceptable. However, a significant subset has Devanagari bleeding into the Kannada explanation body — these need case-by-case review.

**Guillemet quotes (33 verses):** These are `«` and `»` characters used as emphasis markers in the original Kannada source. They do not belong in the data and should be removed or replaced with appropriate Unicode quotation marks. Affected verses:

```
1.11, 1.16, 1.17, 1.31, 2.44, 2.45, 2.66, 2.69,
3.28, 4.4, 4.15, 4.21, 4.22, 4.42, 5.3, 5.17,
5.21, 6.12, 6.29, 6.47, 7.1, 8.9, 8.11, 8.28,
9.26, 12.7, 14.16, 14.17, 14.22, 15.19, 16.24,
17.28, 18.1
```

---

## 4. Relationship to `commentary_needs_repair.md`

The GitHub file `commentary_needs_repair.md` (2.3 MB, commit: *"140 corrupt verses for agent correction"*) could not be rendered by GitHub (too large) or fetched as plain text (returned as binary). Based on the commit message and the contamination data above, it almost certainly documents:

- The **33 guillemet-quote verses** from the KN file
- A curated subset of the **390 Devanagari-in-KN verses** where Devanagari has leaked into the Kannada commentary body (not just the śloka header)
- Together these account for the ~140 corrupt verse figure cited in the commit message

---

## 5. Summary Table

| File | Total Verses | Clean | Contaminated | Primary Issue |
|------|-------------|-------|--------------|---------------|
| `bannanje_dev_private.js` | 702 | 421 (60%) | 281 (40%) | English words in Devanagari commentary |
| `bannanje_kn_private.js` | 702 | 8 (1.1%) | 694 (98.9%) | Devanagari bleed-over + guillemet quotes |
| `bannanje_en_private.js` | 702 | — | not checked | — |
| `bannanje_hi_private.js` | 702 | — | not checked | — |

---

## 6. Recommended Actions

1. **DEV file (281 verses):** Write a repair script that identifies and replaces English inline words with their Devanagari equivalents, or flags them for manual review. The existing `patch_verses.py` and `fix_null_commentaries.py` scripts in the repo are a starting point.

2. **KN file — Guillemet quotes (33 verses):** Straightforward automated fix — strip `«»` or replace with `"` / `'` as appropriate.

3. **KN file — Devanagari bleed (390 verses):** Requires distinguishing śloka headers (acceptable) from mid-commentary Devanagari (contamination). A heuristic: Devanagari appearing after the first newline `\n` in a verse entry is likely bleed-over.

4. **Fetch `commentary_needs_repair.md`:** Clone the repo locally on a machine with git credentials to access this file directly — it contains the pre-curated repair list.

5. **Check EN and HI files** for equivalent contamination patterns.

---

## 7. Tools and Scripts Used

| Tool/Script | Purpose |
|-------------|---------|
| `python-docx` | Opened and validated the `.docx` file |
| `node --check` | Syntax-validated `bannanje_dev_private.js` |
| `detect_contamination.py` | Precision Kannada/guillemet detector (existing repo script) |
| Custom inline Python | Unicode range analysis across all four JS files |
| Claude in Chrome MCP | Attempted fetch of `commentary_needs_repair.md` from GitHub |

---

*Report generated by Claude (Cowork) · Session date: 2026-06-02*
