# Guidelines for Future Agents — User Expectations & Verification

This document outlines user expectations, common pitfalls, and strict checklists for any future agents working on spelling fixes, book-alignment audits, or data correction tasks in this repository.

**Updated 2026-08-06** with a consolidated error taxonomy (section 2E)
distilled from a six-session character-level audit of chapter 11 — the most
thorough review this project's methodology has produced to date. Read
section 2E before starting any similar audit on another chapter; it will
save time relative to rediscovering these patterns from scratch. The
session-by-session raw detail (which page, which exact fix, which false
leads were ruled out and why) lives in `CH11_CHAR_AUDIT_11.1-11.9.md`
through `CH11_CHAR_AUDIT_11.41-11.55.md`, `CH11_VAKRA_VAKTRA_SYSTEMIC_FIX.md`,
and `CH11_REAUDIT_CHECKLIST.md` — this document only holds the distilled,
reusable patterns, not the full history.

---

## 1. User Expectations & Philosophy
* **Perfect Alignment with the Book**: The sole source of truth is Bannanje Govindacharya's printed Kannada commentary book.
  * Any spelling, spacing, punctuation, or formatting deviation from the book is considered **contamination** and must be resolved.
  * Do not attempt to "normalize" or "correct" Sanskrit or Kannada words to standard forms if the book prints them differently. For example, if the shloka in the book has `ಪ್ರುಷ್ಣಾಮಿ` (with ra-vatthu) but the commentary has `ಪುಷ್ಣಾಮಿ` (without ra-vatthu), preserve both exactly as they are.
* **Perfection is the Only Standard**: Mismatched quotes (e.g. `\"` paired with `'`), missing punctuation marks, garbled characters, or stray spaces represent a failure of quality.

---

## 2. Common Challenges & OCR Pitfalls to Watch For

### A. OCR-Garbled Vowel Marks (Matras)
* When OCR parses Kannada script, vowel marks (like the `au` matra `ೌ`) sometimes lose their parent consonant and render as stand-alone symbols with a dotted circle or ZWNJ (e.g. `ಅಯಮ್‌ ೌ`).
* **Checklist**: Scan for detached matras or vowel signs (e.g. `ೌ`, `ೀ`, `ು`, `ೂ`) appearing immediately after spaces, punctuation, or ZWNJ. Compare them with the printed book to restore the missing letters (e.g. `ಅಸೌ`).

### B. Kakapada Subscripts (Caret Corrections)
* In the printed book, late corrections are sometimes inserted as subscripts (e.g. `ಕ` written under `ತ್ಮ` in `ಅಕೃತಾತ್ಮ` to make it `ಅಕೃತಾತ್ಮಕ`).
* **Checklist**: Pay close attention to subscripts in the scanned book. Translate carets into their semantic equivalent letters (e.g. adding `ಕ`) and preserve specific typographical separators like `=` instead of `-` (e.g. `(ಅಕೃತಾತ್ಮಕ=ಅಶುದ್ಧ ಬುದ್ಧಯಃ)-`).

### C. Shloka Transliteration Mapping
* Original Sanskrit shlokas are stored in Devanagari script inside the `FULL_GITA` map in [viewer-src.html](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/viewer-src.html). They are dynamically transliterated to Kannada using the `devToKn()` function.
* **Checklist**: If a Kannada shloka has a typesetting variation in the book (e.g. `ಪ್ರುಷ್ಣಾಮಿ` instead of `ಪುಷ್ಣಾಮಿ`), you must edit the Devanagari source word in `viewer-src.html` (e.g. changing `पुष्णामि` to `प्रुष्णामि`). Do not edit the generated Kannada output directly, as it will be overwritten during bundling.

### D. Variable Shadowing in `data.js`
* A major issue encountered earlier was that edits made to `bannanje_kn.js` were ignored by the browser. This was because `data.js` had a duplicate global definition of `BANNANJE_VERSE_MEANINGS` that shadowed/overwrote the loaded values.
* **Checklist**: Ensure no global variables in the bundled scripts (like `data.js`, `positions.js`, or the inlined `bannanje_*.js`) shadow each other.

### E1. Recurring Conjunct/Character-Confusion Patterns (found via chapter-11
character-level audit, 2026-08-06 — six-session series, `CH11_CHAR_AUDIT_*.md`
and `CH11_VAKRA_VAKTRA_SYSTEMIC_FIX.md`)

These are **systemic OCR/transcription confusions**, not isolated typos —
each has recurred multiple times within a single chapter, meaning a targeted
regex search across the whole book (not just character-by-character reading)
is the efficient way to check for them in any chapter not yet audited this
way.

* **ವಕ್ರ / ವಕ್ತ್ರ (vakra/vaktra)** — "crooked" vs "face/mouth". The complex
  ಕ್ತ್ರ conjunct gets flattened to ಕ್ರ, silently changing meaning. Found 9
  times in chapter 11 alone (11.10, 11.11 ×2, 11.16, 11.23, 11.27, 11.28,
  11.29), confirmed closed book-wide by a full regex search for `ವಕ್ರ` (with
  manual review — a few genuine, unrelated words like `ವಿಶ್ವಕ್ರಿಯೆ` contain
  it as a coincidental substring and are not errors).
