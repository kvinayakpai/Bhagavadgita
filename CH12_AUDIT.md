# Chapter 12 Audit — 2026-08-09

Requested by Vinayak per the updated `FUTURE_AGENT_GUIDELINES.md` section 2E
(the consolidated error taxonomy from the chapter-11 audit series). Applied
the same systemic-pattern regex scans plus a full read-through of all 20
verses, then vision-verified suspects against `gita_pages/page_0396.png`
through `page_0400.png` so far.

Prior documentation (`EN_RETRANSLATION_PLAN.md`) had logged chapter 12 as
complete with "5 small OCR fixes" — this session's read-through immediately
surfaced far more than that, echoing the same lesson from chapter 11: a
prior "complete" status does not mean a chapter is error-free by this
project's more thorough standards.

## Systemic-pattern scan (section 2E patterns)

Ran regex scans for vakra/vaktra, bhu/lu, elledeya/eldedeya, sakshatmara,
doubled parens, and stray Latin/ASCII characters across all of chapter 12.
**No hits of the known systemic patterns.** The digit/Latin-character hits
found were all legitimate (a numbered 1–15 list, and embedded English terms
"Reputation"→now "Name and fame", "Tension", "Movable and immovable").

## MAJOR FINDING: 12.3/12.4 verse-content corruption (fixed)

Verses 12.3 and 12.4 are a genuine merge pair in the book — both ślokas
printed together on `page_0399.png`, one shared padaccheda, one continuous
two-paragraph commentary running onto `page_0400.png`. The data had this
badly corrupted in a way distinct from anything found in the chapter-11
series:

- **Key "12.3"** held verse 3's śloka plus only the *first half* of the
  shared commentary, cutting off mid-discussion after "...worship of the
  unmanifest, imperishable one is difficult."
- **Key "12.4"** held **no śloka at all**. Instead it contained a "fifteen
  fences" discourse (quoting the Praśna Upaniṣad) that vision-verification
  against `page_0396.png`–`page_0397.png` confirmed is genuine book content
  — but it is **chapter-opening introductory material that precedes verse 1
  entirely**, not commentary on verse 4. It has nothing to do with verse 4's
  actual subject matter (restraining the senses, seeing all beings with
  equanimity).

This means verse 4's real content — its śloka, its half of the padaccheda,
and the back half of the shared commentary (the epithet explanations for
Akṣarā/Anirdeśyā/Avyaktā, Lakṣmī's cosmic role, and the Lalitā Sahasranāma
example) — was **entirely absent** from the data, in any of the four
language files, prior to this session.

**Fix applied, across all four files (KN/EN/DEV/HI):**
1. Rebuilt "12.3" as a proper merge-note pointing to 12.4, matching the
   established convention from the chapter-11 series (e.g. 8.12/8.13,
   11.10/11.11).
2. Rebuilt "12.4" with the complete, correct content: both ślokas' padaccheda
   plus the full two-paragraph commentary, restoring the previously-missing
   second half. For EN, DEV, and HI, the missing second half had to be
   freshly translated/composed (English prose in the book's established
   style; DEV as condensed independent Sanskrit; HI as fluent Hindi
   mirroring KN) since it had never existed in any translation before.
