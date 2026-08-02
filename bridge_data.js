/* Bridge — Tatvam Jalam Gita concept map, with cross-references orbiting each concept
 *
 * SCHEMA v2 (Aug 2026): concept-centric, not citation-pair-centric. Each key in
 * BRIDGE_CONCEPT_LINKS is a Gita concept-graph node id (matches data.js NODES[].id).
 * Its value is a list of verified cross-references from other sources — currently
 * only Katha Upanishad, more sources to follow (Vedas, other Upanishads, Puranas,
 * Itihasa) as they get the same transcription+verification treatment Katopanishad had.
 *
 * The Gita's OWN explanation of a concept is NOT duplicated here — the renderer reads
 * it directly from the already-loaded NODES array (data.js), which is the single
 * source of truth for Gita-side concept content. This file only holds the orbiting
 * satellites.
 *
 * CONTENT POLICY: every entry here is either (a) a place where Bannanje Govindacharya's
 * own commentary on one text explicitly names or quotes the other, or (b) a same-named
 * concept-graph tier shared by both sites' existing knowledge graphs. No comparison is
 * authored that Bannanje does not himself draw. See BRIDGE_PLAN.md for the full policy
 * and the target vision (radial concept map, eventually spanning the full Vedic corpus).
 *
 * TRANSLATION STATUS: `title` fields have en/kn plus dev/hi/sa where available.
 * `note` and `sourceNote` fields currently only have en/kn — Devanagari and Hindi
 * translations of the citation text itself are a known gap (see BRIDGE_PLAN.md).
 * The renderer falls back to English and shows a small "translation pending" marker
 * when a language is missing, rather than machine-translating scholarly commentary.
 *
 * Identical copy lives in both kvinayakpai/Bhagavadgita and kvinayakpai/Katopanishad.
 */

