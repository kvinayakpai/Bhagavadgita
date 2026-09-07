# Chapter 11 Re-Audit Checklist — 2026-08-06

Second-pass audit requested by Vinayak after the content-gap-audit session found
3 bugs (11.26 fabrication, 11.41 contamination, 11.46 misdiagnosed gap). Purpose:
actively hunt for anything the first pass's method (page-vs-KN paragraph compare)
could have missed, using every error class this project has hit historically.

Error taxonomy pulled from project history (ACCURACY_CHECK_LOG.md, GARBLED_TERMS_FIXPLAN.md,
OCR_CLEANUP_LOG.md, OCR_PROPAGATION_PLAN.md, SESSION_LOG_2026_06_21.md, FUTURE_AGENT_GUIDELINES.md)
plus this session's own findings:

- Duplicate/scrambled content between adjacent verses
- Off-by-one verse mislabeling
- Boundary leaks (content bleeding across verse/chapter keys)
- Garbled OCR English/Latin loanwords (mixed digit+letter noise in parens)
- Empty/placeholder keys never populated
- Escaping bugs (literal newline breaking JS string literals)
- Shadowing globals (a stale duplicate data source overriding the real one at runtime)
- Fabricated/synthesized content not present in the book (NEW this session — 11.26)
- Misdiagnosed "known debt" that's actually a fixable gap (NEW this session — 11.46)
- Documentation/log errors in the historical fix logs themselves (found this session —
  the 11.53 "(Reputation)" entries in GARBLED_TERMS_FIXPLAN.md / OCR_PROPAGATION_PLAN.md
  appear to be a copy-paste duplicate of the genuine 12.4 entry, not a real ch11 term)

## Checklist

- [ ] 1. Runtime integrity: confirm no shadow/duplicate `BANNANJE_VERSE_MEANINGS*`
      definition anywhere in the deployed path that could override the fixed files
- [ ] 2. Programmatic duplicate/near-duplicate content scan across all 55 KN verses
      (exact-match and high-similarity, not just adjacent pairs)
- [ ] 3. Garbled-OCR-term regex scan (parens with mixed digits+letters / stray
      Unicode noise) across ch11 in all four files
- [ ] 4. Merge-verse pairs (10/11, 26/27, 41/42, 52/53) re-verified structurally
      consistent in KN AND in EN/DEV/HI
- [ ] 5. Bracketed disclaimer/meta-commentary scan across EN/DEV/HI ch11 (hunting
      for another "breaks off" / "known gap" / "unclear" note like 11.46 had)
- [ ] 6. Empty or placeholder-marker keys check (`[NOTE:`, empty string, etc.)
      across all 55 verses × 4 files
- [ ] 7. All four files still parse cleanly (`new Function` syntax check)
- [ ] 8. Verse-count completeness: exactly 11.1–11.55 present and non-empty in
      all four files, no extras, no gaps
- [ ] 9. Length-ratio sanity check: EN/DEV/HI length vs KN length per verse,
      flag outliers for closer look (possible incomplete translation)
- [ ] 10. Historical false-lead check: resolve the 11.53 "(Reputation)" discrepancy
      in GARBLED_TERMS_FIXPLAN.md / OCR_PROPAGATION_PLAN.md
- [ ] 11. Spot-check Latin/English loanword fidelity across EN (11.23 Wisdom/
      Protection/Production/Service; 11.46 Bhāgavata citation 10.3.9)
- [ ] 12. Re-verify the specific merge-verse śloka-ending markers (॥N॥) are
      correctly numbered post-fix (11.26, 11.41 were just edited)

## Results Log

- [x] 1. **PASS.** Only `bannanje_kn.js` defines `window.BANNANJE_VERSE_MEANINGS`.
      `viewer-src.html` references a non-existent `bannanje_kn_private.js` with a
      graceful `onerror` fallback to `null` — not the deployed file (`index.html`
      redirects to `viewer.html`, which is rebuilt from the fixed source files
      via `build-bundle.py`). No shadowing risk.
