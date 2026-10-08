# Proofreading findings (Kannada text vs. page scans)

**Status (2026-10-08): all 18 chapters proofread.** See the status table below and the per-chapter pattern sections (A3–A18) at the end.

Living list. Method: each chapter's pages are compared line by line against the scans
(`gita_pages/page_NNNN.png`); the OCR text layer is only a pointer, never the authority.
Items are added to the categories below as new kinds of error turn up.

## Error categories (with examples)

### A. Conjunct (saṃyuktākṣara) / letter confusions
| Printed (correct) | Found in stored text | Where |
|---|---|---|
| ಜನ್ಮಾದಿ (ಜಗತ್ಜನ್ಮಾದಿ) | ಫನ್ಮಾದಿ | 13.11 |
| ಸಕ್ತಿ | ಸಕ್ತೆ (wrong vowel sign) | 13.11 |
| ಶಬ್ದ | ಶಬ್ಧ (ದ→ಧ) | 13.6, 13.8 |
| ಬುದ್ಧಿ | ಬುದ್ದಿ (ಧ→ದ) | 13.6 |
| ಪಂಕ್ತಿ | ಪಂಕ್ಷಿ (ಕ್ತ→ಕ್ಷ) | 13.7 |
| ಅಭಿಷ್ವಂಗ | ಅಭಿಷ್ಟಂಗ (ಷ್ವ→ಷ್ಟ) | 13.11 ×5 |
| ಅಧ್ಯಾತ್ಮ | ಅಧ್ಯಾತ (dropped ್ಮ) | 13.11 |
| ಪ್ರತಿಪಾದ್ಯ | ಪ್ರತಿಪಾಧ್ಯ | 13.11 |
| ನಿಷ್ಪನ್ನ | ನಿಷ್ಟನ್ನ (ಷ್ಪ→ಷ್ಟ) | 13.19 |
| ಭೋಕ್ತೃತ್ವ | ಭೋಕ್ರತ್ವ (dropped ೃ) | 13.20 |
| ಸ್ಫುರಣ | ಸ್ಪುರಣ (ಫ→ಪ) | 13.24 |
| ಸೌಕ್ಷ್ಮ್ಯಾತ್ | ಸೌಕ್ಷ್ಮಾತ್ (dropped ್ಯ) | 13.32 |
| ಶಿಕ್ಷೆ | ಶಿಕ್ಷ (dropped vowel sign) | 13.7 |

### B. Missing text (dropped lines / truncated key)
* 13.7: about ten lines on p.418 missing (end of the prāṇāyāma paragraph + "(೮) ಸ್ಥೈರ್ಯಮ್" heading) — also missing from EN/DEV/HI.
* 13.19: key cut off mid-word at the end of p.427 — EN/HI had "..." , DEV lacked the last sentence.
* Chapter intros missing (11, 14, 15, 17) and 14.27 overwritten by the ch.15 intro fragment.
* Ch.14: 14.2 bracket gloss (up/upper – ऊपर – über – ಉಪ್ಪರಿಗೆ); 14.17 bracket line (Garuḍa-Suparṇā, Śeṣa-Vāruṇī, Śiva-Pārvatī); 14.27 colophon (ಇತಿ ಚತುರ್ದಶೋಽಧ್ಯಾಯಃ). Carried into EN/DEV/HI where absent, together with the 14.8, 14.15, 14.17 and 14.19 additions.
* Verse-1 header block (speaker line + two Sanskrit lines + ॥೧॥) missing at 11.1, 15.1, 17.1.

### B2. Verse-boundary / misfiled commentary (new, 13.4–13.6)
* The commentary paragraph "ಜ್ಞಾನಿಗಳು ಕೂಡಾ…" belongs to 13.4 but was stored as 13.5; verse 5's own text sat inside 13.6. Fixed in KN/EN/DEV/HI: 13.4 now holds its full commentary; 13.5 holds the verse-5 word-split plus a "given together in 13.6" note (same convention as 12.3/12.4); 13.6 holds the combined commentary.
* 13.6 letter/space fixes: ವಿಘ್ನ ನಾಶ→ವಿಘ್ನನಾಶ, ಬ್ರಹ್ಮ ವಾಯು→ಬ್ರಹ್ಮವಾಯು, ವಾಯುಪುತ್ರರಿಬ್ಬ ರು, ಎಚ್ಚ ರ, "ನಾಲಿಗೆ(ವರುಣ]" bracket, stray periods after ಐದು / ಕರ್ಮೇಂದ್ರಿಯಗಳಿವೆ / ಮೊದಲನೆಯದಾಗಿ, quote marks around ‘ನನ್ನ ಅಸ್ತಿತ್ವದ ಅರಿವು…’ and ‘ನಾನು’, blank line wrongly splitting the 13.6 verse lines.
* Check for other chapters: a key that starts mid-commentary (no Sanskrit line) is a sign of misfiling.

