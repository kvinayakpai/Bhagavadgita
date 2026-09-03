# Content-Gap Audit Plan

**Status: IN PROGRESS. Chapters 11 and 12 fully swept (2026-08-06 and 2026-08-09). Chapter 13 fully swept 2026-08-10 (one small KN fix, 13.4). Chapter 14 fully swept 2026-08-10 (one small KN fix, 14.19). Chapter 15 fully swept 2026-08-10 (clean, no fixes needed). Chapter 16 fully swept 2026-08-10 (13 KN fixes — see FUTURE_AGENT_GUIDELINES.md §2E for the \uXXXX-escape-block and avagraha-misread findings from this sweep). Chapter 17 fully swept 2026-08-10 (8 KN fixes, mix of E2/E3/E4/E5 pattern classes, all confirmed against page images). Chapter 18 (the final chapter, 78 verses) fully swept 2026-08-13 (27 KN fixes, including a full-verse duplication bug at 18.5 and a chapter-local recurring "ಪ್ರಸಾದ→ಹಸಾದ" pattern hitting 3 separate verses). Chapter 1 fully swept 2026-08-14 (2 fixes across all four languages: an entire missing chapter-opening essay before 1.1, and a severely condensed 1.5 — see tracking table for detail; this is a new gap class, "missing chapter-preamble content," worth checking for in chapters 3-10 too since none of them have been swept yet). Chapter 2 fully swept 2026-08-14 (confirmed the missing-chapter-preamble gap class recurs — fixed a second missing chapter-opening essay before 2.1 across all four languages; also 10 KN-only character-confusion typos fixed: ಎಲ್ದೆಡೆ→ಎಲ್ಲೆಡೆ at 2.24 confirming the chapter-11-documented pattern is book-wide, a stray digit ೫→ಈ at 2.20, three corrupted spellings of ಸಂಪ್ಲುತೋದಕೇ at 2.46 (one of which had a matching corruption in the EN transliteration, also fixed), two corrupted ಸಾಕ್ಷಾತ್ಕಾರ spellings at 2.46, two dropped-conjunct typos at 2.47, a new ನಾವು→ಸಾವು "we"/"death" confusion pattern found twice (2.49, 2.57) and once more as ನಾಸ್ತಿಕ→ಸಾಸ್ತಿಕ (2.61), and a stray garbage-character prefix on 2.72 with no basis in the source page at all. See FUTURE_AGENT_GUIDELINES.md §2E for the new ನಾವು/ಸಾವು pattern and a deliberate non-fix at 2.72 worth knowing about before touching that verse again). Chapter 3 fully swept 2026-08-27 (a major new structural bug pattern — see tracking table and FUTURE_AGENT_GUIDELINES.md §2E — plus 31 ordinary typo fixes). Chapter 4 fully swept 2026-08-27 (missing chapter-opening preamble restored across all four languages; 26 KN typo/gap fixes, including a newly-identified systemic stray-ellipsis corruption pattern and a recurring ನಿಷ್ಕ್ರೀಯ→ನಿಷ್ಕ್ರಿಯ vowel-length corruption that also resolved the ch.3-flagged §2E-E11 residual at 4.31; one structural finding at 4.34/4.35 left unresolved, flagged for Vinayak's decision). This completes the content-gap audit for chapters 1-4, 11-18. Chapter 5 fully swept 2026-08-29 (E8 preamble restored before 5.1; a new E10 embedded-verse instance at 5.7/5.8/5.9 resolved into the standard merge-note convention; ~30 character-level fixes including two new recurring corruption patterns — ಕರ್ತೃತ್ವ→ಕರ್ತ್ಯತ್ವ, found 5 times, and ಪಕ್ವ→ಪಕ್ಚ, found 3 times and also flagged at 4.38/7.15/7.25 for later — see FUTURE_AGENT_GUIDELINES.md §2E E15/E16; several plausible-looking spellings confirmed as genuine page artifacts and left unchanged, see §2E E17). This completes the content-gap audit for chapters 1-5, 11-18; chapters 6-10 remain. Chapter 6 fully swept 2026-08-31 (57 fixes — a missing paragraph restored at 6.29, a fabricated commentary replaced at 6.39, a new E18 stray-fragment pattern found and fixed 3 times, plus ~52 ordinary character-level fixes; also surfaced 7 more em-dash fabrication-marker hits elsewhere in the book, including in previously-audited chapters 12 and 16, flagged for a dedicated follow-up pass). Chapter 7 fully swept 2026-09-02 (E8 preamble restored before 7.1 across all four languages; confirmed the known ಪಕ್ವ→ಪಕ್ಚ pattern at both 7.15 and 7.25; one avagraha-misread-as-`$` fix at 7.28; a spurious mid-paragraph garbage block removed at 7.12; corrupted Haridasa-sahitya song lyrics fixed at 7.15; ~40 further character/spacing-level fixes, unusually concentrated in stray/missing mid-word spaces across 7.16, 7.18, 7.27, and 7.29 — see tracking table for full detail). This completes the content-gap audit for chapters 1-7, 11-18; chapters 8-10 remain. Chapter 8 audit **started but not finished** 2026-09-03: pages 265-266 done (verses 8.1-8.3, 5 small fixes, no preamble gap), pages 267-284 (rest of 8.3 through 8.28) and all of chapters 9-10 still pending — pick up at page 267 next session, see tracking table for detail. Read this whole file before doing any work.**

## Why this plan exists

On 2026-08-03, Vinayak flagged that BG 11.16 in the app was missing a
substantial paragraph that exists in the book (a Puruṣa-sūkta citation and
meditation-practice advice, on `gita_pages/page_0376.png`, book-printed
page 375). Investigation found:

- This paragraph was **never** present in `bannanje_kn.js` at any point in
  the repo's git history, back to the earliest commit (2026-05-16).
- It was **also missing** from `_extracted/clean_verses_700.json`, the
  pre-existing per-verse extraction artifact that (as far as we can tell)
  `bannanje_kn.js` was built from.
- So this is a gap in the **original book→data extraction**, not something
  introduced by any edit this project has made. It predates this project
  entirely, and it is very likely **not the only verse affected** — the
  extraction pipeline that produced the source data evidently dropped
  paragraphs in at least some places, silently (no error, no placeholder,
  just a shorter `meaning` field than the book actually has).

This plan is for **systematically finding and fixing every other instance
of this same problem** across all 18 chapters / ~700 verses, using the
same method that worked for 11.16: vision-read the actual page image and
compare against what's in the data files.

**This is a different, additional problem from the ones already tracked
in `EN_RETRANSLATION_PLAN.md`.** That file tracks: (a) whether each
chapter's EN/DEV/HI translations exist and are full-fidelity, and (b) a
handful of specific known bugs (duplicated verse content, off-by-one
mislabeling, OCR garbles in English loanwords). This plan tracks a
third, orthogonal thing: **whether the Kannada source itself is
complete**, independent of translation status. A chapter can be marked
"COMPLETE" in `EN_RETRANSLATION_PLAN.md` and still have gaps this plan
would catch — chapter 11 is proof of that.

## Resources already available (don't rebuild these)

- `gita_pages/page_NNNN.png` — 576 scanned page images, 1-indexed, 4-digit
  zero-padded. These are the ground truth. Vision-reading these is the
  only fully reliable verification method (OCR text has known noise —
  see `EN_RETRANSLATION_PLAN.md`'s notes on the ~265 garbled English
  terms and various OCR corruption patterns).
- `_extracted/clean_ocr/p-NNN.txt` — OCR text per page (3-digit, **not**
  zero-padded to 4 — e.g. `p-9.txt`, `p-376.txt`). Useful for fast
  approximate scanning, but treat it as a *signal to prioritize
  candidates*, never as ground truth to patch from directly — it has its
  own OCR errors independent of whatever errors are in `bannanje_kn.js`.
- `_extracted/clean_verses_700.json` — 702 entries, each with `chapter`,
  `verse`, `ref`, `shloka`, `meaning`, `source_page`, and `status`. This
  looks like the direct precursor to `bannanje_kn.js`'s content. Two
  things make it valuable for this audit:
  1. **`source_page` reliably equals the PNG filename number** — e.g.
     `source_page: 376` means `gita_pages/page_0376.png`. Verified during
     the 11.16 investigation. No manual page-offset arithmetic needed.
  2. **`status` field** takes four values: `clean` (657), `screenshot_patch`
     (21), `auto_extracted` (18), `phantom_disregard` (6). The non-`clean`
     statuses mark verses the original extraction pipeline itself flagged
     as lower-confidence. **This is a ready-made priority list** — see
     Phase 1 below. Note `clean` does NOT mean complete — 11.16 was marked
     `clean` and still missing a paragraph, so Phase 2 (below) is still
     needed to catch the rest.
- `_extracted/clean_markers.json`, `_extracted/patched_refs.json`,
  `_extracted/bannanje_clean.json`, `_extracted/verses.json` — other
  artifacts from whatever produced `clean_verses_700.json`. Not yet
  explored for this purpose; may contain useful additional signal
  (e.g. `clean_markers.json` might mark exact verse-boundary offsets
  within pages). Worth a quick look before starting Phase 2's tooling,
  in case something here already solves part of it.

## The audit, in two phases

### Phase 1 — the free list (do this first, it's cheap)

Every verse with `status != "clean"` in `clean_verses_700.json` is a
known-flagged candidate from the original extraction. There are 45 of
them. List them all (chapter, verse, status, current length), vision-read
each one's page against `bannanje_kn.js`'s current content, and fix any
genuine gaps found, using the exact procedure from Phase 3 below.

Quick way to regenerate the list:

```python
import json
d = json.load(open('_extracted/clean_verses_700.json', encoding='utf-8'))
flagged = sorted(
    ((v['chapter'], v['verse'], v['status'], v['source_page']) for v in d if v['status'] != 'clean'),
    key=lambda x: (x[0], x[1])
)
for ch, vs, status, pg in flagged:
    print(f"{ch}.{vs}\t{status}\t\tpage_{pg:04d}.png")
```

Expect roughly 45 items, spread across chapters 1, 2, 3, 4, 6, 7, 8, 11,
12, 13, 14, 15, 16, 17, 18 (not an exhaustive list — regenerate it, don't
trust this paragraph's memory of the exact set).

### Phase 2 — the systematic sweep (do this for everything else)

Phase 1 only catches what the *original* pipeline already suspected.
11.16 shows the pipeline can also fail silently. For full coverage:

1. **Build a per-page aggregate-length comparison.** For each of the 576
   pages, sum the `meaning` length (from the current `bannanje_kn.js`,
   not the stale `clean_verses_700.json`) of every verse whose
   `source_page` equals that page number, and compare against that
   page's OCR text length (`_extracted/clean_ocr/p-{N}.txt`, where N is
   *not* zero-padded).
2. **This ratio is noisy — do not use a hard cutoff.** Verified during
   planning: known-good pages showed ratios from ~0.9 to ~2.7 (a verse's
   commentary often spans multiple pages, gets attributed to one
   "primary" `source_page`, and page OCR text includes chapter headers/
   footers/page numbers that inflate or deflate the raw comparison). The
   known-bad page (376, containing 11.16) showed a ratio of 0.42. Use
   **relative ranking within each chapter**, not an absolute threshold:
   for each chapter, sort its pages by ratio and manually check the
   lowest ~20% first. Combine with the chapter-relative length-outlier
   scan already established in `EN_RETRANSLATION_PLAN.md`'s pipeline
   (verses whose `bannanje_kn.js` length is well below their chapter's
   own average) as a second cross-check — a verse that's both a low-ratio
   page AND a length outlier in its chapter is a high-confidence
   candidate.
3. **Vision-read every flagged candidate's page** against current
   `bannanje_kn.js` content, verse by verse, the same way 11.16 was
   checked. Do not trust the OCR text or the ratio score as a substitute
   for actually looking at the page image — both are just triage tools
   to avoid vision-reading all 576 pages blind.
4. Chapters 1–11 already have translations built on top of whatever KN
   content currently exists, so gaps found there need the full four-file
   fix (see Phase 3). Chapters 12–18 haven't been translated yet, so for
   those, doing this audit **before** starting each chapter's translation
   pass (folding it into the existing "verify KN source against
   `gita_pages/` PNGs" pipeline step already documented in
   `EN_RETRANSLATION_PLAN.md`) avoids doing the work twice.

### Phase 3 — the fix procedure (same as used for 11.16)

For each confirmed genuine gap:

1. Vision-read the exact page image(s) with the `view` tool and
   transcribe the missing text exactly as printed (matching existing
   `bannanje_kn.js` conventions: zero-width joiner `\u200c` after certain
   consonant clusters, `।`/`॥` for daṇḍa, etc. — look at neighboring text
   in the same verse for the local convention).
2. Patch `bannanje_kn.js` first, using the established
   `python3` read → `content.count(old) == 1` assert → `str.replace()` →
   write pattern (never `re.sub()` — see `EN_RETRANSLATION_PLAN.md`).
3. Compose matching additions for EN (full IAST), DEV (Sanskrit prose,
   matching whatever fidelity standard that chapter is currently held
   to — full-fidelity for ch. 11 per Vinayak's 2026-08-03 direction, the
   older condensed style for chapters not yet reworked), and HI, and
   append them to the existing translated content in the same way.
4. **Escaping pitfall (bit this session on 2026-08-03, costing a revert):**
   when adding text to these JS data files, do **not** use the `str_replace`
   tool with plain multi-line text — it inserts literal newline
   characters, which breaks the JS string literal (these files store
   multi-line content as a literal two-character `\n` escape sequence
   within a single-line-per-key string, not as real embedded newlines).
   Always build the addition as a Python string, run it through a
   `js_escape()` helper (`\` → `\\`, `"` → `\"`, real newline → literal
   `\n`), and splice it into the existing escaped value before writing.
5. Validate all four files parse (`new Function(s.replace(varname, 'const X'))`
   per file) before rebuilding.
6. Rebuild `viewer.html` via `build-bundle.py`.
7. Commit with a message that documents: what was missing, where it was
   vision-verified from (page filename), and confirmation that git
   history was checked to rule out an accidental prior deletion (so the
   commit message accurately says "gap in original extraction" rather
   than implying some past edit is at fault, unless git history actually
   shows that).
8. Push (rebase-and-retry if another session has pushed in the meantime —
   this has already happened once this project; don't assume you have
   the only session touching the repo).

## What does NOT count as a gap (don't "fix" these)

- **Genuine mid-sentence truncations in the source itself**, where the
  book's own text visibly cuts off (see 11.46's documented known debt in
  `EN_RETRANSLATION_PLAN.md`). Confirm by checking that the *next* page
  doesn't pick the sentence back up — if it doesn't, this is the book's
  own printing/scanning artifact, not a data-extraction gap. Document as
  a known debt; don't fabricate a completion.
