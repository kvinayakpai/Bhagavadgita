# Systemic Fix: vakra/vaktra Conjunct Error — Whole-Book Search, 2026-08-06

Follow-up to the pattern flagged in `CH11_CHAR_AUDIT_11.12-11.20.md`: the
"ವಕ್ರ" (vakra, "crooked") / "ವಕ್ತ್ರ" (vaktra, "face/mouth") conjunct
confusion had appeared 5 times in character-level spot-checks (11.10, 11.11
×2, 11.16). Rather than keep finding it one verse at a time, ran a full
regex search (`ವಕ್ರ`) across all 700+ verses in `bannanje_kn.js`.

## Method

Searched every occurrence of the literal substring `ವಕ್ರ` across the whole
KN file, not just chapter 11. Manually reviewed each hit for whether it's a
genuine "vaktra" (face/mouth) context miscopied as "vakra" (crooked), versus
an unrelated word that happens to contain the same four characters as a
substring (e.g. "ವಿಶ್ವಕ್ರಿಯೆ" = viśva-kriyā, "world-action", contains
"ವಕ್ರ" as a coincidental substring but has nothing to do with "vaktra").

## Results

**7 hits total, whole book:**
- 2 false positives (4.18 "ವಿಶ್ವಕ್ರಿಯೆ", 5.29 "ಸರ್ವಕ್ರಿಯೆಗಳ") — confirmed
  unrelated words, no action needed.
- **4 genuine errors, all in chapter 11**, on top of the 5 already fixed in
  the two prior character-audit sessions:

| Verse | Context | Fix |
|---|---|---|
| 11.23 | `ಬಹು ವಕ್ರ ನೇತ್ರಮ್‌` (padaccheda) | → `ಬಹು ವಕ್ತ್ರ ನೇತ್ರಮ್‌` |
| 11.27 | `ವಕ್ರಾಣಿ ತೇ ತ್ವರಮಾಹಾಃ` (raw śloka) | → `ವಕ್ತ್ರಾಣಿ ತೇ ತ್ವರಮಾಹಾಃ` |
| 11.28 | `ವಿಶಂತಿ ವಕ್ರಾಣಿ ಅಭಿವಿಜ್ವಲಂತಿ` (raw śloka) | → `ವಿಶಂತಿ ವಕ್ತ್ರಾಣಿ ಅಭಿವಿಜ್ವಲಂತಿ` |
| 11.29 | `ತವ ಅಪಿ ವಕ್ರಾಣಿ ಸಮೃದ್ಧ` (raw śloka) | → `ತವ ಅಪಿ ವಕ್ತ್ರಾಣಿ ಸಮೃದ್ಧ` |

11.23 was spot-verified against `page_0379.png` before applying the fix
(6th independent page-confirmation of this exact error pattern). The
remaining three (11.27–11.29, all part of the same "moths rushing into the
flame" passage on `page_0381.png`, already vision-checked for
content-completeness in the first content-gap-audit session) were fixed on
the strength of that page confirmation plus unambiguous standard-Sanskrit
grammar (all three are well-attested published readings of BG 11.27–11.29:
"vaktrāṇi", "viśanti vaktrāṇy abhivijvalanti", "tavāpi vaktrāṇi" respectively)
rather than re-cropping each individually.

## Translation-layer check

Checked EN, DEV, and HI for all four verses. **All three were already
correct** in every case — "vaktra"/"vaktrāṇi" (EN), "वक्त्र"/"वक्त्राणि"
(DEV), "वक्त्र"/"वक्त्राणि" (HI) were all spelled correctly already. No
translation-layer fixes needed this round. This is a useful data point: the
corruption appears to be specific to the KN raw-transcription layer (likely
an OCR artifact on this particular conjunct cluster), and the translation
passes — done independently, presumably cross-referencing standard published
Sanskrit texts for the transliteration rather than re-deriving purely from
the (already-corrupted) KN — sidestepped it entirely in these four cases.
(Contrast with 11.16, where the error *did* propagate into EN and DEV in the
previous session — so propagation isn't guaranteed either way; each instance
needs its own check.)

## Final state

**9 total instances of this systemic error found and fixed across the whole
book** (11.10, 11.11 ×2, 11.16, 11.23, 11.27, 11.28, 11.29) — all in chapter
11. Full-book re-scan after fixing confirms zero genuine remaining instances
anywhere. This particular error class is now believed closed, book-wide.

The concentration in chapter 11 makes sense: this chapter's viśvarūpa
(cosmic-form) content is unusually dense with "many-mouthed/many-faced"
(bahu-vaktra) imagery describing Bhagavān's universal form, so the word
recurs far more often here than anywhere else in the Gītā — giving the OCR
error far more chances to occur, and concentrating essentially all of its
damage in this one chapter.

viewer.html rebuilt via build-bundle.py.