### B3. Text in our data that is NOT in the book (new, 15.7)
* 15.7 carried two commentary paragraphs ("ಜೀವನು ಭಗವಂತನ ಸನಾತನವಾದ ಅಂಕ…", "ಜೀವನು ಪ್ರಕೃತಿಯಲ್ಲಿರುವ ಮನಸ್ಸು…") that do not appear on p.474 or anywhere in the chapter; removed from KN/EN/DEV/HI. Also seen in 15.11: an extra word ಅಸೌ. Worth checking every chapter for keys that are longer than the scans support.
* Ch.15 missing text restored: 15.4 sentence "ಇದರ ಇರುವು ಇದ್ದ ಹಾಗೆ ಕಾಣಿಸುವುದಿಲ್ಲ… ಹರಿತವಾದ ಕತ್ತಿಯಿಂದ ತರಿದು," (EN already covers it; DEV/HI wording to be checked by a native reader).

### A3. Chapter 15 patterns
* Upanishad quotations in small type (Brihadaranyaka 4-2…4-6, Katha, Taittiriya etc.): avagraha dropped (ಚಂದ್ರಮಸ್ಯಽಸ್ತಮಿತೇ, ಶಾಂತಾಽಯಾಂ, ಪುರುಷೋಽನ್ತರಾತ್ಮಾ), ದ್ವೈ→ದ್ದೈಕ, ಜ್ಞ→ಜ, ಛಾ→ಚ, verse-number bars ॥ read as | or dropped, "?" for ”.
* "+" and "=" in etymology lines read as "-": ಅ+ಶ್ವಃ+ತ್ಥ=, ಅಶು+ವಾ+ತ+ಥ, ಅ=ಅಜಃ, ಆ=ಆದಿಃ, ವರ=ಶ್ರೇಷ್ಠ.
* Opening single quote stored as " or “ (about 40 places in 15.x) — normalised to the ' used elsewhere.
* More wrong-letter OCR: ಸಾಕ್ಷೆ→ಸಾಕ್ಷಿ, ನಿಲ್ಬಬಲ್ಲವು→ನಿಲ್ಲಬಲ್ಲವು, ವೇದವಾಹ್ಮಯ→ವೇದವಾಙ್ಮಯ, ಕಲುಪಿತ→ಕಲುಷಿತ, ತಿಳಿಯಲ್ಬಡುವವನು→ಪಡುವವನು, ಗುಹಾನ್ವಿತಮ್→ಗುಣಾನ್ವಿತಮ್, ಉತ್ಕಾಮತಿ→ಉತ್ಕ್ರಾಮತಿ, ಉದ್ಭವಗೀತೆ→ಉದ್ಧವಗೀತೆ, ಹರಡಿ→ಹರವಿ, ಕುಳಿತಿ→ಕೂತಿ.
* English glosses: (hypnosis)→(hypnotism), (desire for fruit)→(demand), (by awareness of self)→(awareness of self), (A-04)→(ಅ-೦೪); (Space) and (abbreviation) restored.
* Agent-reported "corrections" must be re-checked against the scan: one (ಸ್ತಬ್ಧ for ಸ್ಥಬ್ಧ, 15.1) was wrong on zoom and was not applied.

### A4. Chapter 16 patterns
* Missing content: 16.15 lost the padachheda of two verses (16.13/16.14) and a run of its translation; 16.18 lost its closing paragraph ("ಹೀಗೆ ಆಸುರೀ ಜನರ ಸ್ವಭಾವ…"). A stray fragment (start of a verse block) was left at the end of 16.12.
* Wrong-letter OCR: ಸಂಶುದ್ಗಿಃ→ಸತ್ತ್ವ ಸಂಶುದ್ಧಿಃ, ಶ್ರೀಃ→ಹ್ರೀಃ, ಸಿಡುಕ, ಸಿರಿವಂತ, ತೃಪ್ತಿ, ಇಚ್ಚಿಸು, ಆರ್ಜವಂ, ಮೂರ್ಖತನದ, ಕಟ್ಟಳೆ, ಸಾಕ್ಷಾತ್ಕರಿಸಿಕೊಂಡ; "|" for ।/॥; "-." for "--".
* English glosses restored: (Fearlessness), (Conviction), (Pure Mind), (Straightforwardness), (Insult), (Softness), (forgiveness), (Ego), (crisis), (Divine Wealth), (Over Estimation of Self).
* Kept as printed: ಇಪ್ಪಾತ್ತಾರು, ತ್ರಿಬಿಃ, ಒಳ್ಳಯ, ಕಾಮ-ಕ್ರೋದ; ಅಪ್ಪೈಶುನಮ್ unsure. Atharva reference digits in 16.4 are ambiguous on the scan.
* A quote-normalisation false positive (16.18, opening double quote turned single) was caught and reverted.

