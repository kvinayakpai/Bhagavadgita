# Character-Level Transcription Audit: 11.21–11.30 — 2026-08-06

Continuation of the same method used on 11.9–11.20 (see the two prior
`CH11_CHAR_AUDIT_*.md` files), requested by Vinayak as a direct follow-on.
Tight crops of `page_0378.png`–`page_0382.png` at 2–8x zoom, read
character-by-character, diffed word-for-word against all four language files.

Note: 11.23, 11.26, 11.27, 11.28, 11.29 in this range were already fixed in
prior sessions (11.26 for fabrication, the other four for the vakra/vaktra
systemic error) — this pass re-verified those against the page incidentally
(11.29's fix matches the copy of its śloka reprinted at the top of
`page_0382.png`) but focused fresh scrutiny on 11.21, 11.22, 11.24, 11.25,
11.30, which hadn't been character-audited before.

## Findings — KN (8 confirmed errors, all fixed)

| Verse | Error | Correction | Notes |
|---|---|---|---|
| 11.21 | `ಉಕ್ತ್ರಾ` | `ಉಕ್ತ್ವಾ` (uktvā, "having said") | ವ/ರ conjunct confusion |
| 11.21 | `ಸ್ನೋತ್ರಗಳಿಂದ` | `ಸ್ತೋತ್ರಗಳಿಂದ` (stotra, "hymns") | ತ/ನ confusion |
| 11.22 | `ಉಷ್ಕಪಾಃ` | `ಉಷ್ಮಪಾಃ` (uṣmapāḥ, "vapor-drinkers/ancestors") | ಮ/ಕ confusion |
| 11.24 | `ನಭಃಸ್ಟೃಶಮ್` | `ನಭಃಸ್ಪೃಶಮ್` (nabhaḥ-spṛśam, "touching the sky") | ಪ/ಟ confusion |
| 11.24 | `ವ್ಯಾತ್ರ ಆನನಮ್` | `ವ್ಯಾತ್ತ ಆನನಮ್` (vyātta-ānanam, "mouths wide open") | ತ್ತ/ತ್ರ confusion |
| 11.24 | `ಓಟ ಒಳಗೂ` | `ಓ ಒಳಗೂ` | Stray ಟ turning the vocative "ಓ" into a nonsense word |
| 11.30 | `ರುಳದಿಂದ` | `ಝಳದಿಂದ` (jhaḷa, "scorching glare") | See confidence note below |
| 11.30 | `ಜಗತ್ತಿನೆಲ್ದೆಡೆಗೆ` | `ಜಗತ್ತಿನೆಲ್ಲೆಡೆಗೆ` | Same recurring ಎಲ್ಲೆಡೆ/ಎಲ್ದೆಡೆ typo already fixed once in 11.11 |

**Confidence note on 11.30's `ಝಳ` fix:** this word was the hardest of the
batch to resolve visually — at high zoom the character could plausibly be
ಝ with the loop as part of its own glyph, or with an attached ು vowel sign.
Went with `ಝಳದಿಂದ` on the strength of (a) the closest visual match to the
rendered glyph shape and (b) it being a real, common Kannada word ("the
glare/heat-shimmer of," as in "ಬಿಸಿಲ ಝಳ") that fits the sentence
grammatically and thematically ("your body's blazing brilliance fills and
burns the universe with scorching glare") — whereas the original stored
`ರುಳ` does not parse as a word in this context at all. Flagged here as the
one fix in this batch with meaningfully higher residual uncertainty than the
others; worth a second look if anyone revisits this passage.

**11.25 checked in full and found completely clean.**

**One retraction during this pass:** initially flagged `ವಿಶ್ಲೇಸಿದ್ದೇವೆ` in
11.24's closing bracket as a likely dropped-syllable error (expected
`ವಿಶ್ಲೇಷಿಸಿದ್ದೇವೆ`). A second, tighter-zoomed crop showed the page itself
prints it exactly as currently stored — reversed the call before applying
any fix. Kept here as a reminder that this method still requires care and
isn't infallible; the checking process is deliberately built to catch and
correct its own false leads before they become bad edits, not just to
report an unbroken string of confirmed bugs.

## Translation-layer check

Checked EN, DEV, and HI for all four touched verses (11.21, 11.22, 11.24,
11.30). **All three were already correct in every case** — uktvā, uṣmapāḥ/
ऊष्मपाः, nabhaḥ-spṛśam/नभःस्पृशं, vyātta-ānanam/व्यात्ताननं all spelled
properly throughout, with no propagated errors. No translation-layer fixes
needed this round.

## Status

Verses 11.21–11.30 (10 verses) now have character-level coverage: 11.21,
11.22, 11.24, 11.25, 11.30 freshly audited this session (8 KN fixes, 0
translation fixes needed); 11.23, 11.26, 11.27, 11.28, 11.29 already fixed in
prior sessions and spot-confirmed here. Validated, `viewer.html` rebuilt.
Committed and pushed.

**Cumulative character-level coverage so far:** 11.9–11.30 (22 of 55 verses
in chapter 11). **Not yet done:** 11.1–11.8, 11.31–11.55.
