# Character-Level Transcription Audit: 11.9, 11.10, 11.11 — 2026-08-06

Requested by Vinayak after flagging that errors were visible in this specific
range. Method: tight crops of `page_0372.png`–`page_0374.png` at 2–4x zoom,
read character-by-character (not paragraph-level), diffed word-for-word
against the stored strings in all four language files.

## Findings

1. **11.9 — KN.** Confirmed the previously-identified trailing spillover
   (garbled duplicate of verse 10's śloka opening: `ಕಿ ೨ 2)`-style corruption
   pattern was NOT present here — this one was a cleaner duplicate, but still
   wrong: `ಅನೇಕವಕ್ರನಯನಮನೇಕಾದ್ಳು ತದರ್ಶನಮ್` appended after 11.9's own legitimate
   commentary ends ("...ಮಾಡುತ್ತಾನೆ."). Confirmed against `page_0373.png` that
   verse 9's real content ends there with no such continuation in the book.
   **Fixed:** removed.

2. **11.10 — KN.** Two genuine transcription errors in the raw śloka line,
   both confirmed via extreme zoom (3x) against `page_0373.png`:
   - `ವಕ್ರ` ("crooked") should be `ವಕ್ತ್ರ` ("face/mouth") — a missing ತ್
     conjunct that changes the word's meaning. The book's conjunct cluster is
     clearly ಕ್ತ್ರ (ka+virāma+ta+virāma+ra) under zoom.
   - `ದರ್ಶನಂ` (anusvāra ending) should be `ದರ್ಶನಮ್` (virāma-म ending) — the
     book clearly shows a subscript virāma stroke under ಮ, not an anusvāra dot.
   **Fixed both.**

3. **11.11 — KN.** Same `ವಕ್ರ`→`ವಕ್ತ್ರ` error repeated in the padaccheda line
   (confirmed against the same page). **Fixed.**
   Separately found: `ಎಲ್ದೆಡೆ` (nonsensical) should be `ಎಲ್ಲೆಡೆ` ("everywhere")
   in the commentary — single-character OCR slip (ದ for ಲ). Confirmed against
   `page_0374.png`. **Fixed.**
   Everything else in 11.11 — all four padaccheda lines, the full ~9-sentence
   commentary spanning `page_0373.png`→`page_0374.png` — checked character-by-
   character and matches the book exactly; no further discrepancies.

4. **EN — 11.10 was already correct** ("anekavaktra-nayanam"). **EN 11.11's
   own IAST line had inherited the same error** ("aneka vakra nayanam"),
   inconsistent with 11.10 in the same file. The English prose translation
   itself was already correct ("A form of countless mouths and eyes"), so the
   error was confined to the literal transliteration line. **Fixed.**

5. **DEV — already correct** on `वक्त्र` in both 11.10 and 11.11; no changes
   needed.

6. **HI — already correct.** 11.10's śloka has `वक्त्र` correctly; 11.11 skips
   the raw śloka/padaccheda entirely and goes straight to Hindi prose ("अनेक
   मुख और नेत्रों वाला" — "of many faces and eyes"), which correctly reflects
   the true meaning. No changes needed.

## What this confirms about method

This is a different bug class from anything the two prior passes caught:
- Not a duplicate/spillover in the sense of extra *content* (though 11.9 had
  a small one of these too, akin to 11.6's)
- Not a garbled English loanword
- Not a fabrication or a misdiagnosed gap
- A **single-word transcription error that changes meaning**, sitting inside
  otherwise-correct, complete, properly-structured verses — invisible to
  every check run in the two prior passes (paragraph-level page comparison,
  duplicate scanning, garbled-term regex, length-ratio outlier detection,
  merge-structure validation). The word count and paragraph structure were
  both completely normal; only the actual characters were wrong.

This means confidence about the rest of the chapter should be calibrated
accordingly: the previous two passes' "checked and clean" verdict does not
rule out this class of error elsewhere in chapter 11. A full character-level
pass of all 55 verses would very likely turn up more instances of exactly
this kind — small, meaning-changing, structurally invisible transcription
slips — but at significant tool-call cost (see the scoping note given to
Vinayak: full-chapter character-level audit is roughly 100–150+ tool calls
for chapter 11 alone).

## Status

3 verses (11.9, 11.10, 11.11) fully character-audited across all four files.
Fixes applied, validated, `viewer.html` rebuilt. Committed and pushed.

**Remaining scope (not done):** verses 11.1–11.8, 11.12–11.55 have not had
this level of scrutiny — only the paragraph-level pass from the earlier
sessions. Recommend either (a) Vinayak continues spot-flagging specific
verses where something looks off, as was done here, or (b) a dedicated,
budgeted full-chapter character-level pass if exhaustive confidence is the
goal.