### A5. Chapter 17 patterns
* Duplicated/misfiled content: the whole 17.19 block (compact verse, padachheda, translation, commentary) was repeated at the end of 17.18, followed by a stray fragment of the 17.20 verse ("ದಾತವ್ಯಮಿತಿ ಯದ್‌ ದಾನಂ ದೀಯತೇಇ"); removed. The large-type compact verse block of 17.19 (with "$" for avagraha) was removed from 17.19, as for other verses.
* Wrong-letter OCR: ತೀಕ್ಷ→ತೀಕ್ಷ್ಣ, ತಾತ್ಮರ್ಯ→ತಾತ್ಪರ್ಯ, ತೋಳ್ಪಲ→ತೋಳ್ಬಲ, ಧೀರ್ಥಕಾಲ→ದೀರ್ಘಕಾಲ, ಅಸೆ→ಆಸೆ, ಕಲುಪಿತ→ಕಲುಷಿತ, ವೇದಜ್ಜ→ವೇದಜ್ಞ, ಹೊಮಬೇಕು→ಹೊಮ್ಮಬೇಕು, ಅಚ್ಯುತಾಯನಮ;→ಅಚ್ಯುತಾಯನಮಃ, ಸಾತ್ವಿಕ;→ಸಾತ್ವಿಕಃ, ಬೀರುವಂತವ→ಬೀರುವಂತವು.
* Broken vowel signs with a stray space: ಮೇಲ್ನೊ ೀಟ, ವಿಧಿದೃಷ್ಟೊ ೀ; many stray spaces inside words (ಮನಸ್ಸಿ ನಲ್ಲಿ, ಎನ್ನು ವ, ಇನ್ನೊ ಬ್ಬರಿಗೆ) and stray periods.
* Quotes: opening single quote stored as " or “ (about 25 places, mostly around 'ತತ್‌', 'ಸತ್‌', 'ಓಂ') normalised to '; missing opening quotes restored.
* "|" → "।" in verse lines; "[[" → ".["; "..." → "'.".
* Kept as printed: ಶ್ರದ್ದೆ (ದ್ದ, 17.28, all three places), ಸ್ವಾರ್ಥವಿರಕೂಡಾದು, ಎನ್ನುವದು, ಸ್ಥಗನಗೊಳಿಸಿ, ಮೀಸಲಾಗಿರುವಂತಾದ್ದು, ಅದೇಶ ಕಾಲೇ, ಉಚ್ಛಿಷ್ಟಮ್, ಅಷಿತಂ ತ್ರೇಧಾ ವಿಧ್ಯತೆ, ಕ್ರಿಯೆವನ್ನು.
* Agent-reported "ಧೀರ್ಘ" was wrong on zoom (print is ದೀರ್ಘ). Connecting dashes that look like en dashes were left as stored (font difference).

### A6. Chapter 18 patterns
* Missing content: the commentary paragraph of 18.3 (no Kannada commentary at all was stored; Devanagari also lacked it), the closing paragraph of 18.40 about the varṇa classification with the four-brothers example (missing in all four languages), and the line "ರಾಜಸ ಬುದ್ಧಿ." after the 18.31 translation. English and Hindi already had the 18.3 paragraph.
* Wrong reference: Rigveda 10.121.3 → 10.136.7 (18.1, Keshi/Vayu reference; Devanagari too).
* ಪ್ರಸಾದ is printed ಹಸಾದ in 18.56, 18.58 and 18.73 (Kannada form of the word); stored text now follows the print. The Sanskrit padachheda keeps ಪ್ರಸಾದಾತ್.
* Wrong-letter OCR: ಬಲಜ್ಜ್ಞಾನ, ಪ್ರಕೃಷ್ಣ→ಪ್ರಕೃಷ್ಟ, ತೈಗುಣ್ಯ→ತ್ರೈಗುಣ್ಯ, ಅಲ್ಬಂ→ಅಲ್ಪಂ, ಅಸಿಧ್ಯೋಃ→ಅಸಿದ್ಧ್ಯೋಃ, ವಿಶ್ಚೇಷಣೆ→ವಿಶ್ಲೇಷಣೆ, ದೀರ್ಥ→ದೀರ್ಘ, ಲಘ→ಲಘ್ವ, ಸಮಪಾಶ್ರಿತಃ→ಸಮುಪಾಶ್ರಿತಃ, ಹೃತ್ಯಮಲ→ಹೃತ್ಕಮಲ, ಆತ್ಮಸಾಕ್ಷೆ→ಆತ್ಮಸಾಕ್ಷಿ, ಸಮಪ್ಪಿರೂಪ→ಸಮಷ್ಟಿರೂಪ, ಸಂಸ್ಕೃತ್ಯ→ಸಂಸ್ಮೃತ್ಯ, ಎಲ್ಲಕ್ಕೆಂತ→ಎಲ್ಲಕ್ಕಿಂತ, ಕಲುಪಿತ→ಕಲುಷಿತ, ಶುದ್ದಿ→ಶುದ್ಧಿ.
* Numeral ೮ is printed in a font where it looks like ಲ: "(ಲ)ಕ್ಷತ್ರಿಯರು", "(ಲ)ವಿಜ್ಞಾನ", "ಲ೦-ಅಂಶ" → ೮.
* "॥೪೮॥" read for "--" in 18.48; verse-number "॥" dropped in the 18.55 large-type block; duplicated "|।" and "॥|" in 18.37; closing lines "॥ ಸರ್ವೇ ಜನಾಃ ಸುಖಿನೋ ಭವಂತು ॥" printed with double bars.
* English glosses restored: (ನಾನು-Self), (Conviction), (Instrument), (Confidence), (courage).
* Kept as printed: ಶ್ರದ್ಧೆ/ಶ್ರದ್ದೆ variants where printed, ವಿಶಾದೀ (18.28), ಭೂರ್ತಾನಾಂ (18.46), ಪ್ರರಾಬ್ಧ, ತನ್ನತನ್ನ, ನಿನ್ನನಿನ್ನ, ಅಣ್ಣ-ತಮ್ಮಂದಿರರಿದ್ದಾರೆ, ಶ್ರಿಲಕ್ಷ್ಮಿ, ಕೊನೇಯ, ವಿಶಿಷ್ಠ. ಸಮಾವಿಷ್ಠ (18.10) left as stored (unsure).
* Agent-reported "ಧೀರ್ಘ" / "ಧೀರ್ಥ" corrected to ದೀರ್ಘ (print, confirmed on zoom in 17.8).

