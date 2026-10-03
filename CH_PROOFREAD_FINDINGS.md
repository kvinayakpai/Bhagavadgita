# Proofreading findings (Kannada text vs. page scans)

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
| 1–12, 18 | not yet proofread |
