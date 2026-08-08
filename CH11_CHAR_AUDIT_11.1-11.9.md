# Character-Level Transcription Audit: 11.1–11.9 — 2026-08-06

Continuation of the same method used on 11.9–11.30 (see the prior
`CH11_CHAR_AUDIT_*.md` files), closing out the beginning of the chapter.
Tight crops of `page_0368.png`–`page_0372.png` at 1.8–7x zoom, read
character-by-character, diffed word-for-word against all four language
files. 11.9 itself was already fully character-audited in the first session
of this series — not repeated here.

## Findings — KN (3 confirmed errors, all fixed)

| Verse | Error | Correction | Notes |
|---|---|---|---|
| 11.1 | `ಕೊಟ್ಟ ನೇ` (stray space breaking the word) | `ಕೊಟ್ಟನೇ` ("gave/imparted") | Confirmed via zoomed crop — the page has no space |
| 11.2 | `ಶ್ರುತ್‌ೌ` | `ಶ್ರುತೌ` (śrutau, "heard") | Not a wrong-letter substitution — the raw stored string literally contained a virāma + zero-width-non-joiner + vowel sign glued together (`\u0ccd\u200c\u0ccc`), a genuine encoding-level corruption rather than a misread character |
| 11.5 | `ಹೊಳೆಯುವಂಥವ)` (stray unmatched closing parenthesis) | `ಹೊಳೆಯುವಂಥವು` | The page clearly ends the word in ವು, not with a stray `)` |

## Flagged — NOT fixed, genuine ambiguity

**11.3**: standard Sanskrit for this verse expects "ಆತ್ಥ" (āttha, "you have
said") at this position; the currently-stored text has "ಆತ್ಮ" (ātma,
"self"), which doesn't fit the grammar well. But the page itself, at
multiple zoom levels, rendered as plain "ಆತ" with a visible gap before the
next word — not clearly either "ಆತ್ಥ" or "ಆತ್ಮ". Given the genuine visual
ambiguity (unlike the clean, unambiguous conjunct confusions found
elsewhere), left unedited and flagged here for Vinayak's manual check rather
than force a guess on scripture text.

## False leads investigated and correctly ruled out

- **11.6**: "ವಾಯರ್ವಾವ ಭರತಃ" initially looked like it should be "ವಾಯುರ್ವಾವ"
  (vāyur vāva, standard Aitareya Brāhmaṇa phrasing). Zoomed to 7x — the page
  consistently and clearly prints "ವಾಯರ್ವಾವ" with no ು vowel sign anywhere
  near ಯ. This is the book's own spelling as printed, not a transcription
  error; left unchanged. A useful reminder that "doesn't match the version I
  expect from general knowledge" is not the same test as "doesn't match what
  the page shows" — the second is what actually governs a fix.

## Confirmed clean (matches source exactly, character-checked)

11.1 (rest of commentary), 11.2 (rest of commentary), 11.3 (rest of
commentary, aside from the one flagged word), 11.4 (in full — padaccheda and
both commentary paragraphs), 11.5 (in full, aside from the one fix), 11.6
(in full, aside from the spillover already fixed in an earlier session), 11.7
(re-confirmed; was already checked in the first session), 11.8 (in full).

## Translation-layer check

Checked EN, DEV, and HI for 11.2 specifically (the encoding-glitch verse,
the one most likely to have propagated a rendering problem). All three
already correct — no fixes needed.

## Status

11.1–11.9 (9 verses) now have full character-level coverage. 3 KN fixes
applied and validated; 1 verse (11.3) has a flagged-but-unresolved word
requiring manual judgment; all else confirmed clean. `viewer.html` rebuilt.
Committed and pushed.

**Cumulative character-level coverage: 11.1–11.30 (30 of 55 verses in
chapter 11) — the entire first 30 verses of the chapter.**
**Not yet done: 11.31–11.55 (25 verses).**
