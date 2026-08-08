# Character-Level Transcription Audit: 11.31–11.40 — 2026-08-06

Continuation of the same method used on 11.1–11.30 (see the prior
`CH11_CHAR_AUDIT_*.md` files). Tight crops of `page_0382.png`–`page_0388.png`
at 1.8–6x zoom, read character-by-character, diffed word-for-word against
all four language files.

## Findings — KN (12 confirmed errors, all fixed)

| Verse | Error | Correction |
|---|---|---|
| 11.32 | `ಇವರೆಲ್ಲರೂ((ಎರಡೂ` — doubled opening parenthesis | `ಇವರೆಲ್ಲರೂ(ಎರಡೂ` |
| 11.33 | `ಕೊಂಡದಾಗಿದೆ` (doesn't parse) | `ಕೊಂದಾಗಿದೆ` ("has been killed") — confirmed against the identical phrase used correctly later in the same verse, then verified on the page |
| 11.34 | `ಜಹಿಮಾ ವ್ಯಥಿಷ್ಠಾಃ ಯುದ್ಧ ಸ್ವ ... ಸಪತ್ನಾ ನ್‌` — three word-boundary errors stacked in one padaccheda line (wrong merge, wrong split with a dropped conjunct, stray space) | `ಜಹಿ ಮಾ ವ್ಯಥಿಷ್ಠಾಃ ಯುದ್ಧ್ಯಸ್ವ ... ಸಪತ್ನಾನ್‌` |
| 11.34 | `ಆಯುಸ್ಸ ನ್ನು` (stray space) | `ಆಯುಸ್ಸನ್ನು` |
| 11.35 | A stray, meaningless `ಕಛ` fragment prepended before the verse even starts | Removed |
| 11.35 | `ಗದ್ಲಿತನಾಗಿ` (nonsensical) | `ಗದ್ಗಿತನಾಗಿ` ("with a choked/faltering voice") |
| 11.37 | `ನಿನ್ನ ನ್ನು` (stray space) | `ನಿನ್ನನ್ನು` |
| 11.37 | `ತತ್ಸರಮ್‌` (nonsensical) | `ತತ್ಪರಮ್‌` (tat-param, "that which is supreme/beyond" — standard reading of this well-known verse) |
| 11.38 | `ನೀನು. ಆದಿದೇವಃ` — stray mid-sentence period breaking the clause | `ನೀನು ಆದಿದೇವಃ` |
| 11.40 | `ಎಲ್ದೆಡೆ ಇರುವವನೇ` | `ಎಲ್ಲೆಡೆ ಇರುವವನೇ` — recurring typo, see below |
| 11.40 | `ಎಲ್ದೆಡೆ ತುಂಬಿರುವ ನಿನಗೆ` | `ಎಲ್ಲೆಡೆ ತುಂಬಿರುವ ನಿನಗೆ` — same recurring typo, second instance in the same verse |

**11.31 checked in full and found completely clean** (aside from the
already-known, previously-documented harmless spillover fragment at its
end). **11.32's shloka, padaccheda, and full commentary** otherwise clean.
**11.36 was already thoroughly checked in the first audit session of this
series** (including catching a numeral misread there) — not re-audited from
scratch, but its raw content was re-displayed on this pass's page crops and
continues to match.

## Pattern note: ಎಲ್ಲೆಡೆ/ಎಲ್ದೆಡೆ

This is now the **fourth and fifth** instances of this exact typo pattern
(previously found in 11.11 and 11.30). Both new instances in this batch are
in the *same verse* (11.40) — one in the padaccheda, one in the commentary
paragraph immediately after, and notably the commentary sentence containing
the second error also correctly spells "ಎಲ್ಲೆಡೆಯಿಂದ" a few words later,
meaning the same sentence has both a correct and an incorrect instance of
essentially the same word. Given this is now a clearly recurring OCR/
transcription artifact (parallel to the vakra/vaktra pattern already closed
out with a whole-book search), it's a strong candidate for the same
treatment — a dedicated regex sweep for `ಎಲ್ದೆಡೆ` across all chapters —
rather than continuing to catch it verse-by-verse.

## Translation-layer check

Checked EN, DEV, and HI for 11.37 (the "tatparam" verse) and 11.40 (the
"elledde" verse). **All three already correct in every case** — "tat
param"/"तत्परं" and "ananta-vīrya..." lines all render properly, no
propagated errors. No translation-layer fixes needed this round.

## Status

11.31–11.40 (10 verses) now have character-level coverage. 12 KN fixes
applied and validated; all else confirmed clean or previously verified.
`viewer.html` rebuilt. Committed and pushed.

**Cumulative character-level coverage: 11.1–11.40 (40 of 55 verses in
chapter 11).**
**Not yet done: 11.41–11.55 (15 verses — note 11.41, 11.42, 11.46, 11.52,
11.53 were already fixed for other bug classes in earlier sessions but
have not had this specific character-by-character treatment).**
