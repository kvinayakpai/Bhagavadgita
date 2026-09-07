# Archive

Completed plans, finished audit logs, and superseded build snapshots — kept
for historical reference, not part of the active document set. If you're
looking for current project status or how to work on this repo, start at
the root: `README.md`, `PROJECT_STATUS.md`, `FUTURE_AGENT_GUIDELINES.md`,
`BRIDGE_PLAN.md`.

## Completed correction/translation plans (archived 2026-09-07)

These three are the master tracking documents for the project's full
text-correctness effort. All three now read "COMPLETE" for all 18
chapters; they're archived because they describe finished work, not open
tasks. The distilled, reusable lessons from all of them live on in
`../FUTURE_AGENT_GUIDELINES.md` (section 2E), which remains active.

- `CONTENT_GAP_AUDIT_PLAN.md` — page-by-page audit of the Kannada source
  against the printed book, all 18 chapters. One small open item was left
  unresolved inside it: a decision from Vinayak on the 13.34/13.35
  duplicate bracketed-note (see `FUTURE_AGENT_GUIDELINES.md` §2E/E9).
- `EN_RETRANSLATION_PLAN.md` — the four-language (EN/HI/DEV against KN)
  translation and audit pass, all 18 chapters.
- `DEV_FULL_REPASS_PLAN.md` — a second, deeper pass specifically on the
  Sanskrit (DEV) commentary, re-deriving condensed entries that had
  dropped substantive content relative to KN. All 18 chapters (chapter 11
  was independently re-verified as already solid rather than needing
  rework).

## Chapter-specific audit session logs (archived 2026-09-07)

Raw, session-by-session detail that fed into the master plans above and
into `FUTURE_AGENT_GUIDELINES.md`'s distilled error taxonomy. Superseded
as active documents once their findings were folded in, but kept for
anyone who wants the full "which page, which exact fix" record.

- `CH11_CHAR_AUDIT_11.1-11.9.md`, `CH11_CHAR_AUDIT_11.9-11.11.md`,
  `CH11_CHAR_AUDIT_11.12-11.20.md`, `CH11_CHAR_AUDIT_11.21-11.30.md`,
  `CH11_CHAR_AUDIT_11.31-11.40.md`, `CH11_CHAR_AUDIT_11.41-11.55.md` —
  character-level audit series for chapter 11.
- `CH11_REAUDIT_CHECKLIST.md` — second-pass chapter 11 audit.
- `CH11_VAKRA_VAKTRA_SYSTEMIC_FIX.md` — whole-book regex sweep for one
  recurring conjunct-confusion typo pattern found during the ch.11 audit.
- `CH12_AUDIT.md` — character-level audit for chapter 12.
- `ACCURACY_CHECK_LOG.md` — earliest (2026-06-11) full-book OCR accuracy
  pass, later superseded by the much more thorough
  `CONTENT_GAP_AUDIT_PLAN.md` sweep.
- `GARBLED_TERMS_FIXPLAN.md` — Phase 1 fix log for garbled parenthesized
  English terms in `bannanje_kn.js`.
- `OCR_CLEANUP_LOG.md` — early (chapters 1–3 only) OCR cleanup log,
  superseded by the full-book `CONTENT_GAP_AUDIT_PLAN.md` sweep.
- `OCR_PROPAGATION_PLAN.md` — tracked propagating `GARBLED_TERMS_FIXPLAN.md`'s
  KN fixes into en/hi/dev; superseded once those three languages got full
  translation passes of their own in `EN_RETRANSLATION_PLAN.md`.
- `SESSION_LOG_2026_06_21.md` — narrative session history, June 18–21 2026.
- `SHLOKA_VERIFICATION_LOG.md` — transliteration/anusvāra verification
  checklist, all 18 chapters, completed.

## Completed feature-implementation plans (archived 2026-09-07)

- `CANVAS_MAP_PLAN.md` — the canvas-based graph rendering rewrite (pan,
  zoom, pinch, minimap, force simulation). All 8 phases complete; the
  feature is live in `viewer.html`.
- `MAP_FIX_NOTES.md` — post-implementation bug list for the canvas map
  (tap, pinch, language contamination). All items resolved in later
  commits (`3f4ae4e`, `203a4b8`).

## Build snapshots (archived 2026-07-25)

`index_snapshot_2026.html` and `viewer_online_snapshot_2026.html` were stale
copies of the bundled viewer added incidentally in commit d998b6c with no
documented purpose. They drifted from the maintained build (`viewer.html`,
generated from `viewer-src.html` by `build-bundle.py`) and required manual
patch propagation. The live page is
https://kvinayakpai.github.io/Bhagavadgita/viewer.html ; the repo root
`index.html` is now just a redirect to it.