- **Correctly-structured merge verses** (two verses sharing one
  padaccheda+commentary block, with a merge-note in the first verse — the
  8.12/8.13, 10.15/10.16, 11.10/11.11, 11.52/11.53 pattern). These are
  supposed to be short on one side. Don't "fix" them by duplicating
  content into both halves.
- **Verses that are just genuinely terse in the original.** Not every
  short verse is a bug — some of Bannanje's commentary really is a single
  paragraph. Only patch when the page image shows content that isn't in
  the data file.

### Phase 3 — audit `FULL_GITA` against `bannanje_kn.js` (new, added 2026-08-10)

**This is a different data source from everything else in this plan, and it
was previously completely unaudited.** Discovered via Vinayak flagging a
corrupted verse header on the live app for 11.26.

Background: the chapter-browsing view's "BG {ch.v}" header card renders its
shloka line from `FULL_GITA['{ch.v}']` (defined directly inside
`viewer-src.html`, ~701 entries of Devanagari text, transliterated on the
fly via `devToKn`/`devToIast` for KN/EN display) — **not** from
`bannanje_kn.js`. Meanwhile the expandable "ವಿವರಣೆ"/commentary panel below
it renders from `BANNANJE_VERSE_MEANINGS` (`bannanje_kn.js`), which is what
every other phase of this plan and all of `EN_RETRANSLATION_PLAN.md`'s work
has been auditing. **These two are separate copies of the same underlying
Sanskrit verses and can silently drift out of sync** — confirmed on 11.26,
where `FULL_GITA` held corrupted, ungrammatical Sanskrit
("...सूतपुत्रस्तथासावसह्यामद्धि कौरवैर्अपि") while `bannanje_kn.js`'s own
shloka line for the same verse was correct. Fixed 2026-08-10 (see git log).
11.25, 11.27, 11.28 were spot-checked and found correct at the same time —
this may be an isolated corruption rather than a systemic pattern, but that
hasn't been verified at scale.

