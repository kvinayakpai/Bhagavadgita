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

## Pipeline (per chapter)
1. **Verify first:** vision/tesseract-check the chapter's slice of the 105 Latin-content verses against `gita_pages/` PNGs (tesseract `-l eng` on 1.8–2.5× upscale; `view` tool rendering is unreliable for some pages). Fix any KN discrepancies before translating.
2. Translate the chapter's verses in-session.
3. Regenerate those keys in `bannanje_en.js` (exact current format: `window.BANNANJE_VERSE_MEANINGS_EN`, `C.V` keys, `\n` line conventions).
4. `node` new Function() parse check → `python3 build-bundle.py` → spot-check ≥5 verses against KN.
5. Commit + push per completed batch.

## Progress
| Chapter | Verses | Verified | Translated | Committed |
|---------|--------|----------|------------|-----------|
| 1 | 48 | ✅ 2026-07-25 (9 Latin verses vs pages; 3 fixes: 1.13 +(Resource), 1.24 +(Psychotherapy), 1.40 convention→Religion of Society) | 1.1–1.6 done | 1.1–1.6 |
| 2–18 | 654 | — | — | — |

## Known debts folded in
- EN 6.35 (Socrates passage) resolves in chapter 6's pass.
- DEV/HI regeneration is out of scope here; tracked separately.