### A7. Chapter 1 patterns
* Stored text had been "corrected" away from the print in 1.5: ಕುಂತಿದೇವಿಯವರ ಸಂಬಂಧಿಗಳು (print: ಕುಂತಿದೇಶದವರು), ವಿಂಗಡಿಸಿವೆ (print: ವಿಂಗಡಣೆ ಮಾಡಿವೆ), 'ಪೃಥಾ' (print: 'ಪ್ರಥು'), ಜಯದ್ರಥ (print: ಜಯದ್ರತ), ಆತ್ಮಸ್ಥೈರ್ಯ (print: ಆತ್ಮಸ್ಥರ್ಯ), ಕಾಣಬಹುದು (print: ಕಾಣುತ್ತೇವೆ) etc.; restored to the print (EN/DEV/HI adjusted for the Kunti-country and 'Pṛthu' points). The OCR text layer confirmed each one.
* Missing content: "ಯುದ್ಧ." (1.1), the numerology sentence "(ಇಲ್ಲಿರುವ ಸಂಖ್ಯಾ ಚಮತ್ಕಾರವನ್ನು ಗಮನಿಸಿ: 2+1+8+7+0=18 …)" (1.2), the clause "ಇಲ್ಲಿ ಬರುವ ಒಂದೊಂದು ವ್ಯಕ್ತಿಗಳ ಹಿಂದಿರುವ" lost at a page break (1.5), the chapter colophon "ಇತಿ ಪ್ರಥಮೋಽಧ್ಯಾಯಃ / ಮೊದಲನೇ ಅಧ್ಯಾಯ ಮುಗಿಯಿತು." (1.47), English glosses (Quality), (Psychotherapy).
* 1.14: the stored padachheda was a word-by-word split not in the print; replaced by the printed three-line form.
* Wrong-letter OCR: ಗುಲ್ಕ→ಗುಲ್ಮ, ತುಶಡಿ→ತುಕಡಿ, ವಿಪ್ಣವ→ವಿಪ್ಲವ, ಮನುಃ→ಮನಃ, ಉಚ್ಚೆಃ→ಉಚ್ಚೈಃ, ಮಣಿಪುಷ್ಟ→ಮಣಿಪುಷ್ಪ, ಬಿಲ್ದೋಜ→ಬಿಲ್ಲೋಜ, ಧರ್ಮಯದ್ಧ→ಧರ್ಮಯುದ್ಧ, ಉಳಿಡುತ್ತಿದ್ದವು→ಊಳಿಡುತ್ತಿದ್ದವು, ವಾಜ್ಮಯ→ವಾಙ್ಮಯ, ಬಲ್ಗೆವು→ಬಲ್ಲೆವು, ಆಅಚೆಗೆ→ಆಚೆಗೆ, ಕೈ:→ಕೈಃ; "+"/"=" read as "-" (ಶಿಖ+ಅಂಡ, ಕಾ+ಈಶ+ವ, ಜ=8 ಯ=1).
* Numeral ೮ read as ಲ: "(ಲ) ಅನೀಕಿನಿ" → "(೮)".
* Kept as printed: ಎತಾಮ್ (1.3), ಗುಲ್ಮ spelling issues none, ನಿರ್ಧಿಷ್ಟ, ವಿಧ್ಯಾಭಾಸ, ಕಣ್ಗಾಪಿನ, ಮೊಮ್ಮೊಕ್ಕಳು, ಕುಟುಬದವರು, ದುಖಃ (1.27), ಭೋಗ್ಯೈಃ (1.32), ವ್ಯವಸ್ತೆ, ನಂಬಿಕಯನ್ನು, ಜನಾರ್ಧನಾ. Left alone (unsure): ದೋಷೈಃ/ದೋಷ್ಯೈ and ಸಂಖ್ಯೇ/ಸಂಖೇ in the 1.43/1.47 padachheda; danda "|" vs "।" in the ch.1 padachheda lines (print shows a plain bar); the editorial "[ಬನ್ನಂಜೆಯವರ … ಪೀಠಿಕೆ]" label in 1.1/2.1/3.1/4.1 is kept.

### C. English glosses in parentheses (printed in the book) wrong or missing
(sense organs)→(Receiver); (twenty virtues)→(discipline); (code of conduct) missing; (face-saving)→(Insult);
(honest life)→(Sincerity-Straightforwardness); (Steadfastness)→(Conviction); (Attachment)→(Ego) at 13.8;
(bond)→(Attachment) at 13.14; (Attachment) missing at 13.11; (Over-attachment)→(Over attachment).
Ch.14: English names/glosses dropped or re-inflected: (raw materials), (Combination), (Suppress), "Edgar Cayce (1877 to 1920)", (Act but never React), book title 'Living with the Himalayan Masters', and the English sentence "He who knows not, and knows not that he knows not, is a fool" (14.8).

