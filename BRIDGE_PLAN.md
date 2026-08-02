# Bridge — Gita Concept Map ⟷ Vedic Corpus

## TARGET VISION (Vinayak, Aug 2 2026 — this is the north star, read first)
The Bridge is **not a list of citation cards**. The finished feature is a
**conceptual/radial map**: a Gita concept — one of the ~47 nodes already in
Tatvam Jalam's knowledge graph — sits at the **center**, and supporting
content from other sources is arranged **around it** as connected nodes/
spokes, the way the existing Tatva Jalam concept map already visualizes
Gita-internal relations (see `positions.js` / `renderMap` in Bhagavadgita).

**The complete state of this project** is reached when **every concept in
the Gita knowledge graph can be linked to references across the Vedas, the
Upanishads, the Puranas, and the Itihasa (Ramayana/Mahabharata)** — not just
the Katha Upanishad. Katopanishad is the *first* source integrated because
it's the sibling project already built in the same Bannanje framework, but
it is one spoke of many the finished map needs, not the destination.

Everything below this point (Phase 1 and Phase 2, both shipped Aug 2026) is
a **stepping-stone data layer** — a card-list UI holding verified Gita↔Katha
citations — built before this radial-map vision was articulated. It is
useful as-is (real, verified content) but the UI needs re-architecture, and
the data model needs to generalize from "Katha" to "any Vedic source," to
reach the target state. See "Phase 3+" for the concrete gap list.

## Purpose (original framing, still valid as content policy)
A "Bridge" surfacing genuine connections between the Gita and other Vedic
literature as read through Bannanje Govindacharya's commentary. Both the
Bhagavadgita and Katopanishad apps share the same Madhva/Bannanje framework
and largely overlapping concept-graph tiers (Parabrahma, Jivatattva/Jivatma,
Antahkarana, Sadhana/Marga, Phala), so a bridge is a natural extension of the
existing knowledge-graph work in both repos.

## Content policy (non-negotiable, extends the existing "no synthesis" rule)
A bridge entry may draw on exactly two kinds of material:

