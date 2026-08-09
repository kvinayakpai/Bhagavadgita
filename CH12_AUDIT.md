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

## Not yet done in this session

A first read-through of all 20 verses' raw KN text (before vision-checking)
flagged further suspects that have **not yet been verified against the
pages**: 12.5 (`ದೇಹವದ್ಳಿಃ`, likely another ಭ→ಳ corruption), 12.7
(`ನನ್ನ ಲ್ದೇ`), 12.8 (`ಆಧತ್ಸೃ`), 12.12 (`ಮೋಶ್ಷಪ್ರಾಪ್ತಿ`, a stray mid-phrase
period), 12.14 (`ನಿರ್ಲಿಪ್ರತೆ`, `ಇನ್ನೊ ಬ್ಬರ`, `ಅತೃಪ್ಪಿ` ×2,
`ಯೋಗಿ ಅನ್ನು ವುದಕ್ಕೆ`, `ದೃಢನಿಶ್ಚ ಯದಿಂದ`, `ಇರವುದನ್ನು`), 12.15 (a garbled
raw śloka line, `ಲೋಕಾತಶ್ ನ ಉದ್ವಿಜತೇಚಯಃ`), 12.19 (multiple stray-period and
stray-space instances, `ಒಡನಾಟಮಾಡುಮೈತ್ರಿ)`), and 12.20 (`ಮೋಕ್ಬಸಾಧನಾ`). These
all need the same page-comparison treatment as 12.1–12.4 before being
trusted as real fixes — none have been applied yet.

viewer.html rebuilt via build-bundle.py after the 12.1–12.4 fixes above.
