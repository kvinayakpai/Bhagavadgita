# DEV Full-Fidelity Re-Pass Plan

## Why this plan exists

`bannanje_dev.js` (the Devanagari/Sanskrit file) was originally composed across
chapters 1–18 as **condensed Sanskrit prose** — a short paragraph summarizing
each verse's commentary, rather than a full rendering of it. This was a
deliberate convention at the time (see `EN_RETRANSLATION_PLAN.md`, "Progress —
DEV" table), applied consistently to all 701 verse-keys.

**Precedent:** Chapter 11 already went through exactly this kind of correction
once. Its condensed pass (~4.5:1 compression vs. the Kannada source) was
reworked "per Vinayak's explicit direction... to full richness matching the
Kannada source's own depth" (~0.92:1 length ratio, no content cut — see
`EN_RETRANSLATION_PLAN.md` chapter 11 row). That rework is the model for this
plan, extended to the rest of the book.

**Trigger for this plan:** reviewing 12.16, Vinayak found the DEV entry had
compressed six distinct guṇa explanations (each with its own reasoning, the
two quoted "śuci" verses, and the family-pūjā illustration under udāsīna)
down to a single line of parenthetical one-word glosses — losing the
explanatory texture and quoted material present in the Kannada original.
Verdict: the condensed-DEV convention loses "the charm of the original" and
should be abandoned book-wide in favor of full-fidelity translation, matching
the Kannada's own depth — same standard as chapter 11.

## Scope

Every one of the 701 DEV verse-keys across chapters 1–18 is in scope for
re-translation from condensed to full-fidelity Sanskrit prose. This is **not**
a fresh translation from scratch — it is a re-pass: re-derive the full DEV
content from the already-verified `bannanje_kn.js` for each verse, the same
source of truth used for the original EN/HI translations.

## What "full-fidelity" means (per the 11.x precedent + 12.16 fix)

- Preserve every distinct point/sub-argument in the Kannada commentary — no
  collapsing multiple guṇas/reasons/steps into a single parenthetical list.
- Any Sanskrit verses quoted inline in the Kannada commentary must be quoted
  in full in DEV as well (they're already Sanskrit — carry them over verbatim).
- Illustrative examples, etymology asides, and story references in the
  Kannada must be rendered in DEV, not dropped.
- Aphoristic, flowing Sanskrit prose in Bannanje's expository voice — not a
  literal word-for-word crib, and not a bag of glosses in parentheses.
- Length ratio should land close to the Kannada's own length (chapter 11's
  redo landed at ~0.92:1) rather than the old ~4–5:1 compression.

## What does NOT change

- `bannanje_en.js` and `bannanje_hi.js` are unaffected by this plan — they
  were already full-length translations mirroring the KN structure (Rule 10).
- The KN source itself (`bannanje_kn.js`) is untouched by this plan; any KN
  bugs found along the way are handled per the existing
  `CONTENT_GAP_AUDIT_PLAN.md` process, cross-referenced here.
- No change to merge-verse conventions, viewer/build tooling, or the Bridge
  feature.

## Standing caveat (unchanged from before)

DEV content — condensed or full-fidelity — has not had native Sanskrit
speaker review. This re-pass improves completeness/fidelity but does not
by itself satisfy that review; flag before treating any DEV content as
publication-final.

## Progress tracking

