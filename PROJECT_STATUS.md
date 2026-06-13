# Tatva Jalam — Project Status

**Last updated:** June 4, 2026  
**GitHub:** https://github.com/kvinayakpai/Bhagavadgita  
**Deployment:** https://kvinayakpai.github.io/Bhagavadgita  

---

## Status: COMPLETE & DEPLOYED ✅

### Deliverables

| Component | Status | Details |
|-----------|--------|---------|
| **Core App** | ✅ Live | 5 views: Browse, Focus, Map, Chapters, Chat |
| **Concept Ontology** | ✅ Complete | 112 concepts, 124 typed edges, 12 taratamya tiers |
| **Verse Commentary** | ✅ Complete | 702 verses in 4 languages (Kannada, English, Hindi, Sanskrit) |
| **Bundled HTML** | ✅ Deployed | 11 MB self-contained file for offline use |
| **GitHub Repository** | ✅ Synced | All changes committed, ready for distribution |

### Language Support

All 702 verses have commentary in four languages:
- **Kannada** — Source language (Bannanje Govindacharya's direct commentary)
- **English** — Scholarly Vedanta register
- **Hindi** — Vedantic Hindi register
- **Sanskrit (Devanāgarī)** — Classical expository Sanskrit

One-click toggle switches all UI text, commentary, verse rendering, and edge labels.

### Deployment Architecture

**Single-file bundle:** `viewer-bundled.html` (11 MB)
- Contains complete app UI, styles, and logic
- Inlined: `data.js` (concepts), `positions.js` (graph layout), four `bannanje_*.js` files (all commentary)
- Works completely offline from `file://` protocol
- No external dependencies (except Anthropic API for Chat tab, owner-authenticated)

**Live URL:** GitHub Pages from public repo
- Deployed at `kvinayakpai.github.io/Bhagavadgita`
- Updates automatically from `main` branch

---

## Source Authority

**All content derives from Bannanje Govindacharya's Gītā Pravachana:**
- 702 verses extracted via vision-reading (not OCR)
- Translated to English, Hindi, Sanskrit from Kannada source
- Verified clean: zero contamination from other commentaries (Prabhupada, Advaita, etc.)
- Locked to Madhva siddhānta interpretation throughout

**Concept ontology** grounded in BG verses with explicit doctrinal framework.

---

## What's Included

### Five Views

1. **Browse** — Concepts grouped by tier, with live quad-script search
2. **Focus** — Deep concept detail: title, note, Madhva reading, anchor verse, relations, full per-verse commentary
3. **Map** — Visual concept graph (112 nodes, 124 edges), hand-laid as taratamya ladder
4. **Chapters** — All 18 chapters with per-shloka Bannanje commentary in active language
5. **Chat** — AI conversation via Anthropic API (owner-authenticated)

### Knowledge Graph

- **112 concept nodes** — mapped to 12 tiers of Madhva taratamya
- **124 typed edges** — `is-a`, `includes`, `leads-to`, `opposite-of`, `antidote-to`, `arises-from`, `predicates-on`, `transforms-into`, `grounded-in`
- **22 Madhva-distinctive callouts** — doctrinal reading unique to Madhva vs other traditions

### Files

```
viewer-bundled.html              Self-contained 11 MB app (recommended for distribution)
index.html / viewer.html         Main SPA (requires external JS files)
data.js                          112 concepts + 124 edges + 112 shlokas
positions.js                     Graph coordinates
bannanje_kn.js                   702 Kannada source verses
bannanje_en.js                   702 English translations
bannanje_hi.js                   702 Hindi translations
bannanje_dev.js                  701 Sanskrit/Devanāgarī translations

build-bundle.py                  Rebuilds viewer-bundled.html after data changes
verify.py / verify.js            Data integrity & consistency checks
```

---

## How to Use

### Online
Open https://kvinayakpai.github.io/Bhagavadgita in any modern browser.

### Offline
1. Download `viewer-bundled.html` from this repo
2. Open in any browser (no server needed)
3. Works on phones, tablets, USB sticks, file:// protocol

### AI Chat Tab (Optional)
- Requires owner authentication (Anthropic API key in localStorage)
- Gear icon → Settings → Enter API key
- Uses `claude-sonnet-4-6` model

---

## Development

### Rebuilding the Bundle
After any changes to `data.js`, `positions.js`, or `bannanje_*.js`:
```bash
python3 build-bundle.py
```

### Running Checks
```bash
python3 verify.py    # Python data integrity
node verify.js       # JavaScript structure
```

### Pushing Changes
```bash
git add -A
git commit -m "description"
git push origin main
```

---

## Technical Stack

- **Core**: HTML5 SPA with vanilla JS (no frameworks)
- **Graph**: Hand-laid concept positioning
- **Styling**: CSS3 with Indic typography
- **Languages**: 4 scripts — IAST, Devanāgarī, Hindi, Kannada
- **Fonts**: Noto Sans, Noto Sans Devanāgarī, Noto Sans Kannada
- **Hosting**: GitHub Pages (static, no build step needed)

---

## Project Structure

| Tier | Concepts | Focus |
|------|----------|-------|
| 1. Paramārtha | Brahman, Paramātman, Puruṣottama, Tāratamya, Pañca-bheda | Absolute reality |
| 2. Tattva | Jīva, Īśvara, Prakṛti, Kāla, Karma, Svabhāva | Metaphysical entities |
| 3. Kṣetra-Kṣetrajña | Field, Knower, 24 elements, Indriyas | Dualism and knowledge |
| 4. Guṇa | Sattva, Rajas, Tamas, Threefold śraddhā & āhāra | Nature's qualities |
| 5. Yoga | Karma, Jñāna, Bhakti, Dhyāna, Sannyāsa | Yogic disciplines |
| 6. Sādhanā | Śraddhā, Vairāgya, Abhyāsa, Tapas, Dāna, Tyāga | Practice & self-discipline |
| 7. Antaḥkaraṇa | Manas, Buddhi, Ahaṅkāra, Citta | Inner instruments |
| 8. Dharma | Svadharma, Varṇa, Niṣkāma-karma, Sthita-prajña | Duty & righteousness |
| 9. Doṣa | Kāma, Krodha, Lobha, Moha, Āsurī sampad | Defects & obstacles |
| 10. Phala | Mokṣa, Jīvanmukti, Mukti-gradations (sālokya, sāmīpya, sārūpya, sāyujya) | Liberation & fruit |
| 11. Yajña | Dravya, Tapo, Yoga, Svādhyāya, Jñāna, Brahmārpaṇa | Sacrifice |
| 12. Pratīka | Aśvattha-vṛkṣa, Ratha-rūpaka, Om, Vibhūti | Symbolic forms |

---

## Contact & Attribution

- **Source Commentary:** Bannanje Govindacharya (bhagavadgitakannada.blogspot.com)
- **Interpretation Lens:** Madhva Vedānta siddhānta
- **Repository:** kvinayakpai (GitHub)

---

**Last commit:** 5e80786 — All languages integrated and deployed.
