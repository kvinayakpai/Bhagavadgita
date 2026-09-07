# Character-Level Transcription Audit: 11.41–11.55 — 2026-08-06

Final installment of the character-level audit series, closing out chapter
11. Tight crops of `page_0388.png`–`page_0395.png` at 1.8–8x zoom, read
character-by-character, diffed word-for-word against all four language
files.

Note: 11.41, 11.42, 11.46, 11.52, 11.53 in this range had already been
touched by earlier sessions for other bug classes (merge-note restructuring,
a content gap). This pass gave all of them — plus 11.43–11.45, 11.47–11.51,
11.54–11.55, which hadn't been touched at all — the full character-by-
character treatment.

## Findings — KN (17 confirmed errors, all fixed)

| Verse | Error | Correction |
|---|---|---|
| 11.42 | Stray orphaned "ಕೆ" fragment on its own line | Removed (a slicing mistake made while fixing this was caught and corrected before finalizing — see note below) |
| 11.42 | "ಹೇಯಾದವ ಹೇ ಸಖೇಇತಿ" — two missing-space errors | "ಹೇ ಯಾದವ ಹೇ ಸಖೇ ಇತಿ" |
| 11.44 | "ಸಖಾಇವ" | "ಸಖಾ ಇವ" |
| 11.44 | Stray mid-sentence period breaking a sentence | Removed |
| 11.45 | "ಅದ್ಭು ತ" | "ಅದ್ಭುತ" |
| 11.45 | Missing opening quote mark before "ಕೃಷ್ಣ'" | "'ಕೃಷ್ಣ'" |
| 11.46 | "ತಮದ್ಳು ತಂ" (Bhāgavata citation) — same ಭು→ಳು corruption pattern seen twice before | "ತಮದ್ಭುತಂ" |
| 11.47 | "ನನ್ನಿ 6 ... ಇನ್ನಾ ರೂ ... ಕಂಡದ್ಲಿಲ್ಲ" — a literal stray Latin digit plus multiple word-boundary and letter errors in one sentence | "ನನ್ನೀ ... ಇನ್ನಾರೂ ... ಕಂಡದ್ದಿಲ್ಲ" |
| 11.48 | Entire raw śloka line garbled ("ನವೇದ ಯಜ್ಞ ಅಧ್ಯಯನೆೈಃ ನದಾನ್ಯೆಃನ...") | "ನ ವೇದ ಯಜ್ಞ ಅಧ್ಯಯನೈಃ ನ ದಾನೈಃ ನ..." |
| 11.49 | "ಮಾತೇ" | "ಮಾ ತೇ" |
| 11.50 | "ಸಾಕ್ಷಾತ್ಮಾರವಾಗುವ" (nonsensical) | "ಸಾಕ್ಷಾತ್ಕಾರವಾಗುವ" (sākṣātkāra, "manifestation/direct realization" — matches "ಸಾಕ್ಷಾತ್ಕಾರವಾಗುತ್ತದೆ" used correctly elsewhere in the same verse) |
| 11.51 | "ಜನ-ಅರ್ದನ-ಜನಾರ್ದನ" | "ಜನ+ಅರ್ದನ-ಜನಾರ್ದನ" (matches the "ವಾಸು+ದೇವ-ವಾಸುದೇವ" etymology-notation convention used elsewhere) |
| 11.53 | "ನನ್ನ ನ್ನು" | "ನನ್ನನ್ನು" |
| 11.53 | "ವೇದಗಳನ್ನೊ ೀದುವುದರಿಂದ" (garbled vowel split) | "ವೇದಗಳನ್ನೋದುವುದರಿಂದ" |
| 11.53 | "ಸಾಧ್ಯವಿಲ್ಲ'ವನ್ನುತ್ತಾನೆ" — wrong quote character and wrong verb-initial letter | "ಸಾಧ್ಯವಿಲ್ಲ" ಎನ್ನುತ್ತಾನೆ" |
| 11.55 | "ಎನ್ನು ವ" | "ಎನ್ನುವ" |
| 11.55 | "ಸತ್ಯವನ್ನ ರಿತು" | "ಸತ್ಯವನ್ನರಿತು" |

