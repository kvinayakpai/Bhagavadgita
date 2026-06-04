# Bhagavad Gītā Concept Knowledge Graph

A concept-centered knowledge graph of the Bhagavad Gītā, read through Madhva siddhānta. Where a person-graph (Krishna, Arjuna, Brahmā…) maps the **dramatis personae**, this one maps the **ideas** — yogas, tattvas, doṣas, mukti-gradations — and the typed relations the Gītā itself draws between them.

> **Source:** This entire project is based on the Kannada commentary on the Bhagavad Gītā by **Bannanje Govindacharya**, available at
> **[bhagavadgitakannada.blogspot.com](https://bhagavadgitakannada.blogspot.com/)** —
> all concept definitions, verse selections, and doctrinal readings are grounded in that source.

## Live viewer

Open `index.html` in any browser — the SPA is a single file that pulls `data.js`, `positions.js`, and the four Bannanje commentary files from the same folder. For a fully self-contained experience (phone, USB stick, file:// context), open `viewer-bundled.html` instead: it inlines all data into one HTML file.

- **Browse** — every concept under its tier, with live quad-script search
- **Focus** — concept detail card: title, doctrinal note, Madhva-distinctive callout, the anchor verse in the active script, every outgoing and incoming relation with localized type badges; plus the full **Bannanje Govindacharya per-verse commentary** in the active language
- **Map** — all 112 concepts on one canvas, color-coded by tier, with edges drawn between them; hand-laid as a ladder of being from paramārtha to phala
- **Chapters** — browse all 18 chapters, read each śloka with the Bannanje commentary in your chosen language

One-click language toggle: English (IAST diacritics) · देवनागरी (Sanskrit) · हिंदी · ಕನ್ನಡ. The toggle swaps **everything** — masthead, chrome, edge badges, concept titles, notes, callouts, verses, and the full per-shloka commentary.

## What's inside

| Stat | Count |
|---|---|
| Concepts | **112** |
| Typed relations | **124** |
| Anchor verses (quad-script) | **112** |
| Tiers | **12** |
| Madhva-distinctive callouts | **22** |
| Bannanje commentary entries | **702** (all 18 chapters, all 4 languages) |

Every concept has its own anchor verse in all four scripts. 115 of the 124 typed relations carry a quad-script gloss; the remaining 9 (`is-a` / `opposite-of` taxonomic edges whose meaning is given by the type badge alone) carry no per-edge gloss.

## Quad-script localization

The viewer is genuinely quadrilingual end-to-end. The pieces that get translated:

- **Masthead brand & crumb** — `Bhagavad Gītā · Concept KG` / `भगवद्गीता · संकल्पना-कोशः` / `भगवद्गीता · ज्ञान-कोश` / `ಭಗವದ್ಗೀತಾ · ಸಂಕಲ್ಪನಾ-ಕೋಶ`
- **Concept title** — every node carries `title: { en, dev, hi, kn }`. The browse list, focus card, and map labels all use the active script's title.
- **Doctrinal note** — every node carries `note: { en, dev, hi, kn }`.
- **Madhva callout** — the 22 distinctive callouts carry `madhva: { en, dev, hi, kn }`.
- **Anchor verse** — every shloka has `{ dev, kn, iast, ref }`. EN shows IAST; DEV/HI shows Devanāgarī; KN shows Kannada.
- **Edge labels** — relations carry an optional `label: { en, dev, hi, kn }` with the per-edge gloss.
- **Edge type pill badges** — `IS-A` / `प्रकारः` / `ಪ್ರಕಾರ` etc., all four scripts.
- **Chrome strings** — tab labels, search placeholder, footer counter words, empty-states.
- **Per-shloka Bannanje commentary** — 702 entries in KN (source), EN, HI, and DEV (Sanskrit). Commentary appears in the Chapters tab and the Focus card.

All UI strings live under `UI_STRINGS` in `viewer.html`. `verify.js` asserts that every UI string and every node field has all four scripts present and non-empty. `verify.py` checks data integrity and bundle consistency.

## Tier schema (12)

| Tier | Devanāgarī · Kannada | Concepts covered |
|---|---|---|
| 1. Paramārtha | परमार्थ · ಪರಮಾರ್ಥ | Brahman, Paramātman, Puruṣottama, Kṣara/Akṣara, Avatāra, Svarūpa-aikya, Sarvottamatva, **Tāratamya**, **Pañca-bheda** |
| 2. Tattva | तत्त्व · ತತ್ತ್ವ | Jīva, Īśvara, Prakṛti, Para-prakṛti, Kāla, Karma, Svabhāva, Akṣaraṃ Brahma |
| 3. Kṣetra-Kṣetrajña | क्षेत्र · ಕ್ಷೇತ್ರ | Field, knower, 24 elements, mahābhūtas, avyakta, indriyas, icchā-dveṣa, kṣetra-jñāna |
| 4. Guṇa | गुण · ಗುಣ | Sattva/rajas/tamas, guṇātīta, sāttvika jñāna/karma/kartā, **threefold śraddhā + āhāra (Ch 17)** |
| 5. Yoga | योग · ಯೋಗ | Karma, jñāna, bhakti, dhyāna, sannyāsa, buddhi, abhyāsa-vairāgya, samatva, śaraṇāgati |
| 6. Sādhanā | साधना · ಸಾಧನಾ | Śraddhā, vairāgya, abhyāsa, tapas, dāna, tyāga, indriya-nigraha, samādhi, svādhyāya + **jñāna-aṅgas of Ch 13** |
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
Core viewer
───────────
data.js                 112 concept nodes + 124 edges + 112 shlokas (quad-script)
positions.js            hand-laid x,y,r coordinates for the map view
viewer.html             SPA — Browse / Focus / Map / Chapters / Chat, quad-script toggle
index.html              entry-point alias to viewer.html
viewer-bundled.html     self-contained 11 MB: all JS + data inlined (recommended for offline/phone distribution)

Bannanje commentary (702 verses × 4 languages)
──────────────────────────────────────────────
bannanje_kn.js          Kannada (source language — Bannanje Govindacharya's direct commentary)
bannanje_en.js          English (translated from Kannada)
bannanje_hi.js          Hindi (translated from Kannada)
bannanje_dev.js         Sanskrit/Devanāgarī (translated from Kannada)

Build & verification
────────────────────
build-bundle.py         regenerates viewer-bundled.html from source files
verify.py               data.js integrity: concept coverage, edge structure, bundle consistency
verify.js               SPA verification: script shape, refs, positions

Decks (optional outputs)
────────────────────────
decks/Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pptx   narrative 26-slide presentations (4 languages)
decks/Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pdf    PDF versions (LibreOffice-converted)

Documents (optional outputs)
────────────────────────────
Bhagavad_Gita_All_Verses_CLEAN.docx    702 verses with commentary (4 languages)
Bhagavad_Gita_All_Verses_CLEAN.xlsx    same data in spreadsheet form
```

## Usage

```bash
# Open the viewer in browser (no build needed)
open viewer.html                # macOS
start viewer.html               # Windows
xdg-open viewer.html            # Linux

# For offline/mobile use, open the bundled version instead
open viewer-bundled.html        # self-contained, no external dependencies

# If modifying data.js, positions.js, or commentary files, rebuild the bundle
python3 build-bundle.py

# Verify data integrity
python3 verify.py               # Python: data structure and consistency
node verify.js                  # JS: SPA-internal verification
```

## Hosting & Deployment

**Live URL:** https://kvinayakpai.github.io/Bhagavadgita

The app is deployed via GitHub Pages and updates automatically from the `main` branch.

**Alternative deployment options:**
1. **Open locally** — `viewer-bundled.html` opens cleanly from file:// on any device (desktop, phone, USB stick).
2. **Self-hosted** — copy `viewer-bundled.html` to any web server; no build or server-side processing required.
3. **Download for offline use** — share `viewer-bundled.html` directly; works completely offline on phones, tablets, USB sticks.

## Translation & Source

All 702 verses derive exclusively from **Bannanje Govindacharya's Gītā Pravachana**:

- **Kannada** — Bannanje's direct source text
- **English, Hindi, Sanskrit** — translated from Kannada source
- **Quality assurance** — all files verified clean; zero contamination from other commentaries

The commentary has been verified to contain zero entries from Prabhupada, Advaita, or other non-Madhva traditions. All content is grounded in Madhva Vedānta siddhānta as presented by Bannanje Govindacharya.

## License

Source content (concept definitions, verse selection, commentary attribution) under CC-BY-4.0. Code (JS, build scripts, viewer) under MIT.

## Source Reference

The Bannanje commentary content is sourced from the publicly available blog:

- **Bhagavad Gita Kannada Commentary**: https://bhagavadgitakannada.blogspot.com/