const BRIDGE_CONCEPT_LINKS = {
  paramatma: [
    {
      source: 'katha', entryId: 'vaishvanara-agni',
      title: { en: 'Vaishvanara — the Lord as fire within the heart', kn: 'ವೈಶ್ವಾನರ — ಹೃದಯದೊಳಗಿನ ಅಗ್ನಿಯಾಗಿ ಭಗವಂತ', dev: 'वैश्वानरः — हृदयस्थोऽग्निरूपो भगवान्', hi: 'वैश्वानर — हृदय में अग्निरूप भगवान्', sa: 'वैश्वानरः — हृदयस्थोऽग्निरूपो भगवान्' },
      ref: 'Katha 1.2.14–15 (Adhyaya 1, Valli 2)',
      note: {
        en: 'Explaining the fire-vidya Yama teaches Nachiketa, Bannanje says the Lord "abides in the cave of the heart" (nihitaṁ guhāyām) and quotes Gita 15.14 verbatim — "ahaṁ vaiśvānaro bhūtvā prāṇinām deham āśritaḥ" ("Becoming Vaishvanara, I dwell in the bodies of all beings") — to make the point: the same Vaishvanara indwelling the body is the fire Nachiketa is taught to worship.',
        kn: 'ಯಮ ನಚಿಕೇತನಿಗೆ ಕೊಡುವ ಅಗ್ನಿವಿದ್ಯೆಯ ವಿವರಣೆಯಲ್ಲಿ, ಭಗವಂತ "ಹೃದಯಗುಹೆಯಲ್ಲೇ" ಇದ್ದಾನೆ ಎಂದು ಬನ್ನಂಜೆ ಹೇಳುತ್ತಾ, "ಅಹಂ ವೈಶ್ವಾನರೋ ಭೂತ್ವಾ ಪ್ರಾಣಿನಾಂ ದೇಹಮಾಶ್ರಿತಃ" (ಗೀತೆ ೧೫.೧೪) ಎಂಬ ಶ್ಲೋಕವನ್ನು ಯಥಾವತ್ತಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ — ದೇಹದೊಳಗಿನ ಅದೇ ವೈಶ್ವಾನರನೇ ನಚಿಕೇತ ಉಪಾಸಿಸಬೇಕಾದ ಅಗ್ನಿ.',
      },
      sourceNote: { en: 'Bannanje directly quotes Gita 15.14 while teaching Katha 1.2.14–15 — an explicit cross-reference, not an inferred parallel.', kn: 'ಕಠ ೧.೨.೧೪-೧೫ರ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಗೀತೆ ೧೫.೧೪ ಅನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ — ಇದು ನಮ್ಮ ಊಹೆಯಲ್ಲ, ಬನ್ನಂಜೆಯವರ ಸ್ಪಷ್ಟ ಉಲ್ಲೇಖ.' },
    },
    {
      source: 'katha', entryId: 'prana-apana-vamana',
      title: { en: 'Prana-Apana and the Vamana Form', kn: 'ಪ್ರಾಣ-ಅಪಾನ ಮತ್ತು ವಾಮನ ರೂಪ', hi: 'प्राण-अपान और वामन रूप', sa: 'प्राणापानौ वामनरूपं च' },
      ref: 'Katha 2.2.3 (Adhyaya 2, Valli 2)',
      note: {
        en: '"ūrdhvaṃ prāṇam unnayati apānaṃ pratyag-asyati / madhye vāmanam āsīnaṃ viśve devā upāsate" — all gods worship the Vamana-form seated in the middle, who directs prāṇa upward and apāna downward. Explaining Gita 15.14\u2019s Vaishvanara digesting food via prāṇa-apāna, Bannanje glosses the Lord\u2019s heart-seated Vamana form and cites this Katha verse by its exact reference.',
        kn: '"ಊರ್ಧ್ವಂ ಪ್ರಾಣಮುನ್ನಯತಿ ಅಪಾನಂ ಪ್ರತ್ಯಗಸ್ಯತಿ" — ಮಧ್ಯದಲ್ಲಿ ಆಸೀನನಾದ ವಾಮನ ರೂಪವನ್ನೇ ಸಮಸ್ತ ದೇವತೆಗಳೂ ಉಪಾಸಿಸುತ್ತಾರೆ. ಗೀತಾ ೧೫.೧೪ರ ವೈಶ್ವಾನರ ಬೋಧನೆಯ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು (೨-೨-೩) ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Bannanje cites this Katha verse (2-2-3) by its exact reference while explaining Gita 15.14\u2019s Vaishvanara teaching — same neighborhood as the vaishvanara-agni entry above, different specific verse pairing.', kn: 'ಗೀತಾ ೧೫.೧೪ರ ವೈಶ್ವಾನರ ಬೋಧನೆಯ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು (೨-೨-೩) ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
    },
    {
      source: 'katha', entryId: 'angushthamatra-purusha',
      title: { en: 'The Thumb-Sized Person Within', kn: 'ಅಂಗುಷ್ಠಮಾತ್ರ ಪುರುಷ', hi: 'अंगुष्ठमात्र पुरुष', sa: 'अङ्गुष्ठमात्रः पुरुषः' },
      ref: 'Katha 2.1.12–13 (Adhyaya 2, Valli 1)',
      note: {
        en: '"aṅguṣṭha-mātraḥ puruṣo madhya ātmani tiṣṭhati" (12) — the Lord dwells, thumb-sized, at the center of the self; the following verse (13) extends this to "sadā janānāṃ hṛdaye sanniviṣṭaḥ," dwelling always in the heart of all people. Explaining the Lord\u2019s subtle-body presence as the inner "aham" at Gita 15.15, Bannanje quotes this Katha verse by its exact reference, and brings in Madhvacharya\u2019s own Katha commentary (Sarvamula) alongside it.',
        kn: '"ಅಂಗುಷ್ಠಮಾತ್ರಃ ಪುರುಷೋ ಮಧ್ಯ ಆತ್ಮನಿ ತಿಷ್ಠತಿ" (೧೨) — ಭಗವಂತ ಆತ್ಮನ ಮಧ್ಯದಲ್ಲಿ ಅಂಗುಷ್ಠಗಾತ್ರದಲ್ಲಿ ನೆಲೆಸಿದ್ದಾನೆ; ಮುಂದಿನ ಶ್ಲೋಕ (೧೩) ಇದನ್ನೇ "ಸದಾ ಜನಾನಾಂ ಹೃದಯೇ ಸನ್ನಿವಿಷ್ಟಃ" ಎಂದು ವಿಸ್ತರಿಸುತ್ತದೆ. ಗೀತಾ ೧೫.೧೫ರ "ಅಹಂ" ಎಂಬ ಆಂತರಿಕ ಸ್ವರೂಪದ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸಿ, ಮಧ್ವಾಚಾರ್ಯರ ಸ್ವಂತ ಕಠ ಭಾಷ್ಯವನ್ನೂ (ಸರ್ವಮೂಲ) ತರುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Bannanje quotes the Katha verse directly in his Gita commentary and even brings in Madhvacharya\u2019s own Katha bhashya alongside it — a doubly-sourced citation.', kn: 'ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಕಠ ಶ್ಲೋಕವನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸಿ, ಜೊತೆಗೆ ಮಧ್ವಾಚಾರ್ಯರ ಸ್ವಂತ ಕಠ ಭಾಷ್ಯವನ್ನೂ ತರುತ್ತಾರೆ.' },
    },
  ],
  purushottama: [
    {
      source: 'katha', entryId: 'om-tat-sat',
      title: { en: 'Om Tat Sat — the Threefold Designation', kn: 'ಓಂ ತತ್ ಸತ್ — ತ್ರಿವಿಧ ನಿರ್ದೇಶ', hi: 'ॐ तत् सत् — त्रिविध निर्देश', sa: 'ॐ तत् सत् त्रिविधो निर्देशः' },
      ref: 'Katha 2.3.12 (Adhyaya 2, Valli 3)',
      note: {
        en: '"naiva vācā na manasā prāptuṃ śakyo na cakṣuṣā / astīti bruvato\u2019nyatra kathaṃ tad-upalabhyate" — the Lord cannot be grasped except through the affirmation "He is" (asti). Bannanje: "there is a statement in the Gita" and quotes 17.23 — "oṃ tat sad iti nirdeśo brahmaṇas tri-vidhaḥ smṛtaḥ" — to explain this "sat"-mode of upāsanā.',
        kn: '"ನೈವ ವಾಚಾ ನ ಮನಸಾ ಪ್ರಾಪ್ತುಂ ಶಕ್ಯೋ ನ ಚಕ್ಷುಷಾ" — "ಅಸ್ತಿ" ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳುವವನಿಗಲ್ಲದೆ ಬೇರೆ ಯಾರಿಗೂ ಭಗವಂತ ಸಿಗಲಾರ. ಬನ್ನಂಜೆ "ಗೀತೆಯಲ್ಲಿ ಒಂದು ಮಾತು ಬಂದಿದೆ" ಎಂದು "ಓಂ ತತ್ ಸದಿತಿ ನಿರ್ದೇಶೋ ಬ್ರಹ್ಮಣಸ್ತ್ರಿವಿಧಃ ಸ್ಮೃತಃ" (ಗೀತೆ ೧೭.೨೩) ಅನ್ನು ಉಲ್ಲೇಖಿಸಿ ಈ "ಸತ್" ಉಪಾಸನೆಯ ಮುಖವನ್ನು ವಿವರಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Explicit citation while glossing the "sat" mode of worship in Katha.', kn: 'ಕಠದ "ಸತ್" ಉಪಾಸನಾ ಮುಖವನ್ನು ವಿವರಿಸುತ್ತಾ ಸ್ಪಷ್ಟ ಉಲ್ಲೇಖ.' },
    },
    {
      source: 'katha', entryId: 'brahman-as-light',
      title: { en: 'Brahman as the Light Behind All Light', kn: 'ಎಲ್ಲಾ ಬೆಳಕುಗಳ ಮೂಲ ಬೆಳಕಾಗಿ ಭಗವಂತ', hi: 'सब प्रकाशों का मूल प्रकाश — ब्रह्म', sa: 'सर्वप्रकाशानां मूलं तेजो ब्रह्म' },
      ref: 'Katha 2.2.15 (Adhyaya 2, Valli 2, closing verse)',
      note: {
        en: '"na tatra sūryo bhāti na candra-tārakam" — the same declaration in near-identical wording as Gita 15.6, "na tad bhāsayate sūryo na śaśāṅko na pāvakaḥ" (neither sun, moon, nor fire illumines that supreme abode). Bannanje writes: "Krishna says exactly this in the Gita" and quotes 15.6 in full alongside it.',
        kn: '"ನ ತತ್ರ ಸೂರ್ಯೋ ಭಾತಿ ನ ಚಂದ್ರತಾರಕಂ" — "ನ ತದ್ ಭಾಸಯತೇ ಸೂರ್ಯೋ ನ ಶಶಾಂಕೋ ನ ಪಾವಕಃ" (ಗೀತೆ ೧೫.೬) ಎಂಬ ಬಹುತೇಕ ಒಂದೇ ಪದಗಳ ಘೋಷಣೆ. ಬನ್ನಂಜೆ "ಇದನ್ನೇ ಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ ಹೀಗೆ ಹೇಳಿದ್ದಾನೆ" ಎಂದು ಬರೆದು ೧೫.೬ ಅನ್ನು ಪೂರ್ಣವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'A bidirectional citation — Bannanje quotes this pairing in BOTH his Katha commentary and his Gita 15.6 commentary, each time citing the other text explicitly by name.', kn: 'ಪರಸ್ಪರ ಉಲ್ಲೇಖ — ಬನ್ನಂಜೆ ಈ ಶ್ಲೋಕಜೋಡಿಯನ್ನು ಕಠ ಮತ್ತು ಗೀತಾ ಎರಡೂ ವ್ಯಾಖ್ಯಾನಗಳಲ್ಲಿ, ಪ್ರತಿ ಬಾರಿ ಇನ್ನೊಂದನ್ನು ಹೆಸರಿಸುತ್ತಾ, ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
    },
  ],
  vibhuti: [
    {
      source: 'katha', entryId: 'ashvattha-tree',
      title: { en: 'The Cosmic Ashvattha Tree', kn: 'ಸಂಸಾರ ಅಶ್ವತ್ಥ ವೃಕ್ಷ', hi: 'संसार-अश्वत्थ वृक्ष', sa: 'संसाराश्वत्थवृक्षः' },
      ref: 'Katha 2.3.1 (Adhyaya 2, Valli 3, opening verse)',
      note: {
        en: '"ūrdhvamūlo\u2019vāk-śākha eṣo\u2019śvatthaḥ sanātanaḥ" — the same tree-image opens Katha\u2019s final Valli as Gita 15.1\u2019s "ūrdhvamūlam adhaḥ-śākham aśvatthaṃ prāhur avyayam," with roots above and the Vedas as its leaves. Bannanje: "we see this same description explained by Krishna in the fifteenth chapter of the Gita" — and separately, discussing guṇas at BG 14.18, quotes this Katha verse by its exact reference (2-3-1) to explain the word "ūrdhva."',
        kn: '"ಊರ್ಧ್ವಮೂಲೋಽವಾಕ್ಶಾಖ ಏಷೋಽಶ್ವತ್ಥಃ ಸನಾತನಃ" — "ಊರ್ಧ್ವಮೂಲಮ್ ಅಧಃಶಾಖಮ್ ಅಶ್ವತ್ಥಮ್ ಪ್ರಾಹುಃ ಅವ್ಯಯಮ್" (ಗೀತೆ ೧೫.೧) ಎಂಬ ಇದೇ ಮರದ ಚಿತ್ರಣ ಕಠದ ಕೊನೆಯ ವಲ್ಲಿಯ ಆರಂಭ. ಬನ್ನಂಜೆ: "ಇಲ್ಲಿ ಬಂದಿರುವ ವಿವರಣೆಯನ್ನೇ ಕೃಷ್ಣ ಗೀತೆಯ ಹದಿನೈದನೇ ಅಧ್ಯಾಯದಲ್ಲಿ ವಿವರಿಸಿ ಹೇಳಿರುವುದನ್ನು ಕಾಣುತ್ತೇವೆ" — ಮತ್ತು ಪ್ರತ್ಯೇಕವಾಗಿ ಗೀತೆ ೧೪.೧೮ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು (೨-೩-೧) ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉದಾಹರಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Bidirectional and doubled: cited in Katha\u2019s own commentary AND twice in the Gita commentary (15.1 and 14.18).', kn: 'ಪರಸ್ಪರ ಮತ್ತು ಎರಡು ಬಾರಿ: ಕಠದ ಸ್ವಂತ ವ್ಯಾಖ್ಯಾನದಲ್ಲೂ, ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ (೧೫.೧ ಮತ್ತು ೧೪.೧೮) ಎರಡು ಬಾರಿಯೂ ಉಲ್ಲೇಖಿತ.' },
    },
    {
      source: 'katha', entryId: 'cosmic-regulation',
      title: { en: 'The Devas Function Only Out of Fear of Him', kn: 'ಭಗವಂತನ ಭಯದಿಂದಲೇ ದೇವತೆಗಳ ಕಾರ್ಯ', hi: 'भगवान् के भय से ही देवताओं का कार्य', sa: 'भगवद्भयादेव देवानां कार्यम्' },
      ref: 'Katha 2.3.2 (Adhyaya 2, Valli 3)',
      note: {
        en: '"bhayād asyāgnis tapati bhayāt tapati sūryaḥ / bhayād indraś ca vāyuś ca mṛtyur dhāvati pañcamaḥ" — fire, sun, Indra, wind, and Death himself all function bound by fear of Him. Bannanje: "this same explanation appears in the Gita too" and quotes 9.19 — "tapāmy aham ahaṃ varṣaṃ nigṛhṇāmy utsṛjāmi ca / amṛtaṃ caiva mṛtyuś ca sad-asac cāham arjuna" ("I scorch, I withhold and send the rain, I am both immortality and death") — with its exact reference.',
        kn: '"ಭಯಾದಸ್ಯಾಗ್ನಿಸ್ತಪತಿ ಭಯಾತ್ ತಪತಿ ಸೂರ್ಯಃ" — ಅಗ್ನಿ, ಸೂರ್ಯ, ಇಂದ್ರ, ವಾಯು, ಸ್ವತಃ ಮೃತ್ಯುವೂ ಭಗವಂತನ ಭಯದಿಂದಲೇ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಾರೆ. ಬನ್ನಂಜೆ: "ಇದೇ ವಿವರಣೆ ಗೀತೆಯಲ್ಲೂ ಕೂಡಾ ಬಂದಿದೆ" ಎಂದು "ತಪಾಮ್ಯಹಮ್ ಅಹಂ ವರ್ಷಂ ನಿಗೃಹ್ಣಾಮ್ಯುತ್ಸೃಜಾಮಿ ಚ" (ಗೀತೆ ೯.೧೯) ಅನ್ನು ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Bannanje also notes the same idea appears in Taittiriya Upanishad\u2019s Brahmananda Valli (8th anuvaka) — he is drawing a three-way parallel, of which the Gita link is explicit and named.', kn: 'ಬನ್ನಂಜೆ ಇದೇ ಭಾವ ತೈತ್ತಿರೀಯ ಉಪನಿಷತ್ತಿನ ಬ್ರಹ್ಮಾನಂದವಲ್ಲಿಯಲ್ಲೂ (೮ನೇ ಅನುವಾಕ) ಬರುತ್ತದೆ ಎಂದು ಸೂಚಿಸುತ್ತಾರೆ — ಮೂರು-ಮೂಲಗಳ ಸಮಾನತೆ; ಗೀತಾ ಉಲ್ಲೇಖ ಸ್ಪಷ್ಟ ಮತ್ತು ಹೆಸರಿಸಲ್ಪಟ್ಟಿದೆ.' },
    },
  ],
  shritattva: [
    {
      source: 'katha', entryId: 'mahad-avyakta-purusha',
      title: { en: 'Avyakta — Beyond the Mahat-Tattva', kn: 'ಅವ್ಯಕ್ತ — ಮಹತ್ತತ್ವಕ್ಕಿಂತ ಮಿಗಿಲು', hi: 'अव्यक्त — महत्तत्त्व से परे', sa: 'अव्यक्तं महत्तत्त्वात् परम्' },
      ref: 'Katha 1.3.11 (Adhyaya 1, Valli 3)',
      note: {
        en: '"mahataḥ param avyaktam avyaktād puruṣaḥ paraḥ / puruṣān na paraṃ kiñcit sā kāṣṭhā sā parā gatiḥ" — beyond the great Self (mahān) is the unmanifest, and beyond the unmanifest is the Purusha; there is nothing higher than Purusha. Discussing why the unmanifest form still needs contemplation through named qualities at Gita 12.1, Bannanje lists Lakshmi\u2019s names — Shri-tattva, Akshara, Avyakta, Prakriti — and quotes this Katha verse verbatim to explain what "avyakta" and "akshara" mean.',
        kn: '"ಮಹತಃ ಪರಮವ್ಯಕ್ತಮ್ ಅವ್ಯಕ್ತಾತ್ ಪುರುಷಃ ಪರಃ" — ಮಹತ್ತಿಗಿಂತ ಅವ್ಯಕ್ತ ಮಿಗಿಲು, ಅವ್ಯಕ್ತಕ್ಕಿಂತ ಪುರುಷ ಮಿಗಿಲು; ಪುರುಷನಿಗಿಂತ ಮಿಗಿಲಾದುದೇನೂ ಇಲ್ಲ. ಗೀತೆ ೧೨.೧ರ ಅವ್ಯಕ್ತ ರೂಪಕ್ಕೂ ಹೆಸರಿನ ಗುಣಗಳ ಮೂಲಕ ಚಿಂತನೆ ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಶ್ರೀಲಕ್ಷ್ಮಿಯ ಹೆಸರುಗಳನ್ನು (ಶ್ರೀತತ್ವ, ಅಕ್ಷರಳು, ಅವ್ಯಕ್ತಳು, ಪ್ರಕೃತಿ) ಪಟ್ಟಿಮಾಡಿ, ಈ ಕಠ ಶ್ಲೋಕವನ್ನು ಯಥಾವತ್ತಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
      },
      sourceNote: { en: 'Bannanje quotes the Katha verse verbatim in his Gita commentary to gloss Madhva-specific terms (Shri-tattva, Akshara) that appear across both texts.', kn: 'ಇಬ್ಬಗೆಯ ಗ್ರಂಥಗಳಲ್ಲೂ ಬರುವ ಮಾಧ್ವ-ವಿಶಿಷ್ಟ ಪದಗಳ (ಶ್ರೀತತ್ವ, ಅಕ್ಷರ) ವಿವರಣೆಗಾಗಿ ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಕಠ ಶ್ಲೋಕವನ್ನು ಯಥಾವತ್ತಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
    },
  ],
  jiva: [
    {
      source: 'katha', entryId: 'eleven-nine-gates',
      title: { en: 'The Body as a City of Gates', kn: 'ದ್ವಾರಗಳ ಪಟ್ಟಣವಾಗಿ ಶರೀರ', hi: 'द्वारों का नगर — शरीर', sa: 'द्वाराणां पुरं शरीरम्' },
      ref: 'Katha 2.2.1 (Adhyaya 2, Valli 2)',
      note: {
        en: 'Yama calls the body "ekādaśa-dvāram puram" — a city of eleven gates (the nine familiar openings plus the navel and the crown/sahasrāra). Bannanje explicitly notes "we know Krishna describes this as nava-dvāre pure dehī" — "navadvāre pure dehī" (Gita 5.13), the body as a city of nine gates in which the self-controlled soul dwells at ease.',
        kn: 'ಯಮ ಶರೀರವನ್ನು "ಏಕಾದಶದ್ವಾರಂ ಪುರಂ" — ಹನ್ನೊಂದು ದ್ವಾರಗಳ ಪಟ್ಟಣ ಎಂದು ಕರೆಯುತ್ತಾನೆ (ಒಂಬತ್ತು ಸಾಮಾನ್ಯ ದ್ವಾರಗಳ ಜೊತೆಗೆ ಹೊಕ್ಕುಳು ಮತ್ತು ಸಹಸ್ರಾರ). ಬನ್ನಂಜೆ "ಗೀತೆಯಲ್ಲಿ ಕೃಷ್ಣ ನವದ್ವಾರೇ ಪುರೇ ದೇಹೀ ಎಂದು ವಿವರಿಸಿರುವುದು ನಮಗೆ ತಿಳಿದಿದೆ (ಗೀತಾ ೫.೧೩)" ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ — ಒಂಬತ್ತು ದ್ವಾರಗಳ ಪಟ್ಟಣದಂತಿರುವ ಶರೀರದಲ್ಲಿ ಜೀವ ಸುಖವಾಗಿ ನೆಲೆಸಿರುತ್ತಾನೆ.',
      },
      sourceNote: { en: 'Bannanje names the Gita verse and chapter directly while explaining the Katha verse.', kn: 'ಕಠ ಶ್ಲೋಕದ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಗೀತಾ ಶ್ಲೋಕ-ಅಧ್ಯಾಯವನ್ನು ನೇರವಾಗಿ ಹೆಸರಿಸುತ್ತಾರೆ.' },
    },
  ],
  shraddha: [
    {
      source: 'katha', entryId: 'shreyas-preyas',
      title: { en: 'Śreyas vs Preyas — the beneficial and the pleasant', kn: 'ಶ್ರೇಯಸ್ಸು ಮತ್ತು ಪ್ರೇಯಸ್ಸು', dev: 'श्रेयः प्रेयश्च', hi: 'श्रेयस् और प्रेयस्', sa: 'श्रेयः प्रेयश्च' },
      ref: 'Katha 1.2.1–2 (Adhyaya 1, Valli 2)',
      note: {
        en: '"śreyaśca preyaśca manuṣyam etastau samparītya vivinakti dhīraḥ / śreyo hi dhīro\u2019bhipreyaso vṛṇīte preyo mando yogakṣemād vṛṇīte" — both śreyas (the good) and preyas (the pleasant) present themselves to every person; the wise one weighs them and chooses śreyas, while the fool, out of concern for gain and security (yoga-kṣema), chooses preyas. Explaining equanimity toward pleasant and unpleasant outcomes at Gita 5.20, Bannanje quotes this verse directly: "preyo mando yogakṣemād vṛṇīte."',
        kn: '"ಶ್ರೇಯಶ್ಚ ಪ್ರೇಯಶ್ಚ ಮನುಷ್ಯಮೇತಸ್ತೌ ಸಂಪರೀತ್ಯ ವಿವಿನಕ್ತಿ ಧೀರಃ | ಶ್ರೇಯೋ ಹಿ ಧೀರೋಽಭಿಪ್ರೇಯಸೋ ವೃಣೀತೇ ಪ್ರೇಯೋ ಮಂದೋ ಯೋಗಕ್ಷೇಮಾದ್ವೃಣೀತೇ ||೨||" — ಶ್ರೇಯಸ್ಸು ಮತ್ತು ಪ್ರೇಯಸ್ಸು ಇಬ್ಬಗೆಯ ದಾರಿಗಳು ಎಲ್ಲರಿಗೂ ಎದುರಾಗುತ್ತವೆ; ಧೀರನು ಶ್ರೇಯಸ್ಸನ್ನು, ಮಂದನು ಯೋಗಕ್ಷೇಮಕ್ಕಾಗಿ ಪ್ರೇಯಸ್ಸನ್ನೂ ಆರಿಸಿಕೊಳ್ಳುತ್ತಾನೆ ಎಂದು ಯಮ ನಚಿಕೇತನಿಗೆ ಉಪದೇಶಿಸುತ್ತಾನೆ. ಗೀತೆ ೫.೨೦ರ ಸುಖ-ದುಃಖಗಳಲ್ಲಿ ಸಮಬುದ್ಧಿಯ ವಿವರಣೆಯಲ್ಲಿ, ಬನ್ನಂಜೆ ಈ ಶ್ಲೋಕವನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ: "ಪ್ರೇಯೋ ಮಂದೋ ಯೋಗಕ್ಷೇಮಾದ್ ವೃಣೀತೇ".',
      },
      sourceNote: { en: 'A reciprocal citation: Bannanje\u2019s Gita commentary quotes the Katha verse by name to reinforce the same teaching in a different setting.', kn: 'ಇದೊಂದು ಪರಸ್ಪರ ಉಲ್ಲೇಖ — ಬನ್ನಂಜೆಯವರ ಗೀತಾ ವ್ಯಾಖ್ಯಾನ ಕಠ ಶ್ಲೋಕವನ್ನು ಹೆಸರಿಸಿ ಉಲ್ಲೇಖಿಸುತ್ತದೆ.' },
    },
    {
      source: 'katha', entryId: 'nachiketa-refusal-of-wealth',
      title: { en: 'Nachiketa\u2019s Refusal — Knowledge Over Every Worldly Gift', kn: 'ನಚಿಕೇತನ ನಿರಾಕರಣೆ — ಎಲ್ಲಾ ಲೌಕಿಕ ಕೊಡುಗೆಗಿಂತ ಜ್ಞಾನ', hi: 'नचिकेता का अस्वीकार — हर सांसारिक उपहार से बढ़कर ज्ञान', sa: 'नचिकेतसो नाकरणम् — सर्वलौकिकदानात् परं ज्ञानम्' },
      ref: 'Katha 1.1.23–29 (Adhyaya 1, Valli 1)',
      note: {
        en: 'Yama offers Nachiketa sons, wealth, a kingdom, celestial pleasures — "if you think this equal to your third boon, choose it instead." Nachiketa refuses all of it, in his own words: "na vittena tarpaṇīyo manuṣyo lapsyāmahe vittam adrākṣma cet tvām / jīviṣyāmo yāvad īśiṣyasi tvaṁ varas tu me varaṇīyaḥ sa eva" (1.1.27) — "man cannot be satisfied with wealth; we would possess wealth if we have seen you [Death himself]; we shall live only as long as you allow — that alone remains the boon I choose." Bannanje returns to this episode three times across the Gita: at 9.28 as proof that knowledge burns away sin more than any other means; at 14.17 as the model of full sattva-guna resolve; at 16.10 as the model of a desire that can never be filled by wealth.',
        kn: 'ಯಮ ನಚಿಕೇತನಿಗೆ ಪುತ್ರ-ಪೌತ್ರ, ಧನ, ಸಾಮ್ರಾಜ್ಯ, ದೇವಲೋಕ ಭೋಗಗಳನ್ನು ಕೊಡುತ್ತೇನೆ ಎಂದಾಗ, ನಚಿಕೇತ ಸ್ವತಃ ಹೀಗೆ ಹೇಳಿ ಎಲ್ಲವನ್ನೂ ನಿರಾಕರಿಸುತ್ತಾನೆ: "ನ ವಿತ್ತೇನ ತರ್ಪಣೀಯೋ ಮನುಷ್ಯೋ ಲಪ್ಸ್ಯಾಮಹೇ ವಿತ್ತಮದ್ರಾಕ್ಷ್ಮ ಚೇತ್ ತ್ವಾಮ್ | ಜೀವಿಷ್ಯಾಮೋ ಯಾವದೀಶಿಷ್ಯಸಿ ತ್ವಂ ವರಸ್ತು ಮೇ ವರಣೀಯಃ ಸ ಏವ ||೨೭||" — "ಮನುಷ್ಯನು ಧನದಿಂದ ತೃಪ್ತನಾಗುವುದಿಲ್ಲ; ನಿನ್ನನ್ನು (ಸಾಕ್ಷಾತ್ ಮೃತ್ಯುವನ್ನೇ) ಕಂಡ ಮೇಲೆ ಧನ ಸಿಕ್ಕಂತೆಯೇ; ನೀನಿರುವ ತನಕ ಮಾತ್ರ ನಾವು ಬದುಕುತ್ತೇವೆ — ಆದ್ದರಿಂದ ನಾನು ಕೇಳಿದ ವರವೇ ನನಗೆ ಬೇಕಾದ್ದು." ಬನ್ನಂಜೆ ಗೀತೆಯುದ್ದಕ್ಕೂ ಇದೇ ಕಠ ಪ್ರಸಂಗಕ್ಕೆ ಮೂರು ಬಾರಿ ಮರಳುತ್ತಾರೆ: ೯.೨೮ರಲ್ಲಿ ಜ್ಞಾನ ಬೇರೆ ಯಾವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಪಾಪ ಸುಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿದರ್ಶನ; ೧೪.೧೭ರಲ್ಲಿ ಪೂರ್ಣ ಸತ್ವಗುಣ ದೃಢಸಂಕಲ್ಪದ ಮಾದರಿ; ೧೬.೧೦ರಲ್ಲಿ ಎಂದೂ ತೃಪ್ತಿಯಾಗದ ಧನಬಯಕೆಯ ಮಾದರಿಯಾಗಿ.',
      },
      sourceNote: { en: 'The most frequently cross-cited episode found in this sweep — Bannanje reaches for it three separate times in his Gita commentary alone (BG 9.28, 14.17, 16.10).', kn: 'ಈ ಶೋಧನೆಯಲ್ಲಿ ಪತ್ತೆಯಾದ ಅತ್ಯಂತ ಹೆಚ್ಚು ಬಾರಿ ಉಲ್ಲೇಖಿಸಲ್ಪಟ್ಟ ಪ್ರಸಂಗ — ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲೇ ಮೂರು ಪ್ರತ್ಯೇಕ ಬಾರಿ (ಗೀತೆ ೯.೨೮, ೧೪.೧೭, ೧೬.೧೦) ಇದನ್ನು ಬಳಸುತ್ತಾರೆ.' },
    },
    {
      source: 'katha', entryId: 'honoring-the-jnani',
      title: { en: 'Yama\u2019s Apology — Honoring the Knower', kn: 'ಯಮನ ಕ್ಷಮಾಯಾಚನೆ — ಜ್ಞಾನಿಯ ಗೌರವ', hi: 'यम की क्षमायाचना — ज्ञानी का सम्मान', sa: 'यमस्य क्षमायाचनम् — ज्ञानिनः सम्मानः' },
      ref: 'Katha 1.1.9–10 area (Adhyaya 1, Valli 1)',
      note: {
        en: 'When Yama returns to find Nachiketa has waited three nights unfed as a guest, he bows and asks forgiveness. Bannanje: "this is the great quality of elders" — as Krishna says in the Gita (4.3), "śraddhāvān labhate jñānam" ("the one with faith attains knowledge") — because a knower is supremely dear to the Lord, so disrespecting one is disrespecting the Lord himself.',
        kn: 'ಮೂರು ದಿನ ಆಹಾರವಿಲ್ಲದೆ ಕಾದ ಜ್ಞಾನಿ ಅತಿಥಿ ನಚಿಕೇತನನ್ನು ಕಂಡ ಯಮ ನಮಸ್ಕರಿಸಿ ಕ್ಷಮೆ ಬೇಡುತ್ತಾನೆ. ಬನ್ನಂಜೆ: "ಇದು ಹಿರಿಯರ ದೊಡ್ಡ ಗುಣ" — "ಶ್ರದ್ಧಾವಾನ್ ಲಭತೇ ಜ್ಞಾನಂ" (ಗೀತೆ ೪.೩) ಎಂದು ಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ ಹೇಳಿರುವಂತೆ — ಜ್ಞಾನಿಗಳಿಗೆ ಅಪಮಾನ ಮಾಡಿದರೆ ಅದು ಭಗವಂತನನ್ನು ಅಪಮಾನ ಮಾಡಿದಂತೆ, ಏಕೆಂದರೆ ಜ್ಞಾನಿಗಳು ಭಗವಂತನಿಗೆ ಪರಮ ಪ್ರಿಯರು.',
      },
      sourceNote: { en: 'A brief supporting citation — shorter than the others, but still an explicit named reference, not an inferred parallel.', kn: 'ಸಣ್ಣ ಪುಷ್ಟೀಕರಣ ಉಲ್ಲೇಖ — ಇತರರಿಗಿಂತ ಚಿಕ್ಕದಾದರೂ ಸ್ಪಷ್ಟ ಹೆಸರಿಸಿದ ಉಲ್ಲೇಖ, ಊಹಿತ ಸಾಮ್ಯವಲ್ಲ.' },
    },
  ],
  yajna: [
    {
      source: 'katha', entryId: 'yajna-dana-tapas',
      title: { en: 'Yajña, Dāna, Tapas — the three daily karmas', kn: 'ಯಜ್ಞ, ದಾನ, ತಪಃ — ಮೂರು ನಿತ್ಯಕರ್ಮಗಳು', dev: 'यज्ञ-दान-तपांसि', hi: 'यज्ञ, दान, तप — तीन नित्यकर्म', sa: 'यज्ञ-दान-तपांसि' },
      ref: 'Katha 1.1.16–17, the Nachiketa-agni teaching (Adhyaya 1, Valli 1)',
      note: {
        en: 'While explaining how an ordinary person can perform the "three karmas" daily to become a "triṇāciketa" (one who has kindled the Nachiketa fire three times), Bannanje explicitly points the reader to "the seventeenth chapter of the Gita" for a fuller explanation of yajña, dāna, and tapas and their sāttvika/rājasa/tāmasa divisions (Gita 17).',
        kn: 'ಪ್ರತಿಯೊಬ್ಬರೂ "ತ್ರಿಣಾಚಿಕೇತ"ರಾಗಲು ಮೂರು ಕರ್ಮಗಳನ್ನು ದಿನವೂ ಹೇಗೆ ಮಾಡಬಹುದು ಎಂದು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಓದುಗರನ್ನು ನೇರವಾಗಿ "ಗೀತೆಯ ಹದಿನೇಳನೇ ಅಧ್ಯಾಯ"ಕ್ಕೆ ಸೂಚಿಸುತ್ತಾರೆ — ಯಜ್ಞ, ದಾನ, ತಪಃ ಎನ್ನುವ ಮೂರು ಕರ್ಮಗಳ ಸಾತ್ವಿಕ-ರಾಜಸ-ತಾಮಸ ವಿಭಜನೆಯ ಪೂರ್ಣ ವಿವರಣೆಗಾಗಿ (ಗೀತೆ ೧೭).',
      },
      sourceNote: { en: 'Bannanje names the Gita chapter directly in his Katha exposition, pointing readers there for the fuller treatment.', kn: 'ಬನ್ನಂಜೆ ತಮ್ಮ ಕಠ ವಿವರಣೆಯಲ್ಲಿ ಗೀತಾ ಅಧ್ಯಾಯವನ್ನು ಹೆಸರಿಸಿ ಸೂಚಿಸುತ್ತಾರೆ.' },
    },
  ],
  karmayoga: [
    {
      source: 'katha', entryId: 'karma-as-worship',
      title: { en: 'Turning every action into worship', kn: 'ಪ್ರತಿಯೊಂದು ಕರ್ಮವನ್ನೂ ಪೂಜೆಯಾಗಿಸುವುದು', dev: 'सर्वकर्मणां पूजारूपत्वम्', hi: 'हर कर्म को पूजा बनाना', sa: 'सर्वकर्मणां पूजारूपत्वम्' },
      ref: 'Katha 1.1.20 area (Adhyaya 1, Valli 1)',
      note: {
        en: 'Addressing whether an ordinary person can really perform yajña, dāna, and tapas every day, Bannanje answers by pointing to "a beautiful explanation Krishna gives in the Gita (chapter 12)" — Bhakti-yoga\u2019s teaching that every word can be a hymn, every step a circumambulation, every action an offering, so daily life itself becomes worship.',
        kn: 'ಸಾಮಾನ್ಯ ಮನುಷ್ಯನಿಗೆ ದಿನವೂ ಯಜ್ಞ-ದಾನ-ತಪಸ್ಸು ಸಾಧ್ಯವೇ ಎನ್ನುವ ಪ್ರಶ್ನೆಗೆ ಬನ್ನಂಜೆ "ಶ್ರೀಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ (ಅಧ್ಯಾಯ ೧೨) ಕೊಟ್ಟ ಸುಂದರ ವಿವರಣೆ" ಎಂದು ಸೂಚಿಸಿ ಉತ್ತರಿಸುತ್ತಾರೆ — ಪ್ರತಿಯೊಂದು ಮಾತೂ ಸ್ತೋತ್ರ, ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯೂ ಪ್ರದಕ್ಷಿಣೆ, ಪ್ರತಿಯೊಂದು ಕ್ರಿಯೆಯೂ ಅರ್ಪಣೆಯಾಗಬಲ್ಲದು ಎಂಬ ಭಕ್ತಿಯೋಗದ ಬೋಧನೆ.',
      },
      sourceNote: { en: 'A direct, named pointer from the Katha commentary to a specific Gita chapter answering the same practical question.', kn: 'ಕಠ ವ್ಯಾಖ್ಯಾನದಿಂದ ಗೀತೆಯ ನಿರ್ದಿಷ್ಟ ಅಧ್ಯಾಯಕ್ಕೆ ನೇರ ಸೂಚನೆ.' },
    },
  ],
};


const BRIDGE_GITA_TIERS = [
  { id:'parabrahma',  en:'Parabrahma',  kn:'ಪರಬ್ರಹ್ಮ',  dev:'परब्रह्म',   hi:'परब्रह्म',   gloss:'The Supreme Lord — Bhagavanta, Hari, Krishna' },
  { id:'shritattva',  en:'Shritattva',  kn:'ಶ್ರೀತತ್ವ',   dev:'श्रीतत्त्व',  hi:'श्रीतत्त्व',  gloss:'Lakshmi as aksharaprakriti — second principle' },
  { id:'jivatattva',  en:'Jivatattva',  kn:'ಜೀವತತ್ವ',   dev:'जीवतत्त्व',  hi:'जीवतत्त्व',  gloss:'The individual soul — nature, bondage, identity' },
  { id:'prakriti',    en:'Prakriti',    kn:'ಪ್ರಕೃತಿ',    dev:'प्रकृति',    hi:'प्रकृति',    gloss:'Nature — inert eightfold and the three gunas' },
  { id:'yoga',        en:'Yoga',        kn:'ಯೋಗ',        dev:'योग',        hi:'योग',        gloss:'Paths — karma, jnana, bhakti, dhyana' },
  { id:'antahkarana', en:'Antahkarana', kn:'ಅಂತಃಕರಣ',   dev:'अन्तःकरण',   hi:'अंतःकरण',    gloss:'Inner instruments — manas, buddhi, ahankara, indriya' },
  { id:'sadhana',     en:'Sadhana',     kn:'ಸಾಧನೆ',      dev:'साधना',      hi:'साधना',      gloss:'Practices — shraddha, upasane, sharanagati, yajna' },
  { id:'dharma',      en:'Dharma',      kn:'ಧರ್ಮ',       dev:'धर्म',       hi:'धर्म',       gloss:'Ethics — svadharma, nishkama karma, satya' },
  { id:'dosha',       en:'Dosha',       kn:'ದೋಷ',        dev:'दोष',        hi:'दोष',        gloss:'Defects — kama, krodha, lobha, moha, avidya' },
  { id:'phala',       en:'Phala',       kn:'ಫಲ',         dev:'फल',         hi:'फल',         gloss:'Liberation — moksha, ananda, shanti' },
];
const BRIDGE_GITA_CONCEPTS = [
  /* ── PARABRAHMA (7) ── */
  {
    id:'bhagavanta', tier:'parabrahma',
    en:'Bhagavanta', kn:'ಭಗವಂತ',
    title:{ en:'Bhagavanta — The Lord', kn:'ಭಗವಂತ', dev:'भगवान् — परमेश्वरः', hi:'भगवान् — परमेश्वर'},
    note:{ en:'Bannanje consistently uses "Bhagavanta" for the Supreme Lord Krishna throughout. At 15.17 he is called Purushottama, beyond both kshara and akshara. He is sarvottama — highest in the taratamya hierarchy.', kn:'ಭಗವಂತನೇ ಪರಮಾತ್ಮ, ಪುರುಷೋತ್ತಮ. ಅವನು ಕ್ಷರ-ಅಕ್ಷರ ಎರಡಕ್ಕೂ ಮಿಗಿಲಾದವನು (15.17).', dev:'बन्नंजे-गोविन्दाचार्यैः सर्वत्र "भगवान्" इति शब्देन कृष्णः परमेश्वरः अभिधीयते। गीता-पञ्चदशाध्याये (१५।१७) अयमेव पुरुषोत्तमः इति उच्यते — क्षरात् अक्षरात् च उत्तीर्णः। ताराम्यक्रमे सर्वोत्तमः।', hi:'बन्नंजे गोविंदाचार्य समस्त गीता में "भगवान्" शब्द से कृष्ण परमेश्वर को ही संबोधित करते हैं। गीता १५.१७ में वे पुरुषोत्तम हैं — क्षर और अक्षर दोनों से परे। ताराम्य-क्रम में सर्वोत्तम।'},
    refs:'BG 1.1 · BG 15.17 · BG 18.61'
  },
  {
    id:'paramatma', tier:'parabrahma',
    en:'Paramatma', kn:'ಪರಮಾತ್ಮ',
    title:{ en:'Paramatma — Supreme Self', kn:'ಪರಮಾತ್ಮ' , dev:'परमात्मा — अन्तर्यामी', hi:'परमात्मा — अंतर्यामी'},
    note:{ en:'At 13.2 Bannanje explains Kshetrajna (knower of field) as Paramatma dwelling in every body. At 15.17 he is called the uttama purusha who sustains the three worlds.', kn:'ಕ್ಷೇತ್ರಜ್ಞ ಎಂದರೆ ಎಲ್ಲ ದೇಹಗಳಲ್ಲಿ ನೆಲೆಸಿರುವ ಪರಮಾತ್ಮ (13.2).' , dev:'गीता-त्रयोदशाध्याये (१३।२) बन्नंजे स्पष्टयन्ति — क्षेत्रज्ञः इति सर्वदेहेषु स्थितः परमात्मा। सः साक्षी, भर्ता, नियन्ता च। जीवात् अत्यन्तं भिन्नः (१५।१७)। त्रिलोकं धारयन् सः उत्तमः पुरुषः।', hi:'बन्नंजे (१३.२) — क्षेत्रज्ञ अर्थात् हर शरीर में निवास करने वाले परमात्मा। वे साक्षी, पालक और नियंता हैं। जीव से सर्वथा भिन्न (१५.१७)। तीनों लोकों को धारण करने वाले उत्तम पुरुष।'},
    refs:'BG 13.2 · BG 15.17'
  },
  {
    id:'purushottama', tier:'parabrahma',
    en:'Purushottama', kn:'ಪುರುಷೋತ್ತಮ',
    title:{ en:'Purushottama — Highest Person', kn:'ಪುರುಷೋತ್ತಮ' , dev:'पुरुषोत्तमः — परमः पुरुषः', hi:'पुरुषोत्तम — सर्वश्रेष्ठ पुरुष'},
    note:{ en:'Chapter 15 is the Purushottama-yoga. Bannanje at 15.16-17 explains: kshara = all beings, akshara = Lakshmi (kutastha), and Purushottama = the Lord who transcends both and pervades all three worlds.', kn:'ಕ್ಷರ ಮತ್ತು ಅಕ್ಷರ ಎರಡಕ್ಕಿಂತ ಮಿಗಿಲಾದ ಉತ್ತಮ ಪುರುಷ ಪುರುಷೋತ್ತಮ (15.17).' , dev:'पञ्चदशाध्यायः पुरुषोत्तम-योगः। बन्नंजे (१५।१६-१७) व्याचक्षते — क्षरः सर्वे जीवाः, अक्षरा लक्ष्मीः (कूटस्था), पुरुषोत्तमस्तु उभयातीतः त्रिलोकव्यापी परमेश्वरः। सः स्वयं आत्मानं पुरुषोत्तम इति घोषयति।', hi:'पंद्रहवाँ अध्याय पुरुषोत्तम-योग है। बन्नंजे (१५.१६-१७) — क्षर सभी जीव हैं, अक्षरा लक्ष्मी (कूटस्था) हैं, और पुरुषोत्तम दोनों से परे तीनों लोकों में व्याप्त परमेश्वर। कृष्ण स्वयं इस नाम से अपना परिचय देते हैं।'},
    refs:'BG 15.16 · BG 15.17 · BG 15.18'
  },
  {
    id:'sarvottamatva', tier:'parabrahma',
    en:'Sarvottamatva', kn:'ಸರ್ವೋತ್ತಮತ್ವ',
    title:{ en:'Sarvottamatva — Supreme Supremacy', kn:'ಸರ್ವೋತ್ತಮತ್ವ' , dev:'सर्वोत्तमत्वम् — परमश्रेष्ठता', hi:'सर्वोत्तमत्व — सर्वश्रेष्ठता'},
    note:{ en:'Bannanje emphasises that Krishna is sarvottama — highest in the taratamya (graded hierarchy). This is the foundation of Madhva Vedanta. Explicitly stated at 10.20 (aham atma) and 7.7 (nothing is higher than Me).', kn:'ಕೃಷ್ಣನು ಸರ್ವರಿಗಿಂತ ಉತ್ತಮ — ತಾರತಮ್ಯದ ಶಿಖರ (7.7, 10.20).' , dev:'बन्नंजे-दर्शने ताराम्यक्रमः प्रतिपाद्यते — सर्वेषु तत्त्वेषु भगवान् कृष्णः एव सर्वोत्तमः। देवाः, ऋषयः, जीवाश्च स्वस्वस्थाने स्थिताः, किन्तु भगवतः परतः न कश्चित्। इदमेव मध्वसिद्धान्तस्य मूलम्।', hi:'बन्नंजे के दर्शन में ताराम्य-क्रम — सभी तत्त्वों में भगवान् कृष्ण सर्वोत्तम हैं। देवता, ऋषि, जीव — सभी अपने-अपने स्थान पर हैं, किंतु भगवान् से ऊपर कोई नहीं। यही मध्व सिद्धांत की आधारशिला है।'},
    refs:'BG 7.7 · BG 10.20'
  },
  {
    id:'taratamya', tier:'parabrahma',
    en:'Taratamya', kn:'ತಾರತಮ್ಯ',
    title:{ en:'Taratamya — Graded Hierarchy', kn:'ತಾರತಮ್ಯ' , dev:'ताराम्यम् — क्रमभेदः', hi:'ताराम्य — श्रेणीबद्ध भेद'},
    note:{ en:'Bannanje\'s distinctive teaching: there is a graded hierarchy among all beings with Bhagavanta at the top, then Lakshmi (Shritattva), then Brahma, then other devas and jivas. This taratamya is eternal. At 10.41 every vibhuti reflects this gradation.', kn:'ಭಗವಂತ ಸರ್ವೋತ್ತಮ, ಲಕ್ಷ್ಮಿ ಅಕ್ಷರ, ಬ್ರಹ್ಮ ಪ್ರಥಮ ಜೀವ — ತಾರತಮ್ಯ ಶಾಶ್ವತ (10.41).' , dev:'मध्वाचार्यस्य विशिष्टः सिद्धान्तः — सर्वेषु चेतनाचेतनेषु परस्परं क्रमभेदः अस्ति। ब्रह्मा, वायुः, इन्द्रादयः देवाः, ऋषयः, जीवाः — सर्वे स्वस्वयोग्यतानुसारम् आनन्दं भुञ्जते। भगवान् सर्वोत्तमः; तस्य नीचे सर्वे अनुक्रमेण।', hi:'मध्वाचार्य की विशिष्ट शिक्षा — सभी चेतन-अचेतन तत्त्वों में परस्पर क्रमबद्ध भेद है। ब्रह्मा, वायु, इंद्र आदि देवता, ऋषि, जीव — सभी अपनी-अपनी योग्यतानुसार आनंद भोगते हैं। भगवान् सर्वोत्तम; उनके नीचे सभी क्रमशः।'},
    refs:'BG 10.41 · BG 10.42'
  },
  {
    id:'avatara', tier:'parabrahma',
    en:'Avatara', kn:'ಅವತಾರ',
    title:{ en:'Avatara — Divine Descent', kn:'ಅವತಾರ' , dev:'अवतारः — दिव्यावतरणम्', hi:'अवतार — दिव्य अवतरण'},
    note:{ en:'At 4.7-8 Bannanje explains: whenever dharma declines and adharma rises, Bhagavanta manifests in his own divine form (not a birth like jivas). The avatara is to protect sadhus, destroy evil, and establish dharma.', kn:'ಧರ್ಮ ಕ್ಷೀಣವಾದಾಗ ಭಗವಂತ ಅವತರಿಸುತ್ತಾನೆ — ಇದು ಜನ್ಮವಲ್ಲ, ಅವನ ಸ್ವಂತ ಲೀಲೆ (4.7-8).' , dev:'गीता (४।७-८) — यदा यदा धर्मस्य ग्लानिः भवति तदा भगवान् अवतरति। बन्नंजे व्याचक्षते — तस्य जन्म नास्ति तथापि जायते; अव्ययः सन् जन्म-मृत्यू न स्पृशतः। "आत्ममायया" — जीवस्य मोह-आवरणम्, भगवतः महिमा च — इत्येतेषु अनेकार्थः।', hi:'गीता (४.७-८) — जब-जब धर्म की हानि होती है, भगवान् अवतार लेते हैं। बन्नंजे समझाते हैं — उनका जन्म नहीं होता फिर भी वे जन्म लेते हैं; अव्यय होते हुए भी प्रकट होते हैं। "आत्ममाया" से — जीव का भ्रम-आवरण और भगवान् की महिमा — दोनों अर्थ हैं।'},
    refs:'BG 4.7 · BG 4.8'
  },
  {
    id:'vibhuti', tier:'parabrahma',
    en:'Vibhuti', kn:'ವಿಭೂತಿ',
    title:{ en:'Vibhuti — Divine Manifestation', kn:'ವಿಭೂತಿ' , dev:'विभूतिः — दिव्यप्रकाशः', hi:'विभूति — दिव्य प्रकाश'},
    note:{ en:'Chapter 10 (Vibhuti-yoga). Bannanje at 10.41: whatever being is glorious, prosperous, or powerful — know it as a spark of my splendour. Every excellence in creation points to the Lord.', kn:'ಯಾವ ಶ್ರೇಷ್ಠ ವಸ್ತು ಕಾಣುತ್ತದೋ ಅದು ನನ್ನ ವಿಭೂತಿಯ ಅಂಶ (10.41).' , dev:'विभूति-योगः (दशमाध्यायः)। बन्नंजे (१०।४१) — यद्यद् विभूतिमत् सत्त्वं श्रीमद् ऊर्जितमेव वा, तत्तदेव मम तेजोंऽशसम्भवम् इति। यः कश्चित् प्राणी वा वस्तु वा प्रकाशते, स भगवतः अंशतः प्रकाशः।', hi:'विभूति-योग (दसवाँ अध्याय)। बन्नंजे (१०.४१) — जो भी प्राणी या वस्तु वैभवशाली, सुंदर या शक्तिशाली है, वह भगवान् के तेज के अंश से उत्पन्न है। संसार में जो भी प्रकाशित होता है, वह भगवान् का ही अंश है।'},
    refs:'BG 10.19 · BG 10.41'
  },

  /* ── SHRITATTVA (3) ── */
  {
    id:'shritattva', tier:'shritattva',
    en:'Shritattva', kn:'ಶ್ರೀತತ್ವ',
    title:{ en:'Shritattva — Lakshmi Principle', kn:'ಶ್ರೀತತ್ವ', dev:'श्रीतत्त्वम् — लक्ष्मीतत्त्वम्' , hi:'श्रीतत्त्व — लक्ष्मी तत्त्व'},
    note:{ en:'Bannanje\'s distinctive second principle: Lakshmi is aksharaprakriti — the eternal (akshara) who is neither bound jiva nor inert matter, but the divine consort who mediates creation. At 15.16 the akshara is identified as Lakshmi (kutastha).', kn:'ಲಕ್ಷ್ಮಿಯೇ ಅಕ್ಷರಪ್ರಕೃತಿ — ಕ್ಷರ-ಅಕ್ಷರ ಮಧ್ಯೆ ನಿಲ್ಲುವ ಶ್ರೀತತ್ವ (15.16).', dev:'बन्नंजे-दर्शने लक्ष्मीः अक्षरप्रकृतिः — द्वितीयं तत्त्वम्। सा जगन्माता, नित्यमुक्ता, जीव-देह-संयोजनकारिणी। अक्षरा (१५।१६) लक्ष्मीरेव, कूटस्था। सा शक्तिः सर्वाधारा।' , hi:'बन्नंजे के दर्शन में लक्ष्मी अक्षरप्रकृति हैं — दूसरा तत्त्व। वे जगन्माता, नित्यमुक्त और जीव-देह-संयोजन की कारक हैं। "माया" शब्द से (७.१४) लक्ष्मी ही अभिप्रेत हैं। वे सर्वाधारशक्ति हैं।'},
    refs:'BG 15.16 · BG 14.3'
  },
  {
    id:'maya', tier:'shritattva',
    en:'Maya', kn:'ಮಾಯೆ',
    title:{ en:'Maya — Divine Power', kn:'ಮಾಯೆ' , dev:'माया — दैवी शक्तिः', hi:'माया — दैवी शक्ति'},
    note:{ en:'At 7.14 Bannanje says: Maya is Lakshmi herself — "daivi hi esha gunamayee mama maya" means this is My divine power (Lakshmi). She is not illusion but the Lord\'s own shakti. Those who surrender to Him cross over this maya.', kn:'ದೈವೀ ಮಾಯಾ ಎಂದರೆ ಲಕ್ಷ್ಮಿಯ ಶಕ್ತಿ. ಅವಳು ಭ್ರಮೆಯಲ್ಲ, ಭಗವಂತನ ಸ್ವಂತ ದೈವೀ ಶಕ್ತಿ (7.14).' , dev:'बन्नंजे (७।१४) — माया स्वयं लक्ष्मीरेव। "दैवी ह्येषा गुणमयी मम माया दुरत्यया।" सा त्रिगुणात्मिका, दुस्तरा, किन्तु यः भगवन्तं शरणं गच्छति सः तरति। माया न भ्रमः, न अविद्या — सा भगवतः नित्यशक्तिः।', hi:'बन्नंजे (७.१४) — माया स्वयं लक्ष्मी हैं। "दैवी ह्येषा गुणमयी मम माया दुरत्यया।" वे त्रिगुणात्मिका और दुस्तर हैं, किंतु जो भगवान् की शरण लेता है वह तर जाता है। माया कोई भ्रम या अविद्या नहीं — वे भगवान् की नित्यशक्ति हैं।'},
    refs:'BG 7.14 · BG 7.15'
  },
  {
    id:'lakshmi_srishti', tier:'shritattva',
    en:'Lakshmi-Narayana Srishti', kn:'ಲಕ್ಷ್ಮೀ-ನಾರಾಯಣ ಸೃಷ್ಟಿ',
    title:{ en:'Creation through Lakshmi-Narayana', kn:'ಲಕ್ಷ್ಮೀ-ನಾರಾಯಣ ಸೃಷ್ಟಿ' , dev:'लक्ष्मी-नारायण-सृष्टिः', hi:'लक्ष्मी-नारायण सृष्टि'},
    note:{ en:'At 14.3 Bannanje explains: "mama yonir mahad brahma" — Lakshmi is the great womb (mahad brahma), and Bhagavanta places the seed. This Lakshmi-Narayana creative partnership is central to Bannanje\'s cosmology.', kn:'ಮಮ ಯೋನಿರ್ ಮಹದ್ ಬ್ರಹ್ಮ — ಲಕ್ಷ್ಮಿಯೇ ಮಹಾ ಗರ್ಭ, ಭಗವಂತ ಬೀಜ ನಿಡುತ್ತಾನೆ (14.3).' , dev:'बन्नंजे (१४।३) — "मम योनिर्महद्ब्रह्म" — लक्ष्मीः महती योनिः, भगवान् बीजप्रदः। तयोः सहयोगेन सृष्टिः। लक्ष्मीः अक्षरप्रकृतिः सती सर्वजीवानां मातृस्थाने। इयं सृष्टिः स्वेच्छया, न कर्मनिबन्धनेन।', hi:'बन्नंजे (१४.३) — "मम योनिर्महद्ब्रह्म" — लक्ष्मी महान् योनि हैं, भगवान् बीजप्रदाता। दोनों के सहयोग से सृष्टि होती है। लक्ष्मी अक्षरप्रकृति होकर सभी जीवों की माँ के स्थान पर हैं। यह सृष्टि स्वेच्छा से है, कर्म-बंधन से नहीं।'},
    refs:'BG 14.3 · BG 14.4'
  },

  /* ── JIVATATTVA (5) ── */
  {
    id:'jiva', tier:'jivatattva',
    en:'Jiva', kn:'ಜೀವ',
    title:{ en:'Jiva — Individual Soul', kn:'ಜೀವ' , dev:'जीवः — व्यक्तिगतात्मा', hi:'जीव — व्यक्तिगत आत्मा'},
    note:{ en:'At 15.7 Bannanje says the jiva is a fragment of the Lord — "mamaivamsho jivaloke" — eternal, not created or destroyed. The jiva is distinct from both Paramatma and prakriti, bound by the sense-organs drawn from prakriti.', kn:'ಜೀವನು ಭಗವಂತನ ಅಂಶ, ಅಳಿಯದ ಚೇತನ. ಅವನು ಪ್ರಕೃತಿಯ ಷಡ್ಗುಣಗಳಿಂದ ಸೆಳೆಯಲ್ಪಡುತ್ತಾನೆ (15.7).' , dev:'बन्नंजे (१५।७) — "ममैवांशो जीवलोके जीवभूतः सनातनः।" जीवः भगवतः अंशः किन्तु अभिन्नः नैव — सः भिन्नः, परतन्त्रः, अणुः। जीवस्य स्वरूपं नित्यम्, किन्तु बन्धे अज्ञानावृतः। मोक्षे स्वरूपानन्दं प्राप्नोति।', hi:'बन्नंजे (१५.७) — "ममैवांशो जीवलोके जीवभूतः सनातनः।" जीव भगवान् का अंश है, किंतु अभिन्न नहीं — वह भिन्न, परतंत्र और अणु है। जीव का स्वरूप नित्य है, किंतु बंधन में अज्ञान से आवृत। मोक्ष में स्वरूपानंद प्राप्त होता है।'},
    refs:'BG 15.7 · BG 15.8'
  },
  {
    id:'jiva_svabhava', tier:'jivatattva',
    en:'Jiva-svabhava', kn:'ಜೀವ ಸ್ವಭಾವ',
    title:{ en:'Jiva-svabhava — Nature of the Soul', kn:'ಜೀವ ಸ್ವಭಾವ' , dev:'जीव-स्वभावः — आत्मनः प्रकृतिः', hi:'जीव-स्वभाव — आत्मा की प्रकृति'},
    note:{ en:'Bannanje at 6.5: "uddhared atmana atmanam" — the self must lift itself by the self. The jiva has the capacity (and responsibility) to work towards its own liberation. The self is its own friend or enemy depending on whether it is won or lost.', kn:'ಜೀವನು ತನ್ನನ್ನು ತಾನೇ ಉದ್ಧರಿಸಿಕೊಳ್ಳಬೇಕು. ಆತ್ಮ ತನ್ನ ಮಿತ್ರ, ತನ್ನ ಶತ್ರು (6.5).' , dev:'बन्नंजे (६।५) — "उद्धरेदात्मनात्मानम्।" जीवः स्वयं आत्मानम् उद्धरेत्। जीवस्य स्वभावः — ज्ञानी, किन्तु बन्धे अल्पज्ञः। सः स्वकर्मभिः बध्यते, सद्गुरु-भगवत्कृपाभ्यां मुच्यते। स्वभावः स्वधर्मस्य आधारः।', hi:'बन्नंजे (६.५) — "उद्धरेदात्मनात्मानम्।" जीव को स्वयं ही अपना उद्धार करना है। जीव का स्वभाव — ज्ञानी, किंतु बंधन में अल्पज्ञ। अपने कर्मों से बँधता है, सद्गुरु और भगवत्कृपा से मुक्त होता है। स्वभाव ही स्वधर्म का आधार है।'},
    refs:'BG 6.5 · BG 6.6'
  },
  {
    id:'jiva_bandha', tier:'jivatattva',
    en:'Jiva-bandha', kn:'ಜೀವ ಬಂಧ',
    title:{ en:'Jiva-bandha — Bondage of the Soul', kn:'ಜೀವ ಬಂಧ' , dev:'जीव-बन्धः — संसारबन्धः', hi:'जीव-बंध — संसार-बंधन'},
    note:{ en:'At 12.4 Bannanje lists 15 fences that bind the jiva: the 5 senses, 5 organs of action, manas, buddhi, ahankara, chitta, and moha. As long as any fence remains, the jiva is bound.', kn:'12.4ರಲ್ಲಿ ಬಂಧದ 15 ಬೇಲಿಗಳು: ಪಂಚಜ್ಞಾನೇಂದ್ರಿಯ, ಪಂಚಕರ್ಮೇಂದ್ರಿಯ, ಮನಸ್ಸು, ಬುದ್ಧಿ, ಅಹಂಕಾರ, ಚಿತ್ತ, ಮೋಹ.' , dev:'बन्नंजे (१२।४) — पञ्चेन्द्रियाणि, पञ्चकर्मेन्द्रियाणि, मनः, बुद्धिः, अहंकारः, प्राणः, अव्यक्तं च — पञ्चदश प्राकारैः जीवः बद्धः। अज्ञानात् बन्धः, ज्ञानात् मोक्षः। भगवत्कृपा बन्धनिवृत्तेः मुख्यकारणम्।', hi:'बन्नंजे (१२.४) — पाँच ज्ञानेंद्रियाँ, पाँच कर्मेंद्रियाँ, मन, बुद्धि, अहंकार, प्राण और अव्यक्त — इन पंद्रह बाधाओं से जीव बँधा है। अज्ञान से बंधन होता है, ज्ञान से मोक्ष। भगवत्कृपा बंधन-निवृत्ति का मुख्य कारण है।'},
    refs:'BG 12.4 · BG 15.7'
  },
  {
    id:'atma', tier:'jivatattva',
    en:'Atma', kn:'ಆತ್ಮ',
    title:{ en:'Atma — The Self', kn:'ಆತ್ಮ' , dev:'आत्मा — नित्यः चेतनः', hi:'आत्मा — नित्य चेतन तत्त्व'},
    note:{ en:'Chapter 2 establishes the atma as eternal, unborn, undying. Bannanje at 2.20 explains: the atma is never born, never dies, is not slain when the body is slain. This is the core teaching of Chapter 2.', kn:'ಆತ್ಮ ಹುಟ್ಟುವುದಿಲ್ಲ, ಸಾಯುವುದಿಲ್ಲ. ಶರೀರ ನಾಶವಾದರೂ ಆತ್ಮ ಅಳಿಯದು (2.20).' , dev:'द्वितीयाध्यायः आत्मतत्त्वस्य प्रतिपादकः। बन्नंजे (२।२०) — आत्मा न जायते न म्रियते, नित्यः शाश्वतः पुराणः। शस्त्रैः न छिद्यते, वह्निना न दह्यते। देहः नश्वरः, आत्मा तु अनश्वरः — एतद् अर्जुनस्य शोकनिवारणार्थं भगवान् उपदिशति।', hi:'दूसरा अध्याय आत्मतत्त्व का प्रतिपादक है। बन्नंजे (२.२०) — आत्मा न जन्म लेता है न मरता है, नित्य, शाश्वत और पुरातन है। शस्त्र से नहीं कटता, अग्नि से नहीं जलता। देह नश्वर है, आत्मा अविनाशी — यही भगवान् का अर्जुन को उपदेश।'},
    refs:'BG 2.19 · BG 2.20 · BG 2.23'
  },
  {
    id:'ksara_akshara', tier:'jivatattva',
    en:'Kshara-Akshara', kn:'ಕ್ಷರ-ಅಕ್ಷರ',
    title:{ en:'Kshara and Akshara Purusha', kn:'ಕ್ಷರ-ಅಕ್ಷರ' , dev:'क्षर-अक्षर-पुरुषौ', hi:'क्षर-अक्षर — दो पुरुष'},
    note:{ en:'At 15.16 Bannanje explains the two: kshara = all jivas (bound, changing); akshara = Lakshmi (kutastha, eternal, unchanging). Both are distinct from Purushottama who transcends them both.', kn:'ಕ್ಷರ = ಎಲ್ಲ ಜೀವರು; ಅಕ್ಷರ = ಲಕ್ಷ್ಮಿ (ಕೂಟಸ್ಥ). ಪುರುಷೋತ್ತಮ ಇವೆರಡಕ್ಕೂ ಮಿಗಿಲು (15.16).' , dev:'बन्नंजे (१५।१६) — क्षरः सर्वे बद्धजीवाः (परिवर्तनशीलाः); अक्षरा लक्ष्मीः — कूटस्था, नित्यमुक्ता। पुरुषोत्तमस्तु उभयातीतः। अयं त्रिविधविभागः मध्वदर्शनस्य मूलभूतः — जीवः, लक्ष्मीः, भगवान् — इत्येषां भेदः सदा तिष्ठति।', hi:'बन्नंजे (१५.१६) — क्षर सभी बद्ध जीव हैं (परिवर्तनशील); अक्षरा लक्ष्मी हैं — कूटस्था, नित्यमुक्त। पुरुषोत्तम दोनों से परे हैं। यह त्रिविध विभाजन मध्व-दर्शन का मूल है — जीव, लक्ष्मी और भगवान् का भेद सदा बना रहता है।'},
    refs:'BG 15.16 · BG 15.17'
  },

  /* ── PRAKRITI (4) ── */
  {
    id:'jada_prakriti', tier:'prakriti',
    en:'Jada-prakriti', kn:'ಜಡಪ್ರಕೃತಿ',
    title:{ en:'Jada-prakriti — Inert Nature', kn:'ಜಡಪ್ರಕೃತಿ' , dev:'जडप्रकृतिः — अचेतना प्रकृतिः', hi:'जड़ प्रकृति — अचेतन प्रकृति'},
    note:{ en:'At 7.4 Bannanje lists the eightfold inert prakriti: earth, water, fire, air, space, mind, intellect, ego. This is apara prakriti — lower nature. Para prakriti (7.5) is the conscious jiva-principle.', kn:'ಭೂಮಿ, ಜಲ, ಅಗ್ನಿ, ವಾಯು, ಆಕಾಶ, ಮನಸ್ಸು, ಬುದ್ಧಿ, ಅಹಂಕಾರ — ಅಷ್ಟಧಾ ಅಪರಾ ಪ್ರಕೃತಿ (7.4).' , dev:'बन्नंजे (७।४) — भूमिः, आपः, अग्निः, वायुः, आकाशः, मनः, बुद्धिः, अहंकारः — इत्यष्टधा जडप्रकृतिः। सा भगवतः अपरा प्रकृतिः। पञ्चमहाभूतैः स्थूलप्रपञ्चः। प्रत्येकस्मिन् भूते तदभिमानी देवता। सृष्टेः पूर्वं सा सूक्ष्मरूपेण भगवति तिष्ठति।', hi:'बन्नंजे (७.४) — भूमि, जल, अग्नि, वायु, आकाश, मन, बुद्धि, अहंकार — ये आठ रूपों में जड़ प्रकृति है। यह भगवान् की अपरा प्रकृति है। पंचमहाभूतों से स्थूल जगत् बनता है। सृष्टि से पहले यह सूक्ष्म रूप में भगवान् में स्थित रहती है।'},
    refs:'BG 7.4 · BG 7.5'
  },
  {
    id:'triguna', tier:'prakriti',
    en:'Triguna', kn:'ತ್ರಿಗುಣ',
    title:{ en:'Triguna — Three Qualities', kn:'ತ್ರಿಗುಣ' , dev:'त्रिगुणाः — सत्त्व-रजस्-तमांसि', hi:'त्रिगुण — सत्त्व, रजस्, तमस्'},
    note:{ en:'At 14.5 Bannanje: sattva, rajas, tamas are born of prakriti and bind the eternal jiva in the body. Chapters 14 and 17 extensively discuss how gunas shape character, food, worship, and action.', kn:'ಸತ್ವ-ರಜಸ್ಸು-ತಮಸ್ಸು ಜಡಪ್ರಕೃತಿಯ ಗುಣಗಳು. ಅಳಿಯದ ಜೀವನನ್ನು ದೇಹದಲ್ಲಿ ಕಟ್ಟಿಹಾಕುತ್ತವೆ (14.5).' , dev:'बन्नंजे (१४।५) — सत्त्वं, रजः, तमः — प्रकृतिसम्भवाः गुणाः नित्यं देहिनं बध्नन्ति। सत्त्वं प्रकाशकं, सुखसङ्गि; रजः रागात्मकं, कर्मसङ्गि; तमः अज्ञानजं, प्रमाद-आलस्य-निद्राकरम्। मोक्षाय त्रिगुणातीतत्वम् आवश्यकम्।', hi:'बन्नंजे (१४.५) — सत्त्व, रजस् और तमस् — प्रकृति से उत्पन्न गुण निरंतर देहधारी को बाँधते हैं। सत्त्व प्रकाशक और सुख-आसक्त; रजस् कर्म-आसक्त; तमस् अज्ञान से उत्पन्न, प्रमाद और आलस्य का कारण। मोक्ष के लिए त्रिगुणातीत होना आवश्यक।'},
    refs:'BG 14.5 · BG 14.6 · BG 14.7 · BG 14.8 · BG 17.2'
  },
  {
    id:'panchabhoota', tier:'prakriti',
    en:'Panchabhoota', kn:'ಪಂಚಭೂತ',
    title:{ en:'Panchabhoota — Five Elements', kn:'ಪಂಚಭೂತ' , dev:'पञ्चभूतानि — पञ्च महाभूतानि', hi:'पंचभूत — पाँच महाभूत'},
    note:{ en:'The five gross elements (earth, water, fire, air, space) form the material substratum. Bannanje at 13.5-6 lists the 24 elements of the field (kshetra) that includes the five elements, five sense-objects, five senses, manas, and more.', kn:'ಕ್ಷೇತ್ರದ 24 ತತ್ವಗಳಲ್ಲಿ ಪಂಚಭೂತಗಳು ಸೇರಿವೆ (13.5-6).' , dev:'पृथ्वी, जलं, तेजः, वायुः, आकाशः — इति पञ्चमहाभूतानि जडप्रकृतेः स्थूलरूपम्। एभ्यः स्थूलप्रपञ्चः। प्रत्येकस्य अभिमानी देवता। जीव-देह-निर्माणे एषां सम्मिश्रणम्। मृत्युनन्तरं देहः पञ्चभूतेषु विलीयते।', hi:'पृथ्वी, जल, अग्नि, वायु और आकाश — ये पाँच महाभूत जड़ प्रकृति का स्थूल रूप हैं। इन्हीं से समस्त स्थूल जगत् बना है। प्रत्येक का अभिमानी देवता है। जीव-देह-निर्माण में इनका मिश्रण होता है। मृत्यु के बाद देह पाँच भूतों में विलीन हो जाती है।'},
    refs:'BG 13.5 · BG 13.6'
  },
  {
    id:'prakriti_purusha', tier:'prakriti',
    en:'Prakriti-Purusha', kn:'ಪ್ರಕೃತಿ-ಪುರುಷ',
    title:{ en:'Prakriti-Purusha — Nature and Soul', kn:'ಪ್ರಕೃತಿ-ಪುರುಷ' , dev:'प्रकृति-पुरुषौ — जडचेतनौ', hi:'प्रकृति-पुरुष — जड़ और चेतन'},
    note:{ en:'Chapter 13 theme. At 13.19 Bannanje: prakriti and purusha are both beginningless. Prakriti produces the body and sense-fields; purusha experiences pleasure and pain by dwelling in prakriti.', kn:'ಪ್ರಕೃತಿ ಮತ್ತು ಪುರುಷ ಎರಡೂ ಅನಾದಿ. ಪ್ರಕೃತಿ ಶರೀರ ನೀಡುತ್ತದೆ, ಜೀವ ಅನುಭವಿಸುತ್ತಾನೆ (13.19).' , dev:'त्रयोदशाध्यायः। बन्नंजे (१३।१९) — प्रकृतिश्च पुरुषश्च उभावनादी। प्रकृतिः कार्यकारणयोः कर्त्री; पुरुषः सुख-दुःखानां भोक्ता। प्रकृतिं पुरुषं च एव विद्धि अनादी — इत्येतद् ज्ञानं मोक्षसाधनम्।', hi:'तेरहवाँ अध्याय। बन्नंजे (१३.१९) — प्रकृति और पुरुष दोनों अनादि हैं। प्रकृति कार्य-कारण की कर्त्री है; पुरुष सुख-दुःख का भोक्ता। इन दोनों को अनादि जानना — यही ज्ञान मोक्ष का साधन है।'},
    refs:'BG 13.19 · BG 13.20'
  },

  /* ── YOGA (5) ── */
  {
    id:'karmayoga', tier:'yoga',
    en:'Karma-yoga', kn:'ಕರ್ಮಯೋಗ',
    title:{ en:'Karma-yoga — Path of Action', kn:'ಕರ್ಮಯೋಗ' , dev:'कर्मयोगः — कर्ममार्गः', hi:'कर्मयोग — कर्म का मार्ग'},
    note:{ en:'Central theme of Chapters 3-5. Bannanje at 3.19: do prescribed action without attachment — this is karma-yoga. Not renunciation of action but renunciation of fruit. The key verse is 3.35 on svadharma.', kn:'ಫಲದ ಆಸೆ ಬಿಟ್ಟು ಕರ್ತವ್ಯ ಮಾಡುವುದೇ ಕರ್ಮಯೋಗ (3.19). ಸ್ವಧರ್ಮ ಮುಖ್ಯ (3.35).' , dev:'तृतीय-पञ्चमाध्यायाः। बन्नंजे (३।१९) — फलासक्तिं विना नियतं कर्म कुर्वन् मोक्षं प्राप्नोति। "मा फलेषु कदाचन" (२।४७) — फले अधिकारः नास्ति। कर्म भगवदर्पणबुद्ध्या क्रियते चेत् तत् बन्धकरं न भवति।', hi:'तीसरे से पाँचवें अध्याय का केंद्रीय विषय। बन्नंजे (३.१९) — फल की आसक्ति छोड़कर नियत कर्म करते हुए मोक्ष मिलता है। "मा फलेषु कदाचन" (२.४७) — फल में अधिकार नहीं। भगवदर्पण-बुद्धि से किया कर्म बंधनकारी नहीं होता।'},
    refs:'BG 3.19 · BG 3.35 · BG 5.10'
  },
  {
    id:'jnanayoga', tier:'yoga',
    en:'Jnana-yoga', kn:'ಜ್ಞಾನಯೋಗ',
    title:{ en:'Jnana-yoga — Path of Knowledge', kn:'ಜ್ಞಾನಯೋಗ' , dev:'ज्ञानयोगः — ज्ञानमार्गः', hi:'ज्ञानयोग — ज्ञान का मार्ग'},
    note:{ en:'At 4.33 Bannanje: jnana-yajna is higher than all material sacrifices. All action culminates in jnana. Chapter 7 (jnana-vijnana), Chapter 13 (kshetra-kshetrajna) are the core jnana teachings.', kn:'ಜ್ಞಾನ ಯಜ್ಞ ಎಲ್ಲ ದ್ರವ್ಯ ಯಜ್ಞಗಳಿಗಿಂತ ಶ್ರೇಷ್ಠ (4.33). ಎಲ್ಲ ಕರ್ಮಗಳು ಜ್ಞಾನದಲ್ಲಿ ಅಂತ್ಯ.' , dev:'बन्नंजे (४।३३) — सर्वं कर्माखिलं ज्ञाने परिसमाप्यते। ज्ञानयज्ञः सर्वेभ्यः द्रव्ययज्ञेभ्यः श्रेयान्। तत्त्वज्ञानेन पापं तरति। ज्ञानं मोक्षस्य साक्षात् कारणम्; कर्म ज्ञानसाधनम्। "ज्ञानाग्निः सर्वकर्माणि भस्मसात् करोति।"', hi:'बन्नंजे (४.३३) — सभी कर्म अंततः ज्ञान में समाप्त होते हैं। ज्ञानयज्ञ सभी द्रव्ययज्ञों से श्रेष्ठ है। तत्त्वज्ञान से पाप तर जाता है। ज्ञान मोक्ष का प्रत्यक्ष कारण है; कर्म ज्ञान का साधन। "ज्ञानाग्नि सभी कर्मों को भस्म करती है।"'},
    refs:'BG 4.33 · BG 4.38 · BG 7.2'
  },
  {
    id:'bhaktiyoga', tier:'yoga',
    en:'Bhakti-yoga', kn:'ಭಕ್ತಿಯೋಗ',
    title:{ en:'Bhakti-yoga — Path of Devotion', kn:'ಭಕ್ತಿಯೋಗ' , dev:'भक्तियोगः — भक्तिमार्गः', hi:'भक्तियोग — भक्ति का मार्ग'},
    note:{ en:'Chapter 12 (Bhakti-yoga) is central. At 12.2 Bannanje: those who fix their mind on Me with supreme faith and worship Me — I consider them best. At 12.1 Arjuna asks which is higher — saguna or nirguna worship; Krishna answers saguna bhakti.', kn:'ನನ್ನಲ್ಲಿ ಮನವಿಟ್ಟು ಶ್ರದ್ಧೆಯಿಂದ ಸೇವಿಸುವವರು ಅತ್ಯುತ್ತಮ ಯೋಗಿಗಳು (12.2).' , dev:'द्वादशाध्यायः भक्तियोगः। बन्नंजे (१२।२) — ये श्रद्धया युक्ताः मयि मनो निवेश्य नित्ययुक्ताः उपासते ते अत्युत्तमाः योगिनः। भक्तिः सर्वयोगानाम् उत्तमा। शरणागतिः भक्तेः पराकाष्ठा (१२।२)। नन्नलि मनिट्टु श्रद्धेयिंद सेविसुव्वरु — बन्नंजे।', hi:'बारहवाँ अध्याय भक्तियोग है। बन्नंजे (१२.२) — जो श्रद्धा से युक्त होकर मुझ में मन लगाकर नित्ययुक्त हो मेरी उपासना करते हैं, वे सर्वश्रेष्ठ योगी हैं। भक्ति सभी योगों में उत्तम है। शरणागति भक्ति की पराकाष्ठा है।'},
    refs:'BG 12.1 · BG 12.2 · BG 12.8'
  },
  {
    id:'dhyana', tier:'yoga',
    en:'Dhyana', kn:'ಧ್ಯಾನ',
    title:{ en:'Dhyana — Meditation', kn:'ಧ್ಯಾನ' , dev:'ध्यानम् — चित्तैकाग्रता', hi:'ध्यान — चित्त की एकाग्रता'},
    note:{ en:'Chapter 6 (Dhyana-yoga). At 6.46 Bannanje: the yogi is higher than the tapasvi, higher than the jnani, higher than the karmi — therefore be a yogi. At 6.47: among all yogis, the bhakta-yogi who meditates on Me with faith is the best.', kn:'ಯೋಗಿ ತಪಸ್ವಿಗಿಂತ, ಜ್ಞಾನಿಗಿಂತ, ಕರ್ಮಿಗಿಂತ ಶ್ರೇಷ್ಠ (6.46). ಭಕ್ತಿಯಿಂದ ಧ್ಯಾನಿಸುವ ಯೋಗಿ ಅತ್ಯುತ್ತಮ (6.47).' , dev:'षष्ठाध्यायः ध्यानयोगः। बन्नंजे (६।४६) — तपस्विभ्योऽधिको योगी, ज्ञानिभ्योऽपि मतोऽधिकः; कर्मिभ्यश्चाधिको योगी। मनसि-बुद्धौ भगवत्समर्पणेन (१२।९) अभ्यासेन स्थिरं ध्यानं साध्यते। मनसः चाञ्चल्यं वैराग्येण निरुध्यते।', hi:'छठा अध्याय ध्यानयोग। बन्नंजे (६.४६) — योगी तपस्वियों से, ज्ञानियों से और कर्मियों से भी श्रेष्ठ है। मन-बुद्धि को भगवान् में समर्पित कर (१२.९) अभ्यास से स्थिर ध्यान सिद्ध होता है। मन की चंचलता वैराग्य से रोकी जाती है।'},
    refs:'BG 6.46 · BG 6.47 · BG 6.10'
  },
  {
    id:'sannyasa_tyaga', tier:'yoga',
    en:'Sannyasa-Tyaga', kn:'ಸಂನ್ಯಾಸ-ತ್ಯಾಗ',
    title:{ en:'Sannyasa and Tyaga', kn:'ಸಂನ್ಯಾಸ-ತ್ಯಾಗ' , dev:'संन्यास-त्यागौ — विसर्जन-परित्यागौ', hi:'संन्यास-त्याग — विसर्जन और परित्याग'},
    note:{ en:'Chapter 18 opens with this distinction. Bannanje: sannyasa = renunciation of kamya karmas (desire-motivated actions); tyaga = abandonment of fruit in all actions. Both paths lead to the same end, but tyaga is more practical.', kn:'ಸಂನ್ಯಾಸ = ಕಾಮ್ಯ ಕರ್ಮ ತ್ಯಾಗ; ತ್ಯಾಗ = ಕರ್ಮ ಫಲ ತ್ಯಾಗ. ಎರಡೂ ಒಂದೇ ತಲುಪಿಸುತ್ತವೆ (18.1-2).' , dev:'अष्टादशाध्यायारम्भः। बन्नंजे — संन्यासः कामनाकर्मणां त्यागः; त्यागः कर्मफलस्य परित्यागः। सात्त्विकः त्यागः — नियतं कर्म कुर्वन् फलं भगवति अर्पयति। त्यागेन शान्तिः, संन्यासेन ज्ञानम् — इत्युभे मोक्षसाधने।', hi:'अठारहवाँ अध्याय का आरंभ। बन्नंजे — संन्यास = कामना-कर्मों का त्याग; त्याग = कर्मफल का परित्याग। सात्त्विक त्याग — नियत कर्म करते हुए फल भगवान् को अर्पित करना। त्याग से शांति, संन्यास से ज्ञान — दोनों मोक्ष के साधन।'},
    refs:'BG 18.1 · BG 18.2 · BG 18.11'
  },

  /* ── ANTAHKARANA (4) ── */
  {
    id:'manas', tier:'antahkarana',
    en:'Manas', kn:'ಮನಸ್ಸು',
    title:{ en:'Manas — Mind', kn:'ಮನಸ್ಸು' , dev:'मनः — चित्तम्', hi:'मन — चित्त'},
    note:{ en:'At 6.34 Arjuna says the mind is restless, turbulent, and hard to restrain — like the wind. Bannanje notes Krishna agrees at 6.35 but says it is controlled by abhyasa (practice) and vairagya (dispassion).', kn:'ಮನಸ್ಸು ಚಂಚಲ, ಗಟ್ಟಿ, ವಾಯುವಿನಂತೆ — ಅಭ್ಯಾಸ ಮತ್ತು ವೈರಾಗ್ಯದಿಂದ ತಡೆಯಬಹುದು (6.34-35).' , dev:'बन्नंजे (६।३४) — चञ्चलं हि मनः कृष्ण प्रमाथि बलवद् दृढम्। अर्जुनः उवाच — मनसः निग्रहः वायोरिव सुदुष्करः। बन्नंजे — अभ्यासेन वैराग्येण च मनः नियन्त्र्यते (६।३५)। मनोबुद्ध्योः भगवति समर्पणेन (१२।९) अव्यभिचारिणी भक्तिः जायते।', hi:'बन्नंजे (६.३४) — "चंचलं हि मनः कृष्ण प्रमाथि बलवद् दृढम्।" अर्जुन कहते हैं — मन का निग्रह वायु रोकने जैसा कठिन है। बन्नंजे — अभ्यास और वैराग्य से मन को वश में किया जा सकता है (६.३५)। मन-बुद्धि को भगवान् में समर्पित करने से अव्यभिचारिणी भक्ति होती है।'},
    refs:'BG 6.34 · BG 6.35'
  },
  {
    id:'buddhi', tier:'antahkarana',
    en:'Buddhi', kn:'ಬುದ್ಧಿ',
    title:{ en:'Buddhi — Intellect', kn:'ಬುದ್ಧಿ' , dev:'बुद्धिः — विवेकशक्तिः', hi:'बुद्धि — विवेक-शक्ति'},
    note:{ en:'Bannanje at 2.41: in the resolved (vyavasayatmika) buddhi there is one-pointed clarity; but the many-branched buddhi of the undecided is endless. Chapter 2\'s teaching of nishkama karma is grounded in pure buddhi.', kn:'ವ್ಯವಸಾಯಾತ್ಮಿಕ ಬುದ್ಧಿ ಒಂದೇ ಮುಖ. ಅನಿಶ್ಚಿತ ಮನಸ್ಸಿನ ಬುದ್ಧಿ ಅನೇಕ ಶಾಖೆಗಳಾಗುತ್ತದೆ (2.41).' , dev:'बन्नंजे (२।४१) — व्यवसायात्मिका बुद्धिः एकेह कुरुनन्दन; बहुशाखा हि अनन्ताश्च बुद्धयोऽव्यवसायिनाम्। निश्चयात्मिका बुद्धिः मोक्षमार्गस्य प्रकाशिका। बन्नंजे (१८।३०) — सात्त्विकी बुद्धिः प्रवृत्तिं निवृत्तिं च, कार्याकार्यं च, बन्धमोक्षं च जानाति।', hi:'बन्नंजे (२.४१) — व्यवसायात्मिका बुद्धि एक है; अनिश्चित मन की बुद्धियाँ अनेक और अनंत हैं। निश्चयात्मिका बुद्धि मोक्षमार्ग की प्रकाशिका है। बन्नंजे (१८.३०) — सात्त्विकी बुद्धि प्रवृत्ति-निवृत्ति, कार्य-अकार्य और बंध-मोक्ष सभी को जानती है।'},
    refs:'BG 2.41 · BG 2.44'
  },
  {
    id:'ahankara', tier:'antahkarana',
    en:'Ahankara', kn:'ಅಹಂಕಾರ',
    title:{ en:'Ahankara — Ego', kn:'ಅಹಂಕಾರ' , dev:'अहंकारः — मिथ्याभिमानः', hi:'अहंकार — मिथ्या अभिमान'},
    note:{ en:'Bannanje at 3.27 explains: all actions are performed by the gunas of prakriti, but one deluded by ahankara thinks "I am the doer." This false doership (kartritva-bhrama) is the primary obstacle.', kn:'ಪ್ರಕೃತಿಯ ಗುಣಗಳೇ ಕರ್ಮ ಮಾಡುತ್ತವೆ. ಅಹಂಕಾರ-ವಿಮೂಢನು "ನಾನೇ ಮಾಡುತ್ತೇನೆ" ಎಂದು ತಿಳಿಯುತ್ತಾನೆ (3.27).' , dev:'बन्नंजे (३।२७) — प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः; अहंकारविमूढात्मा कर्ताहमिति मन्यते। गुणाः कर्म कुर्वन्ति, किन्तु अहंकारेण विमूढः जीवः "अहं कर्ता" इति मन्यते। एतद् मिथ्याभिमानं बन्धस्य प्रमुखं कारणम्।', hi:'बन्नंजे (३.२७) — प्रकृति के गुण सभी कर्म करते हैं, किंतु अहंकार से मूढ़ जीव "मैं करता हूँ" ऐसा मानता है। यह मिथ्याभिमान बंधन का प्रमुख कारण है। गुण कर्म करते हैं — यह जान लेना ही मुक्ति का मार्ग है।'},
    refs:'BG 3.27 · BG 16.18'
  },
  {
    id:'indriya', tier:'antahkarana',
    en:'Indriya', kn:'ಇಂದ್ರಿಯ',
    title:{ en:'Indriya — Sense-organs', kn:'ಇಂದ್ರಿಯ' , dev:'इन्द्रियाणि — ज्ञानकर्मेन्द्रियाणि', hi:'इंद्रियाँ — ज्ञान-कर्म इंद्रियाँ'},
    note:{ en:'At 2.67 Bannanje: as the wind carries a boat on water, one sense-organ carrying away the manas destroys one\'s discrimination. Control of indriya is the first step on the yoga path.', kn:'ಒಂದು ಇಂದ್ರಿಯ ಮನಸ್ಸನ್ನು ಎಳೆದರೆ ನೌಕೆಯನ್ನು ಗಾಳಿ ಎಳೆದಂತೆ ಬುದ್ಧಿ ಹಾಳಾಗುತ್ತದೆ (2.67).' , dev:'बन्नंजे (२।६७) — इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते; तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि। यथा वायुः नावं जलेऽपहरति, तथा एकमात्रं इन्द्रियं मनः अपहरति, ततः प्रज्ञा नश्यति। इन्द्रियनिग्रहः साधनायाः आधारः।', hi:'बन्नंजे (२.६७) — जैसे वायु जल में नाव को बहा ले जाती है, वैसे ही एक भी इंद्रिय मन को बहा ले जाती है और तब बुद्धि नष्ट हो जाती है। इंद्रिय-निग्रह साधना का आधार है। इंद्रियों को विषयों से हटाकर परमात्मा में लगाना ही साधना है।'},
    refs:'BG 2.67 · BG 3.34'
  },

  /* ── SADHANA (6) ── */
  {
    id:'shraddha', tier:'sadhana',
    en:'Shraddha', kn:'ಶ್ರದ್ಧೆ',
    title:{ en:'Shraddha — Faith', kn:'ಶ್ರದ್ಧೆ' , dev:'श्रद्धा — विश्वासः आस्तिक्यम्', hi:'श्रद्धा — विश्वास और आस्तिकता'},
    note:{ en:'Chapter 17 opens with shraddha. At 17.3 Bannanje: each person\'s shraddha matches their nature — sattvic shraddha worships devas, rajasic worships yakshas and rakshasas, tamasic worships spirits and the dead.', kn:'ಜೀವನ ಶ್ರದ್ಧೆ ಅವನ ಸ್ವಭಾವ ತಕ್ಕಂತೆ ಇರುತ್ತದೆ. ಸಾತ್ವಿಕ ಶ್ರದ್ಧೆ ದೇವತೆಗಳನ್ನು ಪೂಜಿಸುತ್ತದೆ (17.3).' , dev:'सप्तदशाध्यायारम्भः। बन्नंजे (१७।३) — सत्त्वानुरूपा सर्वस्य श्रद्धा भवति। यस्य यादृशी श्रद्धा सः तादृशः। सात्त्विकी श्रद्धा देवान् उपासते, राजसी यक्षान्, तामसी प्रेतान्। श्रद्धावान् लभते ज्ञानं — भगवत्कृपा श्रद्धाद्वारा प्राप्यते।', hi:'सत्रहवाँ अध्याय का आरंभ। बन्नंजे (१७.३) — जिसकी जैसी प्रकृति (सत्त्व) होती है उसकी वैसी श्रद्धा होती है। सात्त्विकी श्रद्धा देवताओं की, राजसी यक्षों की और तामसी प्रेतों की उपासना करती है। श्रद्धावान् ज्ञान पाता है — भगवत्कृपा श्रद्धा द्वारा मिलती है।'},
    refs:'BG 17.2 · BG 17.3 · BG 4.39'
  },
  {
    id:'sharanagati', tier:'sadhana',
    en:'Sharanagati', kn:'ಶರಣಾಗತಿ',
    title:{ en:'Sharanagati — Surrender', kn:'ಶರಣಾಗತಿ' , dev:'शरणागतिः — सम्पूर्णसमर्पणम्', hi:'शरणागति — संपूर्ण समर्पण'},
    note:{ en:'The culminating teaching of the Gita. At 18.66 Bannanje: abandon all subsidiary dharmas, surrender to Me alone. I shall free you from all sins — do not grieve. This mokshopadesa is the charama shloka.', kn:'ಎಲ್ಲ ಬಿನುಗು ಧರ್ಮ ತೊರೆದು ನನಗೊಬ್ಬನಿಗೇ ಶರಣಾಗು. ನಾನು ಎಲ್ಲ ಪಾಪದಿಂದ ಮುಕ್ತಗೊಳಿಸುವೆ (18.66).' , dev:'गीतायाः पराकाष्ठा। बन्नंजे (१८।६६) — सर्वधर्मान् परित्यज्य मामेकं शरणं व्रज; अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि। अन्याः सर्वाः उपायाः परित्यज्य केवलं भगवन्तं शरणं गच्छ — एतदेव परमोपायः। मोक्षः भगवत्प्रसादादेव।', hi:'गीता की पराकाष्ठा। बन्नंजे (१८.६६) — सब धर्मों को छोड़कर केवल मेरी शरण में आओ; मैं तुम्हें सभी पापों से मुक्त कर दूँगा। अन्य सभी उपायों को छोड़कर केवल भगवान् की शरण — यही परमोपाय है। मोक्ष भगवत्प्रसाद से ही।'},
    refs:'BG 18.66'
  },
  {
    id:'upasane', tier:'sadhana',
    en:'Upasane', kn:'ಉಪಾಸನೆ',
    title:{ en:'Upasane — Worship', kn:'ಉಪಾಸನೆ' , dev:'उपासना — भगवद्भजनम्', hi:'उपासना — भगवद्-भजन'},
    note:{ en:'Chapter 12 is Bhakti-yoga — the yoga of upasane. At 12.1 Arjuna asks which devotees know yoga best — those who worship the saguna Lord or those who meditate on the akshara (nirguna). Bannanje\'s answer: saguna upasane is superior.', kn:'ಸಗುಣ ಭಗವಂತನ ಉಪಾಸನೆ ಶ್ರೇಷ್ಠ. ಅಕ್ಷರ ಉಪಾಸಕರು ತುಂಬಾ ಕಷ್ಟ ಪಡಬೇಕಾಗುತ್ತದೆ (12.1-2).' , dev:'द्वादशाध्यायः भक्तियोगः — उपासनायाः विवेचनम्। बन्नंजे (१२।१) — अर्जुनः पृच्छति — सगुणः निर्गुणश्च कः श्रेयान्? भगवान् उत्तरं ददाति — सगुणोपासना श्रेयसी। उपासनायाः मार्गः — मनोबुद्ध्योः भगवति समर्पणम्, नित्ययुक्तता, परमा श्रद्धा।', hi:'बारहवाँ अध्याय — उपासना का विवेचन। बन्नंजे (१२.१) — अर्जुन पूछते हैं — सगुण और निर्गुण में कौन श्रेष्ठ? भगवान् उत्तर देते हैं — सगुणोपासना श्रेयस्कर है। उपासना का मार्ग — मन-बुद्धि को भगवान् में समर्पित करना, नित्ययुक्त रहना और परम श्रद्धा।'},
    refs:'BG 12.1 · BG 12.2 · BG 12.5'
  },
  {
    id:'yajna', tier:'sadhana',
    en:'Yajna', kn:'ಯಜ್ಞ',
    title:{ en:'Yajna — Sacrifice', kn:'ಯಜ್ಞ' , dev:'यज्ञः — ईश्वरार्पणकर्म', hi:'यज्ञ — ईश्वरार्पण कर्म'},
    note:{ en:'At 3.9-10 Bannanje: the world is bound by action except action done as yajna (for the Lord). Prajapati created beings with yajna. Do your duty as yajna — this is the wheel. Chapter 4 lists many forms of yajna; at 4.33 jnana-yajna is the highest.', kn:'ಯಜ್ಞಾರ್ಥ ಕರ್ಮ ಮಾಡು, ಇಲ್ಲದಿದ್ದರೆ ಕರ್ಮ ಬಂಧಿಸುತ್ತದೆ (3.9). ಜ್ಞಾನಯಜ್ಞ ಶ್ರೇಷ್ಠ (4.33).' , dev:'बन्नंजे (३।९-१०) — यज्ञार्थात् कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः। यज्ञेन देवाः तर्प्यन्ते, देवैः वृष्टिः, वृष्ट्या अन्नम्। यज्ञः एव प्रजापतिना सह सृष्टिः। ज्ञानयज्ञः सर्वेभ्यः श्रेयान् (४।३३)। सर्वं कर्म भगवदर्पणबुद्ध्या यज्ञः।', hi:'बन्नंजे (३.९-१०) — यज्ञ के अतिरिक्त अन्य कर्म इस संसार को बाँधते हैं। यज्ञ से देवता तृप्त होते हैं, देवताओं से वर्षा, वर्षा से अन्न। ज्ञानयज्ञ सभी में श्रेष्ठ है (४.३३)। भगवदर्पण-बुद्धि से किया सभी कर्म यज्ञ ही है।'},
    refs:'BG 3.9 · BG 3.10 · BG 4.24 · BG 4.33'
  },
  {
    id:'tapas', tier:'sadhana',
    en:'Tapas', kn:'ತಪಸ್ಸು',
    title:{ en:'Tapas — Austerity', kn:'ತಪಸ್ಸು' , dev:'तपः — त्रिविधं तपः', hi:'तपस् — तीन प्रकार का तप'},
    note:{ en:'Chapter 17 describes three kinds of tapas. Bannanje at 17.14: body-tapas = worship of gods, brahmanas, guru, and the wise; purity; non-violence; celibacy. 17.15-16 cover speech-tapas and mind-tapas. Sattvic tapas done without fruit-expectation is the highest.', kn:'ಶರೀರ ತಪ, ವಾಕ್ ತಪ, ಮನಃ ತಪ — ಫಲದ ಆಸೆ ಬಿಟ್ಟ ಸಾತ್ವಿಕ ತಪ ಶ್ರೇಷ್ಠ (17.14-17).' , dev:'सप्तदशाध्यायः। बन्नंजे (१७।१४) — शारीरं तपः — देव-द्विज-गुरु-प्राज्ञपूजनम्, शौचम्, आर्जवम्, ब्रह्मचर्यम्, अहिंसा च। वाचिकं तपः — सत्यं, प्रियं, हितं, स्वाध्यायः। मानसं तपः — प्रसन्नता, मौनं, आत्मविनिग्रहः। सात्त्विकं तपः फलापेक्षारहितम्।', hi:'सत्रहवाँ अध्याय। बन्नंजे (१७.१४) — शारीरिक तप — देवता, द्विज, गुरु और ज्ञानियों की पूजा, शौच, सरलता, ब्रह्मचर्य, अहिंसा। वाचिक तप — सत्य, प्रिय, हितकर वचन, स्वाध्याय। मानसिक तप — प्रसन्नता, मौन, आत्म-संयम। सात्त्विक तप फलापेक्षारहित।'},
    refs:'BG 17.14 · BG 17.15 · BG 17.16 · BG 17.17'
  },
  {
    id:'dana', tier:'sadhana',
    en:'Dana', kn:'ದಾನ',
    title:{ en:'Dana — Charity', kn:'ದಾನ' , dev:'दानम् — त्याग-कर्म', hi:'दान — त्याग-कर्म'},
    note:{ en:'At 17.20 Bannanje: sattvic dana is given as duty, not expecting return, to a worthy recipient at the right time and place. Rajasic dana is given for reciprocation; tamasic dana is given carelessly at wrong time and place.', kn:'ಸಾತ್ವಿಕ ದಾನ ಫಲದ ಆಸೆ ಇಲ್ಲದೆ ಯೋಗ್ಯ ಜಾಗದಲ್ಲಿ ಯೋಗ್ಯ ವ್ಯಕ್ತಿಗೆ ನೀಡಿದ್ದು (17.20).' , dev:'बन्नंजे (१७।२०) — दातव्यमिति यद्दानं दीयतेऽनुपकारिणे। देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्। सात्त्विकं दानम् — फलापेक्षारहितम्, योग्यपात्रे, उचितदेशकाले। "दातव्यम्" इति भावेन दानम् — एतद् एव श्रेष्ठम्।', hi:'बन्नंजे (१७.२०) — "दातव्यम्" इस भाव से दिया गया दान, बिना प्रतिफल की अपेक्षा के, योग्य पात्र को, उचित देश-काल में — यही सात्त्विक दान है। फल की इच्छा रहित, पात्र को देखकर दिया दान सर्वश्रेष्ठ है।'},
    refs:'BG 17.20 · BG 17.21 · BG 17.22'
  },

  /* ── DHARMA (4) ── */
  {
    id:'svadharma', tier:'dharma',
    en:'Svadharma', kn:'ಸ್ವಧರ್ಮ',
    title:{ en:'Svadharma — One\'s Own Duty', kn:'ಸ್ವಧರ್ಮ' , dev:'स्वधर्मः — स्वकीयः धर्मः', hi:'स्वधर्म — अपना धर्म'},
    note:{ en:'Bannanje at 3.35: better is one\'s own dharma, even imperfectly done, than another\'s dharma done perfectly. Dying in svadharma is better. This is the foundation of karma-yoga — act in your own station without envying others.', kn:'ಸ್ವಧರ್ಮ ಅಪೂರ್ಣವಾಗಿ ಆಚರಿಸಿದರೂ ಅನ್ಯಧರ್ಮಕ್ಕಿಂತ ಶ್ರೇಷ್ಠ. ಸ್ವಧರ್ಮದಲ್ಲಿ ಸಾವು ಒಳ್ಳೆಯದು (3.35).' , dev:'बन्नंजे (३।३५) — श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात्। स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्। परधर्मः भयावहः। जन्म-संस्कार-स्वभावानुसारम् उत्पन्नः धर्मः स्वधर्मः। अर्जुनस्य क्षात्रधर्मः — युद्धम् एव।', hi:'बन्नंजे (३.३५) — अपना धर्म गुणरहित भी हो, तो भी परधर्म से श्रेयस्कर है। थोड़ा भी स्वधर्म महाभय से बचाता है। परधर्म भयावह है। जन्म, संस्कार और स्वभाव से उत्पन्न धर्म स्वधर्म है। अर्जुन का क्षात्रधर्म — युद्ध करना ही है।'},
    refs:'BG 3.35 · BG 18.45 · BG 18.47'
  },
  {
    id:'nishkama_karma', tier:'dharma',
    en:'Nishkama-karma', kn:'ನಿಷ್ಕಾಮ ಕರ್ಮ',
    title:{ en:'Nishkama-karma — Desireless Action', kn:'ನಿಷ್ಕಾಮ ಕರ್ಮ' , dev:'निष्कामकर्म — फलत्यागः', hi:'निष्काम कर्म — फल-त्याग'},
    note:{ en:'The central teaching of Chapter 2. At 2.47 Bannanje: your right is only to action, never to the fruit. Do not let fruit be your motive, nor be attached to inaction. At 18.6 he reiterates: perform prescribed duties abandoning attachment and fruit.', kn:'ಕರ್ಮ ಮಾಡುವ ಹಕ್ಕು ನಿನಗೆ, ಫಲ ಬಯಸುವ ಹಕ್ಕಿಲ್ಲ. ಅಕರ್ಮದಲ್ಲೂ ಆಸಕ್ತಿ ಬೇಡ (2.47).' , dev:'द्वितीयाध्यायस्य मूलोपदेशः। बन्नंजे (२।४७) — कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। कर्म कुरु, फले माऽभिलषः। भगवदर्पणबुद्ध्या कृतं कर्म बन्धकरं न भवति। "योगः कर्मसु कौशलम्" — एतदेव निष्कामयोगस्य लक्षणम्।', hi:'दूसरे अध्याय का मूल उपदेश। बन्नंजे (२.४७) — "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।" कर्म करो, फल की इच्छा मत करो। भगवदर्पण-बुद्धि से किया कर्म बंधनकारी नहीं होता। "योगः कर्मसु कौशलम्" — यही निष्काम योग का लक्षण।'},
    refs:'BG 2.47 · BG 3.19 · BG 18.6'
  },
  {
    id:'satya', tier:'dharma',
    en:'Satya', kn:'ಸತ್ಯ',
    title:{ en:'Satya — Truth', kn:'ಸತ್ಯ' , dev:'सत्यम् — ऋतम् च', hi:'सत्य — सच्चाई'},
    note:{ en:'Bannanje at 17.15 describes satya as one of the forms of speech-tapas: speaking truth that is pleasant and beneficial, and also the recitation of scripture. Truth-speaking is both an ethical value and a sadhana.', kn:'ಸತ್ಯ, ಹಿತ, ಪ್ರಿಯ ಮಾತು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ — ಇದು ವಾಕ್ ತಪ (17.15).' , dev:'बन्नंजे (१७।१५) — वाङ्मयं तपः — अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्। सत्यं वाचिकस्य तपसः अंगम्। सत्येन वागिन्द्रियस्य शुद्धिः। सत्यं ब्रह्मस्वरूपम् — यद् ऋतं तद् एव परं सत्यम्। असत्येन जीवः पतति, सत्येन उद्धरति।', hi:'बन्नंजे (१७.१५) — वाचिक तप में सत्य प्रमुख है — "अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।" सत्य से वाणी की शुद्धि होती है। सत्य ब्रह्म का स्वरूप है। असत्य से जीव गिरता है, सत्य से उद्धार होता है।'},
    refs:'BG 17.15 · BG 13.7'
  },
  {
    id:'daivi_sampat', tier:'dharma',
    en:'Daivi Sampat', kn:'ದೈವೀ ಸಂಪತ್',
    title:{ en:'Daivi Sampat — Divine Qualities', kn:'ದೈವೀ ಸಂಪತ್' , dev:'दैवी सम्पत् — दिव्याः गुणाः', hi:'दैवी संपत् — दिव्य गुण'},
    note:{ en:'Chapter 16 (Daivāsura Sampadvibhāga yoga). Bannanje at 16.1-3 lists 26 divine qualities: fearlessness, purity, steadiness in jnana-yoga, charity, self-control, sacrifice, study, austerity, uprightness, non-violence, truth...', kn:'ಅಭಯ, ಶುದ್ಧಿ, ಜ್ಞಾನಯೋಗ, ದಾನ, ದಮ, ಯಜ್ಞ, ಸ್ವಾಧ್ಯಾಯ, ತಪ — 26 ದೈವೀ ಗುಣಗಳು (16.1-3).' , dev:'बन्नंजे (१६।१-३) — अभयं, सत्त्वसंशुद्धिः, ज्ञानयोगव्यवस्थितिः, दानम्, दमः, यज्ञः, स्वाध्यायः, तपः, आर्जवम् — इत्यादयः षड्विंशति दैवगुणाः। एते मोक्षाय; आसुरी सम्पत् बन्धाय। दैवी सम्पत् प्राप्तस्य जीवः सुखेन मोक्षं गच्छति।', hi:'बन्नंजे (१६.१-३) — अभय, सत्त्वशुद्धि, ज्ञानयोग में स्थिति, दान, दम, यज्ञ, स्वाध्याय, तप, सरलता — ये छब्बीस दैवी गुण। ये मोक्ष के लिए; आसुरी संपत् बंधन के लिए। दैवी संपत् वाला जीव सुखपूर्वक मोक्ष पाता है।'},
    refs:'BG 16.1 · BG 16.2 · BG 16.3'
  },

  /* ── DOSHA (5) ── */
  {
    id:'kama', tier:'dosha',
    en:'Kama', kn:'ಕಾಮ',
    title:{ en:'Kama — Desire', kn:'ಕಾಮ' , dev:'कामः — इच्छा आसक्तिः', hi:'काम — इच्छा और आसक्ति'},
    note:{ en:'At 3.37 Bannanje: kama and krodha, born of rajo-guna, are the great enemies — know this as the destroyer. At 16.21 he lists kama, krodha, and lobha as the three gates of hell, the destruction of the self.', kn:'ಕಾಮ-ಕ್ರೋಧ ರಜೋಗುಣದಿಂದ ಹುಟ್ಟಿದ ಮಹಾ ಶತ್ರು (3.37). ನರಕದ ಮೂರು ದ್ವಾರ: ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ (16.21).' , dev:'बन्नंजे (३।३७) — काम एष क्रोध एष रजोगुणसमुद्भवः; महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्। कामः रजोगुणजः, महान् शत्रुः। इन्द्रियेषु, मनसि, बुद्धौ च आवृत्य ज्ञानम् आच्छादयति। कामात् क्रोधः, क्रोधाद् मोहः — इति पतनक्रमः।', hi:'बन्नंजे (३.३७) — "काम एष क्रोध एष रजोगुणसमुद्भवः" — काम रजोगुण से उत्पन्न, महान् शत्रु। इंद्रियों, मन और बुद्धि में बसकर ज्ञान को ढक देता है। काम से क्रोध, क्रोध से मोह — यही पतन का क्रम है।'},
    refs:'BG 3.37 · BG 16.21'
  },
  {
    id:'krodha', tier:'dosha',
    en:'Krodha', kn:'ಕ್ರೋಧ',
    title:{ en:'Krodha — Anger', kn:'ಕ್ರೋಧ' , dev:'क्रोधः — मन्युः', hi:'क्रोध — मन्यु'},
    note:{ en:'At 2.62-63 Bannanje maps the chain of ruin: dwelling on objects → attachment → desire → from thwarted desire comes krodha → krodha causes delusion → delusion destroys memory → destroyed memory destroys intellect → destruction of the self.', kn:'ಚಿಂತನ → ಆಸಕ್ತಿ → ಕಾಮ → ಕ್ರೋಧ → ಸಂಮೋಹ → ಸ್ಮೃತಿಭ್ರಂಶ → ಬುದ್ಧಿನಾಶ → ಅಧಃಪಾತ (2.62-63).' , dev:'बन्नंजे (२।६२-६३) — ध्यायतो विषयान् पुंसः सङ्गस्तेषूपजायते; सङ्गात् सञ्जायते कामः कामात् क्रोधोऽभिजायते। क्रोधात् सम्मोहः, सम्मोहात् स्मृतिविभ्रमः, स्मृतिभ्रंशाद् बुद्धिनाशः, बुद्धिनाशात् प्रणश्यति। क्रोधः कामस्यैव अन्यरूपम्।', hi:'बन्नंजे (२.६२-६३) — विषयों का चिंतन → आसक्ति → काम → क्रोध। क्रोध से मोह, मोह से स्मृतिभ्रंश, स्मृतिभ्रंश से बुद्धिनाश, बुद्धिनाश से पतन। क्रोध काम का ही दूसरा रूप है। इसे जीतना साधना का अनिवार्य अंग है।'},
    refs:'BG 2.62 · BG 2.63 · BG 16.21'
  },
  {
    id:'lobha', tier:'dosha',
    en:'Lobha', kn:'ಲೋಭ',
    title:{ en:'Lobha — Greed', kn:'ಲೋಭ' , dev:'लोभः — अतितृष्णा', hi:'लोभ — अतृप्त तृष्णा'},
    note:{ en:'At 16.21 Bannanje identifies lobha as the third gate of hell alongside kama and krodha. Greed is rooted in tamo-guna and is listed among the asuri sampat (demonic qualities) in 16.4.', kn:'ಲೋಭ ನರಕದ ಮೂರನೇ ದ್ವಾರ (16.21). ಆಸುರೀ ಸಂಪತ್ತಿನ ಲಕ್ಷಣ (16.4).' , dev:'बन्नंजे (१६।२१) — त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः; कामः क्रोधस्तथा लोभः। लोभः नरकद्वारमध्ये तृतीयः। असन्तुष्टचेतसः अन्यस्वग्रहणेच्छा — लोभः। लोभेन धर्महानिः, लोभात् पापम्, पापाद् अधः पातः।', hi:'बन्नंजे (१६.२१) — काम, क्रोध और लोभ — ये तीन नरक के द्वार, आत्मा के नाशक। लोभ असंतुष्ट चित्त की दूसरे की वस्तु पाने की इच्छा है। लोभ से धर्म-हानि, पाप और अधःपतन होता है।'},
    refs:'BG 16.21 · BG 16.4'
  },
  {
    id:'moha', tier:'dosha',
    en:'Moha', kn:'ಮೋಹ',
    title:{ en:'Moha — Delusion', kn:'ಮೋಹ' , dev:'मोहः — भ्रान्तिः अज्ञानम्', hi:'मोह — भ्रम और अज्ञान'},
    note:{ en:'Bannanje at 2.13 explains that moha (delusion) is what afflicts Arjuna at the start — grief about what should not be grieved. At 18.73 Arjuna says "nashto mohah" — my delusion is destroyed by your grace. Moha is the beginning and end of the Gita narrative.', kn:'ಮೋಹದಿಂದ ಅರ್ಜುನ ಬಾಧಿತ (2.1). "ನಷ್ಟೋ ಮೋಹಃ" — ಮೋಹ ನಾಶವಾಯಿತು (18.73). ಇದು ಗೀತೆಯ ಕಥಾ ಚಾಪ.' , dev:'बन्नंजे (२।१३) — देहिनोऽस्मिन् यथा देहे। शोकः अर्जुनस्य मोहात् उत्पन्नः। मोहः — यथार्थज्ञानस्य अभावः। देहात्मभ्रमः मोहस्य मूलम्। मोहात् कर्तव्याकर्तव्यविवेकः नश्यति। ज्ञानेन मोहः निवर्तते — "नष्टो मोहः स्मृतिर्लब्धा" (१८।७३)।', hi:'बन्नंजे (२.१३) — अर्जुन का शोक मोह से उत्पन्न है। मोह — यथार्थ ज्ञान का अभाव। देहात्म-भ्रम मोह का मूल। मोह से कर्तव्य-अकर्तव्य का विवेक नष्ट हो जाता है। ज्ञान से मोह दूर होता है — "नष्टो मोहः स्मृतिर्लब्धा" (१८.७३)।'},
    refs:'BG 2.1 · BG 18.73'
  },
  {
    id:'avidya', tier:'dosha',
    en:'Avidya', kn:'ಅವಿದ್ಯೆ',
    title:{ en:'Avidya — Ignorance', kn:'ಅವಿದ್ಯೆ' , dev:'अविद्या — अज्ञानम्', hi:'अविद्या — अज्ञान'},
    note:{ en:'At 5.15 Bannanje: the Lord does not take on anyone\'s sin or merit — this knowledge is covered by avidya. From this avidya, beings are deluded. Avidya is the root bondage — jnana is its antidote (5.16).', kn:'ಜ್ಞಾನವನ್ನು ಅವಿದ್ಯೆ ಮುಚ್ಚಿದೆ. ಅದರಿಂದ ಜನ ಮೋಹಿತರಾಗುತ್ತಾರೆ (5.15). ಜ್ಞಾನ ಅವಿದ್ಯೆಯ ಔಷಧ (5.16).' , dev:'बन्नंजे (५।१५) — नादत्ते कस्यचित् पापं न चैव सुकृतं विभुः; अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः। भगवान् पापं न गृह्णाति — अज्ञानावृतत्वात् जीवः मुह्यति। ज्ञानाग्निः अज्ञानं दहति (४।३७)। अविद्यानिवृत्तिः मोक्षस्य द्वारम्।', hi:'बन्नंजे (५.१५) — भगवान् किसी का पाप या पुण्य नहीं लेते — अज्ञान से ढका हुआ ज्ञान जीव को मोहित करता है। ज्ञानरूपी अग्नि अज्ञान को जला देती है (४.३७)। अविद्या-निवृत्ति मोक्ष का द्वार है।'},
    refs:'BG 5.15 · BG 5.16'
  },

  /* ── PHALA (4) ── */
  {
    id:'moksha', tier:'phala',
    en:'Moksha', kn:'ಮೋಕ್ಷ',
    title:{ en:'Moksha — Liberation', kn:'ಮೋಕ್ಷ' , dev:'मोक्षः — परमा गतिः', hi:'मोक्ष — परम गति'},
    note:{ en:'Bannanje at 4.9: knowing My divine birth and action in truth, one does not take rebirth on leaving the body — they attain Me. This is moksha. At 18.66 the path: sharanagati. Chapter 8 describes the moment of death and the path to liberation.', kn:'ನನ್ನ ದಿವ್ಯ ಜನ್ಮ ಕರ್ಮ ಯಥಾರ್ಥ ತಿಳಿದವನು ಮರು ಜನ್ಮ ಪಡೆಯದೆ ನನ್ನನ್ನು ಸೇರುತ್ತಾನೆ (4.9).' , dev:'बन्नंजे (४।९) — जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः; त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन। दिव्यजन्म-कर्मज्ञानेन मोक्षः। भगवत्सायुज्यं मोक्षः — न तु ऐक्यम् (मध्वमते)। मोक्षे जीवः स्वरूपानन्दं भुङ्क्ते, तथापि भगवतः भिन्नः।', hi:'बन्नंजे (४.९) — जो मेरे दिव्य जन्म और कर्म को तत्त्वतः जानता है, वह देह छोड़ने के बाद पुनर्जन्म नहीं लेता, मुझे प्राप्त होता है। भगवत्-सायुज्य मोक्ष है — एकत्व नहीं (मध्व-मत)। मोक्ष में जीव स्वरूपानंद भोगता है, फिर भी भगवान् से भिन्न रहता है।'},
    refs:'BG 4.9 · BG 8.15 · BG 18.66'
  },
  {
    id:'ananda', tier:'phala',
    en:'Ananda', kn:'ಆನಂದ',
    title:{ en:'Ananda — Bliss', kn:'ಆನಂದ' , dev:'आनन्दः — परमसुखम्', hi:'आनंद — परम सुख'},
    note:{ en:'At 5.21 Bannanje: one who is detached from external contacts finds joy in the atma — such a yogi who is united with Brahman enjoys endless ananda. This brahmananda is not a creation but the jiva\'s own nature revealed.', kn:'ಬಾಹ್ಯ ಸ್ಪರ್ಶಗಳಿಗೆ ಆಸಕ್ತಿ ಬಿಟ್ಟ ಯೋಗಿ ಆತ್ಮದಲ್ಲಿ ಅಕ್ಷಯ ಆನಂದ ಕಾಣುತ್ತಾನೆ (5.21).' , dev:'बन्नंजे (५।२१) — बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत् सुखम्। यः बाह्यविषयेभ्यः असक्तः सः आत्मन्येव सुखं विन्दति। मोक्षानन्दः — भगवद्दर्शनजन्यः, अनन्तः, निरतिशयः। ताराम्यक्रमे प्रत्येकजीवः स्वस्वयोग्यतानुसारम् आनन्दं भुङ्क्ते।', hi:'बन्नंजे (५.२१) — जो बाहरी विषयों से अनासक्त है, वह आत्मा में ही सुख पाता है। मोक्षानंद — भगवद्-दर्शन से जन्य, अनंत और निरतिशय। ताराम्य-क्रम में प्रत्येक जीव अपनी-अपनी योग्यतानुसार आनंद भोगता है।'},
    refs:'BG 5.21 · BG 6.28'
  },
  {
    id:'shanti', tier:'phala',
    en:'Shanti', kn:'ಶಾಂತಿ',
    title:{ en:'Shanti — Peace', kn:'ಶಾಂತಿ' , dev:'शान्तिः — मनःप्रशान्तिः', hi:'शांति — मन की प्रशांति'},
    note:{ en:'At 2.66 Bannanje: for one without yoga there is no buddhi, no meditation, no peace — and without peace how can there be happiness? At 5.29 Krishna says: knowing Me as the Lord of all yajna and tapas and as the friend of all beings, one attains shanti.', kn:'ಎಲ್ಲ ಯಜ್ಞ ತಪಗಳ ಅಧಿಪತಿ ನಾನು. ಎಲ್ಲರ ಮಿತ್ರ ನಾನು — ಇದು ತಿಳಿದಾಗ ಶಾಂತಿ ಸಿಗುತ್ತದೆ (5.29).' , dev:'बन्नंजे (२।६६) — नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना; न चाभावयतः शान्तिः अशान्तस्य कुतः सुखम्। योगहीनस्य न बुद्धिः, न भावना, न शान्तिः, न सुखम्। शान्तिः — कामक्रोधादिरहितं मनः। "शान्तिरेव परं सुखम्।" भगवत्कृपया शान्तिः।', hi:'बन्नंजे (२.६६) — योगहीन को न बुद्धि है, न भावना, न शांति, न सुख। शांति — काम-क्रोध आदि से रहित मन। "शांतिरेव परं सुखम्।" भगवत्कृपा से शांति मिलती है। अशांत मनुष्य को सुख नहीं मिल सकता।'},
    refs:'BG 2.66 · BG 5.29'
  },
  {
    id:'sthitaprajna', tier:'phala',
    en:'Sthitaprajna', kn:'ಸ್ಥಿತಪ್ರಜ್ಞ',
    title:{ en:'Sthitaprajna — Steady Wisdom', kn:'ಸ್ಥಿತಪ್ರಜ್ಞ' , dev:'स्थितप्रज्ञः — ब्रह्मनिष्ठः', hi:'स्थितप्रज्ञ — ब्रह्मनिष्ठ'},
    note:{ en:'Chapter 2 ends with the description of the sthitaprajna. At 2.55-57 Bannanje: one who has abandoned all desires of the mind, is satisfied in the atma alone, undisturbed in sorrow, without craving in pleasure, free from attachment, fear, and anger.', kn:'ಮನಸ್ಸಿನ ಎಲ್ಲ ಕಾಮನೆ ಬಿಟ್ಟು, ಆತ್ಮದಲ್ಲಿ ತೃಪ್ತ, ದುಃಖದಲ್ಲಿ ಉದ್ವಿಗ್ನನಾಗದ — ಇವನೇ ಸ್ಥಿತಪ್ರಜ್ಞ (2.55).' , dev:'द्वितीयाध्यायस्य उपसंहारः (२।५५-७२)। बन्नंजे — स्थितप्रज्ञः सः यः दुःखेषु उद्विग्नमनाः न, सुखेषु स्पृहा नास्ति, वीतरागभयक्रोधः, स्थिरधीः। यः सर्वकामान् प्रजहाति, आत्मन्येवात्मना तुष्टः, स स्थितप्रज्ञः उच्यते। "एषा ब्राह्मी स्थितिः।"', hi:'दूसरे अध्याय का उपसंहार (२.५५-७२)। बन्नंजे — स्थितप्रज्ञ वह है जो दुःख में उद्विग्न नहीं होता, सुख में स्पृहा नहीं रखता, राग-भय-क्रोध से मुक्त है और स्थिर-बुद्धि है। जो सभी कामनाएँ छोड़ देता है और आत्मा में तुष्ट रहता है — वही स्थितप्रज्ञ है। "एषा ब्राह्मी स्थितिः।"'},
    refs:'BG 2.55 · BG 2.56 · BG 2.57'
  },
];
if (typeof window !== 'undefined') {
  window.BRIDGE_CONCEPT_LINKS = BRIDGE_CONCEPT_LINKS;
  window.BRIDGE_GITA_TIERS = BRIDGE_GITA_TIERS;
  window.BRIDGE_GITA_CONCEPTS = BRIDGE_GITA_CONCEPTS;
}
