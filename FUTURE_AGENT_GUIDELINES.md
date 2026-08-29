# Guidelines for Future Agents — User Expectations & Verification

This document outlines user expectations, common pitfalls, and strict checklists for any future agents working on spelling fixes, book-alignment audits, or data correction tasks in this repository.

**Updated 2026-08-24** with findings from a systematic cross-verse-leak
sweep (section E9) — this also **retracts** the earlier "harmless
page-transition spillover" classification in section E5's duplicate/
garbled-spillover bullet, which was wrong. Read E9 before trusting any
verse-boundary text that looks like it trails off into the next verse's
opening; it is very likely a leak that needs removing, not completing.
Previously updated 2026-08-13 with findings from the chapter 17 and
chapter 18 content-gap audits (section E7) — chapter 18 in particular
surfaced a new full-verse-duplication bug class and a chapter-local
recurring word-truncation pattern, both worth checking for in any
chapter not yet audited. Originally updated 2026-08-09 with findings
from a character-level audit of chapter 12, following the chapter-11
update below. Read section 2E (all of E1 through E9) before starting any
similar audit on another chapter; it will save time relative to
rediscovering these patterns from scratch. The session-by-session raw
detail (which page, which exact fix, which false leads were ruled out
and why) lives in `CH11_CHAR_AUDIT_11.1-11.9.md` through
`CH11_CHAR_AUDIT_11.41-11.55.md`,
`CH11_VAKRA_VAKTRA_SYSTEMIC_FIX.md`, `CH11_REAUDIT_CHECKLIST.md`, and
`CH12_AUDIT.md` — this document only holds the distilled, reusable
patterns, not the full history. Chapter 17/18 audit detail lives in
`CONTENT_GAP_AUDIT_PLAN.md`'s per-verse table and the corresponding git
commit messages.

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
  substituting ದ for ಲ. Found 5 times in chapter 11 (11.11, 11.30, 11.40 ×2),
  and confirmed **book-wide** by a chapter-2 sweep (2026-08-14): found once at
  2.24, where the corrupted form sits right next to the correct form in the
  same sentence ("...ಎಂದೆಂದೂ ಎಲ್ದೆಡೆ ಹಬ್ಬಿರುವ..." followed shortly after by
  the same word spelled correctly, "ಎಲ್ಲೆಡೆ ಹಬ್ಬಿರುವ ಭಗವಂತನನ್ನು..." in a
  bracketed gloss) — confirmed against `page_0056.png`, which prints ಎಲ್ಲೆಡೆ
  both times. This pattern predates the project (present in
  `clean_verses_700.json`'s original extraction too, not introduced by any
  edit here). Worth a decoded whole-book regex sweep for this pattern
  specifically when auditing any not-yet-swept chapter.
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
`CONTENT_GAP_AUDIT_PLAN.md` sweep and the chapter-12 full audit, see those
files for full detail)
* **Fabricated/synthesized content**: a full paragraph of plausible,
  well-written commentary that does not exist anywhere in the source book.
  **Confirmed twice now — chapter 11's 11.26 and chapter 12's 12.6 — with
  the identical signature both times**: a genuine merge-verse pair where the
  *first* verse's key held invented content instead of the expected short
  merge-note. Neither instance was a length outlier and both read as
  completely natural prose, so neither a length-ratio check nor a "does this
  sound right" read would catch either one — only direct page comparison
  works. **Given this is now a confirmed repeating pattern, not a one-off,
  it's worth specifically checking every existing merge-verse pair in the
  whole book for this failure mode as a standalone, cheap task**: a
  merge-note's first key should always be short (one śloka line plus a
  one-sentence pointer); anything substantially longer than that at a
  known or suspected merge-pair's first key is suspicious by construction
  and should be checked before trusting it.