### A2. Avagraha and Sanskrit-verse errors (new in ch.14)
* Avagraha (ऽ → ಽ) printed like an "s" glyph; OCR'd as ಡ, $, ಆ, ಇ or dropped altogether, also inside small-type Upanishad/Veda quotations:
  ಅಪಾಽಶ್ರಯಣಃ, ಮನೋಽಭಿಮಾನಿ, ಭವತೋಽಜ್ಞಾನಮೇವ, ಯೋಽಯಂ, ಮಾಽನುಪ್ರಾಕ್ಷೀಃ, ಚತುರ್ದಶೋಽಧ್ಯಾಯಃ (14.2, 14.17, 14.19, 14.27).
* Garbage characters inside Sanskrit verses; hyphen stored as a full stop; "--" read as "ಎ".
* Real-word substitutions by OCR: ಸಾವು for ನಾವು, ಣ→ಹ, ಲ್ಲಿ→ಫಿ.
* Conjuncts: ಸ್ಪೃಹಾ, ಭುಂಕ್ಷ್ವ, ವೃಣೀಷ್ವ, ಕಾಮಾಂಶ್ಛಂದತಃ, ಅಂಭ್ರಿಣೀಸೂಕ್ತ, ಯೋನಿರಪ್ಸ್ವಂತಃ, ವರ್ಷ್ಮಣೋಪ, ನಿಬಧ್ನಂತಿ, ಬಧ್ನಾತಿ, ಶೀರ್ಷ್ಣೋರ್ಧ್ಯೋ, ತ್ಯಕ್ತೇನ, ರುಕ್ಮವರ್ಣಂ, ಮದ್ಭಾವಂ, ಹೃತ್ಕಮಲ, ಚಿತ್ಪ್ರಕೃತಿ, ಸ್ವಾದಿಷ್ಠಾನ, ಸಾಕ್ಷಾತ್ಕಾರ, ಸ್ಪಷ್ಟವಾಗಿ, ಕ್ಷೇತ್ರಜ್ಞ (14.1–14.19).

### D. Stray spaces inside words (OCR line-wrap splits)
ಎನ್ನು ವ, ಎನ್ನಿ ಸಿದೆ, ಹುಟ್ಟಿ ಸುವ, ಸೃಷ್ಟಿ ಯಾಗುವುದು, ತನ್ನ ಲ್ಲಿ … (also occurs outside ch.13, not yet swept).

### E. Stray characters / punctuation
Also (ch.14): a bracket or parenthesis OCR'd into a letter or vowel sign (e.g. "(ಲಕ್ಷ್ಮಿ)ಯಲ್ಲಿ", "(ಮೂರ್ಧನ್‌-ಬೈತಲೆ)ಯಿಂದ"); stray periods mid-sentence at line wraps (14.6, 14.7); trailing "|" (14.22–14.24).
Stray "ಎ", stray "|" before "[", "ಇಲ್ಲಃ)" for "ಇಲ್ಲ!)", extra "..." after ಆದರೆ, extra "(" in "[(ದ್ವಾಪರ", "[" printed but stored as "(".

### F. Kept as printed in the book (NOT errors in our text)
ಸೂಕ್ಷಕ್ಕಿಂತ (13.17), ಸಂಬೊಧಿಸಿ (13.0), ಬಗೆಗೆಡಡಿರುವುದು (13.11), ಉಪದ್ಯತೇ (13.18), ಜ್ಞಾನೊ ಚಕ್ಷುಷಾ (13.34),
ಹದಿಮೂರನೆಯಯ (colophon), ಗಾಥ/ಗಾಢ (13.21, glyph unclear), ಮುಕ್ತಾssಮುಕ್ತ normalised to ಮುಕ್ತಾಮುಕ್ತ.
Ch.13: ದಷ (13.5/13.6 word-split, printed so), ಪ್ರಥಿವಿ and ಕರೆಯತ್ತಾರೆ (13.6).
Ch.15: ಎನಾಶ್ರುತಂ (15.4 Chandogya quote), ಅಗ್ನಿರ್ ಎವಾಸ್ಯ (15.6), (etymologicaly) (15.1), ಪಟಿಥಾನಿ and ಅಹಾರವನ್ನು (15.14/15), ಸ್ಥಬ್ಧ (15.1), ಬಸ್ಮ/ಬಿನ್ನ (15.16, 15.19), ಸೂಕ್ಷ (15.8). Open: ಕಠೋಪನಿಷತ್ vs ಕರೋಪನಿಷತ್ (15.14/15.15) — glyph ambiguous, left as stored.
Ch.14: ಭಗವಂತವಂತನನ್ನು (14.27), ಘಜೇಂದ್ರನಾಗಿ (14.15), (intututional flash) (14.11).

