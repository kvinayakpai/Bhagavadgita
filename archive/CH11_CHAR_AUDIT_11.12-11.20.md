# Character-Level Transcription Audit: 11.12–11.20 — 2026-08-06

Continuation of the same method used on 11.9–11.11 (see
`CH11_CHAR_AUDIT_11.9-11.11.md`), requested by Vinayak as a direct follow-on.
Tight crops of `page_0374.png`–`page_0378.png` at 2–5x zoom, read
character-by-character, diffed word-for-word against all four language files.

## Findings — KN (10 confirmed errors, all fixed)

| Verse | Error | Correction | Notes |
|---|---|---|---|
| 11.12 | `ಉತ್ಸಿತಾ` | `ಉತ್ಥಿತಾ` (utthitā, "arisen") | Same ಥ→ಸ conjunct-confusion pattern as elsewhere in this project |
| 11.12 | `ಹೊರಗಟಣ್ಣಿನಿಂದ` | `ಹೊರಗಣ್ಣಿನಿಂದ` ("with the outer eye") | Stray ಟ inserted, made the word nonsensical |
| 11.13 | `ಏಕಸ್ಗಮ್` | `ಏಕಸ್ಥಮ್` (ekastham) | Nonsensical conjunct |
| 11.13 | `ಕೃತ್ಸ _ಮ್` | `ಕೃತ್ಸ್ನಮ್` (kṛtsnam, "whole") | Raw string literally contained a stray underscore character |
| 11.14 | `ಅವಿಷ್ಣಃ` | `ಆವಿಷ್ಟಃ` (āviṣṭaḥ, "overcome") | Wrong consonant (ಣ for ಟ) AND wrong vowel length (ಅ for ಆ) |
| 11.15 | `ಗಡಣಗಳನ್ನು ಬ್ರಹ್ಮನನ್ನು ಸ;` | `ಗಡಣಗಳನ್ನು. ಬ್ರಹ್ಮನನ್ನು,` | Stray "ಸ;" fragment replacing correct punctuation |
| 11.16 | `ವಕ್ರ ನೇತ್ರಮ್` | `ವಕ್ತ್ರ ನೇತ್ರಮ್` | **5th occurrence** of the recurring vakra/vaktra conjunct error (previously 11.10, 11.11 ×2) |
| 11.17 | `ಅತ್ಯದ್ಳು ತ` | `ಅತ್ಯದ್ಭುತ` (atyadbhuta) | Same ಭು→ಳು corruption seen in 11.9's spillover last session |
| 11.19 | Sentence cut off before its object | Added `ನಿನ್ನನ್ನು.` | The sentence "...burning this world" was missing its object "...you" — dropped exactly at a paragraph boundary, same failure mode as the 11.46 gap from the first audit session |
| 11.20 | `ದಿಗ್ಭಮೆಯಿಂದ` | `ದಿಗ್ಭ್ರಮೆಯಿಂದ` (digbhrama, "bewilderment") | Missing ್ರ conjunct |

**11.18 checked in full and found completely clean** — useful negative control;
confirms this range isn't uniformly corrupted, errors are scattered.

## Findings — EN, DEV, HI

- **EN**: 11.16 had inherited the same vakra/vaktra error (`vakra netram` →
  `vaktra netram`). **Fixed.** 11.12, 11.13, 11.14 already had correct IAST
  (utthitā, kṛtsnam, āviṣṭaḥ) — no changes needed.
- **DEV**: 11.16 had the same error, but only in its *second* occurrence — the
  raw śloka line already correctly had "वक्त्र", but a paraphrase sentence
  right after it had "वक्र" (missing the conjunct). **Fixed.** 11.12, 11.13,
  11.14 already correct; 11.14 already had "दिग्भ्रमेण" spelled correctly,
  matching the 11.20 KN fix.
- **HI**: checked in full across all of 11.12–11.20 — **completely clean**,
  no errors found. HI's prose-paraphrase style (skipping literal
  transliteration in most verses) seems to have sidestepped this whole error
  class by construction.

## Pattern note

The vakra/vaktra conjunct confusion has now appeared **five times** across
11.10, 11.11 (twice), and 11.16, and propagated into EN and/or DEV translation
layers each time it appeared in KN. This strongly suggests a systemic OCR/
transcription artifact tied to this specific conjunct cluster (ಕ್ತ್ರ /
क्त्र), not isolated typos. A targeted global search for this exact pattern
across all 18 chapters — rather than waiting to stumble onto each instance
verse-by-verse — would likely be a higher-yield use of time than continuing
the sequential character-by-character sweep, if and when a systemic pass is
undertaken.

The 11.19 finding (a word dropped exactly at a paragraph boundary) also
matches the failure mode already seen at 11.46 in the first audit session —
worth keeping in mind as a specific thing to check paragraph boundaries for,
rather than only mid-sentence truncations.

## Status

Verses 11.12–11.20 (9 verses) fully character-audited across all four files.
10 KN fixes, 1 EN fix, 1 DEV fix applied, validated, `viewer.html` rebuilt.
Committed and pushed.

**Cumulative character-level coverage so far:** 11.9–11.20 (12 of 55 verses).
**Not yet done:** 11.1–11.8, 11.21–11.55 have not had this level of scrutiny.