* **Missing verse content, replaced by real-but-misplaced book content**:
  distinct from fabrication (the content isn't invented, just filed under
  the wrong key) and distinct from spillover (see below). Found once so far
  (chapter 12's 12.3/12.4): verse 4's own śloka, padaccheda, and half its
  commentary were entirely absent, and the "12.4" key instead held a long
  passage that *is* genuine book content but belongs elsewhere entirely (in
  that case, chapter-opening material that precedes verse 1). The tell is
  the same as fabrication's: read the content at the key and check it
  actually matches what the verse number and surrounding shloka claim it
  should be about, not just whether it reads as plausible prose from the
  book.
* **Misdiagnosed "known debt"**: a gap previously logged as "genuine
  mid-sentence truncation in the book itself, unfixable" that turns out, on
  actually checking the next page, to complete cleanly — meaning it was a
  real, fixable data gap the whole time. Caught once (11.46). Any chapter
  with a documented "known debt" of this shape deserves the next-page check
  before being taken on faith.
* **Duplicate/garbled spillover of the next verse into the current one**:
  ~~distinct from the known, harmless page-transition spillover pattern
  (e.g. 3.42/4.42/6.47/11.31/11.51, where a verse's raw entry trails off
  mid-word into the next verse's heading — cosmetic only, since the next
  verse's own key already holds the complete correct text)~~ **CORRECTION
  (2026-08-24): this "harmless" classification was wrong and has been
  retracted — see E9 below.** This bullet's own subject (corrupted
  duplicate content) is still valid and distinct from E9 — this is
  *corrupted* duplicate content (missing conjuncts, stray characters, Latin
  digits substituted for Kannada numerals) appended after a verse's own
  complete, correct content. Found twice (11.6, 11.9). Tell the two apart by
  checking: is the duplicate text clean/complete, or garbled? Harmless
  spillover matches the next verse's real content exactly; this bug class
  does not.
* **Wrong embedded English term** (distinct from a *missing* one, which is
  a simpler catch): the book sometimes prints a bracketed English gloss
  after a Kannada term (e.g. `ಕೀರ್ತಿ(Name and fame)`), and the stored text
  can have a bracket that is present, correctly formatted, and plausible —
  but simply **not what the page says**. Found repeatedly in chapter 12
  (12.4 had "(Reputation)" where the page prints "(Name and fame)"; 12.19
  had "(Movable and immovable)" where the page prints "(Making own
  property)") alongside separate instances of the term being missing
  entirely (12.12, 12.14, 12.19). A scan for the *presence* of a bracketed
  term is not sufficient — every embedded English term needs its literal
  text checked against the page, not just its existence confirmed. Translation
  layers (EN/DEV/HI) generally do **not** need to mirror these brackets
  literally — established practice is to translate the underlying Kannada
  word naturally into fluent prose (e.g. "reputation" in lowercase, "a
  fundamental necessity," "detachment") rather than reproduce the bracket —
  so a KN-only fix is normal and expected here, not a sign the other three
  files were missed.

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
* **Some verse blocks in `bannanje_kn.js` are stored as literal `\uXXXX`
  JS-escape sequences instead of raw UTF-8 Kannada text** (found in
  chapter 16, verses 16.5/16.6/16.9/16.19 at least — likely scattered
  elsewhere too, cause unknown). A plain-text regex sweep for the known
  corruption patterns (E1/E3) will silently skip these blocks, because the
  Kannada characters aren't literally present as Kannada characters in the
  file — they're six-character ASCII escape sequences. **Always decode
  `\uXXXX` escapes before running any regex sweep** (e.g. `re.sub(r'\\u([0-9a-fA-F]{4})',
  lambda m: chr(int(m.group(1),16)), text)` in Python) — check both the raw
  file text and the decoded text, since some individual verse strings mix
  escaped and literal encoding within the same value. When editing an
  escaped block, either edit the literal `\uXXXX` sequence directly and
  keep it consistent, or replace it outright with literal UTF-8 — both
  parse identically in JS, and the file already contains verses in both
  styles side by side without issue.
* **The avagraha character (ऽ / ಽ, U+0CBD) renders in this book's font in
  a way that gets visually misread as several different characters**:
  a dollar sign, a stray digit "5", "ಈ", "ಇ", or a Latin-looking "s"
  glyph, depending on zoom and context. This has now been found corrupted
  this way in chapters 14 and 16 (multiple instances). When a sandhi-form
  śloka line has a suspicious stray character sitting right where an
  avagraha would grammatically belong (after a visarga-to-'o' sandhi, e.g.
  "-ೋ" + expected elided "अ"), check it against the padaccheda line's split
  form and the page image before assuming it's a different kind of typo.
  Fix to the file's standard convention: literal U+0CBD (ಽ), not U+0C3D
  (the *Telugu* avagraha, which is visually similar but a different
  codepoint — a mistake made and caught during the chapter-16 audit).
* **A verse's tail-end can contain an orphaned duplicate of the *next*
  verse's opening śloka**, with no commentary of its own attached (distinct
  from the documented merge-note convention, which has bracketed forward-
  pointing prose, not a bare duplicated śloka). Found once in chapter 16
  (16.8's tail duplicated 16.9's opening exactly, including the same
  corruption in both copies). If a śloka line appears with no commentary
  following it and the *next* key opens with the identical line, it's very
  likely this duplication bug — verify against the page (the śloka should
  appear on the page only once) and remove the orphan copy.

### E7. Findings from the Chapter 17/18 Content-Gap Audit (2026-08-10 and
2026-08-13 — see `CONTENT_GAP_AUDIT_PLAN.md` for the full per-verse table)