3. Relocated the "fifteen fences" chapter-opening material — genuine content
   that must not be deleted — by prepending it to key "12.1" in all four
   files, matching where it actually appears in the book's reading order
   (before Arjuna's question). No existing project convention has a
   dedicated "chapter intro, not tied to a verse" key; prepending to 12.1
   was the most conservative choice given the current data structure.

**Also fixed in the process:**
- KN 12.4's "(Reputation)" for item 15 of the fences list was itself wrong
  — the page clearly prints "**(Name and fame)**" in bold. The historical
  `GARBLED_TERMS_FIXPLAN.md` fix for this garbled OCR term had paraphrased
  rather than transcribed the book's actual English text. Fixed in KN.
  (EN/DEV/HI don't carry a literal bracketed term here — EN independently
  translates ಕೀರ್ತಿ as "reputation" in lowercase prose, consistent with how
  this project's translators have handled other embedded English terms
  elsewhere, e.g. "Tension" in 12.15 — so left as is.)
- A fabricated ellipsis with no basis on the page, found identically in
  three of the four files (KN, EN, HI — not DEV, which doesn't carry this
  sentence in translatable form), at "...need be a devotee of the Lord..."
  — fixed to a plain period in all three.
- Two smaller KN fixes in 12.1: a missing final vowel
  (`ವಿಗ್ರಹವಿರುತ್ತಿತ್ತ`→`ವಿಗ್ರಹವಿರುತ್ತಿತ್ತು`) and a missing space
  (`ಧ್ಯಾನಕ್ಕೆಕುಳಿತರೆ`→`ಧ್ಯಾನಕ್ಕೆ ಕುಳಿತರೆ`).
- One smaller KN fix in 12.3/12.4's padaccheda: `ಪರತತ್ತ್ವ` had an extra
  `ಪರ` prefix not present on the page — corrected to plain `ತತ್ತ್ವ`. The raw
  śloka line for 12.3 was also corrected from a semi-split, non-standard
  rendering (`ಯೇತು ಅಕ್ಷರಮ್ ಅನಿರ್ದೇಶ್ಯಮ್...`) to the page's actual sandhi'd
  printed form (`ಯೇ ತ್ವಕ್ಷರಮನಿರ್ದೇಶ್ಯಮವ್ಯಕ್ತಂ...`).

## False leads correctly ruled out

- "ಕಾಸಿ" vs "ಹಾಕಿ" (12.1) — misread at low zoom; "ಹಾಕಿ" was already correct.
- "ಮಾತ" vs "ಮಾತೆ" (12.1) — same, misread at low zoom; "ಮಾತೆ" was already
  correct.

## Smaller fixes verified and applied (12.5)

- `ದೇಹವದ್ಳಿಃ` (nonsensical) → `ದೇಹವದ್ಭಿಃ` (dehavadbhiḥ, "by those embodied")
  — same ಭ→ಳ conjunct-confusion class as before.
- Wrong quote-mark pairing: `"ಅಧಿಕ ತರ ಕ್ಲೇಶಃ:` (curly open-quote + colon) →
  `'ಅಧಿಕ ತರ ಕ್ಲೇಶಃ'` (matching single quotes, confirmed on the page).

## Remaining verses (12.5, 12.8, 12.12, 12.14, 12.15, 12.19, 12.20) — completed

All remaining flagged suspects were verified against `page_0400.png`–
`page_0411.png` and fixed. This closes out full character-level coverage of
all 20 verses in chapter 12.

**12.5**: `ದೇಹವದ್ಳಿಃ` → `ದೇಹವದ್ಭಿಃ` (another ಭ→ಳ conjunct confusion, same
class as the chapter-11 pattern); mismatched quote-mark pair fixed to match
the page's single quotes.

**12.8**: `ಆಧತ್ಸೃ` → `ಆಧತ್ಸ್ವ` (wrong ending); `ಲಕ್ಷ್ಮಿಸಮೇತ` → `ಲಕ್ಷ್ಮೀಸಮೇತ`
(vowel length); another fabricated ellipsis with no basis on the page,
removed.

**12.12**: A genuinely missing embedded English term — the page prints
"**(Fundamental requirement)**" in bold; entirely absent from the stored
text. Restored, along with a stray period breaking the same sentence, and
`ಮೋಶ್ಷಪ್ರಾಪ್ತಿ` → `ಮೋಕ್ಷಪ್ರಾಪ್ತಿ`.

**12.14**: Eight fixes in one verse — a fabricated ellipsis; a missing
embedded term "**(Detached attachment)**" plus the typo it was attached to
(`ನಿರ್ಲಿಪ್ರತೆ` → `ನಿರ್ಲಿಪ್ತ`); a stray period; two stray-space word-splits
(`ಇನ್ನೊ ಬ್ಬರ`, `ಯೋಗಿ ಅನ್ನು ವುದಕ್ಕೆ`, `ದೃಢನಿಶ್ಚ ಯದಿಂದ`); and two
`ಅತೃಪ್ಪಿ` → `ಅತೃಪ್ತಿ` spelling fixes. One item (`ಇರವುದನ್ನು`) was
double-checked at high zoom and found to already match the page exactly —
a book-internal spelling quirk, not a transcription error — and correctly
left unchanged.

**12.15**: The suspected garbled śloka line was real: `ಲೋಕಾತಶ್‌ ನ
ಉದ್ವಿಜತೇಚಯಃ` (extra `ಶ್`, two words wrongly merged) → `ಲೋಕಾತ್‌ ನ ಉದ್ವಿಜತೇ
ಚ ಯಃ`, confirmed against the padaccheda on `page_0406.png`. Also fixed a
doubled period.

**12.19**: Six fixes — a missing open-parenthesis (`ಒಡನಾಟಮಾಡುಮೈತ್ರಿ)` →
`ಒಡನಾಟಮಾಡು(ಮೈತ್ರಿ)`); three stray-space word-splits around `ಇನ್ನೊಬ್ಬರು`;
and **two more wrong/missing embedded English terms**: a missing
"**(Instinct)**" (page has it after `ಸಹಜಪ್ರವೃತ್ತಿ`, entirely absent from
storage), and — same bug class as the "(Reputation)"→"(Name and fame)" fix
in 12.4 — `(Movable and immovable)` was simply the **wrong term**; the page
clearly prints "**(Making own property)**" at that location instead.

**12.20**: `ಈ ಅಮೃತ(ಮೋಕ್ಬಸಾಧನಾ` (garbled letter, missing closing
parenthesis) → `ಈ ಅಮೃತ(ಮೋಕ್ಷ)ಸಾಧನಾ`, confirmed against `page_0411.png`.

**Also noted, not acted on**: a duplicate instance of the `ಇನ್ನೊ ಬ್ಬರ`
stray-space typo pattern exists in chapter 18 (verse 18.63), and one exists
in chapter 6 (verse 6.9) — both outside this session's scope, flagged here
for whoever next touches those chapters.

## Translation-layer check (this batch)

Checked EN for every embedded-English-term case in this batch (12.12,
12.14, 12.19). In every case, EN already conveys the underlying meaning in
natural prose ("a fundamental necessity," "detachment," "natural to human
beings," "movable and immovable possessions") without needing a literal
bracket match — consistent with the precedent already established for
12.4's "(Reputation)"/"(Name and fame)" case. No EN/DEV/HI changes made for
this batch.

## Chapter 12 status: COMPLETE

All 20 verses have now been read character-by-character against the source
page images (`page_0396.png`–`page_0411.png`) and cross-checked against
EN/DEV/HI wherever a fix was made. Summary of everything found in chapter
12 across this whole session:

- **1 major structural bug** (12.3/12.4: verse 4's content entirely missing,
  replaced by misplaced chapter-intro material, across all four languages)
- **1 fabrication** (12.6/12.7: invented commentary matching the 11.26
  pattern exactly, across all four languages)
- **3 wrong/missing embedded English terms** (12.4's "(Reputation)" should
  be "(Name and fame)"; 12.12 missing "(Fundamental requirement)"; 12.14
  missing "(Detached attachment)"; 12.19 missing "(Instinct)" and wrong
  "(Movable and immovable)" instead of "(Making own property)" — six
  distinct term-level errors in total)
- Roughly 25 smaller KN fixes: conjunct confusions, stray spaces, stray
  periods, fabricated ellipses, missing/mismatched punctuation, and one
  garbled śloka line
- 2 false leads correctly investigated and ruled out

viewer.html rebuilt via build-bundle.py after all fixes above.

## SECOND FABRICATION FOUND: 12.6/12.7 (fixed)

Same pattern as 11.26 in chapter 11: plausible, well-formed content that
does not exist anywhere on the actual page. Verses 12.6 and 12.7 are also a
genuine merge pair (confirmed via `page_0401.png` — both ślokas printed
together, one shared padaccheda). But key "12.6" held a Kannada paraphrase
plus a phrase-by-phrase Sanskrit gloss ("ಇದು ಸಗುಣ ಭಕ್ತಿಯ ಸ್ವರೂಪ. 'ಸರ್ವಾಣಿ
ಕರ್ಮಾಣಿ ಮಯಿ ಸಂನ್ಯಸ್ಯ' — ..." etc.) that does not appear anywhere near this
location on the page — the page goes directly from the end of verse 5's
commentary to the raw śloka block for verses 6 and 7, with no such gloss.
Confirmed present in **all four languages** (KN, EN, DEV, HI all had their
own version of this fabricated explanatory paragraph, meaning it predates
even the earliest translation pass rather than being a newer, single-file
corruption).

Also found: key "12.7" was missing the *first half* of the combined
padaccheda (verse 6's own word-split portion, "ಯೇ ತು ಸರ್ವಾಣಿ ಕರ್ಮಾಣಿ ಮಯಿ
ಸಂನ್ಯಸ್ಯ ಮತ್ ಪರಾಃ। ಅನನ್ಯೇನ ಏವ ಯೋಗೇನ ಮಾಮ್ ಧ್ಯಾಯಂತಃ ಉಪಾಸತೇ") — it jumped
straight to verse 7's portion, same class of gap as the original 12.3/12.4
bug though smaller in scope.

**Fix applied, across all four files:** rebuilt "12.6" as a proper
merge-note pointing to 12.7 (removing the fabricated content entirely), and
prepended the missing verse-6 padaccheda portion to "12.7". Also fixed a
genuine typo caught in the same pass: KN's `ನನ್ನ ಲ್ದೇ` (stray space) →
`ನನ್ನಲ್ಲೇ`.

One thing worth flagging about the fabrication finding specifically: this is
now the **second** confirmed instance of this exact bug class across the
whole project (chapter 11's 11.26 was the first). Both instances shared the
same signature — a genuine merge-verse pair where the *first* key held
invented content instead of a proper merge-note. That's a strong enough
pattern that it may be worth specifically checking every other merge-verse
pair already in the data (in any chapter) for the same failure mode, rather
than only catching it when a chapter gets a full audit.

viewer.html rebuilt via build-bundle.py after the 12.6/12.7 fixes.
