# Bhagavad Gītā Concept Knowledge Graph

A concept-centered knowledge graph of the Bhagavad Gītā, read through Madhva siddhānta. Where a person-graph (Krishna, Arjuna, Brahmā…) maps the **dramatis personae**, this one maps the **ideas** — yogas, tattvas, doṣas, mukti-gradations — and the typed relations the Gītā itself draws between them.

## Live viewer

Open `index.html` in any browser — the SPA is a single file that pulls `data.js` and `positions.js` from the same folder. For a phone, a USB stick, or any file:// context with no relative-fetch worries, open `viewer-bundled.html` instead: it inlines the data and positions into one self-contained HTML.

- **Browse** — every concept under its tier, with live tri-script search
- **Focus** — concept detail card: title, doctrinal note, Madhva-distinctive callout, the anchor verse in the active script, every outgoing and incoming relation with localized type badges
- **Map** — all 112 concepts on one canvas, color-coded by tier, with edges drawn between them; hand-laid as a ladder of being from paramārtha to phala

One-click language toggle: English (IAST diacritics) · देवनागरी · ಕನ್ನಡ ಲಿಪಿ. The toggle swaps **everything** — masthead, chrome, edge badges, concept titles, notes, callouts, verses — not just the headings.

## What's inside

| Stat | Count |
|---|---|
| Concepts | **112** |
| Typed relations | **124** |
| Anchor verses (tri-script) | **112** |
| Tiers | **12** |
| Madhva-distinctive callouts | **22** |

Every concept now has its own anchor verse in all three scripts (up from 56 earlier). 115 of the 124 typed relations carry a tri-script gloss; the remaining 9 (`is-a` / `opposite-of` taxonomic edges whose meaning is given by the type badge alone) carry no per-edge gloss.

## Tri-script localization

The viewer is genuinely trilingual end-to-end. The pieces that get translated:

- **Masthead brand & crumb** — `Bhagavad Gītā · Concept KG` / `भगवद्गीता · संकल्पना-कोशः` / `ಭಗವದ್ಗೀತಾ · ಸಂಕಲ್ಪನಾ-ಕೋಶ`, plus the `Madhva` / `माध्व` / `ಮಾಧ್ವ` crumb beside it.
- **Concept title** — every node carries `title: { en, dev, kn }`. The browse list, focus card, and map labels all use the active script's title.
- **Doctrinal note** — every node carries `note: { en, dev, kn }`. Same for the focus card body.
- **Madhva callout** — the 22 distinctive callouts carry `madhva: { en, dev, kn }`. Prefix label (`Madhva` / `माध्व` / `ಮಾಧ್ವ`) is also translated.
- **Anchor verse** — every shloka has `{ dev, kn, iast, ref }`. EN view shows IAST with diacritics; DEV and KN show their native scripts.
- **Edge labels** — relations carry an optional `label: { en, dev, kn }` with the per-edge gloss (115 of 124 do).
- **Edge type pill badges** — `IS-A` / `प्रकारः` / `ಪ್ರಕಾರ`, `INCLUDES` / `अन्तर्भवति` / `ಒಳಗೊಂಡಿದೆ`, and the other seven edge types.
- **Chrome strings** — `Outgoing` / `Incoming`, the `Browse` / `Focus` / `Map` tab labels, the search placeholder, the footer counter words (`concepts` / `relations` / `shlokas` / `tiers`), the `No concepts match` and `Concept not found` empty-states.

All of these live under `UI_STRINGS` in `viewer.html`. `verify.js` asserts that every UI string and every node field has all three scripts present and non-empty.

## Tier schema (12)

| Tier | Devanāgarī · Kannada | Concepts covered |
|---|---|---|
| 1. Paramārtha | परमार्थ · ಪರಮಾರ್ಥ | Brahman, Paramātman, Puruṣottama, Kṣara/Akṣara, Avatāra, Svarūpa-aikya, Sarvottamatva, **Tāratamya**, **Pañca-bheda** |
| 2. Tattva | तत्त्व · ತತ್ತ್ವ | Jīva, Īśvara, Prakṛti, Para-prakṛti, Kāla, Karma, Svabhāva, Akṣaraṃ Brahma |
| 3. Kṣetra-Kṣetrajña | क्षेत्र · ಕ್ಷೇತ್ರ | Field, knower, 24 elements, mahābhūtas, avyakta, indriyas, icchā-dveṣa, kṣetra-jñāna |
| 4. Guṇa | गुण · ಗುಣ | Sattva/rajas/tamas, guṇātīta, sāttvika jñāna/karma/kartā, **threefold śraddhā + āhāra (Ch 17)** |
| 5. Yoga | योग · ಯೋಗ | Karma, jñāna, bhakti, dhyāna, sannyāsa, buddhi, abhyāsa-vairāgya, samatva, śaraṇāgati |
| 6. Sādhanā | साधना · ಸಾಧನಾ | Śraddhā, vairāgya, abhyāsa, tapas, dāna, tyāga, indriya-nigraha, samādhi, svādhyāya + **jñāna-aṅgas of Ch 13** (amānitva, ārjava, śauca, kṣānti, ananya-yoga, vivikta-sevā, adhyātma-jñāna-nityatvam, tattva-jñānārtha-darśanam) |
| 7. Antaḥkaraṇa | अन्तःकरण · ಅಂತಃಕರಣ | Manas, buddhi, ahaṅkāra, citta, antaryāmin, indriyas |
| 8. Dharma | धर्म · ಧರ್ಮ | Svadharma, varṇa-svabhāva, niṣkāma-karma, sthita-prajña, daivī sampad, ahiṃsā, satya, sama-darśana, **pravṛtti-nivṛtti** |
| 9. Doṣa | दोष · ದೋಷ | Kāma, krodha, lobha, moha, asat-saṅga, avidyā, dvandva, āsurī sampad |
| 10. Phala | फल · ಫಲ | Mokṣa, paramā gati, brāhmī sthiti, jīvanmukti, naiṣkarmya-siddhi, arcirādi-mārga, dhūmādi-mārga, carama-śloka phala + **Madhva mukti-gradations: sālokya · sāmīpya · sārūpya · sāyujya** |
| 11. Yajña | यज्ञ · ಯಜ್ಞ | Dravya, tapo, yoga, svādhyāya, jñāna, brahmārpaṇa |
| 12. Pratīka | प्रतीक · ಪ್ರತೀಕ | Aśvattha-vṛkṣa, ratha-rūpaka, praṇava (Om), akṣarāṇām akāra, jyotir-jyoti, vibhūti |