* **Full-verse duplication**: an entire adjacent verse's complete
  content — shloka, padaccheda, and commentary — gets prepended
  verbatim to the *next* verse's key, before that verse's own actual
  content begins. Found once, chapter 18 (18.5's key opened with an exact
  copy of all of 18.4's content, then continued into 18.5's real shloka
  and commentary). This is different from both the harmless
  page-transition spillover (E5, cosmetic trailing-off) and the
  corrupted-duplicate-spillover bug (E5, garbled copy appended after a
  verse's own content): here the duplicate is clean/uncorrupted, sits at
  the *start* of the key rather than the end, and duplicates the *previous*
  verse rather than the next one. Tell: does the key's content begin with
  text that reads as a complete, already-concluded verse (ending in a
  natural "wrap-up" sentence) before pivoting to a new shloka opening? If
  so, check whether that opening block is identical to the previous verse's
  own key — if it is, it's this duplication bug. Confirm against the page
  image that the verse in question actually starts directly with its own
  shloka, then remove the duplicate block entirely.
* **Corrupted verse-number markers**: the `॥NN॥` marker that normally
  closes a shloka line sometimes degrades into something that isn't
  Kannada numerals at all — a Latin-digit sequence resembling neither the
  verse number nor anything meaningful (`1891` in 18.5, where the verse is
  18.5 — not the source of the digits), a bare `೨.` with a stray period
  (18.48), or a mixed form like `1೫೭॥` (18.57, where `೫೭` is the correct
  Kannada 57 but prefixed with a stray Latin `1`). This joins the
  already-documented "stray Latin digit inside Kannada text" class (E3) as
  its own recognizable sub-pattern — specifically at the point where a
  shloka line ends. Fix to the book's standard `॥<Kannada numeral>॥`
  convention, verified against the actual verse number, not against
  whatever digits happen to be sitting there.
* **Chapter-local recurring word-truncation**: distinct from the
  book-wide systemic patterns in E1 (vakra/vaktra, bhu/lu, elledeya/eldedeya),
  a single word can recur as a consistent typo *within one chapter* without
  necessarily being a book-wide pattern. Found in chapter 18: `ಪ್ರಸಾದ`
  (prasāda, "grace/blessing") missing its `ಪ್ರ` prefix and reading as
  `ಹಸಾದ`, at three separate verses (18.56, 18.58, 18.73), while the same
  word appears correctly as `ಪ್ರಸಾದ` elsewhere in the same chapter (18.62).
  Once a word-level corruption is found once, grep the rest of the
  *current* chapter for the same corrupted form before moving on — it may
  not be worth a book-wide search (that's a judgment call based on how
  distinctive the corrupted string is), but a same-chapter check is cheap
  and this pattern shows it can pay off.
* **False leads worth naming so they aren't re-flagged**: not every
  suspicious-looking string is a bug — some are the source page's own
  quirks, faithfully transcribed. Confirmed harmless in chapter 18: (a) a
  specific glyph rendering where numeral ೮ (8) visually renders as ಲ in
  this book's font in certain item-list contexts (e.g. `(ಲ)` where `(೮)`
  is meant) — appears identically on the page image itself, not a
  transcription error; (b) inconsistent Kannada spelling of the same
  Sanskrit word across nearby lines within a single verse (e.g. `ದೀರ್ಥ`
  vs `ದೀರ್ಘ`, `ವಿಷಾದೀ` vs `ವಿಶಾದೀ`) — both forms independently verified
  against the page and both are what the book actually prints, not a data
  slip. Before "fixing" an inconsistency like this, check both
  occurrences against the page individually; don't assume the two should
  match each other.

### E9. Cross-Verse Content Leaks (found 2026-08-24, via a user-reported
screenshot at 11.51 — see `CONTENT_GAP_AUDIT_PLAN.md` addenda for the
full incident writeup)

* **The pattern**: a verse's raw śloka (sometimes with its speaker
  heading, e.g. "ಭಗವಾನುವಾಚ") appears at the *end* of the *previous*
  verse's key — with no bracketed merge-note — when that previous verse
  is already a complete, standalone entry with its own full commentary.
  The leaked fragment is often *also* truncated mid-word (since it was
  never meant to be there and extraction cut it off arbitrarily), which
  is what usually surfaces the bug, but the truncation is not the real
  problem — the duplication is. The correct fix is to **remove** the
  fragment entirely, not complete it.
* **This directly overturns the earlier "harmless page-transition
  spillover" classification** that used to sit in the E5 bullet above,
  which cited 3.42/4.42/6.47/11.31/11.51 as examples and called this
  pattern "cosmetic only." It is not cosmetic. On direct page-image
  verification, none of these boundaries show the leaked verse
  appearing twice in the actual book — it appears once, on the *next*
  verse's own page, and the copy on the *previous* verse's key does not
  exist in the source at all.
