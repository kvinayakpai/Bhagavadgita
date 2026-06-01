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
positions.js            hand-laid x,y,r coordinates for the celestial-map view
viewer.html             single-file SPA — Browse / Focus / Map / Chapters, quad-script
index.html              byte-identical mirror of viewer.html (entry point for index-serving hosts)
viewer-bundled.html     self-contained: all JS + commentary inlined for file:// / phones (15.7 MB)

Bannanje commentary (702 entries × 4 languages)
────────────────────────────────────────────────
bannanje_kn_private.js  Kannada — source of truth (Bannanje Govindacharya's own language)
bannanje_en_private.js  English translation (machine-translated from KN, June 2026)
bannanje_hi_private.js  Hindi translation (machine-translated from KN, June 2026)
bannanje_dev_private.js Sanskrit/Devanāgarī (machine-translated from KN, contamination-cleaned June 2026)

Note: the "_private" suffix in filenames is a legacy naming convention; all four files
are committed to the repository and loaded by the viewer at runtime like any other data file.

Build & tooling
───────────────
build-bundle.py         produces viewer-bundled.html from viewer.html + all data files
build-decks.js          PptxGenJS deck generator — 4 narrative PPTX in decks/ (en/dev/hi/kn)
build_docx.py           generates Bhagavad_Gita_All_Verses_CLEAN.docx from _extracted JSON
translate_all_meanings.py  translates Kannada commentary → EN / HI / DEV using Google Translate API
detect_contamination.py QA tool: scans DEV file for Kannada-origin contamination / hallucinations
verify.py               integrity auditor: entry counts, verse-key sync, bundle inlining check
verify.js               JS auditor: structure, tri-script shape, refs, positions, file integrity

Decks (narrative slide decks, 26 slides each)
──────────────────────────────────────────────
decks/Bhagavadgita_Concept_KG_en.pptx
decks/Bhagavadgita_Concept_KG_dev.pptx
decks/Bhagavadgita_Concept_KG_hi.pptx
decks/Bhagavadgita_Concept_KG_kn.pptx
decks/Bhagavadgita_Concept_KG_{en,dev,hi,kn}.pdf   (LibreOffice-converted)

Documents
─────────
Bhagavad_Gita_All_Verses_CLEAN.docx    702 verses with status-coded blocks (rebuilt June 2026)
Bhagavad_Gita_All_Verses_CLEAN.xlsx    same data in spreadsheet form
Bhagavad_Gita_Bannanje_Clean.docx      112-verse concept-curated subset
Bhagavad_Gita.pdf                      source PDF (Bannanje Govindacharya, 576 pages)

Extraction pipeline artefacts (_extracted/)
────────────────────────────────────────────
_extracted/clean_verses_700.json        source of truth for docx/xlsx build (702 Bannanje verses)
_extracted/bannanje_clean.json          112-verse concept-curated set (kn/en/dev/hi)
_extracted/HANDOFF.md                   session handoff notes for the extraction pipeline
```

## Usage

```bash
# Open the viewer (no build needed)
start viewer.html               # Windows — uses local data.js / positions.js / bannanje_*_private.js
start viewer-bundled.html       # Windows — single-file, no fetch deps (works on phones too)

# Rebuild the self-contained bundle after editing data.js, viewer.html, or commentary files
python build-bundle.py

# Generate the slide decks (4 narrative PPTX, one per language)
# Node.js required — tested with v22
npm install pptxgenjs
node build-decks.js

# (optional) Convert decks to PDF
for L in en dev hi kn; do
  soffice --headless --convert-to pdf --outdir decks "decks/Bhagavadgita_Concept_KG_${L}.pptx"
done

# Rebuild the DOCX (702 verses, 18 chapters)
python build_docx.py

# Translate Kannada commentary into EN / HI / DEV (requires internet; uses Google Translate)
python translate_all_meanings.py

# QA: scan DEV file for contamination (Kannada chars, hallucinated words, guillemets)
python detect_contamination.py

# Verify data + viewer integrity
python verify.py      # Python integrity check
node verify.js        # JS structural audit

# Use data.js as a library
node -e "const d=require('./data.js'); console.log(d.NODES.length, 'concepts')"
```

## Hosting & deployment

The repo is private on the free GitHub plan, so **GitHub Pages from this repo is not available** without either flipping the repo to public or upgrading the account. Three pragmatic options:

1. **Open locally** — no host needed. `viewer-bundled.html` opens cleanly from file:// on any device (desktop, phone, USB stick). This is the path of least resistance.
2. **Cloudflare Pages / Netlify / Vercel** — all three offer free hosting from private GitHub repos. Point them at this repo, set the build command to nothing (or `python build-bundle.py`), publish directory `.`, and you'll have a live URL within a minute.
3. **Make the repo public** — then GitHub Pages from `main` / `(root)` works as usual, served at `https://kvinayakpai.github.io/Bhagavadgita/`.

## Translation quality notes (Bannanje commentary)

The four commentary files were produced as follows:

- **KN** (`bannanje_kn_private.js`) — Bannanje Govindacharya's own Kannada text, the source of truth.
- **EN** (`bannanje_en_private.js`) — translated from KN via Google Translate (kn→en), manually verified for structural integrity.
- **HI** (`bannanje_hi_private.js`) — translated from KN via Google Translate (kn→hi).
- **DEV** (`bannanje_dev_private.js`) — translated from KN via Google Translate (kn→sa). The Google Translate API has a known hallucination where the common Kannada negation particles `ಅಲ್ಲ` (alla = "not") and `ಇಲ್ಲ` (illa = "there is none") are mistranslated as `अल्लाह` and `इल्लाह`. All 702 entries were scanned and cleaned in June 2026 using `detect_contamination.py`; residual hallucinations were replaced with the correct Sanskrit particles (`न`, `न विद्यते`).

## License

Source content (concept definitions, verse selection, commentary attribution) under CC-BY-4.0. Code (JS, build scripts, viewer) under MIT.

## Source Reference

The Bannanje commentary content is sourced from the publicly available blog:

- **Bhagavad Gita Kannada Commentary**: https://bhagavadgitakannada.blogspot.com/
