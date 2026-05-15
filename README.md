# Bhagavad Gītā Concept Knowledge Graph

A concept-centered knowledge graph of the Bhagavad Gītā, read through Madhva siddhānta. Unlike a person-centered graph (Krishna, Arjuna, Brahmā…), this one organizes the **ideas** the Gītā teaches — yogas, tattvas, doṣas, phalas — and links them by typed relations grounded in verse.

## Status

This is an iterative build. Pieces land as separate commits.

- [x] **Concept data layer** (`data.js`) — 87 concepts across 12 tiers in tri-script (IAST + Devanāgarī + Kannada), ~30 anchor verses, Madhva-distinctive readings flagged
- [ ] Single-page HTML viewer — Browse / Focus / Map views (3 language variants)
- [ ] PptxGenJS deck generator
- [ ] Layout coordinates for the static map view
- [ ] Verification audit: every concept anchored to a verse passage in Bannanje Gītā-bhāṣya

## Tier schema (12)

| Tier | Devanāgarī | Kannada | Concepts covered |
|---|---|---|---|
| 1 | Paramārtha | परमार्थ | ಪರಮಾರ್ಥ | Brahman, Paramātman, Puruṣottama, Kṣara/Akṣara, Avatāra, Svarūpa-aikya, Sarvottamatva |
| 2 | Tattva | तत्त्व | ತತ್ತ್ವ | Jīva, Īśvara, Prakṛti, Para-prakṛti, Kāla, Karma, Svabhāva |
| 3 | Kṣetra-Kṣetrajña | क्षेत्र-क्षेत्रज्ञ | ಕ್ಷೇತ್ರ-ಕ್ಷೇತ್ರಜ್ಞ | Field, knower, 24 elements, mahābhūtas, avyakta, indriyas |
| 4 | Guṇa | गुण | ಗುಣ | Sattva, rajas, tamas + their products of knowledge/action/agent |
| 5 | Yoga | योग | ಯೋಗ | Karma, jñāna, bhakti, dhyāna, sannyāsa, buddhi, śaraṇāgati |
| 6 | Sādhanā | साधना | ಸಾಧನಾ | Śraddhā, vairāgya, abhyāsa, tapas, dāna, tyāga, samādhi |
| 7 | Antaḥkaraṇa | अन्तःकरण | ಅಂತಃಕರಣ | Manas, buddhi, ahaṅkāra, citta, antaryāmin, indriyas |
| 8 | Dharma | धर्म | ಧರ್ಮ | Svadharma, varṇa-svabhāva, niṣkāma-karma, sthita-prajña, daivī sampad |
| 9 | Doṣa | दोष | ದೋಷ | Kāma, krodha, lobha, moha, avidyā, dvandva, āsurī sampad |
| 10 | Phala | फल | ಫಲ | Mokṣa, paramā gati, brāhmī sthiti, jīvanmukti, arciradi-mārga |
| 11 | Yajña | यज्ञ | ಯಜ್ಞ | Dravya, tapo, yoga, svādhyāya, jñāna, brahmārpaṇa |
| 12 | Pratīka | प्रतीक | ಪ್ರತೀಕ | Aśvattha-vṛkṣa, ratha-rūpaka, praṇava-Om, jyotir-jyoti, vibhūti |

## Edge vocabulary

Concept-to-concept relations grounded in verse:

| Edge type | Reads as | Example |
|---|---|---|
| `is-a` | taxonomy | bhakti-yoga **is-a** yoga |
| `includes` | meronymy | jñāna-yajña **includes** svādhyāya |
| `leads-to` | causal/instrumental | sthita-prajñatā **leads-to** mokṣa |
| `opposite-of` | polarity | sattva **opposite-of** tamas |
| `antidote-to` | counteragent | jñāna **antidote-to** avidyā |
| `arises-from` | genetic chain | krodha **arises-from** kāma-vighāta |
| `predicates-on` | subject-of-predication | kṣetrajña **predicates-on** kṣetra |
| `transforms-into` | progression | saṅga **transforms-into** kāma |

## Interpretive lens — Madhva

Where Madhva's reading is distinctive (vs Advaita / Viśiṣṭādvaita), the data file flags it on the relevant node with a `madhva` note. Examples:

- **Brahman = Hari** (not nirguṇa absolute)
- **Akṣara-puruṣa = Lakṣmī / Śrī** (not impersonal Brahman)
- **Mokṣa has tāratamya** — gradations of liberation, not a single undifferentiated state
- **Jīva-bheda is real** — plurality of jīvas is eternal, not māyic
- **Bhakti is constitutive of mokṣa**, not merely a means

The strict-grounding standard: every concept and its Madhva reading anchored to a specific BG verse (or, where the reading is from commentary, to the Bannanje Gītā-bhāṣya volumes).

## Usage

```js
const { TIERS, NODES, EDGES, SHLOKAS } = require('./data.js');

// nodes by tier
const byTier = Object.fromEntries(TIERS.map(t => [t.id, []]));
NODES.forEach(n => byTier[n.tier].push(n));

// shloka lookup
const verse = SHLOKAS['purushottama'];  // { dev, iast, kn, ref }
```

## License

Source content (data, verses, commentary attribution) is shared under CC-BY-4.0. Code under MIT.