* **How to tell this apart from the legitimate merge-verse convention**
  (see the "Merge-verse convention" note near the top of memory, and the
  working 11.52→11.53 / 6.7→6.8 pairs): the legitimate pattern always
  carries an explicit bracketed note ("ಈ ... ಶ್ಲೋಕ ... ಕೊಡಲಾಗಿದೆ" / "next
  verse" / "अग्रिमे श्लोके" / "अगले श्लोक") explaining that explanation is
  deferred. A leak has no such note — the previous verse's own
  commentary just ends normally, and then unexplained śloka text from
  the next verse is simply appended.
* **Confirmed instances, found via a systematic same-chapter sweep across
  all 4 language files (script: tail-of-key vs head-of-next-key overlap,
  filtered for the absence of a merge-note marker) plus the four
  previously-flagged-as-harmless cases**: 4.1→4.2, 6.1→6.2, 6.6→6.7 (a
  mirror case — 6.7 itself already had the correct merge-note structure,
  but 6.6 *also* carried a leaked copy), 6.29→6.30, 11.31→11.32,
  11.51→11.52, 13.14→13.15, 14.21→14.22 (this one's leaked copy was also
  independently garbled/truncated — a compound bug), 17.8→17.9. Fixed in
  all four language files where present; some boundaries only had the
  leak in a subset of languages (e.g. 6.29's leak was KN-only; 11.31's
  was DEV-only) — always check all four independently rather than
  assuming a leak found in one language implies the others have it too,
  or that a clean check in one language means the others are clean.
* **Known false-positive shapes from the sweep** (do not re-flag these):
  short recurring narrative-attribution phrases ("ಎನ್ನುತ್ತಾನೆ ಕೃಷ್ಣ" / "so
  says Krishna", "इति अर्जुनः आह" / "thus says Arjuna"); intentional
  forward-referencing transition sentences that share vocabulary with the
  next verse's theme without duplicating its actual text ("ಮುಂದಿನ ಶ್ಲೋಕದಲ್ಲಿ
  ..." / "in the verse that follows..."); thematic vocabulary echoes
  between adjacent verses discussing the same concept. The distinguishing
  test is the same as always: does the tail contain the *next verse's
  actual śloka text* (checkable against `FULL_GITA` in `viewer-src.html`,
  which holds the standard-numbered raw Sanskrit independently of
  `bannanje_kn.js`'s own book-numbered structure), not just words that
  happen to overlap.
* **A related, separate issue found in the same sweep, not yet
  resolved**: 13.34 and 13.35 both carry an identical bracketed editorial
  note (about 13.35 not existing separately in Bannanje's text) verbatim,
  in all three of DEV/EN/HI. This is not a leak in the E9 sense — it's a
  deliberate-looking note appearing in two places rather than one — and
  needs a decision from Vinayak on whether that's intentional (so either
  verse page shows the explanation) before touching it.
* **Chapter coverage caveat**: the within-chapter sweep and a full
  cross-chapter boundary sweep (all 17 chapter-to-chapter transitions,
  68 checks across 4 languages) have both been run as of 2026-08-24. The
  cross-chapter sweep found zero genuine leaks — one false positive at
  17.28→18.1 (coincidental word overlap between closing/opening chapter
  colophons, not a real duplication). This E9 pattern search is
  considered closed out for the whole book unless new evidence surfaces.

* **Findings from the chapter 2 content-gap audit (2026-08-14), added here as
  a continuation of this section since they're further examples of the same
  kind of character-confusion typo, not new pattern classes:**

* **ನಾವು / ಸಾವು (nāvu/sāvu) — "we" corrupted into "death"** — found via the chapter 2
  content-gap audit. A ನ→ಸ character confusion that turns "ನಾವು"
  ("we") into "ಸಾವು" ("death"), producing sentences that are grammatically
  well-formed but semantically nonsensical if not read carefully (e.g. "ಯಾವ
  ರೀತಿ ಸಾವು ಇಂದ್ರಿಯ ನಿಗ್ರಹ ಮಾಡಿ ಸಾಧನೆ ಮಾಡಬೇಕು" — "how death must practice
  sense-control" instead of "how we must..."). Found twice in chapter 2 (2.49,
  2.57), both confirmed against page images. The same ನ→ಸ substitution also
  hit a different word once in the same chapter: ನಾಸ್ತಿಕ ("faithless one") →
  ಸಾಸ್ತಿಕ (not a real word) at 2.61. Because the corrupted form often still
  parses as a plausible (if odd) sentence, this pattern is easy to read past
  without noticing — it doesn't produce visible garbage the way most other
  patterns in this section do. Worth a targeted regex sweep for isolated
  "ಸಾವು" tokens that don't fit a death/mortality context when auditing any
  not-yet-swept chapter.

* **ಬ / ವ (ba/va) — appears in `brahma-nirvāṇam`** — found at 2.72
  (`ಬ್ರಹ್ಮನಿರ್ಬಾಣಮ್‌ ಖುಚ್ಛತಿ` instead of the expected `ಬ್ರಹ್ಮನಿರ್ವಾಣಮ್‌
  ಋಚ್ಛತಿ`). Deliberately **not corrected**: the source page (`page_0094.png`)
  itself renders both the śloka line and the padaccheda this same way,
  consistently, and the EN file's independently-produced transliteration
  (`brahmanirbāṇam`) has the same substitution — suggesting this is a
  genuine artifact of this specific print/scan rather than a transcription
  error introduced by data entry. Recorded here as a deliberate non-fix, not
  an oversight, in case a future agent encounters the same spot and is
  tempted to "correct" it from Sanskrit-grammar knowledge alone without
  re-checking the page. (Note: EN's `ṛcchati` was already correctly spelled
  and needed no change; only the `nirbāṇam`/`nirvāṇam` half shows the
  cross-language-consistent substitution.)

### E8. Missing Chapter-Opening Preamble (found via the chapter 1 and chapter
2 content-gap audits, 2026-08-14 — now a confirmed recurring pattern, not a
one-off)

* **Some chapters open with a short prose essay — a few sentences to a
  paragraph — printed on the page *before* that chapter's verse-1 śloka even
  begins**, framing the chapter (e.g. chapter 1's page explains why the
  chapter shouldn't be dismissively titled "Arjuna Viṣāda Yoga" and previews
  its psychology angle; chapter 2's page explains that the chapter is the
  "pañcāṅga" — compendium — of the whole Gita, with the remaining sixteen
  chapters just unfolding what's said here). **This preamble text is not
  attached to any verse key at all** — it sits above and separate from the
  verse-1 content on the page — which is exactly why it was silently dropped
  from the original book→data extraction: every other gap-detection method
  in this project (length-ratio checks, Phase 1's flagged-status list,
  paragraph-level comparison against a verse's own key) starts from a verse
  key and compares content *within* that key, so preamble content with no
  key of its own is invisible to all of them. Found missing in **both**
  chapter 1 and chapter 2 — confirmed recurring, not a one-off.
* **How to catch it**: when auditing any chapter, always view the *first*
  page of that chapter (the one with the "ಅಧ್ಯಾಯ [N]" / chapter-number
  heading) in full, before jumping to verse 1's śloka — do not assume the
  page opens directly with the first verse. Check whether there's prose
  above the heading-adjacent śloka block that isn't reflected anywhere in
  `bannanje_kn.js`'s verse-1 key (a quick grep for a few distinctive words
  from the page against the whole file settles it, the way the ch1 and ch2
  fixes were confirmed absent via `grep`).
* **How to fix**: transcribe the preamble from the page image and prepend it
  to that chapter's `"N.1"` key in all four language files (KN transcribed
  from the page; EN/HI translated closely; DEV composed as condensed
  independent Sanskrit prose per that chapter's established house style),
  clearly delimited from the verse's own content (a bracketed
  `[ಬನ್ನಂಜೆಯವರ ... ಪೀಠಿಕೆ]` / `[Bannanje's introduction to ...]` label works
  well and was used for both fixes so far). This is a distinct fix shape
  from every other gap class in this document — there's no "previous verse"
  or "next verse" content to disentangle it from, since it was never
  attributed to any key.
* **Worth checking in every remaining chapter** (3-10, since this document
  now reflects both chapter 1's and chapter 2's cases) as a cheap first step
  before the rest of that chapter's Phase 1/2 sweep.

### E10. Embedded-Verse Cascading Key Shift (found via the chapter 3
content-gap audit, 2026-08-27)

* **A verse's full content (śloka + padaccheda + complete commentary) can be
  appended inside the *previous* verse's key instead of getting a key of its
  own**, exactly like the E4/E9 "orphaned fragment" and "cross-verse leak"
  patterns, except here the embedded block is not a stray fragment — it's the
  *entire, genuine, non-fabricated* content for the next verse, complete with
  its own proper śloka box and full discussion on the page. Confirmed on the
  page: the book gives the skipped verse its own distinct, normally-formatted
  śloka block and commentary, just like every other verse — nothing about the
  book's own layout suggests a merge. This is a data-entry/extraction defect,
  not a reflection of the source.
* **Why it's worse than a normal one-off gap**: because every subsequent key
  in the chapter is a simple sequential label (`"N.v"`), embedding one verse's
  content in the previous key with no replacement key of its own shifts every
  later key by one position relative to the actual verse it should represent,
  until something coincidentally self-corrects. In the chapter-3 case this
  ran three keys deep (`3.32`→held verse 33's content, `3.33`→held a truncated
  duplicate stub of verse 34, `3.34`→coincidentally still held verse 34's
  correct content) before self-correcting at `3.35`. It happened a **second,
  independent time** in the same chapter, at the very end (`3.42`→`3.43`),
  where it also **produced a false-negative** for an unrelated check: the
  chapter's `phantom_disregard` note for the final key claimed the book's
  commentary "concludes with 42 verses" and verse 43 has no content of its
  own — flatly false. The book gives verse 43 a full, distinct treatment;
  its content was just misfiled under the previous key.
* **How to catch it**: this bug is invisible to length-ratio checks, Phase 1's
  flagged-status list, and ordinary within-key page comparison, because every
  standard verse's content technically exists somewhere in the file — just
  under the wrong key. What exposes it: (a) a verse's key seems unusually
  long relative to its neighbors, or contains what looks like a second,
  complete śloka-plus-commentary block after the first one clearly wraps up;
  (b) a corrupted verse-number marker sitting inside that second block (in
  both chapter-3 instances, the marker itself was garbled — `॥೩೦೨॥` and
  `ಇಷ೩` — which is often the tell that flags the spot to begin with); (c) most
  reliably, **cross-referencing every key's opening line in the suspect range
  against `FULL_GITA` in `viewer-src.html`**, which holds the ground-truth
  Sanskrit per verse number and is untouched by whatever bug is in
  `bannanje_kn.js`/EN/DEV/HI — a mismatch there is unambiguous proof, and
  running this check across a wider span (e.g. ±10 verses) immediately shows
  where the shift starts and where it self-corrects or doesn't. Do this
  check any time a `phantom_disregard` note's stated reasoning doesn't
  actually match what the cited page shows — treat existing phantom notes as
  claims to verify, not as settled fact, especially for a chapter's final
  verse.
* **How to fix**: extract the embedded block into its own properly-keyed
  entry (fixing any corrupted marker/scrambled lines within it against the
  page), then shift the surviving misfiled content down into its correct
  key, discarding any redundant truncated duplicate stub left over from the
  self-correction point. Do this identically across all four language files
  — check whether each mirrors the same shift before assuming so (chapter 3's
  did, in KN/EN/DEV/HI alike). Always re-validate total key count (should be
  unchanged, since one key's worth of embedded content becomes one key's
  worth of newly-split content) and spot-check every affected key's opening
  line against `FULL_GITA` afterward.
* **Worth checking in every remaining chapter** (4-10): specifically, any
  time a chapter's final key carries a `phantom_disregard`/merge-style note,
  verify the note's claim against the actual final pages before trusting it,
  and watch for unusually long keys mid-chapter that might contain a second
  complete śloka block.
* **Recurred a third time, chapter 5 (2026-08-29), in a related but
  distinct shape**: at **5.7/5.8/5.9**, verse 8's complete śloka had been
  truncated mid-line and orphaned at the tail of `"5.7"`; `"5.8"` wrongly
  held verse 9's śloka instead of its own; `"5.9"` held both verses'
  padacchedas/commentary but was missing verse 9's own śloka box. Unlike
  the chapter-3 cases, this didn't cascade indefinitely — it resolved into
  the book's own standard two-verse merge-note convention (matching
  6.7/8.12/11.10/17.24/18.36) once corrected, rather than needing three
  or more keys reshuffled. Confirmed and fixed identically across all
  four language files. This confirms E10-style embedding isn't unique to
  chapter 3 and is worth actively watching for in every remaining
  chapter, not just chapters with a suspicious final-verse note.