**How to audit:** `bannanje_kn.js`'s value for each verse key always opens
with that verse's own shloka line(s) before the em-dash gloss marker (except
for merge-note stub verses, which hold only their own single verse's line —
see the "what does NOT count as a gap" section above for the merge-verse
pattern). Extract that opening shloka line from each `bannanje_kn.js` entry,
transliterate `FULL_GITA`'s corresponding Devanagari entry to Kannada (the
app's own `devToKn` logic in `viewer-src.html` is the reference
implementation — reuse its rules rather than reimplementing transliteration
from scratch), and diff the two per verse. Flag mismatches for manual
review — some will be genuine `FULL_GITA` corruptions like 11.26; others
may be legitimate variant readings or `bannanje_kn.js` OCR noise, so don't
auto-patch either side without checking which one (if either) matches the
book page.

Note: for merge-verse pairs, `FULL_GITA` likely stores each verse's own
line under its own key (i.e. `FULL_GITA['11.26']` and `FULL_GITA['11.27']`
each hold just their own single verse, unlike `bannanje_kn.js`'s
convention of putting the combined content under the second key). Account
for this structural difference when diffing — don't flag every merge pair
as a false-positive mismatch.

## Tracking

Add a running log below as chapters/pages get audited, in the same
spirit as `EN_RETRANSLATION_PLAN.md`'s progress tables. Suggested
columns: chapter, phase-1 items checked/fixed, phase-2 pages checked,
gaps found, gaps fixed, date.