- [x] 2. **BUG FOUND: 11.6.** Initial narrow scan was clean, but a thorough
      overlapping-window scan (60-char windows every 80 chars, checked against
      every other verse) combined with the length-ratio check (item 9) surfaced
      it. Verse 7's entire content — in **garbled form** (`ಕಿ ೨ 2)`, a stray
      orphaned single-character line `ನ`, a Latin "1" substituted for the
      Kannada numeral in the verse marker `1೭॥`) — had been appended after
      verse 6's own legitimate commentary in `bannanje_kn.js`. Confirmed via
      `page_0371.png`/`page_0372.png` that verse 6's real commentary ends
      cleanly at "...ಸುಲಭ ಸಾಧನ.]" with no such continuation in the book.
      **Fixed:** removed the spillover block from KN. EN and HI were already
      clean of it (translators had evidently not propagated the garble). DEV
      had NOT propagated the garbled text either, but a prior session had left
      a **self-aware footnote** in its place ("मूलहस्तलेखे अत्र किञ्चित्
      अक्षरविपर्यासः (OCR-दोषः) वर्तते" — "there is a letter-transposition/OCR
      defect here in the source manuscript") acknowledging the issue without
      fixing it — that stale footnote is now removed too, since the underlying
      KN issue is fixed. Re-ran the thorough scan after the fix: clean, no
      other cross-verse duplication in KN, EN, DEV, or HI (the only matches
      found in EN/DEV/HI are the expected shared ślokas in the four genuine
      merge-note pairs — 10/11, 26/27, 41/42, 52/53 — which is correct by
      design, not a bug).
- [x] 3. **PASS.** Regex scan (parens with mixed digits+letters, standalone
      digit-letter runs) across all four files returns only legitimate
      cross-references (chapter/verse citations, the Bhāgavata 10.3.9 citation)
      — no garbled OCR terms remain in chapter 11.
- [x] 4. **PASS.** All four merge pairs (10/11, 26/27, 41/42, 52/53) follow the
      short-note-then-full-content structure consistently across KN/EN/DEV/HI.
- [x] 5. **PASS (after re-check).** Keyword scan for disclaimer language
      returned only false positives from natural language ("yugapad" contains
      "gap", "gaping" contains "gap", Hindi "देखें"/"देखेंगे" = ordinary "let's
      see" phrasing, not a hedge). No other hidden gap-acknowledgment brackets
      found.
- [x] 6. **PASS.** No `[NOTE:`, `TODO`, `FIXME`, `undefined`, `null`, or similar
      placeholder markers in any of the 55×4 verse entries.
- [x] 7. **PASS.** All four files parse cleanly via `new Function()` syntax
      check, both before and after the 11.6 fix.
- [x] 8. **PASS.** Exactly 55/55 keys (11.1–11.55) present and non-empty in
      all four files, no extras, no gaps.
- [x] 9. **This is what caught the 11.6 bug.** EN/DEV/HI-vs-KN length ratios
      for the chapter cluster tightly (~0.8–1.5×) except 11.6, which was a
      clear outlier (EN 0.56, DEV 0.54, HI 0.41) — the inflated KN length from
      the garbled verse-7 duplicate was dragging the ratio down. Post-fix,
      11.6 now reads EN 1.28, DEV 0.88, HI 0.93 — squarely in the normal range.
      No other verse in the chapter is a ratio outlier.
- [x] 10. **RESOLVED — documentation error, not a content bug.** The "11.53:
      `(Reputation)`" rows in `GARBLED_TERMS_FIXPLAN.md` and
      `OCR_PROPAGATION_PLAN.md` are a copy-paste duplicate of the genuine
      12.4 entry (same garbled source string, same fix, logged twice under two
      verse numbers). Confirmed: (a) the current `bannanje_kn.js` has exactly
      one occurrence of "Reputation," inside 12.4's "fifteen fences" discussion,
      not 11.53; (b) direct vision-check of 11.53's actual source pages
      (`page_0393.png`–`page_0394.png`) shows no such term anywhere in that
      verse's content. No fix needed — the current data is correct; the old
      log entry is simply mislabeled.
- [x] 11. **PASS.** 11.23's EN carries all four Puruṣa-sūkta Latin loanwords
      (Wisdom/Protection/Production/Service) verbatim; 11.46's EN carries the
      Bhāgavata 10.3.9 citation.
- [x] 12. **Minor cosmetic fix applied, not a completeness bug.** 11.6's raw
      śloka line was missing its own verse-ending marker (॥೬॥), which IS
      printed on the page but had never been transcribed into this entry.
      Added for consistency/accuracy. Note: marker inclusion is inconsistently
      applied across the whole book corpus (most non-merge verses go without
      it; only some, especially merge-note first-halves, carry it) — this is
      a pre-existing stylistic inconsistency across the whole project, not
      specific to chapter 11, and out of scope to fully standardize here.

## Summary

One real bug found and fixed this pass: **11.6's garbled verse-7 spillover**,
missed by the previous session's page-by-page paragraph-level comparison
because the garbled block was appended *after* verse 6's own correct,
complete content — a paragraph-level "is the content present and does it
match" check doesn't catch a case where extra, corrupted content is silently
tacked on the end. It was caught this time by (a) a systematic length-ratio
comparison across the whole chapter, which flagged 11.6 as an outlier in all
three translation layers simultaneously, and (b) cross-referencing against
DEV's own dangling internal footnote, which had already spotted the issue
without ever being resolved.

All four files validated, `viewer.html` rebuilt, changes committed and pushed
(see git log for commit hash).

**Confidence framing, same caveat as before:** this pass adds real coverage —
duplicate-content, garbled-term, merge-structure, placeholder, and disclaimer
scans across all 55 verses × 4 files, plus a systematic length-ratio
cross-check — but it is still not a character-by-character transcription
audit. It would not catch, for example, a single mistranslated word, a subtle
diacritic error, or content that's wrong but not short/long/duplicated/
garbled in a way these heuristics detect. "No further bugs found by these
methods" is the accurate claim; "chapter 11 is now perfect" is not one I can
make.