1. **Explicit cross-citations** — places where Bannanje's own commentary on one
   text names or quotes the other (e.g. Katha's exposition at 1.2.14-15 quotes
   Gita 15.14's "ahaṁ vaiśvānaro bhūtvā..." verbatim while explaining the Lord
   in the heart-cave; Gita's commentary at 5.20 quotes Katha 1.2.2's "preyo
   mando yogakṣemād vṛṇīte" verbatim). These are the strongest, safest class of
   bridge content because Bannanje made the connection himself — we are not
   inventing it.
2. **Tier/concept correspondence** — where the same named concept (in the
   existing knowledge-graph tier structure of each site) appears in both texts'
   commentary, we can link the two entries side by side. No new prose is
   authored beyond a short factual pointer ("Gita's Antahkarana tier ↔ Katha's
   chariot-metaphor exposition of manas/buddhi/indriya, 1.3.3-9").

Anything beyond these two categories — thematic essays comparing "how each text
treats death" etc. — requires going back to `gita_pages/` and Katopanishad's
`pages/` PNGs to verify Bannanje actually draws the parallel, exactly like the
existing OCR/retranslation workflow. Never author a comparison Bannanje himself
doesn't make.

## Data schema (`bridge_data.js`, identical copy in both repos)
```js
window.BRIDGE_ENTRIES = [
  {
    id: 'vaishvanara-agni',
    tier: 'parabrahma',                 // matches BG TIERS id where applicable
    title: { en: '...', kn: '...', dev: '...', hi: '...', sa: '...' },
    kind: 'explicit_citation',          // 'explicit_citation' | 'tier_correspondence'
    gita: { ref: 'BG 15.14', note: {...} },
    katha: { ref: 'Katha 1.2.14-15 (Adhyaya 1, Valli 2)', note: {...} },
    source_note: { en: 'Bannanje quotes this Gita verse directly while
      explaining Vaishvanara/Agni in the heart-cave.', ... }
  },
  ...
];
```
`note` fields hold only the existing commentary text (paraphrased/trimmed, not
new authoring). `source_note` states *that* Bannanje made the link and where.

## Phase 1 (this batch) — scaffold + 4 verified entries
- `vaishvanara-agni`: BG 15.14 ↔ Katha 1.2.14-15 (explicit quote)
- `shreyas-preyas`: BG 5.20 ↔ Katha 1.2.2 (explicit quote, reciprocal direction)
- `yajna-dana-tapas`: BG ch.17 ↔ Katha 1.1.16-17, Nachiketa-agni (explicit
  cross-reference to "Gita chapter 17")
- `karma-as-worship`: BG ch.12 ↔ Katha 1.1.20 area, turning daily action into
  yajña (explicit cross-reference to "Gita chapter 12")

## Content categories — decided
Per Vinayak's direction (Aug 1 2026 session), the Bridge stays strictly to the
two categories above (explicit_citation, tier_correspondence). A prior attempt
at a similar feature in Katopanishad (commit history: `968571d` → `bb4fc4e`,
"Gita Connections" tab) was built, went through 6 rendering-bug fix attempts,
and was ultimately deleted entirely. Two lessons carried forward:
1. That attempt included synthesized (non-Bannanje-sourced) edges — exactly
   what this plan's content policy forbids. Stayed clear of that here.
2. Its `vaisvanara_fire` entry independently corroborates this session's
   `vaishvanara-agni` entry (Katha 1.1.7 commentary ↔ Gita 15.14) — same
   citation found two different ways, good cross-check.
Textually-parallel-verse entries from that old attempt (near-identical
shlokas shared by both texts, e.g. `na jāyate mriyate vā`, the Ashvattha
tree, the chariot metaphor, brahman-as-light, eleven/nine gates) were
considered as a possible third category but intentionally left out — they
are philologically real but not something Bannanje's commentary itself
flags as a cross-text link, so they don't meet this feature's bar.

## Known gaps (this session)
- `katopanishad-offline.html` (the self-contained offline bundle) was NOT
  updated — it needs `bridge_data.js` inlined the way `katopanishad_data.js`
  already is there, plus the same HTML/JS edits as viewer.html/index.html.
- Katopanishad's `viewer.html` and `index.html` had drifted out of sync
  before this session (different content, not just different filenames);
  `index.html` was overwritten with `viewer.html`'s content to restore parity
  per the established pattern from the "Gita Connections" removal commit,
  which touched both files together. Worth checking git blame on why they
  drifted, in case there was an intentional reason.

## Phase 2 (this batch) — corpus sweep complete
Full-text search of both `kata-upanishad-text.txt` (Katha side, "ಗೀತೆ") and
`bannanje_kn.js` (Gita side, "ಕಠೋಪನಿಷ") for every explicit citation, cross-
checked with exact verse numbers against each project's own transcription.
10 new entries added (14 total):
- eleven-nine-gates: Katha 2.2.1 ↔ BG 5.13
- brahman-as-light: Katha 2.2.15 ↔ BG 15.6 (bidirectional — cited in both
  commentaries)
- ashvattha-tree: Katha 2.3.1 ↔ BG 15.1, also BG 14.18 (bidirectional,
  cited twice on the Gita side)
- cosmic-regulation: Katha 2.3.2 ↔ BG 9.19
- om-tat-sat: Katha 2.3.12 ↔ BG 17.23
- prana-apana-vamana: Katha 2.2.3 ↔ BG 15.14
- angushthamatra-purusha: Katha 2.1.12–13 ↔ BG 15.15
- nachiketa-refusal-of-wealth: Katha 1.1.23–29 ↔ BG 9.28, 14.17, 16.10
  (three separate citations of the same episode — the most-cited pairing
  found this session)
- mahad-avyakta-purusha: Katha 1.3.11 ↔ BG 12.1 (commentary)
- honoring-the-jnani: Katha 1.1.9–10 ↔ BG 4.3 (brief supporting citation)

Both sweeps were exhaustive for their respective search terms ("ಗೀತೆ" in
Katha source, "ಕಠೋಪನಿಷ" in Gita source) as of this session — a future
session could still check for citations using other phrasings (e.g. "ಕೃಷ್ಣ
ಹೇಳಿದ" without "ಗೀತೆ" nearby, or references to specific chapter numbers
without naming the text).

## Phase 3+ (future sessions) — toward the target vision
This is now the primary backlog, in rough dependency order:

1. **UI re-architecture: card list → radial concept map.** The BG viewer's
   `renderMap()`/`positions.js` already draws a node-and-edge graph for
   Gita-internal concept relations — the Bridge should reuse that same
   rendering approach (SVG/canvas, hand-laid or force-directed positions)
   rather than invent a new visual language. Center node = one Gita concept
   (id matches `data.js` TIERS/NODES); surrounding nodes = each verified
   cross-reference, grouped/colored by source text. Clicking a concept in
   the *existing* Gita map should be able to jump into its Bridge view.
2. **Data model generalization: `katha` field → generic `sources[]` array.**
   Current `bridge_data.js` schema hardcodes a `katha` field per entry. To
   support Vedas/Upanishads/Puranas/Itihasa generically, each entry needs
   `sources: [{ text: 'Katha Upanishad', ref: '...', note: {...} }, ...]`
   so one Gita concept can eventually point to citations in multiple texts
   at once. This is a breaking schema change — plan a migration pass over
   the 14 existing entries when this is tackled.
3. **Restructure by concept, not by citation-pair.** Currently one entry =
   one citation pair (e.g. `ashvattha-tree`). The target model is one entry
   *per Gita concept node* (matching the ~47-node graph), with a list of
   supporting references attached. Concepts with zero references yet should
   still appear in the map (as a bare center node) rather than being
   omitted, so the map visibly shows how much of the corpus is covered.
4. **New source integrations beyond Katopanishad.** No other Bannanje-
   commentary Vedic/Puranic/Itihasa project exists yet in this workspace.
   Before any new source can feed the Bridge, it needs the same treatment
   Katopanishad got: a transcribed/verified corpus, in the Bannanje-only
   framework, that can be swept for explicit Gita cross-citations the same
   way this session swept Katopanishad's. Ask Vinayak which source to
   tackle next (a specific Upanishad, a Purana, the Mahabharata/Gita's own
   frame narrative, etc.) rather than assuming.
5. **Coverage tracking.** Once (3) exists, add a simple completion metric
   (e.g. "12 / 47 Gita concepts have at least one cross-reference") so
   progress toward "every concept linked" is visible, mirroring how
   `EN_RETRANSLATION_PLAN.md` tracks chapter-by-chapter translation status.

## Smaller/orthogonal open items (not blocking the re-architecture)
- Tier-correspondence entries for the 5 shared tiers (Parabrahma, Jivatattva/
  Jivatma, Antahkarana, Sadhana, Phala) — requires deciding per-tier which
  Katha concepts (chariot metaphor, Om, taratamya-adjacent teachings, etc.)
  genuinely match BG's node list, verified against source pages.
- Both corpora were swept for explicit citations using literal search terms
  ("ಗೀತೆ" / "ಕಠೋಪನಿಷ") — a future pass could catch citations phrased without
  naming the other text directly (e.g. "ಕೃಷ್ಣ ಹೇಳಿದ" alone, or a bare chapter
  number).
- `katopanishad-offline.html` (the self-contained offline bundle) still needs
  `bridge_data.js` inlined the way `katopanishad_data.js` already is there.
- Katopanishad's `viewer.html` and `index.html` had drifted out of sync
  before the Aug 2026 session (different content, not just stale copies);
  worth checking git blame on why, in case something was lost when they were
  resynced.
- Cross-site deep links (each bridge node links out to the other app's
  focus view, e.g. `https://kvinayakpai.github.io/Bhagavadgita/#focus/15.14`)
  once each site's anchor scheme is confirmed — useful regardless of card-
  list vs. radial-map UI.