### E11. Residual Findings Flagged But Not Fixed (chapter 3 audit, 2026-08-27)

* While chasing the E10 pattern above, two **out-of-chapter** instances of
  the already-documented dropped-conjunct "ನಿಷ್ಕ್ರಿಯ" typo (E1-class) were
  spotted incidentally: one in **chapter 2, verse 2.47** (`ನಿಷ್ಕ ಯಗೊಳಿಸುತ್ತದೆ`
  should be `ನಿಷ್ಕ್ರಿಯಗೊಳಿಸುತ್ತದೆ`) and one in **chapter 4, verse 4.31**
  (`ನಿಷ್ಕ ೀಯನಾಗದೇ`). The chapter-4 instance was checked against
  `page_0153.png` and fixed during the chapter-4 audit (2026-08-27) — see
  E12 below, since it turned out to belong to a wider vowel-length pattern,
  not just the dropped-conjunct one. **The chapter-2 instance at 2.47
  remains unfixed** — still outside the scope of both the chapter 3 and
  chapter 4 sessions that found it. A future agent auditing chapter 2
  (already marked complete — this is a residual miss from that earlier
  sweep) should check and fix it against its page image before relying on
  chapter 2's "complete" status too strongly.

### E12. ನಿಷ್ಕ್ರಿಯ Vowel-Length Corruption (found via the chapter 4
content-gap audit, 2026-08-27)