| Chapter | Phase 1 (flagged) checked | Phase 2 (sweep) done | Gaps found | Gaps fixed | Date |
|---|---|---|---|---|---|
| 11 | All 5 flagged items checked (11.7, 11.41, 11.52, 11.54, 11.55); 11.16 found+fixed 2026-08-03 via ad hoc report before this plan existed | **Full page-by-page sweep completed, all 28 pages (`page_0368.png`–`page_0395.png`), not just the bottom-20% ratio sample** | Three distinct bugs beyond 11.16: (1) **11.41** — contaminated with a duplicated śloka + a misplaced paragraph actually belonging to 11.44's commentary; (2) **11.26** — contained fully **fabricated commentary not present in the source at all** (content-policy violation, not caught by length-ratio heuristics — this verse was not even a significant outlier); (3) **11.46** — a previously-documented "known debt" (genuine mid-sentence book truncation) turned out on reinspection to be a **misdiagnosis**: the sentence completes cleanly on the next page. All three were true gaps/contamination, not spillover artifacts. | 11.41, 11.26 restructured as proper merge-notes (8.12/8.13 convention); 11.46 completed with the actual missing text. All fixes applied across KN/EN/DEV/HI, validated, `EN_RETRANSLATION_PLAN.md`'s Known Debts section corrected. | 2026-08-06 |
| 12 | Not applicable — this chapter's audit went straight to a full character-level pass (see `CH12_AUDIT.md`), not the phase-1/phase-2 method this table tracks | **Full page-by-page character-level read, all 20 verses against every source page (`page_0396.png`–`page_0411.png`)** | Two structural bugs beyond typo-class fixes: (1) **12.3/12.4** — verse 4's entire content (śloka, padaccheda, half its commentary) was missing across all four languages, with unrelated chapter-opening material ("fifteen fences") occupying the 12.4 key instead; (2) **12.6/12.7** — a second confirmed **fabrication**, same signature as 11.26: invented phrase-gloss commentary present in all four languages with no basis on the page. Also found 6 distinct wrong-or-missing embedded-English-term errors (not a pattern seen in the chapter-11 audit) and ~25 smaller transcription fixes. | 12.3 and 12.6 restructured as proper merge-notes; 12.4 and 12.7 completed with the actual missing/first-half content, freshly translated into EN/DEV/HI where it had never existed before; fences material relocated to prepend 12.1 in all four languages; all wrong/missing English terms and smaller fixes applied. `EN_RETRANSLATION_PLAN.md`'s chapter-12 entry corrected. | 2026-08-09 |
| 13 | All 5 flagged items checked (13.5, 13.7, 13.30, 13.32, 13.35 — all verified genuine/correct on inspection, no fixes needed) | Full page-by-page sweep, all 24 pages (`page_0413.png`–`page_0436.png`); lowest-ratio pages (422, 430, 435, 436) plus several higher-ratio pages (413, 420, 414, 426, 432) checked against the page images; also ran the E1/E3 whole-chapter regex sweeps (ವಕ್ರ/ವಕ್ತ್ರ, ಎಲ್ಲೆಡೆ/ಎಲ್ದೆಡೆ, ಭು/ಳು, stray Latin/ASCII-in-Kannada) — zero hits | One genuine character-level bug: **13.4** — "ಹೇತುಮದ್ಳಿಃ" should read "ಹೇತುಮದ್ಭಿಃ" (ಭ↔ಳ conjunct confusion, matching the documented E1 pattern class; confirmed against `page_0414.png` and cross-checked that EN/DEV/HI already had the correct "hetumadbhiḥ," so only KN needed the fix). Everything else checked out clean: the 13.6/13.7, 13.29/13.30, and 13.31/13.32 duplication splits (documented as already fixed in `EN_RETRANSLATION_PLAN.md`) were re-verified against the page images and are correct; the 13.9/13.10/13.11 merge group was specifically checked against the E5 fabrication-pattern concern and found to be genuine, non-fabricated content matching the page; 13.5's unusually-structured content (a bridging paragraph with no śloka of its own, flagged `auto_extracted`) was verified as genuine book text correctly placed, not a bug; 13.35's `phantom_disregard` status was confirmed as the documented genuine structural note (Bannanje's own text ends at 34 verses). | 13.4 fixed | 2026-08-10 |
| 14 | Only 14.9 flagged (`auto_extracted`) — checked and verified genuine, no fix needed | Full page-by-page sweep, all 24 pages (`page_0437.png`–`page_0464.png`), including deliberate re-verification of the three previously-documented fixes in this chapter (the 14.9 misfile, the 14.11 truncation, and the 14.17–14.20 scramble) against the page images; also ran the E1/E3 whole-chapter regex sweep — zero hits on the known patterns, but a distinct new pattern turned up (see next column) | One genuine bug, all three instances in **14.19**'s raw śloka line: the avagraha character (ऽ/ಽ) was OCR-corrupted three different ways in the same line — "ನಾ$ನ್ಯಂ" (should be ನಾಽನ್ಯಂ), "ದ್ರಷ್ಟಾ 5ನುಪಶ್ಯತಿ" (should be ದ್ರಷ್ಟಾಽನುಪಶ್ಯತಿ, digit "5" substituting for the avagraha glyph), and "ಸೋಈಧಿಗಚ್ಛತಿ" (should be ಸೋಽಧಿಗಚ್ಛತಿ). Normalized all three to match the file's established ಽ convention (e.g. "ದ್ವಿತೀಯೋಽಧ್ಯಾಯ" elsewhere). Also fixed one word-level typo in the same line, "ವೇತ್ರಿ" → "ವೇತ್ತಿ" (confirmed against the page image and the verse's own padaccheda line, which already had "ವೇತ್ತಿ" correctly). EN/DEV/HI already had all of this correct, so only KN needed fixing. Everything else in the chapter — including 14.1 through 14.27 in full — was checked directly against the page images and found to match exactly. | 14.19 fixed | 2026-08-10 |
| 15 | Only 15.7 flagged (`auto_extracted`) — checked and verified genuine, no fix needed | Full page-by-page sweep, all 22 pages (`page_0466.png`–`page_0487.png`), every verse 15.1-15.20 checked directly against the page images, including the massive 15.1 (aśvattha-tree exposition, ~7100 chars spanning 3 pages) and 15.15 (~6350 chars) which were traced end-to-end for continuity; also ran the E1/E3 whole-chapter regex sweep — the only hits were a legitimate numeral ("4 lakh 32 thousand", the Rigveda's character count in 15.15), not OCR corruption | None — chapter is clean. The 15.3/15.4 merge-note pair was checked against the E5 fabrication-pattern concern and found to be a genuine, correctly-terse forward-pointing note (verse 3 explicitly says its padaccheda/meaning is given together with verse 4), not a bug. | Clean, no fix needed | 2026-08-10 |
| 16 | Three flagged (16.6, 16.9, 16.18) — all checked; 16.6 and 16.9 had genuine corruption (see fixes), 16.18 (`screenshot_patch`) verified already correct from an earlier session | Full page-by-page sweep, all 20 pages (`page_0488.png`–`page_0508.png`), every verse 16.1-16.24 checked directly against the page images, including the massive 26-item 16.3 enumeration (~14,200 chars, traced end-to-end across ~7 pages); ran a decoded regex sweep (unescaping `\uXXXX` blocks first — see new finding in guidelines) across the whole chapter at the end — zero further hits | 13 fixes total, all in `bannanje_kn.js`: **16.3** dropped-character (ಳ→ಒಳ); **16.6** three corruptions in an escaped-block śloka line (stray virama, avagraha misread, corrupted verse marker); **16.8/16.9** a genuine typo (ಷಸ್ಕಷ್ಟಿ→ಸೃಷ್ಟಿ) plus a duplicated-orphan-śloka bug (16.9's opening line was wrongly duplicated with no commentary at the tail of 16.8 — removed the orphan, fixed the corruption in 16.9's real copy); **16.10** ಬ/ಪ swap; **16.12** two fixes (ಪರಾಯಹಾಃ→ಪರಾಯಣಾಃ, ದಿಗೃಂಧನ→ದಿಗ್ಬಂಧನ); **16.14** stray space; **16.16** ಪತನ್ನಿ→ಪತಂತಿ plus stray punctuation; **16.17** two fixes (ಸ್ವಬ್ಧಾಃ→ಸ್ತಬ್ಧಾಃ, ನಾಮಯಜ್ಜ್ಞ್ಯೈಃ→ನಾಮಯಜ್ಞೈಃ); **16.19** vowel typo (ಕ್ಷೆಪಾಮಿ→ಕ್ಷಿಪಾಮಿ); **16.20** two ಚ್ಚ/ಜ್ಜ→ಚ್ಛ typos; **16.21** ಶ್ಲೋಖ→ಶ್ಲೋಕ plus an avagraha misread in a quoted verse; **16.23** four corruptions in one śloka line (missing ೃ, three stray/missing spaces). This chapter had unusually dense character-level corruption compared to 13–15, concentrated in sandhi-form śloka lines. | 13 fixes applied | 2026-08-10 |
| 17 | Both flagged items checked (17.9, 17.25 — both `auto_extracted`); 17.9 had a genuine wrong-embedded-term bug (see fixes), 17.25 verified correct as a merge-note key | Full page-by-page sweep, all 18 pages (`page_0510.png`–`page_0527.png`), every verse 17.1-17.28 checked directly against the page images; ran the E1/E3 whole-chapter regex sweep (properly decoding `\uXXXX` escapes first, per the ch16 finding) — zero hits on vakra/vaktra, ಅದ್ಳು, ಎಲ್ದೆಡೆ; both merge-verse pairs (17.5/17.6, 17.24/17.25) specifically checked against the E5 fabrication-pattern concern and confirmed genuine, correctly-short forward-pointing notes, not fabrications | 8 fixes, all in `bannanje_kn.js`: **17.4** missing bracketed English gloss (ವಾಮಾಚಾರ was missing its `(Witchcraft)` tag entirely); **17.9** wrong embedded English term matching the E5 pattern — data said `(tasteless food)`, page says `(Ex:Chewing gum)`; **17.11** an orphaned stray fragment `ಇ ಎಂ` (E4 pattern) sitting between two sentences that read perfectly well without it, not present on the page at all; **17.15** a character-level conjunct confusion, ನಮ್ಮಲ್ಜಿಲ್ಲ→ನಮ್ಮಲ್ಲಿಲ್ಲ; **17.21** a stray Latin digit "0" substituting for an anusvara ಂ in a śloka line (E3 pattern); **17.23** an extraneous word inside an otherwise-correct bracket, `(Exclusive name)`→`(Exclusive)` (page only has "Exclusive"); **17.25** a stray character `ಎ` replacing the book's standard dash separator between padaccheda and commentary; **17.28** a missing space in a śloka line (E2 pattern), `ಚಯತ್‌`→`ಚ ಯತ್‌`. The 17.18→17.19 tail duplication was checked and confirmed to be the known-benign page-transition spillover pattern (matches 17.19's own key exactly, not corrupted) — not a bug. | 8 fixes applied | 2026-08-10 |
| 18 | Not applicable — no flagged items in the extraction metadata for this chapter | Full page-by-page sweep, all 47 pages (`page_0528.png`–`page_0574.png`), every verse 18.1-18.78 checked directly against the page images; whole-chapter regex sweep afterward (decoded `\uXXXX`, stray Latin digits/underscores) confirmed no further hits beyond what page-reading had already found; the 18.36/18.37 merge-verse pair checked against the E5 fabrication-pattern concern and confirmed genuine | 27 fixes, all in `bannanje_kn.js`. Highlights: **18.5** had a full duplicate of 18.4's entire content prepended to its own text — the actual 18.5 shloka+commentary only begins after that duplicate block, confirmed by checking the page directly (page_0530.png shows 18.5 starting cleanly with its own shloka, no duplication) — removed the duplicate and fixed a corrupted verse-marker "1891"→"॥೫॥" in the same key; **18.44** was missing the opening half of a bracket, `(Majority`, leaving only the stray closing paren; **18.45** had three separate corruptions in one verse including a multi-word truncation `ತನ್ನ ದಾದ ಕರ್ಮದಲ್ಲಿ`→`ತನ್ನ ಸ್ವಭಾವಸಹಜವಾದ ಕರ್ಮದಲ್ಲಿ`; a **chapter-local recurring pattern** was found and fixed at three separate verses (18.56, 18.58, 18.73) — `ಪ್ರಸಾದ` (grace/blessing) missing its `ಪ್ರ` and reading as `ಹಸಾದ`, while the same word appears correctly elsewhere (18.62) in the chapter; two more corrupted verse-number markers matching the `18.5`/`17.x` pattern class were found and fixed (18.48 `೨.`→`॥೪೮॥`, 18.57 `1೫೭॥`→`॥೫೭॥`); the remainder are single-character/word-level E1-E3 pattern fixes (missing spaces, swapped consonants, stray inserted characters) each individually confirmed against its page image. Several suspected issues were checked and found to be faithful-to-source (not bugs) and left unchanged — see commit message for details. | 27 fixes applied | 2026-08-13 |
| 1 | All 5 flagged items checked (1.4, 1.5, 1.33, 1.37, 1.45 — all `screenshot_patch`); 1.4, 1.33, 1.37, 1.45 verified genuine/correct on inspection, no fixes needed; 1.5 had a genuine gap (see next columns) | Full page-by-page sweep, all 32 pages (`page_0009.png`–`page_0040.png`), every verse 1.1–1.47 (+1.29 merge-note) checked directly against the page images; whole-chapter E1/E3 regex sweep (decoded `\uXXXX` first) — zero hits on vakra/vaktra, ಅದ್ಳು, ಎಲ್ದೆಡೆ, stray Latin/ASCII-in-Kannada; 1.28/1.29 merge-note pair specifically checked against the E5 fabrication-pattern concern and confirmed genuine (short, forward-pointing, matches page 28) | Two genuine gaps, both new gap-classes not previously catalogued: (1) **a full chapter-opening essay (page 9, before 1.1's own śloka) was entirely absent from all four language files** — a ~400-word introduction on why ch.1 shouldn't be dismissively titled "Arjuna Viṣāda Yoga," framing the chapter's psychology angle and the Dhṛtarāṣṭra/Duryodhana-as-inner-state reading. Confirmed via grep that no trace of it existed anywhere in the repo's data files. This is chapter-preamble content with no verse key of its own, distinct from every previously documented gap class. (2) **1.5 was severely condensed** — roughly 80% of the book's actual commentary (pages 13–14) was missing: the two-Kāśirāja disambiguation story (Varaṇā/Asi rivers → Vārāṇasī), Kuntī's origin as Pṛthā and her adoption, the nara-puṅgava etymology, and the closing psychological-insight paragraph were all absent, leaving only a compressed paraphrase. Also carried a small transcription typo (ದುಯೋರ್ಧನನ → ದುರ್ಯೋಧನನ, syllable transposition) that was folded into the fix. | Chapter-opening essay restored (transcribed from `page_0009.png`) and prepended to the `"1.1"` key in all four language files (KN transcribed from the page; EN/HI translated closely; DEV composed as condensed independent Sanskrit prose per the chapter's established house style). 1.5 fully rewritten from the page-verified KN text and translated into EN (full-fidelity, matching chapter 1's EN style)/DEV (condensed)/HI (close to KN structure) in all four files. All four files validated to parse (701 keys each, consistent with the rest of the book), bundle rebuilt via `build-bundle.py`. | 2026-08-14 |
| 2 | All 7 flagged items checked (2.3, 2.32, 2.37, 2.54, 2.55, 2.60, 2.68 — all `screenshot_patch`); all 7 verified genuine/correct on inspection, no fixes needed | Full page-by-page sweep, all 53 pages (`page_0042.png`–`page_0094.png`), every verse 2.1–2.72 checked directly against the page images; whole-chapter E1/E3 regex sweep (decoded `\uXXXX` first) both before and after fixes — only the confirmed hits noted in the next column, otherwise clean | Confirmed the chapter 1 finding is a recurring gap class, not a one-off: **a missing chapter-opening essay (page 42, before 2.1's own śloka)** — a short preamble on why chapter 2 is the "pañcāṅga" (compendium) of the whole Gita, with the remaining sixteen chapters just unfolding it — was absent from all four language files, same shape as chapter 1's gap. Beyond that, ten KN-only character-confusion typos, none affecting EN/DEV/HI except one: (1) ಎಲ್ದೆಡೆ→ಎಲ್ಲೆಡೆ at 2.24, confirming the ch.11-documented pattern is book-wide, not chapter-local; (2) a stray Kannada numeral ೫ where the page prints ಈ ("this") at 2.20; (3) three separately-corrupted spellings of ಸಂಪ್ಲುತೋದಕೇ within a single verse, 2.46 (ಸಂಪ್ಸುತ ಉದಕೇ, ಸಂಪ್ಗತೋದಕೇ, ಸಂಪ್ಲ್ಗತೋದಕ) — one of these had a matching corruption in EN's transliteration (`saṃplauta udake`) that needed its own fix; (4) two corrupted spellings of ಸಾಕ್ಷಾತ್ಕಾರ within 2.46 (ಸಾಕ್ಷಾತ್ಕ್ಮಾರ, ಸಾಕ್ಷಾತ್ಮರಿಸಿ); (5) two dropped-conjunct typos within 2.47 (ನಿಷ್ಕ ಯತೆ→ನಿಷ್ಕ್ರಿಯತೆ, ಪ್ರಯತ್ನಿ ಪಿಲ್ಲ→ಪ್ರಯತ್ನಿಸಿಲ್ಲ); (6) a new ನ→ಸ character-confusion pattern turning "ನಾವು" (we) into "ಸಾವು" (death), found at 2.49 and 2.57, and once more against a different word (ನಾಸ್ತಿಕ→ಸಾಸ್ತಿಕ) at 2.61 — see FUTURE_AGENT_GUIDELINES.md §2E for detail, since this corruption is easy to read past (it stays grammatical, just wrong); (7) a stray garbage-character prefix ("ದ) ಗ ದ್ ೨%") on 2.72 with no counterpart anywhere on the source page, removed outright. One deliberate non-fix also worth recording: 2.72's ಬ್ರಹ್ಮನಿರ್ಬಾಣಮ್ ಖುಚ್ಛತಿ (expected ಬ್ರಹ್ಮನಿರ್ವಾಣಮ್ ಋಚ್ಛತಿ) was left as-is because the source page itself renders it this way consistently across both the śloka and padaccheda lines, and EN's independent transliteration shows the identical substitution — this looks like a genuine print/scan artifact, not a data-entry error, and a future agent shouldn't "fix" it from Sanskrit-grammar knowledge without re-checking the page first. | All 4 gaps/typos affecting KN fixed directly in `bannanje_kn.js`; the chapter-opening essay translated closely into EN/HI and composed as condensed independent Sanskrit prose for DEV (matching the chapter's house style, same treatment as chapter 1's essay); the one EN transliteration typo (ಸಂಪ್ಲುತೋದಕೇ's counterpart) fixed in `bannanje_en.js`. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. | 2026-08-14 |
| 3 | No flagged items in extraction metadata other than 3.43 (`phantom_disregard`), which turned out to be based on a wrong diagnosis — see next columns | Full page-by-page sweep, all 30 pages (`page_0095.png`–`page_0125.png`), every verse 3.1–3.43 checked directly against the page images | **One major structural bug, a new pattern class**: the same "next verse's content embedded inside the previous verse's key instead of getting its own key" defect occurred **twice** in this chapter, cascading key mislabeling each time — (1) at **3.31→3.32**: verse 32's full śloka+commentary was appended inside `"3.31"`'s value (with a corrupted verse-marker, `॥೩೦೨॥` for `॥೩೨॥`), shifting `"3.32"` to actually hold verse 33's content, `"3.33"` to hold a truncated duplicate stub of verse 34, and `"3.34"` coincidentally self-correcting by holding the complete, correct verse-34 content — verified by cross-referencing every key's opening line against `FULL_GITA` in `viewer-src.html`, which is verse-number-accurate and untouched by this bug; (2) at **3.42→3.43**: verse 43's śloka (with its two lines scrambled/reversed and internally corrupted, `ಸಂಸ್ಕ್ತಭ್ಕಾ ತ್ಮಾನಮಾತ್ಮನಾ` for `ಸಂಸ್ತಭ್ಯಾತ್ಮಾನಮಾತ್ಮನಾ`) plus its full commentary was embedded at the tail of `"3.42"`, and the existing `"3.43"` key held a **factually incorrect** `phantom_disregard` note claiming Bannanje's commentary ends at 42 verses — untrue; the book gives verse 43 its own full treatment across `page_0124.png`–`page_0125.png`, including the chapter colophon. Nothing was actually missing from the book's content in either case, just misfiled. Also 31 ordinary character-level fixes (E1-E3 pattern classes: dropped conjuncts, letter-swaps, stray spaces/brackets, one corrupted verse-marker, one misquoted embedded English citation from the Qur'an) spread across verses 3.3–3.40, all confirmed against page images; none needed mirroring in EN/DEV/HI (spot-checked the Sanskrit-transliteration-adjacent ones — `stena`, `mahāpāpmā`, `ulbena`, `duṣpūreṇa` — and EN was already correct on all of them, confirming these are KN-only OCR artifacts). Chapter-opening preamble (present since 3.1's key, unlike ch.1/ch.2) confirmed already correct, no gap there. | Restructured `"3.31"`→`"3.34"` and `"3.42"`/`"3.43"` across all four language files (KN/EN/DEV/HI) to align every key with `FULL_GITA`'s verse numbering — split embedded blocks into their own keys, fixed the two corrupted verse-markers, un-scrambled and corrected verse 43's śloka, discarded the redundant stub, preserved the chapter colophon at the true end of verse 43. All four files re-validated at 701 total keys / 43 for chapter 3 after restructuring. 31 additional typo fixes applied to `bannanje_kn.js` only. Bundle rebuilt via `build-bundle.py`. See `FUTURE_AGENT_GUIDELINES.md` §2E for the new "embedded-verse cascading shift" pattern (E10) and two residual out-of-scope findings (chs. 2 and 4) flagged for a future session. | 2026-08-27 |
| 4 | All 4 flagged items checked (4.3, 4.25, 4.32, 4.34 — all `screenshot_patch`); 4.3 had a genuine fix (see next columns), 4.25 and 4.32 verified correct on inspection, 4.34 surfaced the merge-pair duplicate-commentary finding noted below | Full page-by-page sweep, all 35 pages (`page_0126.png`–`page_0160.png`), every verse 4.1–4.42 checked directly against the page images | Confirmed the missing-chapter-opening-preamble gap class (E8) recurs a third time: a short preamble (page 126, before 4.1's own śloka) explaining how ch.4 continues from chs.2–3 was absent from all four language files — same shape as chapters 1 and 2's gaps. Beyond that, 26 KN-only fixes: (1) dropped conjunct ದಾಸ→ದಾಸ್ಯ at 4.3 (navavidha-bhakti list); (2) ತೈಜಿಸುವುದು→ತ್ಯಜಿಸುವುದು at 4.5; (3) ಲ/ದ-swap ಕಳೆಗುಂದಿದಾಗೆಲ್ದಾ→ಕಳೆಗುಂದಿದಾಗೆಲ್ಲಾ plus a stray-space word break at 4.7; (4) a stray period at 4.10; (5) two stray periods and a stray space at 4.12; (6) two fixes (ಸೃಷ್ಟಿ ಪಿಲ್ಲ→ಸೃಷ್ಟಿಸಿಲ್ಲ, a stray period) at 4.13; (7) four fixes at 4.14 (ಸ್ಚೃಹಾ→ಸ್ಪೃಹಾ in the śloka itself, two stray-space word breaks, ಕರ್ತೃ ಲ್ಲ→ಕರ್ತೃತ್ವ,); (8) a new recurring vowel-length corruption ನಿಷ್ಕ್ರೀಯ→ನಿಷ್ಕ್ರಿಯ (niṣkriya, "inactive") found 4 separate times across 4.15 (×2), 4.18, and 4.31 (the last being a previously-flagged §2E-E11 residual from the ch.3 audit, now fixed) — see FUTURE_AGENT_GUIDELINES.md §2E for a new sub-entry on this pattern; (9) at 4.18, also ಕರ್ತ್ಯತ್ವ→ಕರ್ತೃತ್ವ, a stray ellipsis, and a missing `(definition)` English gloss; (10) a **newly-identified systemic stray-ellipsis corruption** — checked 9 instances of `...` across the chapter (4.17 area not fixed pending re-check, 4.18, 4.24, 4.28 ×4, 4.32, 4.37), all 9 confirmed against page images to be plain periods or spaces in the source with no ellipsis at all; fixed 8, see guidelines for the one at 4.28 that also carried a missing `(discipline)` gloss; (11) single fixes at 4.24 (stray period + ellipsis), 4.32, 4.33, 4.37, and 4.42 (ಸ್ಫಮ್→ಸ್ಥಮ್ in the śloka). **Not fixed, flagged for Vinayak's decision**: 4.34 and 4.35 share one combined discourse in the book (shloka 4.34, shloka 4.35, then one shared translation+commentary — the same merge-verse convention seen elsewhere in this book), but unlike the established short-forward-pointing-note convention, the current data has a genuine (non-fabricated) but truncated copy of the shared commentary under **both** keys — 4.34 holds a shorter version, 4.35 holds the fuller version with additional content. This isn't invented content (verified word-for-word against the page), just duplicated across two keys instead of the first key holding a short pointer. See FUTURE_AGENT_GUIDELINES.md §2E for detail — this needs a decision on whether to trim 4.34 to a forward-pointing note (matching convention) or leave as-is, analogous to the still-open 13.34/13.35 duplicate-note decision. Chapter-opening preamble now added (was missing, unlike ch.3 which already had it at 3.1). | Preamble transcribed from `page_0126.png` and prepended to the `"4.1"` key in all four language files (KN transcribed from the page; EN translated closely; DEV composed as condensed independent Sanskrit prose per house style; HI close to KN structure). 26 KN-only typo/gap fixes applied directly in `bannanje_kn.js` with assertion-guarded search-and-replace. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. | 2026-08-27 |
| 5 | No flagged items checked separately (audit went straight to full page-by-page verse read) | Full page-by-page sweep, all 29 verses (5.1-5.29) checked directly against page images (`page_0161.png`-`page_0189.png`); chapter-wide regex sweeps run for the two newly-found recurring patterns (ಕರ್ತ್ಯತ್ವ, ಪಕ್ಚ) after fixing, confirming no further in-chapter hits | Confirmed the missing-chapter-opening-preamble gap class (E8) recurs a fourth time: a ~280-word essay on the karma-sannyāsa/karma-yoga distinction (page 162, before 5.1's own śloka) was absent from all four language files. A new E10 embedded-verse instance at **5.7/5.8/5.9**: verse 8's śloka was truncated and orphaned at the tail of "5.7", "5.8" wrongly held verse 9's śloka, "5.9" was missing verse 9's own śloka box — resolved into the book's standard two-verse merge-note convention (see FUTURE_AGENT_GUIDELINES.md §2E E10 addendum). Beyond that, roughly 30 character-level KN-only fixes across the chapter, including two newly-identified recurring corruption patterns: (1) **ಕರ್ತೃತ್ವ→ಕರ್ತ್ಯತ್ವ** (vocalic ೃ degrading to ್ಯ), found 5 times clustered in 5.13-5.15's doership discussion; (2) **ಪಕ್ವ→ಪಕ್ಚ** ("ripened", ವ/ಚ conjunct confusion), found 3 times (5.14, 5.15, 5.20) — this one required a matched-scale glyph comparison to resolve since the independently-extracted OCR agreed with the (wrong) data reading; also flagged as present outside this chapter at 4.38/7.15/7.25 for a future session. See FUTURE_AGENT_GUIDELINES.md §2E E15/E16 for both patterns in detail. Several plausible-looking spellings were checked and confirmed as genuine page artifacts, not bugs, including a second occurrence of the chapter-2-documented ಬ್ರಹ್ಮನಿರ್ಬಾಣ (ಬ/ವ) substitution — see §2E E17 for the full list, so these aren't re-flagged by a future session. | Preamble transcribed from `page_0162.png` and prepended to the `"5.1"` key in all four language files. 5.7/5.8/5.9 restructured across all four languages to match the standard merge-note convention. ~30 KN-only typo fixes applied directly in `bannanje_kn.js`. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. | 2026-08-29 |
| 6 | All 3 flagged items checked (6.30, 6.32, 6.37 — all `screenshot_patch`/`auto_extracted`); all 3 had genuine character-level corruption (see next columns) | Full page-by-page sweep, all 35 pages (`page_0191.png`–`page_0226.png`), every verse 6.1–6.47 checked directly against the page images; whole-chapter regex sweeps run for known patterns (dollar-sign avagraha, em-dash fabrication marker, stray Latin digits, corrupted verse-markers) — the em-dash sweep also run across the *entire book* as a new fabrication-detection heuristic (see next column) | Two structural/content-integrity findings beyond ordinary typos: (1) **6.29 was missing a full paragraph** — a Biblical citation ("If they say 'the Kingdom is in the sky'...") that the book's own commentary quotes when discussing God's omnipresence, absent from the data entirely (E5-class content gap, same family as 11.16/12.4); (2) **6.39's commentary was fabricated** — the padaccheda (word-split Sanskrit) was missing entirely and replaced with a paraphrased "translation" plus a synthesized commentary paragraph in an em-dash analytical style completely foreign to Bannanje's prose (discussing "ಅರ್ಜುನನ ವಿನಮ್ರ ಒಪ್ಪಿಗೆ" with dictionary-style glosses) — same fabrication class as 11.26/12.6/12.7, but caught this time via a new detection heuristic (em-dash usage) rather than a length-ratio outlier. **New E18 pattern**: three separate instances of a stray truncated duplicate of the *next* verse's shloka opening accidentally appended to the *end* of the current verse, cut off mid-word — found at 6.4 (badly corrupted duplicate of 6.5's opening, with `$55`/`*` stray characters and garbled `ಆತ್ಮೈವ`→`ಆತೆ ಟ್ಮವೆ`), 6.23 (duplicate of 6.24's opening), and 6.38 (duplicate of 6.39's opening) — all three removed since the correct complete text already existed in the next verse's own key. Also confirmed the **em-dash fabrication marker found 7 more suspect locations elsewhere in the book** (7.7, 8.22, 10.12, 12.13, 12.18, 16.13, 16.14), including in chapters 12 and 16 previously marked fully audited — flagged for a dedicated follow-up pass, not yet verified or fixed. Beyond these, ~45 ordinary character-level KN-only fixes spread across nearly every verse in the chapter (E1-E3 pattern classes: dropped/swapped conjuncts including two recurrences of ಯಶ→ಯತ and ಸುಪ್ಪಪ್ರಜ್ಞೆ→ಸುಪ್ತಪ್ರಜ್ಞೆ, corrupted avagraha `$`→`ಽ` at 6.32/6.12, corrupted verse-marker `1೩೭॥`→`॥೩೭॥` at 6.37, a corrupted ellipsis at 6.42, many stray-space word breaks, several stray periods). Chapter-opening preamble (present since 6.1's key) confirmed already correct, no gap there — unlike chapters 1/2/4/5. Several plausible-looking spellings were checked and confirmed as genuine page artifacts, not bugs (e.g. `ನಿಷ್ಕ್ರೀಯ`/`ಪ್ರಕ್ರೀಯೆ`'s long-ī spelling recurs consistently in this book's print, distinct from the ch.4-documented pattern; `ಪ್ರಮಾದಿ ಬಲ ವತ್` in 6.34's padaccheda differs from the compressed śloka's `ಪ್ರಮಾಥಿ ಬಲವದ್` but matches the page precisely — a book-internal inconsistency, not a data bug; `ಪ್ರಹ್ಲಾದದನ`, `ವಾತವರಣ`, `ಇಪತ್ನಾಲ್ಕು`, `ಪಡೆಯತ್ತಾನೆ`, `ಹಂದುವುದಿಲ್ಲ` all confirmed to match the page exactly despite looking like typos). | 57 fixes applied (1 restored missing paragraph, 1 fabricated-content replacement, 3 stray-fragment removals, ~52 character/spacing-level fixes), all in `bannanje_kn.js`. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. See `FUTURE_AGENT_GUIDELINES.md` §2E for the new E18 stray-fragment pattern and the fabrication-detection heuristic. | 2026-08-31 |
| 7 | Only 7.7 flagged (em-dash fabrication-marker hit from the ch.6-session's book-wide sweep); checked and confirmed a false positive — genuine punctuation-drift/typo fix already applied in an earlier session, re-verified correct this session | Full page-by-page sweep, all 37 pages (`page_0227.png`–`page_0263.png`), every verse 7.1–7.30 checked directly against the page images, including the very long 7.8 (Om/akshara-prakriti exposition, spans pages 233–238) and 7.29 (Brahma/bali-chakravarti exposition, spans pages 260–263) traced end-to-end; ran the E1/E3 whole-chapter regex sweep (decoded `\uXXXX` first) after fixing — zero hits on vakra/vaktra, ಎಲ್ದೆಡೆ, ಅದ್ಳು, ಕರ್ತ್ಯತ್ವ, ನಿಷ್ಕ್ರೀಯ, ಪಕ್ಚ, em-dash, dollar-sign avagraha; a final targeted sweep afterward caught one more stray `ಸ;` artifact at 7.4 that the page-by-page pass had missed | Confirmed the missing-chapter-opening-preamble gap class (E8) recurs a fifth time: a ~230-word essay (page 227, before 7.1's own śloka) introducing the Gita's two "shatkas" and previewing chapter 7's themes was absent from all four language files (HI had only a short unrelated substitute paragraph, not a partial version of this essay). Also confirmed the known **ಪಕ್ವ→ಪಕ್ಚ** pattern (E16, previously flagged from ch.5 as present here) at both 7.15 and 7.25. One instance of the documented avagraha-misread-as-`$` pattern at 7.28 (`ಪಾಪೋ$ಹಂ`→`ಪಾಪೋಽಹಂ`, matching the E14-family pattern from ch.6/14). Beyond these, ~40 ordinary character/spacing-level KN-only fixes spread across nearly every verse: dropped/swapped conjuncts (ನಿಷ್ಠನ್ನ→ನಿಷ್ಪನ್ನ, ಕೃತ್ಸಸ್ಯ→ಕೃತ್ಸ್ನಸ್ಯ, ದುಷ್ಟೃತಿಗಳು→ದುಷ್ಕೃತಿಗಳು, ಉದ್ಭರಿಸು→ಉದ್ಧರಿಸು among others); a corrupted Om-glyph rendered as `ತೌ` fixed to `ॐ` at 7.8; two stray-digit-"6" insertions inside otherwise-correct words at 7.8; a bracket corrupted to a stray digit `1` at 7.9; corrupted song lyrics in 7.15's Haridasa-sahitya quotation (`ಕತ್ವಸತ್ವರು`/missing `ರ`→`ಸತ್ವಸತ್ವರು`/`ರಜ ಸತ್ವಾಧಿಕಾರಿಗಳು`) plus a spurious stanza-marker and stray pipe; a fully spurious garbage block of stray characters (`ದ / ೦0 / ದ / ೦0 / . ೫ 8೩`) sitting mid-paragraph in 7.12 with no counterpart anywhere on the source page, removed outright; and a very high concentration of stray/missing mid-word spaces and extraneous/missing periods, especially dense in 7.16, 7.18, 7.27, and 7.29. Several plausible-looking oddities were checked and confirmed as genuine page/book artifacts, not bugs, so they aren't re-flagged by a future session: the Mundaka Upanishad 3.2.4 citation's unusual spellings in 7.11 (`ಏತೈರುಪಾಯ್ಕೆರ್ಯತತೇ` etc., matches the page exactly); the unclosed parenthesis after `ಮಾನಿನಿ(ಶ್ರೀ ಲಕ್ಷ್ಮಿಯೂ` in 7.14; `ಆಸೂಹೆ` (for ಅಸೂಯೆ) in 7.21; `ಸಾವಿರದ` and the doubled `ತಿಳಿದಿದಿದ್ದೇನೆ` in 7.25/7.26; `ಪ್ರರಾಬ್ಧ` in 7.28; and `ಬ್ರಹ್ಮ-ಕರ್ಮ-ಅಧಿಆತ್ಮ` plus `ಇದರ ವಿಸ್ತಾರವಾದ` in 7.29/7.30. | Preamble transcribed from `page_0227.png` and prepended to the `"7.1"` key in all four language files (KN transcribed from the page; EN translated closely; DEV composed as condensed independent Sanskrit prose per house style; HI's short substitute paragraph replaced with a fuller translation matching the KN essay's structure). ~44 KN-only typo/gap fixes applied directly in `bannanje_kn.js` with assertion-guarded search-and-replace. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. | 2026-09-02 |
| 8–10 | Ch.8: **In progress**, started 2026-09-03 — see next columns. Ch.9-10: Not started | Ch.8: pages 265-266 done (verses 8.1-8.3) of 20 pages (`page_0265.png`-`page_0284.png`, 28 verses). Ch.9-10: Not started | Ch.8 so far: no chapter-opening preamble gap (page 265 goes straight into 8.1's śloka, matching the ch.3/ch.6 pattern, not ch.1/2/4/5/7's). 8.22's known fabrication (E19, already fixed in the 2026-08-31 follow-up pass) reconfirmed still correctly fixed in current data. 5 small character/punctuation-level fixes found so far in 8.1-8.3, all confirmed against page images (see fixes column). | 8.1: 3 stray periods removed + mismatched quote-mark pair fixed (`"..."`→`'...'`). 8.2: ಜ್ಟೇಯಃ→ಜ್ಞೇಯಃ (character confusion), mismatched quote-mark pair fixed, stray mid-word space removed (ನಿನ್ನ ನ್ನು→ನಿನ್ನನ್ನು). 8.3: ಸಂಜ್ಞೆತಃ→ಸಂಜ್ಞಿತಃ (vowel-sign confusion, confirmed via zoomed crop of `page_0266.png`). All in `bannanje_kn.js`. All four files validated to parse (701 keys each), bundle rebuilt via `build-bundle.py`. **Remainder of chapter 8 (pages 267-284, verses 8.3 cont.-8.28) and all of chapters 9-10 still need the same page-by-page sweep — pick up here next session.** | 2026-09-03 (partial) |

**Note (2026-08-31, post-chapter-6 session):** a targeted follow-up pass fixed 6 fabricated-content bugs found via the E19 em-dash heuristic in chapters 7, 8, 10, 12 (×2), and 16 (×2) — see `FUTURE_AGENT_GUIDELINES.md` §2E E19 for full detail. These were point-fixes only, not full chapter audits; chapters 7, 8, 10, and 16 (and the rest of 12 beyond the two fixed keys) still need their own complete page-by-page sweep per this table's methodology before being marked done.

**Key takeaway from the chapter-11 sweep:** length-ratio heuristics and "does it read as plausible, well-formed prose" checks are both insufficient on their own — 11.26's fabricated paragraph was well-written and not a length outlier, and 11.46's genuine gap had previously been signed off as a "known, low-priority, unfixable" source truncation without the next page ever actually being checked. Direct page-image vision-verification, applied to every verse rather than a sampled subset, is what caught both. This raises the question of whether other chapters' "known debts" (3.42/4.42/6.47's spillover truncations, 13.33's kṛtsna note, etc.) deserve the same re-check rather than being taken on faith from prior sessions' documentation — not yet done, flagged here for whoever picks this up next.

**Follow-up (2026-08-06):** this content-gap sweep was itself followed by a much deeper character-level audit of all 55 verses in chapter 11 (six sessions, `CH11_CHAR_AUDIT_*.md`), which found ~60 further transcription-level errors this content-gap pass's methods could not have caught (single-word swaps, stray spaces, punctuation corruption, systemic conjunct confusions). The consolidated, reusable error taxonomy from that deeper pass now lives in `FUTURE_AGENT_GUIDELINES.md` section 2E — read it before auditing another chapter, whether via this content-gap method or the character-level one.

**Addendum (2026-08-10, found independently via a different route):** the
same 11.26 fabrication this table documents was also caught this same day
via a Vinayak-reported discrepancy in the live app's verse-header display,
which led to discovering a *second*, entirely separate bug in the same
verse: `FULL_GITA['11.26']` (see the new Phase 3 section above) held
corrupted, ungrammatical Sanskrit in its own right, independent of the
`bannanje_kn.js` fabrication this sweep fixed. Both fixes landed
independently and merged cleanly (the `bannanje_kn.js` side matched
byte-for-byte with this sweep's own fix). **Phase 3 (auditing `FULL_GITA`
against `bannanje_kn.js`) has not been run against chapters 12-16 despite
their Phase 1/2 sweeps being complete** — worth doing, since Phase 1/2's
page-verification work centered on `bannanje_kn.js` and would not have
caught a `FULL_GITA`-only corruption like this one.

**Addendum (2026-08-24, found independently via a different route):**
Vinayak spotted a further gap in chapter 11, despite this chapter's full
Phase 1/2 sweep and the separate six-session character-level audit both
having been marked complete. **11.49** was missing its closing sentence
of commentary — verified against `page_0392.png`, the book continues past
"...ಬಗೆಯೊಳಕ್ಕರೆ ತುಂಬಿ." with one further sentence
("ಶತ್ರು ಸಂಹಾರಕವಾದ ನನ್ನ ಈ ರೂಪವನ್ನು ಕಂಡು ಗಾಬರಿಯಾಗಬೇಡ. ನಿನ್ನೆಲ್ಲಾ ಭಯವನ್ನು
ಬಿಟ್ಟು ನೋಡು ನಿನಗಿಷ್ಟವಾದ ನನ್ನ ಚತುರ್ಭುಜ ರೂಪವನ್ನು ಎನ್ನುತ್ತಾನೆ ಕೃಷ್ಣ.") that
was absent from `bannanje_kn.js` (and, since it was never in the KN
source, from EN/DEV/HI too). Fixed in all four files and freshly
translated into EN/DEV/HI; bundle rebuilt. This reinforces the note above
about re-checking "complete" chapters — even a full character-level audit
did not catch a trailing-sentence omission at a verse boundary.

**Addendum (2026-08-24, second gap found the same session -- CORRECTED):**
a further chapter-11 issue was spotted via a Vinayak-reported screenshot,
and the first attempt at fixing it was wrong -- recorded here for the
record. **11.51** in all four language files ended with a truncated
fragment of the *next* verse's raw śloka (KN: "...ದೇವಾ ಅಪ್ಯ", cut off
mid-word). The first fix (since reverted) completed that fragment in
place, on the mistaken assumption that it was book structure being
preserved (by loose analogy with the legitimate 11.52-to-11.53 merge
convention). Vinayak caught this: 11.51 is a complete, standalone verse
(Arjuna's speech) that already has its own full commentary ending at
"...ಸಂಬೋಧನೆಯಲ್ಲಿದೆ." -- it is not part of any merge pair, so nothing
from the next verse's śloka (which is 11.52's own content, already
present there correctly with its own merge-note deferring to 11.53)
belongs in 11.51's entry at all. The actual fix: removed the leaked
fragment from 11.51 in all four languages entirely, closing each at
Arjuna's own commentary; confirmed 11.52 was never touched and already
stood correctly on its own. Bundle rebuilt.

Lesson for future sessions: when a chunk of text at a verse boundary
looks structurally odd, check whether the *content itself* (which
verse's śloka is it?) belongs under that key before assuming a
formatting quirk needs completing rather than removing.

**Addendum (2026-08-24, cross-verse leak sweep — full session summary):**
following the 11.51 correction above, Vinayak asked for a systematic
search for the same bug class across all 18 chapters. Built a scanner
(`scan_verse_leaks.py`, not committed to this repo — lived in the
session's scratch space) comparing the tail of each verse's stored text
against the head of the next verse's, across all 4 language files,
flagging overlaps that lack a legitimate merge-note marker. Combined
with the 4 previously-flagged (and wrongly dismissed) cases from
`FUTURE_AGENT_GUIDELINES.md`, this surfaced **8 confirmed leak
boundaries**, all verified against page images and fixed:

4.1→4.2, 6.1→6.2, 6.6→6.7, 6.29→6.30, 11.31→11.32, 11.51→11.52 (already
fixed earlier in this session), 13.14→13.15, 14.21→14.22, 17.8→17.9.

Full methodology, the false-positive shapes ruled out, and the exact
list are now written up as §2E.E9 in `FUTURE_AGENT_GUIDELINES.md` —
read that before any future sweep of this kind. Three previously-flagged
cases (3.42, 4.42, 6.47 — all chapter-ending verses) were checked and
found already clean in all four languages, so no fix was needed there.

**Not yet done, left for a future session:**
- A decision from Vinayak on the 13.34/13.35 duplicate bracketed-note
  issue (see E9 in `FUTURE_AGENT_GUIDELINES.md` for detail) — not a leak,
  but a duplicate identical note across two keys, not yet resolved.
- The scanner script itself was not committed to the repo; recreate from
  the E9 writeup's description if a future sweep is wanted (tail/head
  overlap via `difflib.SequenceMatcher`, filtered by absence of
  merge-note marker text, cross-checked against `FULL_GITA` in
  `viewer-src.html` for ground-truth verse boundaries).

**Addendum (2026-08-24, cross-chapter boundary sweep):** ran the same
tail/head overlap scan on all 17 chapter-to-chapter boundaries (last
verse of chapter N vs. first verse of N+1), across all 4 languages —
68 checks total. Found exactly one candidate (EN, 17.28→18.1, 24-char
overlap) which was a false positive: 17.28's closing colophon ("Thus
ends the seventeenth chapter") coincidentally shares words with 18.1's
chapter-intro header ("In the previous seventeen chapters..."). No
genuine leaks found at any chapter boundary in any language. Combined
with the within-chapter sweep above, this closes out the E9 leak-pattern
search for the entire book as originally scoped — the only open item is
the 13.34/13.35 duplicate-note decision noted above.

## Session startup checklist for whoever picks this up

1. Read this file in full.
2. Read `EN_RETRANSLATION_PLAN.md` too — check current chapter-completion
   state, since translation work may have continued in the meantime.
3. `git log --oneline -10` to see what's actually landed vs. what these
   plan files claim (plan files can go stale — verify against real state,
   per this project's established practice).
4. Decide Phase 1 vs Phase 2 vs a specific chapter based on what Vinayak
   asks for that session; this file doesn't mandate an order beyond
   "Phase 1 is cheap, do it first if scope is otherwise unconstrained."
5. Update the tracking table above as you go, and update this file's
   own "Status" line at the top once work begins.
