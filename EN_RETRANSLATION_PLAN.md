# English Re-translation Plan (bannanje_en.js)
**Created:** 2026-07-25
**Method:** Option 1 — in-session manual translation from verified `bannanje_kn.js`
**Transliteration:** IAST for all shloka lines and Sanskrit terms

## Why
The existing `bannanje_en.js` is raw machine translation of the Kannada (via `translate_all_meanings.py`), with broken grammar and meaning drift. An earlier proposal to import a third-party English Gita book was **rejected** (2026-07-25) because it mixes in non-Bannanje interpretations (incl. Prabhupada). The only policy-clean EN source is a faithful translation of Bannanje's own verified Kannada.

## Rules (non-negotiable)
1. **Translation only.** Nothing added, nothing inferred, no general Gita knowledge. Bannanje's aphoristic voice preserved over polished English.
2. **English-in-KN passes through verbatim** (Quran quotes, Socrates dialogue, parentheticals like "(exclusive quality)"). Never re-translate what the book already gives in English.
3. **Structure mirrored exactly:** shloka lines → word-gloss ("--" section) → commentary paragraphs → bracketed asides → merge notes (3.43 pattern).
4. **Empty KN entries stay empty** with the standard `[NOTE: KN source empty — cannot author without book page]` placeholder.
5. **IAST** via `indic_transliteration` (Kannada→IAST) for shloka lines, manually reviewed per verse (anusvāra/visarga conventions checked).
6. Kannada digits in verse refs (e.g. ॥ಅಥರ್ವ ೩-೨೭-೨॥) → Arabic numerals: ॥Atharva 3-27-2॥.
7. **Deviation check is mandatory.** Any anomaly noticed while translating — stray digits, non-standard Sanskrit spellings (e.g. anaka vs ānaka), odd punctuation, suspected OCR artifacts — must be vision-checked against the `gita_pages/` PNG before the batch is committed. Locate the page via `_extracted/clean_ocr/p-NNN.txt` grep, then crop/upscale the exact glyph (tesseract TSV gives coordinates; `kan` tessdata_best is installed at /home/claude/tessdata — set TESSDATA_PREFIX; glyph-metric subscript analysis distinguishes rare ottus the model garbles). Fix KN + EN together if the source differs; record the verdict in the Progress table either way.

## Pipeline (per chapter)
1. **Verify first:** vision/tesseract-check the chapter's slice of the 105 Latin-content verses against `gita_pages/` PNGs (tesseract `-l eng` on 1.8–2.5× upscale; `view` tool rendering is unreliable for some pages). Fix any KN discrepancies before translating.
2. Translate the chapter's verses in-session.
3. Regenerate those keys in `bannanje_en.js` (exact current format: `window.BANNANJE_VERSE_MEANINGS_EN`, `C.V` keys, `\n` line conventions).
4. `node` new Function() parse check → `python3 build-bundle.py` → spot-check ≥5 verses against KN.
5. Commit + push per completed batch.

## Progress
| Chapter | Verses | Verified | Translated | Committed |
|---------|--------|----------|------------|-----------|
| 1 | 47 (+merge note) | ✅ 2026-07-25. Latin-verse pass (9 verses; 3 fixes: 1.13 +(Resource), 1.24 +(Psychotherapy), 1.40 convention→Religion of Society). Deviation checks, all vs source pages (kan tessdata_best + glyph metrics): 1.8 "1)"→"?)" fixed; 1.13 anaka as printed; 1.16 ಮಣಿಪುಷ್ಟಕೌ (book prints ṣṭa 3×; JS ṣpa fixed→maṇipuṣṭakau); 1.20 ಕಪಿಧ್ವಜಃ fixed (gloss ದ್ವಜದ as printed); 1.23 durbuddhe as printed (padaccheda drops sandhi-consumed visarga — book convention); 1.25 ಮಹೀಕ್ಷಿತಾಮ್ fixed; 1.26 ಪಿತೄನ್/ಭ್ರಾತೄನ್ fixed (long ṝ, subscript-width verified); 1.28 ದೃಷ್ಟ್ವಾ fixed (va-ottu verified); 1.34 syālāḥ as printed; 1.36 ಸ್ಯಾತ್ ಜನಾರ್ದನ fixed; 1.37 mādhavā as printed; 1.39 ಪ್ರಪಶ್ಯದ್ಭಿ fixed (bha-ottu top-stroke verified vs ddha control); 1.40 ಕೃತ್ಸ್ನಮ್ fixed. Structural: 1.28/1.29 merged per page 28 (shared padaccheda+commentary; 10.15-pattern note at 1.29; synthesized 1.28 filler from 03400a7 deleted); sandhi spillover removed from 1.21/1.26; stray key 1.73 (digit-misread duplicate of 1.33) merged into 1.33 — its gloss ಹರಣದ ಮತ್ತು ಹಣದ and extra closing paragraph are the book text (pages 31–32) — and 1.73 deleted from all four language files (701 keys each) | 1.1–1.47 done | 1.1–1.47 |
| 2 | 72 | 🔶 In progress. 2.1–2.10 verified vs source pages 42–47. Latin-content verses in ch2 identified (9 total via Latin-scan): 2.3 (done — Shock Treatment verified as printed), 2.15, 2.22, 2.44, 2.46, 2.53, 2.54, 2.57, 2.63 (not yet reached). KN fixes: 2.2 ಜುಷ್ಪಮ್→ಜುಷ್ಟಮ್ (ṣpa/ṣṭa OCR glyph confusion; the page's own saṃhitā line confirms ṣṭa — page 42); 2.10 sandhi-spillover (saṃhitā-form preview of 2.11's opening) removed, same class as 1.21/1.26 (page 47). **Content-gap fix**: an entire commentary paragraph (Kṛṣṇa's dharma-theory digression — situational truth/ahiṃsā, man-eating-tiger example) was missing from bannanje_kn.js entirely, spanning the printed page break 43→44 between verses 2.3 and 2.4; restored to end of 2.3 after vision-verifying against both page images (one OCR noise spot cleaned: ತಿನ್ನುಡ್ರಿದ್ದರೆ→ತಿನ್ನುತ್ತಿದ್ದರೆ, and a "?" misread as "7" per the established 1.8 pattern). 2.4 pūjārhā verified as printed (dual sandhi simplified in padaccheda, same convention as 1.23 durbuddhe) | 2.1–2.10 done | 2.1–2.10 |
| 2 (remaining) | 62 | — | — | — |
| 3–18 | 582 | — | — | — |

## Known debts folded in
- EN 6.35 (Socrates passage) resolves in chapter 6's pass.
- DEV/HI regeneration is out of scope here; tracked separately. Note: KN 1.28/1.29 restructure and 1.33/1.73 merge are NOT yet reflected in bannanje_dev.js / bannanje_hi.js content (only the stray 1.73 key was deleted there).
- 13.33 has the identical ಕೃತ್ಸ ಮ್ → ಕೃತ್ಸ್ನಮ್ OCR garble (its own sandhi line prints ಕೃತ್ಸ್ನಂ correctly); fix in the chapter 13 pass with page verification.
- EN 10.16 still holds stale machine translation instead of the 10.15-merge note; fix in the chapter 10 pass.