## Per-chapter status
| Chapter | Status |
|---|---|
| 13 | Proofread against all 25 scan pages; fixes applied (commit f1f650e) |
| 14 | Kannada proofread against all 28 scan pages (22 keys, 109 edits); missing content ported to EN/DEV/HI |
| 15 | Kannada proofread against all 24 scan pages (about 130 edits); filler removed from 15.7 in all four languages |
| 16 | Kannada proofread against all 20 scan pages; missing text ported to EN/DEV/HI (16.15, 16.18) |
| 17 | Kannada proofread against all 19 scan pages; duplicated 17.19 text removed from 17.18 |
| 18 | Kannada proofread against all 47 scan pages (about 190 edits, three restored passages); missing text ported to EN/DEV/HI |
| 1 | Kannada proofread against all 33 scan pages (about 110 edits); non-print rewordings in 1.5 and the 1.14 padachheda restored to the print; colophon added |
| 2 | Kannada proofread against all 53 scan pages (about 220 edits); missing 2.1 closing paragraph, 2.52 closing sentences and 2.55 speaker line added; 2.32 translation and 2.44 padachheda restored to the print; the same content ported to EN/DEV/HI. Printer typos kept (ಸಂಖೇ, ಅದ್ಯಾತ್ಮ, ದ್ರುವ, ಪ್ರತ್ಯವಾಯಃ) |
| 3 | Kannada proofread against all 31 scan pages (about 85 edits); missing 3.5 closing sentence and two 3.36 paragraphs restored; English glosses (Divine Will, temptation, Possessiveness, Inter dependent) restored; 3.5/3.36 content ported to EN/DEV/HI. Left as printed: ಖುಷಭ, ಎತ್ಯೈಃ, ಶುಖಾಚಾರ್ಯ, ಸ್ಪುಟ |
| 4 | Kannada proofread against all 36 scan pages (about 160 edits); dropped passages restored (4.20 sentences, 4.33 explanation, 4.36 quote, 4.13 line break); OCR junk lines removed from 4.21/4.22/4.24; many inline English glosses restored; printer typos restored to the print (ಖುಷಯಃ, ಅನಾಧಿ, ಅರ್ಜುನನನಿಗೆ, ನಿಷ್ಕ್ರೀಯ, ಯೋಗನಂದರು); 4.33 explanation ported to EN. 4.34 is stored as a shortened duplicate of the combined 4.34–4.35 print block and was left as is |
| 5 | Kannada proofread against all 29 scan pages (about 130 edits); truncated 5.1 ending (two paragraphs incl. the 'ಕೃಷ್ಣ' address) restored and ported to EN/DEV/HI; leaked compact verse blocks removed from 5.16/5.17; stray 'ಣ' paragraph removed from 5.20; English glosses restored; printer typos restored (ಖುಷಿಗಳು, ಖುಷಯಃ, ಖುಚ್ಛತಿ, ಪ್ರತ್ರಿಯೊಂದರಲ್ಲೂ, ಜಿಫ್ರನ್ನಶ್ನನ್, ಅನಾಧಿ). Danda | vs ।, 5.27 reconstructed pada lines and ತತ್ತ್ವ ವಿತ್ spacing left as is |
| 6 | Kannada proofread against all 36 scan pages (about 70 edits); compact verse blocks that leaked onto the tail of the previous verse removed (6.5, 6.12, 6.30, 6.31); 6.45 first padachheda line restored; quote pairs normalised; ಹಸಾದ, ಸದ್ಬುದ್ಧಿ, ಅಪರೋಕ್ಷ and similar spellings fixed. Left as stored: compact blocks at the start of 6.1/6.6/6.32/6.37/6.39, the 6.23 combined note, ಉಚ್ಛ್ರಿತಂ conjunct (unsure). No content gaps found, so no EN/DEV/HI changes |
| 7 | proofread against scans (pp. 227–263); ~25 verses fixed in KN; 7.8 intro sentence added to all four languages |
| 8 | proofread against scans (pp. 264–285); ~16 verses fixed in KN; 8.3 gloss ported to EN/DEV/HI |
| 9 | proofread against scans (pp. 286–318); ~21 verses fixed in KN; missing 9.34 paragraph and 9.1 gloss ported to all four languages |
| 10 | proofread against scans (pp. 319–366); ~35 verses fixed in KN; missing text in 10.4, 10.18, 10.22 restored (10.4/10.18 ported to EN/DEV/HI) |
| 11 | proofread against scans (pp. 367–395); ~29 verses fixed in KN; missing 11.35 closing paragraph added to all four languages |
| 12 | proofread against scans (pp. 396–411); ~13 verses fixed in KN; missing phrases in 12.14 and 12.19 restored (EN/HI ported) |


## A8. Chapter 2 patterns

- Split-word OCR/typesetting breaks (ಎನ್ನು ವ, ತಿನ್ನು ವುದರಿಂದ, ಇನ್ನೊ ಬ್ಬರ) joined throughout.
- Stray periods and ellipses inside sentences (ನಾವು. ನಮ್ಮ, ನಿಲ್ಲು... ದ್ವಂದ್ವ) removed.
- Curly and straight quote mismatches normalised to the print.
- English glosses restored to the print's capitalisation and spacing, e.g. (Total Submission), (Mental depression).
- Whole sentences dropped in earlier editing (2.1, 2.52) and a speaker line (2.55) reinstated.
- Reworded stored text replaced with the printed wording (2.32, 2.44).


## A9. Chapter 3 patterns

