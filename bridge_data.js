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
];

if (typeof window !== 'undefined') {
  window.BRIDGE_ENTRIES = BRIDGE_ENTRIES;
  window.BRIDGE_TIER_MATCH = BRIDGE_TIER_MATCH;
}