## Edge vocabulary

| Edge | Reads as | Example |
|---|---|---|
| `is-a` | taxonomy | bhakti-yoga **is-a** yoga |
| `includes` | meronymy | jñāna-yajña **includes** svādhyāya |
| `leads-to` | causal/instrumental | sthita-prajñatā **leads-to** mokṣa |
| `opposite-of` | polarity | sattva **opposite-of** tamas |
| `antidote-to` | counteragent | jñāna **antidote-to** avidyā |
| `arises-from` | genetic chain | krodha **arises-from** kāma |
| `predicates-on` | subject-of-predication | kṣetrajña **predicates-on** kṣetra |
| `transforms-into` | progression | saṅga **transforms-into** kāma |
| `grounded-in` | scriptural / doctrinal grounding | jīva-bheda **grounded-in** pañca-bheda |

## Interpretive lens — Madhva siddhānta

Where Madhva's reading is distinctive (vs Advaita / Viśiṣṭādvaita), the data file flags it on the relevant node. The 22 callouts include:

- **Brahman = Hari**, not nirguṇa absolute
- **Akṣara-puruṣa = Lakṣmī / Śrī**, not impersonal Brahman
- **Mokṣa has tāratamya** — four grades: sālokya, sāmīpya, sārūpya, sāyujya (never identity)
- **Jīva-bheda is real, eternal, plural**
- **Bhakti is constitutive of mokṣa**, not merely a means
- **Sarva-dharmān parityajya (BG 18.66) is the carama-śloka** — distilled mokṣa-upadeśa
- **Pañca-bheda** — five eternal differences (Hari-jīva, Hari-jaḍa, jīva-jaḍa, jīva-jīva, jaḍa-jaḍa)
- **Sva-rūpa-yogyatā** — each jīva's eternal intrinsic nature determines varṇa and destination

The strict-grounding standard: every concept and its Madhva reading anchored to a specific BG verse, verifiable against Bannanje Govindacharya's Gītā-bhāṣya (4 vols, in the source corpus).

## Files

```
data.js                112 concept nodes + 124 edges + 112 shlokas (tri-script)
positions.js           hand-laid x,y,r coordinates for the celestial-map view
viewer.html            single-file SPA — Browse / Focus / Map, tri-script
index.html             byte-identical mirror of viewer.html (entry point for hosts that serve index)
viewer-bundled.html    self-contained: data.js + positions.js inlined for file:// / phones
build-bundle.py        produces viewer-bundled.html from viewer.html + data.js + positions.js
build-decks.js         PptxGenJS deck generator — 4 narrative PPTX outputs in decks/ (en/dev/kn/hi)
decks/                 Bhagavadgita_Concept_KG_{en,dev,kn,hi}.pptx + .pdf — 26-slide story decks meant to be READ at the reader's pace
verify.js              consistency audit — structure, tri-script shape, refs, positions, file integrity
README.md              this file
```

## Usage

```bash
# Open the viewer (no build needed)
open viewer.html                # macOS — uses local data.js / positions.js
open viewer-bundled.html        # macOS — single-file, no fetch deps (works on phones too)
xdg-open viewer.html            # Linux
start viewer.html               # Windows

# Rebuild the self-contained bundle after editing data.js or viewer.html
python3 build-bundle.py

# Generate the slide decks (4 narrative PPTX, one per script)
npm install pptxgenjs
node build-decks.js

# (optional) Convert decks to PDF for non-PowerPoint readers
for L in en dev kn hi; do
  soffice --headless --convert-to pdf --outdir decks "decks/Bhagavadgita_Concept_KG_${L}.pptx"
done

# Verify the data + viewer integrity
node verify.js

# Use as a library
node -e "const d=require('./data.js'); console.log(d.NODES.length, 'concepts')"
```

## Hosting & deployment

The repo is private on the free GitHub plan, so **GitHub Pages from this repo is not available** without either flipping the repo to public or upgrading the account. Three pragmatic options:

1. **Open locally** — no host needed. `viewer-bundled.html` opens cleanly from file:// on any device (desktop, phone, USB stick). This is the path of least resistance.
2. **Cloudflare Pages / Netlify / Vercel** — all three offer free hosting from private GitHub repos. Point them at this repo, set the build command to nothing (or `python3 build-bundle.py`), publish directory `.`, and you'll have a live URL within a minute.
3. **Make the repo public** — then GitHub Pages from `main` / `(root)` works as usual, served at `https://kvinayakpai.github.io/Bhagavadgita/`.

## License

Source content (concept definitions, verse selection, commentary attribution) under CC-BY-4.0. Code (JS, build scripts, viewer) under MIT.