* Distinct from (but related to) the E11 dropped-conjunct corruption of
  this same word: **ನಿಷ್ಕ್ರಿಯ** (niṣkriya, "inactive" — short ಿ) recurs
  throughout the book miswritten with a long vowel, **ನಿಷ್ಕ್ರೀಯ**, which is
  not a real Sanskrit/Kannada word. Found 4 times in chapter 4 alone: 4.15
  (twice, `ನಿಷ್ಕ್ರೀಯತೆ`), 4.18 (`ನಿಷ್ಕ್ರೀಯರಾಗಿದ್ದರೂ`), and 4.31
  (`ನಿಷ್ಕ ೀಯನಾಗದೇ` — this instance also had the E11 dropped-conjunct
  problem stacked on top, i.e. both the ್ರ conjunct and the vowel length
  were wrong at once). All 4 confirmed against page images
  (`page_0138.png`, `page_0140.png`, `page_0153.png`), which consistently
  print the short-vowel form. Given it recurred 4 times in one chapter
  alone, this is very likely present elsewhere in the book too — worth a
  decoded whole-book regex sweep for `ನಿಷ್ಕ್ರೀ` the next time any chapter
  is audited, similar to the established practice for ವಕ್ರ/ವಕ್ತ್ರ and
  ಎಲ್ಲೆಡೆ/ಎಲ್ದೆಡೆ.