**Note on the 11.42 fix:** while removing the stray "ಕೆ" fragment, an
imprecise slicing operation briefly duplicated adjacent text
("ಸಂಜಯಂಜಯ ಉವಾಚ" — carried over from the *previous* session's 11.35 fix, a
reminder that this failure mode recurs and needs the same re-verification
discipline each time, not just the first time it's noticed).

**Note on the 11.50 fix:** the first two fix attempts failed — the first
because there were two occurrences of the same typo elsewhere in the *whole
book* (one in chapter 7, unrelated to this audit), and a naive whole-file
search kept matching the wrong one. Resolved by scoping the search and
replace strictly to the `"11.50"` key's own value before editing, which is
now the standard method for every fix in this series but is worth restating
here since it was the one place this session where getting the scoping
wrong actually blocked a correct fix rather than just being pedantic.

## False leads investigated and correctly ruled out

- **11.45**: "ಪ್ರವ್ಯದಿ ತಮ್" looked wrong, but the page's own padaccheda
  prints exactly this — book's own quirk, not a transcription error.
- **11.47**: "ಗಗರ್ಗಾಚಾರ್ಯರಿಗೆ" appeared to have a doubled ಗ at first zoom,
  but this was a misreading of the font's ರ್ (virāma-ra) ligature
  rendering — current "ಗರ್ಗಾಚಾರ್ಯರಿಗೆ" (single ಗ) was already correct.

## Confirmed clean (matches source exactly, character-checked)

11.41 (already a merge-note, re-verified), 11.43 (in full), 11.46's and
11.47's and 11.48's surrounding commentary (in full, aside from the flagged
words), 11.50's surrounding commentary, 11.51 (in full, aside from the one
fix — including its already-documented harmless trailing spillover
fragment), 11.52/11.53's shared shloka and most of the commentary, 11.54
(re-confirmed against page content already seen in the first session), and
the chapter's closing lines ("ಇತಿ ಏಕಾದಶೋಽಧ್ಯಾಯಃ...").

## Translation-layer check

Checked EN for the two most semantically significant fixes this batch
(11.48's garbled śloka line, 11.53's garbled sentence). Both already
correct — no propagation.

## Status

**Chapter 11 character-level audit is now complete: all 55 verses (11.1–
11.55) have been read character-by-character against the source page images
at least once**, across six sessions (`CH11_CHAR_AUDIT_11.9-11.11.md`
through this file, plus the systemic vakra/vaktra sweep). Combined with the
earlier full-chapter paragraph-level content-gap sweep and the fabrication/
misdiagnosis fixes from the first two sessions, chapter 11 has now had the
most thorough review this project's methodology can currently produce.

**Running total of this six-session series:** roughly 60+ distinct KN fixes,
plus a handful of propagated EN/DEV translation-layer fixes, plus the
whole-book vakra/vaktra systemic fix (9 instances). Two recurring error
patterns were identified across the chapter — vakra/vaktra (closed via
whole-book search) and ಎಲ್ಲೆಡೆ/ಎಲ್ದೆಡೆ (found 5 times, not yet swept
whole-book) — the latter remains open as a candidate for the same
systemic-search treatment if pursued.

**What this does not mean:** as stated throughout this series, character-
level reading by a fallible reader (human or AI) does not guarantee zero
remaining errors — it substantially reduces the error rate relative to the
paragraph-level and content-gap passes that preceded it, and this session
alone caught and self-corrected two of its own mistakes mid-process. A
second independent pass, or Vinayak's own manual spot-checks, would be the
appropriate next layer of confidence if that's wanted.

viewer.html rebuilt via build-bundle.py.
