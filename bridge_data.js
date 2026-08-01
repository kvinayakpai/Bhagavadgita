/* Bridge — Tatvam Jalam Gita ⟷ Katopanishad
 *
 * CONTENT POLICY: Every entry here is either (a) a place where Bannanje
 * Govindacharya's own commentary on one text explicitly names or quotes the
 * other, or (b) a same-named concept-graph tier shared by both sites' existing
 * knowledge graphs. No comparison is authored that Bannanje does not himself
 * draw. See BRIDGE_PLAN.md for the full content policy.
 *
 * Identical copy lives in both kvinayakpai/Bhagavadgita and
 * kvinayakpai/Katopanishad repos as bridge_data.js.
 */

const BRIDGE_TIER_MATCH = {
  // Gita tier id (from data.js TIERS) -> Katha map-filter tier id (from
  // Katopanishad's TIER_COLORS / TIER_LABELS). Gita tiers with no Katha
  // counterpart (e.g. 'yoga') are simply absent here.
  parabrahma:  'parabrahma',
  jivatattva:  'jiva',
  antahkarana: 'antahkarana',
  sadhana:     'sadhana',
  dharma:      'dharma',
  phala:       'phala',
};

const BRIDGE_ENTRIES = [
  {
    id: 'vaishvanara-agni',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'Vaishvanara — the Lord as fire within the heart',
      kn: 'ವೈಶ್ವಾನರ — ಹೃದಯದೊಳಗಿನ ಅಗ್ನಿಯಾಗಿ ಭಗವಂತ',
      dev: 'वैश्वानरः — हृदयस्थोऽग्निरूपो भगवान्',
      hi: 'वैश्वानर — हृदय में अग्निरूप भगवान्',
      sa: 'वैश्वानरः — हृदयस्थोऽग्निरूपो भगवान्',
    },
    gita: {
      ref: 'BG 15.14',
      note: {
        en: '"ahaṁ vaiśvānaro bhūtvā prāṇinām deham āśritaḥ" — Krishna: "Becoming Vaishvanara, I dwell in the bodies of all beings."',
        kn: '"ಅಹಂ ವೈಶ್ವಾನರೋ ಭೂತ್ವಾ ಪ್ರಾಣಿನಾಂ ದೇಹಮಾಶ್ರಿತಃ" — ವೈಶ್ವಾನರನಾಗಿ ಎಲ್ಲಾ ಜೀವರ ದೇಹದಲ್ಲಿ ನೆಲೆಸಿರುವ ಕೃಷ್ಣ.',
      },
    },
    katha: {
      ref: 'Katha 1.2.14–15 (Adhyaya 1, Valli 2)',
      note: {
        en: 'Explaining the fire-vidya Yama teaches Nachiketa, Bannanje says the Lord "abides in the cave of the heart" (nihitaṁ guhāyām) and quotes Gita 15.14 verbatim to make the point: the same Vaishvanara indwelling the body is the fire Nachiketa is taught to worship.',
        kn: 'ಯಮ ನಚಿಕೇತನಿಗೆ ಕೊಡುವ ಅಗ್ನಿವಿದ್ಯೆಯ ವಿವರಣೆಯಲ್ಲಿ, ಭಗವಂತ "ಹೃದಯಗುಹೆಯಲ್ಲೇ" ಇದ್ದಾನೆ ಎಂದು ಬನ್ನಂಜೆ ಹೇಳುತ್ತಾ, ಗೀತೆ ೧೫.೧೪ ಅನ್ನು ಯಥಾವತ್ತಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ — ದೇಹದೊಳಗಿನ ಅದೇ ವೈಶ್ವಾನರನೇ ನಚಿಕೇತ ಉಪಾಸಿಸಬೇಕಾದ ಅಗ್ನಿ.',
      },
    },
    source_note: {
      en: 'Bannanje directly quotes Gita 15.14 while teaching Katha 1.2.14–15 — an explicit cross-reference, not an inferred parallel.',
      kn: 'ಕಠ ೧.೨.೧೪-೧೫ರ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಗೀತೆ ೧೫.೧೪ ಅನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ — ಇದು ನಮ್ಮ ಊಹೆಯಲ್ಲ, ಬನ್ನಂಜೆಯವರ ಸ್ಪಷ್ಟ ಉಲ್ಲೇಖ.',
    },
  },
  {
    id: 'shreyas-preyas',
    tier: 'sadhana',
    kind: 'explicit_citation',
    title: {
      en: 'Śreyas vs Preyas — the beneficial and the pleasant',
      kn: 'ಶ್ರೇಯಸ್ಸು ಮತ್ತು ಪ್ರೇಯಸ್ಸು',
      dev: 'श्रेयः प्रेयश्च',
      hi: 'श्रेयस् और प्रेयस्',
      sa: 'श्रेयः प्रेयश्च',
    },
    gita: {
      ref: 'BG 5.20',
      note: {
        en: 'Explaining equanimity toward pleasant and unpleasant outcomes, Bannanje quotes Katha 1.2.2 directly: "preyo mando yogakṣemād vṛṇīte" — "the fool chooses the pleasant out of concern for gain and security."',
        kn: 'ಸುಖ-ದುಃಖಗಳಲ್ಲಿ ಸಮಬುದ್ಧಿಯ ವಿವರಣೆಯಲ್ಲಿ, ಬನ್ನಂಜೆ ಕಠ ೧.೨.೨ ಅನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ: "ಪ್ರೇಯೋ ಮಂದೋ ಯೋಗಕ್ಷೇಮಾದ್ ವೃಣೀತೇ" — ಮೂಢನು ಯೋಗಕ್ಷೇಮದ ಆಸೆಯಿಂದ ಪ್ರೇಯಸ್ಸನ್ನೇ ಆರಿಸಿಕೊಳ್ಳುತ್ತಾನೆ.',
      },
    },
    katha: {
      ref: 'Katha 1.2.1–2 (Adhyaya 1, Valli 2)',
      note: {
        en: 'Yama\'s teaching to Nachiketa that śreyas (the good) and preyas (the pleasant) present themselves to every person; the wise chooses śreyas, the foolish chooses preyas out of desire for gain and security (yoga-kṣema).',
        kn: 'ಶ್ರೇಯಸ್ಸು ಮತ್ತು ಪ್ರೇಯಸ್ಸು ಇಬ್ಬಗೆಯ ದಾರಿಗಳು ಎಲ್ಲರಿಗೂ ಎದುರಾಗುತ್ತವೆ; ಧೀರನು ಶ್ರೇಯಸ್ಸನ್ನು, ಮಂದನು ಯೋಗಕ್ಷೇಮಕ್ಕಾಗಿ ಪ್ರೇಯಸ್ಸನ್ನೂ ಆರಿಸಿಕೊಳ್ಳುತ್ತಾನೆ ಎಂದು ಯಮ ನಚಿಕೇತನಿಗೆ ಉಪದೇಶಿಸುತ್ತಾನೆ.',
      },
    },
    source_note: {
      en: 'A reciprocal citation: Bannanje\'s Gita commentary quotes the Katha verse by name to reinforce the same teaching in a different setting.',
      kn: 'ಇದೊಂದು ಪರಸ್ಪರ ಉಲ್ಲೇಖ — ಬನ್ನಂಜೆಯವರ ಗೀತಾ ವ್ಯಾಖ್ಯಾನ ಕಠ ಶ್ಲೋಕವನ್ನು ಹೆಸರಿಸಿ ಉಲ್ಲೇಖಿಸುತ್ತದೆ.',
    },
  },
  {
    id: 'yajna-dana-tapas',
    tier: 'dharma',
    kind: 'explicit_citation',
    title: {
      en: 'Yajña, Dāna, Tapas — the three daily karmas',
      kn: 'ಯಜ್ಞ, ದಾನ, ತಪಃ — ಮೂರು ನಿತ್ಯಕರ್ಮಗಳು',
      dev: 'यज्ञ-दान-तपांसि',
      hi: 'यज्ञ, दान, तप — तीन नित्यकर्म',
      sa: 'यज्ञ-दान-तपांसि',
    },
    gita: {
      ref: 'BG chapter 17 (referenced by name in Katha commentary)',
      note: {
        en: 'Gita 17 details the three-fold classification (sāttvika/rājasa/tāmasa) of yajña, dāna, and tapas as daily disciplines.',
        kn: 'ಗೀತೆಯ ೧೭ನೇ ಅಧ್ಯಾಯದಲ್ಲಿ ಯಜ್ಞ, ದಾನ, ತಪಃ ಎನ್ನುವ ಮೂರು ಕರ್ಮಗಳ ಸಾತ್ವಿಕ-ರಾಜಸ-ತಾಮಸ ವಿಭಜನೆಯ ವಿವರಣೆ ಇದೆ.',
      },
    },
    katha: {
      ref: 'Katha 1.1.16–17, the Nachiketa-agni teaching (Adhyaya 1, Valli 1)',
      note: {
        en: 'While explaining how an ordinary person can perform the "three karmas" daily to become a "triṇāciketa," Bannanje explicitly points the reader to "the seventeenth chapter of the Gita" for a fuller explanation of yajña, dāna, and tapas.',
        kn: 'ಪ್ರತಿಯೊಬ್ಬರೂ ‘ತ್ರಿಣಾಚಿಕೇತ’ರಾಗಲು ಮೂರು ಕರ್ಮಗಳನ್ನು ದಿನವೂ ಹೇಗೆ ಮಾಡಬಹುದು ಎಂದು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಓದುಗರನ್ನು ನೇರವಾಗಿ "ಗೀತೆಯ ಹದಿನೇಳನೇ ಅಧ್ಯಾಯ"ಕ್ಕೆ ಸೂಚಿಸುತ್ತಾರೆ.',
      },
    },
    source_note: {
      en: 'Bannanje names the Gita chapter directly in his Katha exposition, pointing readers there for the fuller treatment.',
      kn: 'ಬನ್ನಂಜೆ ತಮ್ಮ ಕಠ ವಿವರಣೆಯಲ್ಲಿ ಗೀತಾ ಅಧ್ಯಾಯವನ್ನು ಹೆಸರಿಸಿ ಸೂಚಿಸುತ್ತಾರೆ.',
    },
  },
  {
    id: 'karma-as-worship',
    tier: 'yoga',
    kind: 'explicit_citation',
    title: {
      en: 'Turning every action into worship',
      kn: 'ಪ್ರತಿಯೊಂದು ಕರ್ಮವನ್ನೂ ಪೂಜೆಯಾಗಿಸುವುದು',
      dev: 'सर्वकर्मणां पूजारूपत्वम्',
      hi: 'हर कर्म को पूजा बनाना',
      sa: 'सर्वकर्मणां पूजारूपत्वम्',
    },
    gita: {
      ref: 'BG chapter 12 (referenced by name in Katha commentary)',
      note: {
        en: 'Gita 12 (Bhakti-yoga) is cited for the teaching that ordinary daily action, done with the right anusandhana (contemplation), becomes worship of the Lord.',
        kn: 'ಗೀತೆಯ ೧೨ನೇ ಅಧ್ಯಾಯ (ಭಕ್ತಿಯೋಗ) — ದೈನಂದಿನ ಕರ್ಮವನ್ನೂ ಸರಿಯಾದ ಅನುಸಂಧಾನದಿಂದ ಪೂಜೆಯಾಗಿಸಬಹುದು ಎನ್ನುವ ಬೋಧನೆ.',
      },
    },
    katha: {
      ref: 'Katha 1.1.20 area (Adhyaya 1, Valli 1)',
      note: {
        en: 'Addressing whether an ordinary person can really perform yajña, dāna, and tapas every day, Bannanje answers by pointing to "a beautiful explanation Krishna gives in the Gita (chapter 12)" — every word a hymn, every step a circumambulation, every action an offering.',
        kn: 'ಸಾಮಾನ್ಯ ಮನುಷ್ಯನಿಗೆ ದಿನವೂ ಯಜ್ಞ-ದಾನ-ತಪಸ್ಸು ಸಾಧ್ಯವೇ ಎನ್ನುವ ಪ್ರಶ್ನೆಗೆ ಬನ್ನಂಜೆ "ಶ್ರೀಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ (ಅಧ್ಯಾಯ ೧೨) ಕೊಟ್ಟ ಸುಂದರ ವಿವರಣೆ" ಎಂದು ಸೂಚಿಸಿ ಉತ್ತರಿಸುತ್ತಾರೆ.',
      },
    },
    source_note: {
      en: 'A direct, named pointer from the Katha commentary to a specific Gita chapter answering the same practical question.',
      kn: 'ಕಠ ವ್ಯಾಖ್ಯಾನದಿಂದ ಗೀತೆಯ ನಿರ್ದಿಷ್ಟ ಅಧ್ಯಾಯಕ್ಕೆ ನೇರ ಸೂಚನೆ.',
    },
  },
  {
    id: 'eleven-nine-gates',
    tier: 'jivatattva',
    kind: 'explicit_citation',
    title: {
      en: 'The Body as a City of Gates',
      kn: 'ದ್ವಾರಗಳ ಪಟ್ಟಣವಾಗಿ ಶರೀರ',
      hi: 'द्वारों का नगर — शरीर',
      sa: 'द्वाराणां पुरं शरीरम्',
    },
    gita: { ref: 'BG 5.13', note: {
      en: '"navadvāre pure dehī" — Krishna describes the body as a city of nine gates in which the self-controlled soul dwells at ease.',
      kn: '"ನವದ್ವಾರೇ ಪುರೇ ದೇಹೀ" — ಒಂಬತ್ತು ದ್ವಾರಗಳ ಪಟ್ಟಣದಂತಿರುವ ಶರೀರದಲ್ಲಿ ಜೀವ ಸುಖವಾಗಿ ನೆಲೆಸಿರುತ್ತಾನೆ ಎಂದು ಕೃಷ್ಣ ವಿವರಿಸುತ್ತಾನೆ.',
    }},
    katha: { ref: 'Katha 2.2.1 (Adhyaya 2, Valli 2)', note: {
      en: 'Yama calls the body "ekādaśa-dvāram puram" — a city of eleven gates (the nine familiar openings plus the navel and the crown/sahasrāra). Bannanje explicitly notes "we know Krishna describes this as nava-dvāre pure dehī, Gita 5.13."',
      kn: 'ಯಮ ಶರೀರವನ್ನು "ಏಕಾದಶದ್ವಾರಂ ಪುರಂ" — ಹನ್ನೊಂದು ದ್ವಾರಗಳ ಪಟ್ಟಣ ಎಂದು ಕರೆಯುತ್ತಾನೆ. ಬನ್ನಂಜೆ "ಗೀತೆಯಲ್ಲಿ ಕೃಷ್ಣ ನವದ್ವಾರೇ ಪುರೇ ದೇಹೀ ಎಂದು ವಿವರಿಸಿರುವುದು ನಮಗೆ ತಿಳಿದಿದೆ (ಗೀತಾ ೫-೧೩)" ಎಂದು ಸ್ಪಷ್ಟವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'Bannanje names the Gita verse and chapter directly while explaining the Katha verse.', kn: 'ಕಠ ಶ್ಲೋಕದ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಗೀತಾ ಶ್ಲೋಕ-ಅಧ್ಯಾಯವನ್ನು ನೇರವಾಗಿ ಹೆಸರಿಸುತ್ತಾರೆ.' },
  },
  {
    id: 'brahman-as-light',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'Brahman as the Light Behind All Light',
      kn: 'ಎಲ್ಲಾ ಬೆಳಕುಗಳ ಮೂಲ ಬೆಳಕಾಗಿ ಭಗವಂತ',
      hi: 'सब प्रकाशों का मूल प्रकाश — ब्रह्म',
      sa: 'सर्वप्रकाशानां मूलं तेजो ब्रह्म',
    },
    gita: { ref: 'BG 15.6', note: {
      en: '"na tad bhāsayate sūryo na śaśāṅko na pāvakaḥ" — neither sun, moon, nor fire illumines that supreme abode; those who reach it never return.',
      kn: '"ನ ತದ್ ಭಾಸಯತೇ ಸೂರ್ಯೋ ನ ಶಶಾಂಕೋ ನ ಪಾವಕಃ" — ಸೂರ್ಯ, ಚಂದ್ರ, ಅಗ್ನಿ ಯಾವುದೂ ಆ ಪರಮಧಾಮವನ್ನು ಬೆಳಗಿಸಲಾರವು.',
    }},
    katha: { ref: 'Katha 2.2.15 (Adhyaya 2, Valli 2, closing verse)', note: {
      en: '"na tatra sūryo bhāti na candra-tārakam" — the same declaration in near-identical wording. Bannanje writes: "Krishna says exactly this in the Gita" and quotes 15.6 in full alongside it.',
      kn: '"ನ ತತ್ರ ಸೂರ್ಯೋ ಭಾತಿ ನ ಚಂದ್ರತಾರಕಂ" — ಬಹುತೇಕ ಒಂದೇ ಪದಗಳ ಘೋಷಣೆ. ಬನ್ನಂಜೆ "ಇದನ್ನೇ ಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ ಹೀಗೆ ಹೇಳಿದ್ದಾನೆ" ಎಂದು ಬರೆದು ೧೫.೬ ಅನ್ನು ಪೂರ್ಣವಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'A bidirectional citation \u2014 Bannanje quotes this pairing in BOTH his Katha commentary and his Gita 15.6 commentary, each time citing the other text explicitly by name.', kn: 'ಪರಸ್ಪರ ಉಲ್ಲೇಖ \u2014 ಬನ್ನಂಜೆ ಈ ಶ್ಲೋಕಜೋಡಿಯನ್ನು ಕಠ ಮತ್ತು ಗೀತಾ ಎರಡೂ ವ್ಯಾಖ್ಯಾನಗಳಲ್ಲಿ, ಪ್ರತಿ ಬಾರಿ ಇನ್ನೊಂದನ್ನು ಹೆಸರಿಸುತ್ತಾ, ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
  },
  {
    id: 'ashvattha-tree',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'The Cosmic Ashvattha Tree',
      kn: 'ಸಂಸಾರ ಅಶ್ವತ್ಥ ವೃಕ್ಷ',
      hi: 'संसार-अश्वत्थ वृक्ष',
      sa: 'संसाराश्वत्थवृक्षः',
    },
    gita: { ref: 'BG 15.1 (also referenced at 14.18)', note: {
      en: '"ūrdhvamūlam adhaḥ-śākham aśvatthaṃ prāhur avyayam" — the world is described as an eternal Ashvattha tree with roots above; the Gita adds that the Vedas are its leaves.',
      kn: '"ಊರ್ಧ್ವಮೂಲಮ್ ಅಧಃಶಾಖಮ್ ಅಶ್ವತ್ಥಮ್ ಪ್ರಾಹುಃ ಅವ್ಯಯಮ್" — ಬೇರುಗಳು ಮೇಲಿರುವ ಅಶ್ವತ್ಥವೃಕ್ಷ; ವೇದಗಳೇ ಅದರ ಎಲೆಗಳು ಎಂದು ಗೀತೆ ಸೇರಿಸುತ್ತದೆ.',
    }},
    katha: { ref: 'Katha 2.3.1 (Adhyaya 2, Valli 3, opening verse)', note: {
      en: '"ūrdhvamūlo\u2019vāk-śākha eṣo\u2019śvatthaḥ sanātanaḥ" — the same tree-image opens Katha\u2019s final Valli. Bannanje: "we see this same description explained by Krishna in the fifteenth chapter of the Gita" \u2014 and separately, discussing guṇas at BG 14.18, quotes this Katha verse by its exact reference (2-3-1) to explain the word "ūrdhva."',
      kn: '"ಊರ್ಧ್ವಮೂಲೋ\u200cಽವಾಕ್ಶಾಖ ಏಷೋ\u200cಽಶ್ವತ್ಥಃ ಸನಾತನಃ" — ಇದೇ ಮರದ ಚಿತ್ರಣ ಕಠದ ಕೊನೆಯ ವಲ್ಲಿಯ ಆರಂಭ. ಬನ್ನಂಜೆ: "ಇಲ್ಲಿ ಬಂದಿರುವ ವಿವರಣೆಯನ್ನೇ ಕೃಷ್ಣ ಗೀತೆಯ ಹದಿನೈದನೇ ಅಧ್ಯಾಯದಲ್ಲಿ ವಿವರಿಸಿ ಹೇಳಿರುವುದನ್ನು ಕಾಣುತ್ತೇವೆ" — ಮತ್ತು ಪ್ರತ್ಯೇಕವಾಗಿ ಗೀತೆ ೧೪.೧೮ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು (೨-೩-೧) ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉದಾಹರಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'Bidirectional and doubled: cited in Katha\u2019s own commentary AND twice in the Gita commentary (15.1 and 14.18).', kn: 'ಪರಸ್ಪರ ಮತ್ತು ಎರಡು ಬಾರಿ: ಕಠದ ಸ್ವಂತ ವ್ಯಾಖ್ಯಾನದಲ್ಲೂ, ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ (೧೫.೧ ಮತ್ತು ೧೪.೧೮) ಎರಡು ಬಾರಿಯೂ ಉಲ್ಲೇಖಿತ.' },
  },
  {
    id: 'cosmic-regulation',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'The Devas Function Only Out of Fear of Him',
      kn: 'ಭಗವಂತನ ಭಯದಿಂದಲೇ ದೇವತೆಗಳ ಕಾರ್ಯ',
      hi: 'भगवान् के भय से ही देवताओं का कार्य',
      sa: 'भगवद्भयादेव देवानां कार्यम्',
    },
    gita: { ref: 'BG 9.19', note: {
      en: '"tapāmy aham ahaṃ varṣaṃ nigṛhṇāmy utsṛjāmi ca / amṛtaṃ caiva mṛtyuś ca sad-asac cāham arjuna" — Krishna: "I scorch, I withhold and send the rain, I am both immortality and death."',
      kn: '"ತಪಾಮ್ಯಹಮ್ ಅಹಂ ವರ್ಷಂ ನಿಗೃಹ್ಣಾಮ್ಯುತ್ಸೃಜಾಮಿ ಚ" — ನಾನೇ ಸುಡುತ್ತೇನೆ, ಮಳೆ ತಡೆದು ಸುರಿಸುತ್ತೇನೆ, ನಾನೇ ಅಮೃತ ಮತ್ತು ಮೃತ್ಯು ಎಂದು ಕೃಷ್ಣ ಹೇಳುತ್ತಾನೆ.',
    }},
    katha: { ref: 'Katha 2.3.2 (Adhyaya 2, Valli 3)', note: {
      en: '"bhayād asyāgnis tapati bhayāt tapati sūryaḥ / bhayād indraś ca vāyuś ca mṛtyur dhāvati pañcamaḥ" — fire, sun, Indra, wind, and Death himself all function bound by fear of Him. Bannanje: "this same explanation appears in the Gita too" and quotes 9.19 with its exact reference.',
      kn: '"ಭಯಾದಸ್ಯಾಗ್ನಿಸ್ತಪತಿ ಭಯಾತ್ ತಪತಿ ಸೂರ್ಯಃ" — ಅಗ್ನಿ, ಸೂರ್ಯ, ಇಂದ್ರ, ವಾಯು, ಸ್ವತಃ ಮೃತ್ಯುವೂ ಭಗವಂತನ ಭಯದಿಂದಲೇ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತಾರೆ. ಬನ್ನಂಜೆ: "ಇದೇ ವಿವರಣೆ ಗೀತೆಯಲ್ಲೂ ಕೂಡಾ ಬಂದಿದೆ" ಎಂದು ೯.೧೯ ಅನ್ನು ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'Bannanje also notes the same idea appears in Taittiriya Upanishad\u2019s Brahmananda Valli (8th anuvaka) \u2014 he is drawing a three-way parallel, of which the Gita link is explicit and named.', kn: 'ಬನ್ನಂಜೆ ಇದೇ ಭಾವ ತೈತ್ತಿರೀಯ ಉಪನಿಷತ್ತಿನ ಬ್ರಹ್ಮಾನಂದವಲ್ಲಿಯಲ್ಲೂ (೮ನೇ ಅನುವಾಕ) ಬರುತ್ತದೆ ಎಂದು ಸೂಚಿಸುತ್ತಾರೆ \u2014 ಮೂರು-ಮೂಲಗಳ ಸಮಾನತೆ; ಗೀತಾ ಉಲ್ಲೇಖ ಸ್ಪಷ್ಟ ಮತ್ತು ಹೆಸರಿಸಲ್ಪಟ್ಟಿದೆ.' },
  },
  {
    id: 'om-tat-sat',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'Om Tat Sat — the Threefold Designation',
      kn: 'ಓಂ ತತ್ ಸತ್ — ತ್ರಿವಿಧ ನಿರ್ದೇಶ',
      hi: 'ॐ तत् सत् — त्रिविध निर्देश',
      sa: 'ॐ तत् सत् त्रिविधो निर्देशः',
    },
    gita: { ref: 'BG 17.23', note: {
      en: '"oṃ tat sad iti nirdeśo brahmaṇas tri-vidhaḥ smṛtaḥ" — Om, Tat, and Sat are remembered as the threefold designation of Brahman.',
      kn: '"ಓಂ ತತ್ ಸದಿತಿ ನಿರ್ದೇಶೋ ಬ್ರಹ್ಮಣಸ್ತ್ರಿವಿಧಃ ಸ್ಮೃತಃ" — ಓಂ, ತತ್, ಸತ್ ಎಂಬ ಮೂರು ಪದಗಳು ಬ್ರಹ್ಮನ ನಿರ್ದೇಶಗಳಾಗಿ ಸ್ಮರಿಸಲ್ಪಟ್ಟಿವೆ.',
    }},
    katha: { ref: 'Katha 2.3.12 (Adhyaya 2, Valli 3)', note: {
      en: '"naiva vācā na manasā prāptuṃ śakyo na cakṣuṣā / astīti bruvato\u2019nyatra kathaṃ tad-upalabhyate" — the Lord cannot be grasped except through the affirmation "He is" (asti). Bannanje: "there is a statement in the Gita" and quotes 17.23 to explain this "sat"-mode of upāsanā.',
      kn: '"ನೈವ ವಾಚಾ ನ ಮನಸಾ ಪ್ರಾಪ್ತುಂ ಶಕ್ಯೋ ನ ಚಕ್ಷುಷಾ" — "ಅಸ್ತಿ" ಎಂದು ಒಪ್ಪಿಕೊಳ್ಳುವವನಿಗಲ್ಲದೆ ಬೇರೆ ಯಾರಿಗೂ ಭಗವಂತ ಸಿಗಲಾರ. ಬನ್ನಂಜೆ "ಗೀತೆಯಲ್ಲಿ ಒಂದು ಮಾತು ಬಂದಿದೆ" ಎಂದು ೧೭.೨೩ ಅನ್ನು ಉಲ್ಲೇಖಿಸಿ ಈ "ಸತ್" ಉಪಾಸನೆಯ ಮುಖವನ್ನು ವಿವರಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'Explicit citation while glossing the "sat" mode of worship in Katha.', kn: 'ಕಠದ "ಸತ್" ಉಪಾಸನಾ ಮುಖವನ್ನು ವಿವರಿಸುತ್ತಾ ಸ್ಪಷ್ಟ ಉಲ್ಲೇಖ.' },
  },
  {
    id: 'prana-apana-vamana',
    tier: 'antahkarana',
    kind: 'explicit_citation',
    title: {
      en: 'Prana-Apana and the Vamana Form',
      kn: 'ಪ್ರಾಣ-ಅಪಾನ ಮತ್ತು ವಾಮನ ರೂಪ',
      hi: 'प्राण-अपान और वामन रूप',
      sa: 'प्राणापानौ वामनरूपं च',
    },
    gita: { ref: 'BG 15.14', note: {
      en: 'Explaining Vaishvanara digesting food via prāṇa-apāna, Bannanje glosses the Lord\u2019s heart-seated Vamana form and quotes the Katha verse on prāṇa-apāna by its exact reference.',
      kn: 'ವೈಶ್ವಾನರ ಪ್ರಾಣ-ಅಪಾನಗಳ ಮೂಲಕ ಆಹಾರ ಜೀರ್ಣಿಸುವುದನ್ನು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಹೃದಯಸ್ಥ ವಾಮನ ರೂಪವನ್ನು ವಿವರಿಸಿ ಪ್ರಾಣ-ಅಪಾನದ ಕಠ ಶ್ಲೋಕವನ್ನು ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
    }},
    katha: { ref: 'Katha 2.2.3 (Adhyaya 2, Valli 2)', note: {
      en: '"ūrdhvaṃ prāṇam unnayati apānaṃ pratyag-asyati / madhye vāmanam āsīnaṃ viśve devā upāsate" — all gods worship the Vamana-form seated in the middle, who directs prāṇa upward and apāna downward.',
      kn: '"ಊರ್ಧ್ವಂ ಪ್ರಾಣಮುನ್ನಯತಿ ಅಪಾನಂ ಪ್ರತ್ಯಗಸ್ಯತಿ" — ಮಧ್ಯದಲ್ಲಿ ಆಸೀನನಾದ ವಾಮನ ರೂಪವನ್ನೇ ಸಮಸ್ತ ದೇವತೆಗಳೂ ಉಪಾಸಿಸುತ್ತಾರೆ.',
    }},
    source_note: { en: 'Bannanje cites this Katha verse (2-2-3) by its exact reference while explaining Gita 15.14\u2019s Vaishvanara teaching \u2014 same neighborhood as the vaishvanara-agni entry above, different specific verse pairing.', kn: 'ಗೀತಾ ೧೫.೧೪ರ ವೈಶ್ವಾನರ ಬೋಧನೆಯ ವಿವರಣೆಯಲ್ಲಿ ಬನ್ನಂಜೆ ಈ ಕಠ ಶ್ಲೋಕವನ್ನು (೨-೨-೩) ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
  },
  {
    id: 'angushthamatra-purusha',
    tier: 'parabrahma',
    kind: 'explicit_citation',
    title: {
      en: 'The Thumb-Sized Person Within',
      kn: 'ಅಂಗುಷ್ಠಮಾತ್ರ ಪುರುಷ',
      hi: 'अंगुष्ठमात्र पुरुष',
      sa: 'अङ्गुष्ठमात्रः पुरुषः',
    },
    gita: { ref: 'BG 15.15', note: {
      en: 'Explaining the Lord\u2019s subtle-body presence as the inner "aham," Bannanje quotes the Katha verse on the thumb-sized Purusha by its exact reference, and notes Madhvacharya\u2019s own Katha commentary (Sarvamula) on this point.',
      kn: '"ಅಹಂ" ಎಂಬ ಆಂತರಿಕ ಸ್ವರೂಪದ ಭಗವಂತನ ಉಪಸ್ಥಿತಿಯನ್ನು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಅಂಗುಷ್ಠಮಾತ್ರ ಪುರುಷನ ಕಠ ಶ್ಲೋಕವನ್ನು ನಿಖರ ಉಲ್ಲೇಖದೊಂದಿಗೆ ಉಲ್ಲೇಖಿಸಿ, ಈ ಬಗ್ಗೆ ಮಧ್ವಾಚಾರ್ಯರ ಸ್ವಂತ ಕಠ ಭಾಷ್ಯವನ್ನೂ (ಸರ್ವಮೂಲ) ಸೂಚಿಸುತ್ತಾರೆ.',
    }},
    katha: { ref: 'Katha 2.1.12\u201313 (Adhyaya 2, Valli 1)', note: {
      en: '"aṅguṣṭha-mātraḥ puruṣo madhya ātmani tiṣṭhati" (12) — the Lord dwells, thumb-sized, at the center of the self; the following verse (13) extends this to "sadā janānāṃ hṛdaye sanniviṣṭaḥ," dwelling always in the heart of all people.',
      kn: '"ಅಂಗುಷ್ಠಮಾತ್ರಃ ಪುರುಷೋ ಮಧ್ಯ ಆತ್ಮನಿ ತಿಷ್ಠತಿ" (೧೨) — ಭಗವಂತ ಆತ್ಮನ ಮಧ್ಯದಲ್ಲಿ ಅಂಗುಷ್ಠಗಾತ್ರದಲ್ಲಿ ನೆಲೆಸಿದ್ದಾನೆ; ಮುಂದಿನ ಶ್ಲೋಕ (೧೩) ಇದನ್ನೇ "ಸದಾ ಜನಾನಾಂ ಹೃದಯೇ ಸನ್ನಿವಿಷ್ಟಃ" ಎಂದು ವಿಸ್ತರಿಸುತ್ತದೆ.',
    }},
    source_note: { en: 'Bannanje quotes the Katha verse directly in his Gita commentary and even brings in Madhvacharya\u2019s own Katha bhashya alongside it \u2014 a doubly-sourced citation.', kn: 'ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಕಠ ಶ್ಲೋಕವನ್ನು ನೇರವಾಗಿ ಉಲ್ಲೇಖಿಸಿ, ಜೊತೆಗೆ ಮಧ್ವಾಚಾರ್ಯರ ಸ್ವಂತ ಕಠ ಭಾಷ್ಯವನ್ನೂ ತರುತ್ತಾರೆ.' },
  },
  {
    id: 'nachiketa-refusal-of-wealth',
    tier: 'sadhana',
    kind: 'explicit_citation',
    title: {
      en: 'Nachiketa\u2019s Refusal \u2014 Knowledge Over Every Worldly Gift',
      kn: 'ನಚಿಕೇತನ ನಿರಾಕರಣೆ \u2014 ಎಲ್ಲಾ ಲೌಕಿಕ ಕೊಡುಗೆಗಿಂತ ಜ್ಞಾನ',
      hi: 'नचिकेता का अस्वीकार \u2014 हर सांसारिक उपहार से बढ़कर ज्ञान',
      sa: 'नचिकेतसो नाकरणम् \u2014 सर्वलौकिकदानात् परं ज्ञानम्',
    },
    gita: { ref: 'BG 9.28, BG 14.17, BG 16.10 (three separate citations)', note: {
      en: 'Bannanje returns to this same Katha episode three times across the Gita: at 9.28 as proof that knowledge burns away sin more than any other means; at 14.17 as the model example of full sattva-guna resolve; at 16.10 as the model of a desire that can never be filled by wealth.',
      kn: 'ಬನ್ನಂಜೆ ಗೀತೆಯುದ್ದಕ್ಕೂ ಇದೇ ಕಠ ಪ್ರಸಂಗಕ್ಕೆ ಮೂರು ಬಾರಿ ಮರಳುತ್ತಾರೆ: ೯.೨೮ರಲ್ಲಿ ಜ್ಞಾನ ಬೇರೆ ಯಾವುದಕ್ಕಿಂತ ಹೆಚ್ಚು ಪಾಪ ಸುಡುತ್ತದೆ ಎಂಬುದಕ್ಕೆ ನಿದರ್ಶನ; ೧೪.೧೭ರಲ್ಲಿ ಪೂರ್ಣ ಸತ್ವಗುಣ ದೃಢಸಂಕಲ್ಪದ ಮಾದರಿ; ೧೬.೧೦ರಲ್ಲಿ ಎಂದೂ ತೃಪ್ತಿಯಾಗದ ಧನಬಯಕೆಯ ಮಾದರಿಯಾಗಿ.',
    }},
    katha: { ref: 'Katha 1.1.23\u201329 (Adhyaya 1, Valli 1)', note: {
      en: 'Yama offers Nachiketa sons, wealth, a kingdom, celestial pleasures \u2014 "if you think this equal to your third boon, choose it instead." Nachiketa refuses all of it: "man cannot be satisfied with wealth," choosing only the knowledge of what lies beyond death.',
      kn: 'ಯಮ ನಚಿಕೇತನಿಗೆ ಪುತ್ರ-ಪೌತ್ರ, ಧನ, ಸಾಮ್ರಾಜ್ಯ, ದೇವಲೋಕ ಭೋಗಗಳನ್ನು ಕೊಡುತ್ತೇನೆ ಎಂದಾಗ, ನಚಿಕೇತ "ಮನುಷ್ಯನು ಧನದಿಂದ ತೃಪ್ತನಾಗುವುದಿಲ್ಲ" ಎಂದು ಎಲ್ಲವನ್ನೂ ನಿರಾಕರಿಸಿ, ಮರಣಾನಂತರದ ಜ್ಞಾನವನ್ನೇ ಆರಿಸಿಕೊಳ್ಳುತ್ತಾನೆ.',
    }},
    source_note: { en: 'The most frequently cross-cited episode found this session \u2014 Bannanje reaches for it three separate times in his Gita commentary alone.', kn: 'ಈ ಅಧಿವೇಶನದಲ್ಲಿ ಪತ್ತೆಯಾದ ಅತ್ಯಂತ ಹೆಚ್ಚು ಬಾರಿ ಉಲ್ಲೇಖಿಸಲ್ಪಟ್ಟ ಪ್ರಸಂಗ \u2014 ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲೇ ಮೂರು ಪ್ರತ್ಯೇಕ ಬಾರಿ ಇದನ್ನು ಬಳಸುತ್ತಾರೆ.' },
  },
  {
    id: 'mahad-avyakta-purusha',
    tier: 'shritattva',
    kind: 'explicit_citation',
    title: {
      en: 'Avyakta \u2014 Beyond the Mahat-Tattva',
      kn: 'ಅವ್ಯಕ್ತ \u2014 ಮಹತ್ತತ್ವಕ್ಕಿಂತ ಮಿಗಿಲು',
      hi: 'अव्यक्त \u2014 महत्तत्त्व से परे',
      sa: 'अव्यक्तं महत्तत्त्वात् परम्',
    },
    gita: { ref: 'BG 12.1 (commentary)', note: {
      en: 'Discussing why the unmanifest form still needs contemplation through named qualities, Bannanje lists Lakshmi\u2019s names \u2014 Shri-tattva, Akshara, Avyakta, Prakriti \u2014 and cites the Katha hierarchy verse to explain what "avyakta" and "akshara" mean.',
      kn: 'ಅವ್ಯಕ್ತ ರೂಪಕ್ಕೂ ಹೆಸರಿನ ಗುಣಗಳ ಮೂಲಕ ಚಿಂತನೆ ಏಕೆ ಬೇಕು ಎಂದು ವಿವರಿಸುತ್ತಾ, ಬನ್ನಂಜೆ ಶ್ರೀಲಕ್ಷ್ಮಿಯ ಹೆಸರುಗಳನ್ನು (ಶ್ರೀತತ್ವ, ಅಕ್ಷರಳು, ಅವ್ಯಕ್ತಳು, ಪ್ರಕೃತಿ) ಪಟ್ಟಿಮಾಡಿ, "ಅವ್ಯಕ್ತ" ಮತ್ತು "ಅಕ್ಷರ" ಪದಗಳ ಅರ್ಥಕ್ಕಾಗಿ ಕಠದ ಕ್ರಮಬದ್ಧ ಶ್ಲೋಕವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.',
    }},
    katha: { ref: 'Katha 1.3.11 (Adhyaya 1, Valli 3)', note: {
      en: '"mahataḥ param avyaktam avyaktād puruṣaḥ paraḥ / puruṣān na paraṃ kiñcit sā kāṣṭhā sā parā gatiḥ" \u2014 beyond the great Self (mahān) is the unmanifest, and beyond the unmanifest is the Purusha; there is nothing higher than Purusha.',
      kn: '"ಮಹತಃ ಪರಮವ್ಯಕ್ತಮ್ ಅವ್ಯಕ್ತಾತ್ ಪುರುಷಃ ಪರಃ" \u2014 ಮಹತ್ತಿಗಿಂತ ಅವ್ಯಕ್ತ ಮಿಗಿಲು, ಅವ್ಯಕ್ತಕ್ಕಿಂತ ಪುರುಷ ಮಿಗಿಲು; ಪುರುಷನಿಗಿಂತ ಮಿಗಿಲಾದುದೇನೂ ಇಲ್ಲ.',
    }},
    source_note: { en: 'Bannanje quotes the Katha verse verbatim in his Gita commentary to gloss Madhva-specific terms (Shri-tattva, Akshara) that appear across both texts.', kn: 'ಇಬ್ಬಗೆಯ ಗ್ರಂಥಗಳಲ್ಲೂ ಬರುವ ಮಾಧ್ವ-ವಿಶಿಷ್ಟ ಪದಗಳ (ಶ್ರೀತತ್ವ, ಅಕ್ಷರ) ವಿವರಣೆಗಾಗಿ ಬನ್ನಂಜೆ ಗೀತಾ ವ್ಯಾಖ್ಯಾನದಲ್ಲಿ ಕಠ ಶ್ಲೋಕವನ್ನು ಯಥಾವತ್ತಾಗಿ ಉಲ್ಲೇಖಿಸುತ್ತಾರೆ.' },
  },
  {
    id: 'honoring-the-jnani',
    tier: 'sadhana',
    kind: 'explicit_citation',
    title: {
      en: 'Yama\u2019s Apology \u2014 Honoring the Knower',
      kn: 'ಯಮನ ಕ್ಷಮಾಯಾಚನೆ \u2014 ಜ್ಞಾನಿಯ ಗೌರವ',
      hi: 'यम की क्षमायाचना \u2014 ज्ञानी का सम्मान',
      sa: 'यमस्य क्षमायाचनम् \u2014 ज्ञानिनः सम्मानः',
    },
    gita: { ref: 'BG 4.3 (cited by reference)', note: {
      en: '"śraddhāvān labhate jñānam" \u2014 cited to support the point that a knower is supremely dear to the Lord, so disrespecting one is disrespecting the Lord himself.',
      kn: '"ಶ್ರದ್ಧಾವಾನ್ ಲಭತೇ ಜ್ಞಾನಂ" \u2014 ಜ್ಞಾನಿಗಳಿಗೆ ಅಪಮಾನ ಮಾಡುವುದು ಭಗವಂತನಿಗೇ ಅಪಮಾನ ಮಾಡಿದಂತೆ ಎಂಬುದನ್ನು ಪುಷ್ಟೀಕರಿಸಲು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ.',
    }},
    katha: { ref: 'Katha 1.1.9\u201310 area (Adhyaya 1, Valli 1)', note: {
      en: 'When Yama returns to find Nachiketa has waited three nights unfed as a guest, he bows and asks forgiveness. Bannanje: "this is the great quality of elders \u2014 as Krishna says in the Gita (4.3), \u2018śraddhāvān labhate jñānam.\u2019"',
      kn: 'ಮೂರು ದಿನ ಆಹಾರವಿಲ್ಲದೆ ಕಾದ ಜ್ಞಾನಿ ಅತಿಥಿ ನಚಿಕೇತನನ್ನು ಕಂಡ ಯಮ ನಮಸ್ಕರಿಸಿ ಕ್ಷಮೆ ಬೇಡುತ್ತಾನೆ. ಬನ್ನಂಜೆ: "ಇದು ಹಿರಿಯರ ದೊಡ್ಡ ಗುಣ \u2014 ಶ್ರದ್ಧಾವಾನ್ ಲಭತೇ ಜ್ಞಾನಂ (೪-೩) ಎಂದು ಕೃಷ್ಣ ಗೀತೆಯಲ್ಲಿ ಹೇಳಿರುವಂತೆ."',
    }},
    source_note: { en: 'A brief supporting citation \u2014 shorter than the others, but still an explicit named reference, not an inferred parallel.', kn: 'ಸಣ್ಣ ಪುಷ್ಟೀಕರಣ ಉಲ್ಲೇಖ \u2014 ಇತರರಿಗಿಂತ ಚಿಕ್ಕದಾದರೂ ಸ್ಪಷ್ಟ ಹೆಸರಿಸಿದ ಉಲ್ಲೇಖ, ಊಹಿತ ಸಾಮ್ಯವಲ್ಲ.' },
  },
];

if (typeof window !== 'undefined') {
  window.BRIDGE_ENTRIES = BRIDGE_ENTRIES;
  window.BRIDGE_TIER_MATCH = BRIDGE_TIER_MATCH;
}