- Split words (ಎನ್ನು ವ, ಅಗ್ನಿ ಯ, ಇನ್ನೊಬ್ಬ ನಲ್ಲಿ) joined; stray periods removed; closing curly quotes normalised to the print's straight quotes.
- Truncated paragraphs at page breaks (3.5, 3.36) completed.
- Inline English glosses dropped by earlier editing restored.
- Arrow chain in 3.16 is printed literally as <->.
- Keys 3.33/3.34 in the data files have irregular indentation; scripts must match lines with trimStart().


## A10. Chapter 4 patterns

- Compact large-type verse fragments leaked into the end of the previous verse (4.21, 4.24) and OCR junk opened 4.22; all removed.
- Print combines 4.34 and 4.35 into one block; stored 4.34 is a partial duplicate.
- Closing curly quotes (”) where the print uses straight quotes were the most common quote error.


## A11. Chapter 5 patterns

- Page-break truncation (5.1) and leaked compact blocks (5.16, 5.17) again; checked for both in every chapter.
- Curly single quotes in print around quoted terms are stored as ASCII ' by convention.


## A12. Chapter 6 patterns

- Print uses curly quotes throughout this chapter; stored mixed a curly opener with a straight closer. Normalised to ASCII ' per convention.
- Compact verse blocks sometimes sit at the tail of the previous verse's section (6.5, 6.12, 6.30, 6.31); removed.