### E13. Systemic Stray-Ellipsis Corruption (found via the chapter 4
content-gap audit, 2026-08-27)

* A run of three or more literal periods (`...`) appears scattered through
  `bannanje_kn.js`'s commentary prose at points where the book itself has
  either a single period or no punctuation at all (just a word-wrapped
  space). This is a distinct corruption class from the already-documented
  E3 "stray mid-sentence period" (a single stray `.`) — here the tell is
  specifically a **triple-dot run**, and unlike E3 it does not always
  break a sentence into two grammatically-complete pieces; sometimes it
  just sits mid-word-flow with no syntactic justification at all (e.g.
  `ಕೆಲವರು... ದ್ರವ್ಯದ`, `ಬಾಹ್ಯ... ಪರಿಕರಗಳ`).
* **Checked 9 instances in chapter 4 alone (4.17-area, 4.18, 4.24, 4.28
  ×4, 4.32, 4.37) — every single one, on inspection against its page
  image, turned out to be a corruption**, not a deliberate stylistic
  pause. This is a much higher hit rate than most other pattern classes in
  this taxonomy, meaning **a bare `\.\.\.+` regex sweep (after decoding
  `\uXXXX` escapes per the existing rule) is worth running on any
  not-yet-audited chapter as a cheap, high-value first pass** — though
  each hit should still be individually confirmed against its page before
  editing, per the project's standing rule never to fix scripture text
  from a pattern match alone.
* **How to fix**: read the exact page-image line the ellipsis falls in;
  in every chapter-4 instance found so far, the correct replacement was
  either a single `.` (when the surrounding text is a real sentence
  break) or nothing at all — i.e. the two sides just need to be joined
  with the ordinary single space already present in the surrounding text
  (when the ellipsis was inserted mid-sentence with no sentence break on
  the page). Never assume the ellipsis should just be shortened to a
  single `.`; check whether the page has any punctuation there at all
  first.
* One instance (4.28, "ಆತ್ಮಸಂಯಮ-ಇದನ್ನು ತಪಸ್ಸು ಎನ್ನುತ್ತಾರೆ...") also
  co-occurred with a missing bracketed English gloss (`(discipline)`) at
  the same spot — worth checking immediately before/after any ellipsis fix
  for an English gloss that may have been dropped in the same corruption
  event, per the existing E5 "wrong/missing embedded English term"
  pattern.

### E14. Genuine (Non-Fabricated) Duplicate Commentary Across a
Merge-Verse Pair — Open Question, Not Yet Resolved (chapter 4 audit,
2026-08-27)

* At **4.34/4.35**, the book presents both verses' ślokas back-to-back
  followed by *one* shared translation and commentary discourse — the
  same merge-verse convention documented elsewhere in this book (e.g.
  15.3/15.4, 17.5/17.6). But unlike those cases, where the *first* key of
  the pair holds a short, forward-pointing note, here **the "4.34" key
  holds a genuine, non-fabricated, but truncated copy of the shared
  commentary**, and the "4.35" key holds a longer, more complete version
  of the *same* commentary (verified word-for-word — 4.34's text is a
  strict prefix-with-omissions of 4.35's, not an independent or invented
  passage). This is different from every other merge-pair-adjacent bug in
  this taxonomy: it isn't E5 fabrication (the content is real, page-
  verified), and it isn't quite E10 embedding (nothing needs to move to a
  new key — both keys already have their own home, it's just redundant
  between them).
* **Left unfixed**, flagged here for Vinayak's decision, analogous to the
  still-open 13.34/13.35 duplicate-note question: should 4.34 be trimmed
  down to a short forward-pointing note (matching the established
  convention for every other merge-pair in the book), or is preserving a
  standalone (if truncated) commentary under 4.34 actually preferable for
  this viewer's UX (e.g. so a reader landing on 4.34 alone still gets
  *something* rather than a bare pointer)? Whichever convention is chosen
  should probably also be applied retroactively to 13.34/13.35 if the two
  turn out to be the same shape of issue — worth checking.

### E15. ಕರ್ತೃತ್ವ Vocalic-R-to-್ಯ Corruption (found via the chapter 5
content-gap audit, 2026-08-29)

* **ಕರ್ತೃತ್ವ** (kartṛtva, "agency/doership" — a central term in chapter 5's
  doership discussion) recurs miswritten as **ಕರ್ತ್ಯತ್ವ**, i.e. the vocalic
  ೃ degrading to a ್ಯ conjunct. Found 5 times in one session, all within
  chapter 5: 5.13 (`ಕರ್ತೃತ್ವದಲ್ಲೂ`), and four more clustered in 5.14-5.15's
  extended doership passage (one instance also had a stray `ಶ` prefix,
  `ಶಕರ್ತ್ಯತ್ವ`). All confirmed against page images (`page_0171.png`,
  `page_0172.png`, `page_0177.png`), which consistently print the vocalic-ೃ
  form. A chapter-wide regex sweep after fixing confirmed no further
  instances in chapter 5. Given the clustering, worth a decoded whole-book
  regex sweep for `ಕರ್ತ್ಯತ್ವ` (and the general ೃ→್ಯ shape on other words)
  the next time any chapter is audited — same rationale as E12's
  ನಿಷ್ಕ್ರೀಯ sweep recommendation.