| Chapter | Verses | Status | Notes |
|---------|--------|--------|-------|
| 11 | 11.1–11.55 | ✅ Already done (2026-08-03), pre-dates this plan | Precedent/model for this whole re-pass |
| 12 | 12.1–12.20 | ✅ **COMPLETE 2026-09-03** | Full chapter re-derived from KN: 12.16 first, then 12.1–12.15 and 12.17–12.20 in one pass. Merge-verse pairs (12.3/12.4, 12.6/12.7, 12.13/12.14, 12.18/12.19) handled with the standard stub-then-full convention. Validated (701 keys), rebuilt. |
| 13 | 13.1–13.35 | ✅ **COMPLETE 2026-09-04** | Full chapter re-derived from KN. Only one merge group this chapter: the triple 13.9/13.10/13.11 (two stubs + full on 13.11). All 20 jnana-sadhana virtues (13.7–13.11) restored with full explanations, dropped deity-attribution brackets for the 24 kshetra-tattvas and 7 vikaras restored in 13.6, ashvattha etymology restored, Lakshmi-Narayana creation account restored in full in 13.19. 13.34's accidentally-duplicated bracket note trimmed back to 13.35 only (matches KN structure, where only 13.35 carries the "no separate 35th verse in Bannanje's text" note). Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. |
| 14 | 14.1–14.27 | ✅ **COMPLETE 2026-09-04** | Full chapter re-derived from KN — the three-guna chapter, very dense. No merge pairs this chapter (all 27 keys standalone). Restored: the full Lakshmi-Narayana creation account in 14.3 (matching the parallel account already done in 13.19), the complete guna-by-guna breakdown (14.5–14.9), all four illustrative stories (Nachiketa/Yama in 14.17, Ajamila in 14.17, Rama's even temper in 14.19, the mudha-vs-jnani verse in 14.24), the Shri-Bhu-Durga deity-attribution passage for the three gunas in 14.17, and the closing 15/16/17/18-tattva recap in 14.27. Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. |
| 15 | 15.1–15.20 | ✅ **COMPLETE 2026-09-04** | Full chapter re-derived from KN. One merge pair: 15.3/15.4 (stub + full). Restored: the complete four-point ashvattha etymology and Manu Smriti/Aitareya Aranyaka quotes in 15.1, the Nasadiya Sukta / Chandogya (Shvetaketu) / Mundaka quotes on creation in 15.4, the full five-exchange Janaka-Yajnavalkya dialogue from Brihadaranyaka Upanishad in 15.6, the Varaha-avatara/Hiranyaksha/Velikovsky passage in 15.13, the Vamana-in-the-heart exposition in 15.14, and the extensive Vedic-etymology passage (agni, akshara-by-akshara Vedic names, Gargacharya story, Uddhava-gita quote) in 15.15 — this chapter's longest restoration. Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. |
| 16 | 16.1–16.24 | ✅ **COMPLETE 2026-09-04** | Full chapter re-derived from KN. Two triple-merge groups this chapter: 16.1/16.2/16.3 (the 26 divine qualities, full text on 16.3) and 16.13/16.14/16.15 (the asuric interior monologue, full text on 16.15). Restored: all 26 daivi-sampat qualities with full explanations and citations (Hanuman shloka, Bhagavata 4.30.23, Kathopanishad, Ramayana quotes) in 16.3, the 6 asuri qualities with the Quran/Atharva Veda citations in 16.4, the Gautami-and-the-snake story from the Mahabharata Anushasana Parva in 16.21, and the closing shastra-pramana discussion in 16.23–16.24. Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. |
| 17 | 17.1–17.28 | ✅ **COMPLETE 2026-09-04** | Full chapter re-derived from KN. Two merge pairs: 17.5/17.6 and 17.24/17.25 (both stub + full). Restored full three-guna analysis of shraddha, deity worship, food, yajna, tapas (body/speech/mind), and dana, plus the closing Om-Tat-Sat exposition (17.23–17.28) with the achyuta/ananta/govinda etymology and the purusheya/apaurusheya Veda discussion. Also noted (not fixed, out of scope for this DEV-only pass): 17.18's KN source has a minor cross-verse text-leak artifact at its tail (duplicate of 17.19's shloka plus a fragment of 17.20's opening) — DEV translation used the intended content only. Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. |
| 18 | 18.1–18.78 | ✅ **COMPLETE 2026-09-04** | The longest chapter (78 verses), full re-pass in one session. One merge pair: 18.36/18.37 (stub + full, the three types of sukha). Major restorations: the samnyasa/tyaga distinction (18.1–18.12); the five causes of action with the "eloquent speaker" illustration (18.13–18.14); the full three-guna analysis of knowledge/action/doer/intellect/dhriti/happiness (18.20–18.39); the varna section in full — the 10-subtype sattva/rajas/tamas percentage table (parmahamsa through shudra) in 18.40, all four varnas' natural qualities in 18.41–18.44 including the varna-vs-jati distinction with the Vyasa example, and the svakarma/svadharma discussion (18.45–18.48) with the Vyasa-Yudhishthira exchange; the path to Brahman (18.49–18.55); the great surrender sequence (18.56–18.66, including the ishta-devata/grahadosha discussion at 18.57 and the Draupadi-Yudhishthira exchange at 18.66 on "sarva-dharman parityajya" — the Gita's most famous verse); the phalashruti (18.67–18.71); and the closing exchange — Krishna's final question, Arjuna's response, and Sanjaya's five closing verses (18.72–18.78), including the 574/84/41/1=700 shloka count note. Validated (701 keys), scanned clean of leftover Kannada-script fragments, rebuilt. **This completes the full-fidelity DEV re-pass for chapters 11–18.** |
| 1 | 1.1–1.47 | ⬜ Not started | |
| 2 | 2.1–2.72 | ⬜ Not started | |
| 3 | 3.1–3.43 | ⬜ Not started | |
| 4 | 4.1–4.42 | ⬜ Not started | |
| 5 | 5.1–5.29 | ⬜ Not started | |
| 6 | 6.1–6.47 | ⬜ Not started | |
| 7 | 7.1–7.30 | ⬜ Not started | |
| 8 | 8.1–8.28 | ⬜ Not started | |
| 9 | 9.1–9.34 | ⬜ Not started | |
| 10 | 10.1–10.42 | ⬜ Not started | |
| 13 | 13.1–13.35 | ⬜ Not started | |
| 14 | 14.1–14.27 | ⬜ Not started | |
| 15 | 15.1–15.20 | ⬜ Not started | |
| 16 | 16.1–16.24 | ⬜ Not started | |
| 17 | 17.1–17.28 | ⬜ Not started | |
| 18 | 18.1–18.78 | ⬜ Not started | |

## Suggested order of operations

1. Work chapter by chapter (order not critical — could go sequentially 1→18,
   or prioritize shorter/high-traffic chapters first; Vinayak's call).
2. For each chapter: re-derive DEV from the verified KN verse-by-verse,
   batching a handful of verses per pass (matching the batching cadence used
   in the original EN/DEV/HI retranslation effort).
3. After each chapter: validate 701-key count via the Node.js pattern,
   rebuild via `build-bundle.py`, spot-check 2–3 verses against KN, update
   this tracking table, commit + push.
4. Cross-check against `CONTENT_GAP_AUDIT_PLAN.md` — if a chapter's KN audit
   is still pending (currently chapters 6–10), consider doing the KN audit
   pass first so DEV isn't re-derived from KN that may still change.

## Session workflow reminder

Standard workflow applies (see `FUTURE_AGENT_GUIDELINES.md` / memory):
extract KN via a getval-style script, compose full Sanskrit prose preserving
all sub-points/quotes/examples, verify with
`assert content.count(old) == 1` before replace, validate with the Node.js
701-key check, rebuild, commit, push (token-free remote URL after push).