## A13 – Chapter 7 patterns
- Mixed quote pairs (“X\' , "X\' , \'X”) normalised to ASCII single quotes; nested double+single quotes left.
- Split words rejoined (ಸ್ನಾ ನ, ಉತ್ಪ ನ್ನ ರಾದ, ಅದ್ಭು ತ …); stray periods before continuing sentences removed.
- ಋ printed as ಖು restored (ಖುಗ್ವೇದ, ಖುಷಭ); avagraha ಽ in ಸಾಧ್ಯಾಽಧ್ಯಾಯ.
- Sanskrit verse quotes corrected to print (ಇದಂ ಪ್ರೋತಂ, ತೇಜಶ್ಚಾಸ್ಮಿ, ಏತೈರುಪಾಯೈರ್ಯತತೇ, ವಿದ್ವಾಂಸ್ತಸ್ಯೈಷ …).
- Missing introductory sentence at the start of 7.8 added (KN/EN/DEV/HI); placed at end of 7.7 text.
- Left: 7.23 closing paragraph sits before 7.24 verse in print; uncertain ಮಯ್ಯೈಃ/ಭಾವ್ಯೈಃ (7.13).

## A14 – Chapter 8 patterns
- Mixed quote pairs normalised to ASCII single quotes; ಋಷಿ printed as ಖುಷಿ restored; ಥಂದಃ→ಛಂದಃ; ಧೀರ್ಥ→ದೀರ್ಘ.
- 8.3: gloss "(thymus gland)" per print (replacing Anahata chakra); "[awareness of self]" added (KN).
- 8.12 verse line corrected to print (ಪ್ರಾಣಮಾಸ್ಥಿತೋ ಯೋಗಧಾರಣಾಮ್).
- Left: continuous (sandhi) verse lines printed before the word-split lines for 8.23–8.28 are not stored (only word-split form); 8.12 editorial bracket note; 8.15 space before period; en-dash vs hyphen.

## A15 – Chapter 9 patterns
- Missing paragraph in 9.34 ("ನಾವು ನಮ್ಮ ಜೀವನದಲ್ಲಿ ಸಾಧಿಸಬೇಕಾದ ಒಂದೇ ಒಂದು ಸಂಗತಿ…ಶ್ರೀ ಸೂಕ್ತದಲ್ಲಿ") restored in KN/EN/DEV/HI; "(Quality)" gloss in 9.1.
- 9.16 bracket/quote structure of the sacrifice-term glosses corrected (ಕ್ರತು, ಸ್ವಧಾ, ಮಂತ್ರ, ಅಗ್ನಿ with closing ']'); ಪಿತೃ, ಆಜ್ಯ, ಕಾಣುತ್ತೇವೆ etc.
- 9.17 Vedic quotes and varnamala line (ಎ, ಒ) per print; 9.25 ಪಿತೄನ್; ಖು for ಋ (9.33, 9.17 ಖುತ್ವಿಜಂ).
- Left (UNSURE or printed forms): 9.11 ನಶ್ಚರ, 9.17 ಋತಂಭರ/ೠಘ glyph list, dot counts in Vedic quotes, ಸ್ವಸ್ತಿನೋ reconstruction, 9.7/9.25 printed merged words, large-type verse headings not stored, paragraph-break layout differences.

## A16 – Chapter 10 patterns
- Three content gaps: end of 10.4 (sukha-duhkha dvandva paragraphs), end of 10.18 (ear-cup nectar paragraph), 10.22 (hand/fox story, vāsava, mind, awareness) restored in KN; 10.4/10.18 ported to EN/DEV/HI (10.22 already present there).
- Gloss separators in etymology brackets: print uses '=' or '+' (e.g. ಪು+ರು+ಷಃ=ಪುರುಷಃ, ಕಾಮ=ಬಯಸಿದ್ದನ್ನು) — stored hyphens/colons corrected where the report was clear.
- ಖು for ಋ (10.2, 10.24 ದೇವಂ-ಖುತ್ವಿಜಂ, 10.25); ಸತ್ತ್ವ, ಸಪ್ತರ್ಷಿ, ಆಜ್ಞಾಚಕ್ರ, ವಿಷ್ಟಭ್ಯ/ವಿಷ್ವಂ in 10.42 etc.
- Left (UNSURE or not clearly confirmed): 10.12 split-word verse line and editorial note, 10.13 ಋ/ಖು in padapatha, 10.21 ಶ=ಎಲ್ಲಾ garble, 10.23 ಅಹಿರ್ಬುಧ್ನ್ಯ and ದೃಢ/ದೃಥ, 10.24 'ಕಾರ್ಯಪ್ಪ'/Velikovsky glyph, 10.25 ಸನ್ನಿದಾನ and merged-word spacing, 10.26 ಎನಿಸಿ/ಬದುಕುತ್ತಿದ್ದಳು/ಅಂತಃವಾಣಿ, 10.30–10.35 spacing before '=', dot/stray paragraph breaks at page boundaries.

## A17 – Chapter 11 patterns
- Missing closing paragraph of 11.35 (Arjuna begins to praise; bracketed note on epithets) restored in KN/EN/DEV/HI.
- ಖು for ಋ (11.2, 11.15, 11.21, 11.32, 11.36); sandhi-joined verse words (ದಂಷ್ಟ್ರಾಕರಾಳ, ಯೇ ಚ, ಸರ್ವೇ ಯೇ); 11.27 padaccheda line aksharas; ವಾಽಪಿ in 11.42; 11.50 ವಾಸು+ದೇವ; colophon ಇತ್ಯೇಕಾದಶೋಽಧ್ಯಾಯಃ.
- Left: editorial bracketed pointers at 11.10/11.26/11.41, 11.1 ‘ಮತ್’ spacing, UNSURE items (11.40 ಸಮಾಪ್ನೋಷಿ, 11.41 ॥೪೦॥, 11.34 ಯುದ್ಧ್ಯ ಸ್ವ, 11.16 curly opener).

## A18 – Chapter 12 patterns
- Content gaps: 12.14 ("ಯಾವ ಜೀವಿಗಳಲ್ಲು ಹಗೆಯಿರದವನು … ತಾಳ್ಮೆ ತಪ್ಪದವನು") and 12.19 ("ಹಗೆಯ-ಗೆಳೆಯರಲ್ಲಿ ಭೇದ ಬಗೆಯದವನು … ಯಾವುದಕ್ಕೂ ಅಂಟಿಕೊಳ್ಳದವನು") restored in KN; ported to EN and HI (DEV is a condensed rendering and was left).
- ತತ್ತ್ವ → ತತ್ವ in 12.4 (print spelling); ವಾಯುರ್ಜ್ಯೋತಿರಾಪಃ; ಪೂರ್ಣಾನುಗ್ರಹ, ಉದ್ಧರಿಸುತ್ತೇನೆ, ನಾವು ಸಮರ್ಥರಲ್ಲ; missing closing quotes in 12.16.
- Left: 12.18 padaccheda pair not stored (content-model decision); editorial bracketed pointers at 12.3/12.6/12.13/12.18; UNSURE glyphs (12.9 ನಿಷೇಧಾಸ್ಸ್ಯುಃ, 12.6 ಅನನ್ಯೇನೈವ); printed typos kept (ಅಪ್ರಭುದ್ಧ, ಪರಿಸಬಹುದು, merged words in 12.1/12.4).

## Status
All 18 chapters have now been proofread against the scans.


## Open-item review (2026-10-08)
Resolved against the scans after the all-chapter proofread:
- 9.11 / 13.12 / 13.14 ನಶ್ಚರ → ನಶ್ವರ (scan prints ನಶ್ವರ; OCR misread ವ as ಚ). Fixed.
- 10.13 padapatha line: scan prints the ಖು-looking form of ಋ; stored ಋಷಯಃ/ಋಷಿಃ changed to ಖುಷಯಃ/ಖುಷಿಃ to match the book-wide convention. Fixed.
- 11.40: padapatha line prints ಸಮಾಪ್ರೋಷಿ while the verse line prints ಸಮಾಪ್ನೋಷಿ; stored matches print (printed inconsistency kept).
- 12.6: verse line ಸಂನ್ಯಸ್ಯ / ಅನನ್ಯೇನೈವ confirmed as stored.
- 12.9: the scan shows a stray ಹು-like glyph after ನಿಷೇಧಾಸ್ಸ್ಯ; reading not settled, stored form left unchanged.
- 16.4: Atharva reference confirmed as ೩-೧೭-೧ by matching digit glyphs against verse numbers elsewhere.
- 15.14 / 15.15 ಕಠೋಪನಿಷತ್: the font prints ಠ like ರ (same in ಕಠಿಣ on the same page), so ಕಠೋ… is correct. No change.
- 18.10 ಸಮಾವಿಷ್ಠ → ಸಮಾವಿಷ್ಟ (subscript is ಟ, not the circular ಠ seen in ಅಂಗುಷ್ಠ). Fixed.
DEV 12.14 / 12.19: checked, nothing to port. The restored phrases sit in the verse's word-by-word gloss, which the DEV entries for these two verses do not carry (they open with the Sanskrit verse and go straight to commentary), so adding them would be a structural change, not a fix.
Still open: 12.9 stray glyph only.