* **ಭು / ಳು (bhu/lu)** — e.g. `ಅದ್ಭುತ` (adbhuta, "wondrous") corrupted to
  `ಅದ್ಳು ತ` or `ಅದ್ಳು`. Found at least 3 times (11.9's spillover, 11.17,
  11.46's Bhāgavata citation). Not yet swept whole-book — flagged as a
  candidate.
* **ಎಲ್ಲೆಡೆ / ಎಲ್ದೆಡೆ (elledeya/eldedeya)** — "everywhere" corrupted by
  substituting ದ for ಲ. Found 5 times (11.11, 11.30, 11.40 ×2). Not yet swept
  whole-book — flagged as a candidate, same treatment as vakra/vaktra above.
* **Other single-letter/conjunct swaps seen once each** (worth keeping in
  mind as a general class, not necessarily worth a dedicated regex sweep
  individually): ಥ↔ಸ (`ಉತ್ಥಿತಾ`→`ಉತ್ಸಿತಾ`), ಟ↔ಪ (`ಸ್ಪೃಶಮ್`→`ಸ್ಟೃಶಮ್`),
  ತ್ತ↔ತ್ರ (`ವ್ಯಾತ್ತ`→`ವ್ಯಾತ್ರ`), ಣ↔ಟ + wrong vowel length together
  (`ಆವಿಷ್ಟಃ`→`ಅವಿಷ್ಣಃ`), ಮ↔ಕ (`ಉಷ್ಮಪಾಃ`→`ಉಷ್ಕಪಾಃ`), ಸ↔ಪ
  (`ತತ್ಪರಮ್`→`ತತ್ಸರಮ್`), ಕಾ↔ಮಾ (`ಸಾಕ್ಷಾತ್ಕಾರ`→`ಸಾಕ್ಷಾತ್ಮಾರ` — also found
  once outside chapter 11, in chapter 7, so this specific one may be worth a
  book-wide search too).

### E2. Stray-Space and Missing-Space Word-Boundary Errors
Very common (roughly a third of all fixes in the chapter-11 character audit):
a single word gets a stray internal space inserted (`ಎನ್ನು ವ`, `ಸಖಾ ನ್ನು`,
`ಅದ್ಭು ತ`), or conversely two separate words get merged with a missing space
(`ಹೇಯಾದವ` for `ಹೇ ಯಾದವ`, `ಮಾತೇ` for `ಮಾ ತೇ`, `ಸಖಾಇವ` for `ಸಖಾ ಇವ`). These
don't show up in paragraph-level "does the content match" checks because the
surrounding text still reads as plausible — only a tight, word-by-word
comparison against the page catches them.

### E3. Punctuation/Symbol Corruption
* **Doubled or unmatched punctuation**: `((` instead of `(`; a closing quote
  with no opening quote (or vice versa); stray mid-sentence periods that
  break a sentence in two (`ನೀನು. ಆದಿದೇವಃ` for `ನೀನು ಆದಿದೇವಃ`).
* **Wrong etymology-notation symbol**: this book's convention writes
  compound-word etymologies as `word1+word2-compound` (e.g.
  `ವಾಸು+ದೇವ-ವಾಸುದೇವ`). Watch for `+` silently degrading to `-`
  (`ಜನ-ಅರ್ದನ-ಜನಾರ್ದನ` instead of `ಜನ+ಅರ್ದನ-ಜನಾರ್ದನ`).
* **Stray non-Kannada characters embedded mid-sentence**: found a literal
  Latin digit `6` inserted into a Kannada sentence (11.47), and a literal
  ASCII underscore `_` inserted mid-word (11.13's `ಕೃತ್ಸ್ನಮ್` corrupted to
  `ಕೃತ್ಸ _ಮ್`). A regex scan for any Latin/ASCII character inside a run of
  Kannada text is a cheap, high-value check per chapter.

### E4. Stray Orphaned Fragments
Small, meaningless fragments (a single syllable or two-character sequence)
sometimes appear on their own line with no grammatical connection to
anything around them — e.g. a bare `ಕಛ` prepended before a verse even
starts, or a bare `ಕೆ` sitting alone between two sentences that read
perfectly well without it. These read as obvious noise once spotted but are
easy to skim past. Check: does removing the fragment leave a complete,
grammatical sentence? If yes, it's noise.

### E5. Content-Level Bugs (distinct from character-level; found via the
`CONTENT_GAP_AUDIT_PLAN.md` sweep, see that file for full detail)
* **Fabricated/synthesized content**: a full paragraph of plausible,
  well-written commentary that does not exist anywhere in the source book.
  Caught once (chapter 11.26) — critically, this was *not* a length outlier
  and read as completely natural prose, so neither a length-ratio check nor
  a "does this sound right" read would catch it. Only direct page comparison
  works.