### E16. ಪಕ್ವ ("ripened") ವ-to-ಚ Corruption — Resolved Despite Matching
OCR (chapter 5 content-gap audit, 2026-08-29)

* **ಪಕ್ವ** (pakva, "ripened" — used in a recurring suffering/growth
  metaphor in chapter 5) recurs miswritten as **ಪಕ್ಚ** three times: 5.14
  (`ಪಕ್ಚವಾಗುವುದೇ`), 5.15 (`ಪಕ್ಚವಾಗಿದೆ`), and 5.20 (`ಪಕ್ಚ್ವವಾಗಬಹುದು` — this
  instance had an extra stray `ಚ್` inserted before an otherwise-correct
  `್ವ`, rather than a straight ವ→ಚ swap).
* **This one required extra care**: the independently-extracted OCR text
  (`_extracted/clean_ocr/`) for the relevant pages *also* read ಚ at these
  same spots, agreeing with the data's error rather than the correct
  form. A first visual pass suggested ವ (correct), but a bare visual read
  next to a matching OCR reading is a situation where it's easy to
  second-guess yourself into leaving a real bug unfixed. **Resolution
  method**: crop the disputed glyph and a confirmed-correct nearby
  instance of the same conjunct (e.g. `ಪಕ್ವವಾಗಬೇಕು` elsewhere on the same
  page) at matching pixel scale, and compare the two shapes directly
  side-by-side. All three disputed instances matched the confirmed-ವ
  shape exactly, not a ಚ shape, meaning the OCR extraction itself had
  independently made the same misread — plausible, since ವ and ಚ conjunct
  subscripts can look similar at typeset resolution. **Lesson for future
  sessions**: when OCR and a first-pass visual read agree on a
  suspicious-looking word, don't treat that agreement as proof of
  correctness — do the matched-scale side-by-side glyph comparison
  before concluding it's a genuine print artifact (contrast with E-cases
  like ಜಿಫ್ರ or ನಿರ್ದುಷ್ಟ below, where OCR and multiple direct
  high-resolution reads all agreed and no fix was made).
* **Not yet checked**: the same ಪಕ್ಚ→ಪಕ್ವ pattern also appears outside
  chapter 5, at **4.38, 7.15, and 7.25** — flagged here for whoever
  audits chapters 4 (already marked complete, so this would be a
  re-opening) and 7.

### E17. Confirmed False Leads in Chapter 5 — Do Not "Fix" These Again
(chapter 5 content-gap audit, 2026-08-29)

Several spellings in chapter 5 look like plausible typos on a first pass
but were checked directly against the page images (in some cases via the
matched-scale glyph comparison described in E16) and confirmed to match
the source exactly. Recording these so a future session doesn't waste
time re-flagging them:

* **ಜಿಫ್ರ** (in "jighran", 5.7) — the book consistently prints ಫ (not ಘ)
  in this word at all three occurrences on `page_0167.png` (boxed śloka,
  padaccheda, and word-gloss list). A confirmed print artifact.
* **ನಿರ್ದುಷ್ಟ** (5.19 commentary) — expected ನಿರ್ದೋಷ ("faultless") on
  first read, but both the independently-extracted OCR and a direct
  high-resolution crop of `page_0181.png` agree on ನಿರ್ದುಷ್ಟ. Left
  unchanged; flagged as a possible page-level quirk worth a second look
  if it recurs elsewhere, but not touched on the strength of a single
  uncertain instance.
* **ಯತಆತ್ಮಾನಃ** (5.25) — the unusual sandhi-less double-vowel join
  (ತ+ಆ with no elision) matches `page_0187.png` exactly, including in
  the padaccheda line. Not a typo.
* **ಸ್ಥಗನಗೊಳಿಸಬೇಕು / ಸ್ಥಗನಗೊಳಿಸುತ್ತಾರೆ** (5.28, prāṇāyāma/kumbhaka
  discussion) — expected ಸ್ಥಗಿತ ("stopped/stilled") but the page
  (`page_0189.png`) prints ಸ್ಥಗನ at both occurrences. Confirmed as the
  book's actual word choice, not a corruption.
* **ಬ್ರಹ್ಮನಿರ್ಬಾಣಮ್** (5.24, and again within the same verse's extended
  discussion) — expected ಬ್ರಹ್ಮನಿರ್ವಾಣಮ್ (brahma-nirvāṇa). This is the
  same print artifact already documented at chapter 2 (2.72, see the
  chapter-2 tracking-table entry) recurring in chapter 5; confirmed
  against `page_0186.png`. Worth remembering this isn't a one-off — the
  book's print consistently substitutes ಬ for ವ in this specific
  compound wherever it occurs.

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