* **Misdiagnosed "known debt"**: a gap previously logged as "genuine
  mid-sentence truncation in the book itself, unfixable" that turns out, on
  actually checking the next page, to complete cleanly — meaning it was a
  real, fixable data gap the whole time. Caught once (11.46). Any chapter
  with a documented "known debt" of this shape deserves the next-page check
  before being taken on faith.
* **Duplicate/garbled spillover of the next verse into the current one**:
  distinct from the known, harmless page-transition spillover pattern
  (e.g. 3.42/4.42/6.47/11.31/11.51, where a verse's raw entry trails off
  mid-word into the next verse's heading — cosmetic only, since the next
  verse's own key already holds the complete correct text) — this is
  *corrupted* duplicate content (missing conjuncts, stray characters, Latin
  digits substituted for Kannada numerals) appended after a verse's own
  complete, correct content. Found twice (11.6, 11.9). Tell the two apart by
  checking: is the duplicate text clean/complete, or garbled? Harmless
  spillover matches the next verse's real content exactly; this bug class
  does not.

### E6. Method Notes — What Catches This, What Doesn't
* **Paragraph-level "does the content match" comparison** (reading a whole
  paragraph and checking it says the same thing) catches missing/duplicate
  *content* but reliably misses single-word swaps, stray spaces, and
  punctuation corruption, because the paragraph still reads as sensible.
* **Length-ratio / outlier checks** catch verses that are suspiciously
  short or long but miss errors that don't change length (word swaps,
  space/no-space, punctuation) and can also be fooled by coincidental page
  formatting (headers, justified-text gaps).
* **Character-by-character zoomed comparison against the source page** is
  what actually catches the classes in E1–E4. It is also the slowest and
  the only one of the four requiring the reader's own visual accuracy —
  which is itself fallible (see below).
* **The reader's own vision is not perfectly reliable.** Documented
  misreads during the audit: a Kannada numeral misread at low zoom (೩೬ as
  ೩೭), a font's ರ್ (virāma-ra) ligature misread as a doubled consonant, and
  at least one case where re-examining a "clearly wrong" word at higher zoom
  reversed the initial finding. **Always re-zoom and re-confirm before
  editing scripture text — do not trust a single read, including your own.**
* **When applying a fix via search-and-replace, scope the search to the
  specific verse key first**, not the whole file. The same typo can appear
  coincidentally in an unrelated verse or chapter; a whole-file
  find-and-replace risks either failing (if the string isn't unique) or
  silently fixing the wrong occurrence. Extract the value bounded by
  `"KEY": "..."` and `",\n  "NEXT_KEY"` markers, edit within that slice, then
  write back.
* **Re-read the file after every edit, before moving to the next one.**
  Slicing/indexing mistakes during a fix (accidentally duplicating or
  truncating adjacent text) happened twice during the chapter-11 audit and
  were only caught because the fix was re-verified immediately rather than
  assumed correct.

### F. Scroll Restoration Bug
* On page refresh, the browser by default tries to restore the previous scroll position. Because the page is dynamically rendered, this was causing the viewport to snap to the bottom, giving the user the impression that the app was not loading.
* **Checklist**: Maintain the scroll-restore disable rule in `viewer-src.html` (`history.scrollRestoration = 'manual'`) and the explicit `window.scrollTo(0,0)` on initial page load.

---

## 3. Reference Validation Tools & Scripts Created
The following utility scripts have been created during this session and should be used to audit future changes:
* **[verify.py](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/verify.py)**: Checks database integrity, verify all 702 keys exist, and checks for parse errors.
* **[check_kn_leaks.py](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/check_kn_leaks.py)**: Script to detect verse boundary overlaps and cross-verse contamination.
* **[test_local_rendering.py](file:///C:/Users/kalya/.gemini/antigravity/brain/d4ee24fe-31b9-4a83-b7cb-fcb0bf7f56c6/scratch/test_local_rendering.py)**: Playwright verification script to open `viewer.html` in headless Chrome, test for console errors, and assert correct values.
* **[test_playwright_map.py](file:///C:/Users/kalya/.gemini/antigravity/brain/d4ee24fe-31b9-4a83-b7cb-fcb0bf7f56c6/scratch/test_playwright_map.py)**: Specifically verifies that the interactive Concept Map view renders nodes and edges correctly.

---

## 4. Strict Verification checklist before pushing
Before committing and pushing changes, you **MUST** run the following steps:
1. **Rebuild the Bundle**: Run `python build-bundle.py` to compile the JS files into the final `viewer.html` file.
2. **Synchronize Online Copy**: Copy the updated `viewer.html` to `viewer_online.html` (e.g. using `python -c "import shutil; shutil.copyfile('viewer.html', 'viewer_online.html')"`).
3. **Run Integrity Verification**: Run `python verify.py` to ensure that all 702 verse keys exist and parse correctly across all language files.
4. **Browser Testing (Playwright)**: Run a local Playwright script to verify no console errors, clean load, and target content presence.
