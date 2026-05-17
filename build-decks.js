/* build-decks.js — narrative story decks
 *
 * Generates four PptxGenJS decks (English / Devanāgarī / Kannada / Hindi)
 * from data.js. Each deck is 20-26 slides, designed to be READ at the
 * user's pace (not auto-played). Content is pulled live from
 * TIERS / NODES / EDGES / SHLOKAS so the decks stay in sync with the KG.
 *
 *   npm install pptxgenjs
 *   node build-decks.js
 *
 * Outputs:
 *   decks/Bhagavadgita_Concept_KG_en.pptx
 *   decks/Bhagavadgita_Concept_KG_dev.pptx
 *   decks/Bhagavadgita_Concept_KG_kn.pptx
 *   decks/Bhagavadgita_Concept_KG_hi.pptx
 *
 * Slide-by-slide structure (26 slides):
 *   1.  Cover            — Bhagavad Gītā · Concept KG · Madhva
 *   2.  Why this exists  — goal of the artifact
 *   3.  The 12 tiers     — overview of the ladder
 *   4-15. One per tier   — narrative + 3-5 highlighted concepts
 *   16. Edge vocabulary  — the 8 typed relations
 *   17. The map          — celestial-map view
 *   18-22. Five Madhva-distinctive callouts
 *   23. How to use       — Browse / Focus / Map
 *   24. Sources          — Bannanje, BNK Sharma, strict-grounding standard
 *   25. Stats + GitHub   — what's in the KG
 *   26. End              — namaskāra in active language
 */

const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');
const { TIERS, TIER_COLOR, NODES, EDGES, SHLOKAS } = require('./data.js');

const OUT_DIR = path.join(__dirname, 'decks');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// =====================================================================
// Palette (hex, no '#')
// =====================================================================
const PALETTE = {
  bg:      'F4EAD8',
  paper:   'FBF5E6',
  ink:     '3B2A1B',
  inkSoft: '5A4632',
  inkFade: '8A7558',
  rule:    'C9B58A',
  gold:    '8B6914',
};

const tierHex = (id) => (TIER_COLOR[id] || '#3b2a1b').replace('#', '').toUpperCase();

// =====================================================================
// Typography — per language
// =====================================================================
const FONTS = {
  en:  { head: 'Cormorant Garamond', body: 'Cormorant Garamond' },
  dev: { head: 'Tiro Devanagari Sanskrit', body: 'Tiro Devanagari Sanskrit' },
  kn:  { head: 'Tiro Kannada', body: 'Tiro Kannada' },
  hi:  { head: 'Tiro Devanagari Hindi', body: 'Tiro Devanagari Hindi' },
};

function loc(obj, lang) {
  if (!obj) return '';
  if (typeof obj === 'string') return obj;
  return obj[lang] || obj.en || '';
}

// =====================================================================
// L — slide narrative copy per language
// =====================================================================
const L = {
  en: {
    title:    'Bhagavad Gītā · Concept KG',
    subtitle: 'A Madhva siddhānta reading',
    crumb:    'Concept Graph · Madhva',
    namaskara:'namaḥ pārtha-sārathaye',
    s_why_h:  'Why this exists',
    s_why_b:  "The Gītā's 700 verses interweave cosmology, ethics, and metaphysics across hundreds of distinct concepts. Reading the text linearly works once — but the structural ties between every yoga, doṣa, yajña and phala are easy to lose. This Concept KG lays the whole network out — every concept anchored in a verse, every relation typed and labeled, read through the Madhva-siddhānta lens.",
    s_tiers_h:'The twelve tiers',
    s_tiers_b:"Concepts are organised into twelve tiers — a ladder of being from the supreme Hari down through symbol and metaphor. Each tier groups concepts of the same kind. Edges (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) connect them as the Gītā itself does, verse by verse.",
    s_tier_lead:'A narrative tour of the tier',
    s_edge_h: 'Edge vocabulary',
    s_edge_b: "Eight typed relations carry the structure of the Gītā's thought:",
    s_edge: {
      'is-a':           'identity / membership — Brahman is-a paramātman',
      'leads-to':       'sādhana → phala — karma-yoga leads-to citta-śuddhi',
      'antidote-to':    'cure for a doṣa — jñāna antidote-to ajñāna',
      'arises-from':    'causal genesis — krodha arises-from kāma',
      'opposite-of':    'polar pair — sattva opposite-of tamas',
      'includes':       'whole-part — kṣetra includes mahābhūtas',
      'predicates-on':  'depends on — kṣetrajña predicates-on kṣetra',
      'transforms-into':'modal shift — sattva transforms-into sāttvika-jñāna',
    },
    s_map_h:  'The map',
    s_map_b:  "Twelve horizontal bands — paramārtha at the top, pratīka at the bottom. Every node sits on its tier band, every edge is colored by its relation type. The structural shape of the Gītā's thought, seen from above.",
    s_madh_h: 'Madhva distinctives',
    s_madh_b: 'Where this reading parts company with Advaita.',
    s_how_h:  'How to use the viewer',
    s_how_b:  '• Browse — every concept under its tier, with live search\n• Focus — verse anchor, doctrinal note, Madhva callout, every relation\n• Map — all 112 concepts on one celestial canvas\nQuad-script toggle: English · Devanāgarī · Hindi · Kannada — one tap to switch.',
    s_src_h:  'Sources',
    s_src_lines:[
      'Primary — Bhagavad Gītā (Sanskrit verse, every concept anchored)',
      'Commentary — Madhva, Gītā-bhāṣya',
      'Modern exposition — Bannanje Govindacharya, Gītā-bhāṣya (4 vols, Kannada)',
      'Doctrinal lens — BNK Sharma, Philosophy of Śrī Madhvācārya',
      'Standard — every node grounded in verse + tradition; no editorial gloss',
    ],
    s_stat_h: "What's in the graph",
    s_stat_repo: 'github.com/kvinayakpai/Bhagavadgita',
    s_end_h:  'namaḥ pārtha-sārathaye',
    s_end_b:  'śrī-kṛṣṇārpaṇam astu',
    tier_lead: 'Key concepts',
    callout_lead: 'Madhva reading',
    verse_lead: 'Anchor verse',
  },
  dev: {
    title:    'भगवद्गीता · सङ्कल्पन-ज्ञानवृत्तम्',
    subtitle: 'माध्व-सिद्धान्तानुसारेण पठनम्',
    crumb:    'सङ्कल्पन-ग्राफः · माध्वम्',
    namaskara:'नमः पार्थसारथये',
    s_why_h:  'किमर्थम् इदं रचितम्',
    s_why_b:  'गीतायाः सप्तशत-श्लोकाः विश्वरचनां, धर्मम्, अधिभूतिकं च बहुषु सङ्कल्पनेषु निबध्नन्ति। एकवारं क्रमेण पठनं सिध्यति, परन्तु सर्वेषां योगानां, दोषाणां, यज्ञानां, फलानां च परस्परं सम्बन्धः लुप्तप्राय एव। इदं सङ्कल्पन-ज्ञानवृत्तम् सर्वं जालं प्रकटयति — प्रत्येकं सङ्कल्पनं श्लोके निबद्धम्, प्रत्येकः सम्बन्धः चिह्नितः, माध्व-सिद्धान्त-दृष्ट्या पठितः।',
    s_tiers_h:'द्वादश-स्तराः',
    s_tiers_b:'सर्वाणि सङ्कल्पनानि द्वादश तारतम्य-स्तरेषु विन्यस्तानि — परमार्थात् प्रतीकपर्यन्तम् एका सोपान-पङ्क्तिः। प्रत्येकः स्तरः समान-जातीयानि सङ्कल्पनानि सङ्गृह्णाति। सम्बन्धाः (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) श्लोकानुसारं सङ्कल्पनानां योजयन्ति।',
    s_tier_lead:'अस्य स्तरस्य कथा',
    s_edge_h: 'सम्बन्ध-वर्गाः',
    s_edge_b: 'अष्टौ चिह्निताः सम्बन्धाः गीता-विचारस्य रचनां धारयन्ति —',
    s_edge: {
      'is-a':           'is-a — एकविषयत्वम् · ब्रह्म = परमात्मा',
      'leads-to':       'leads-to — साधनं → फलम् · कर्मयोगः → चित्तशुद्धिः',
      'antidote-to':    'antidote-to — दोष-निवारणम् · ज्ञानं → अज्ञानम्',
      'arises-from':    'arises-from — कारणजन्यता · क्रोधः ← कामात्',
      'opposite-of':    'opposite-of — विपरीतत्वम् · सत्त्वम् ↔ तमः',
      'includes':       'includes — अङ्ग-समावेशः · क्षेत्रं → महाभूतानि',
      'predicates-on':  'predicates-on — आश्रयत्वम् · क्षेत्रज्ञः ← क्षेत्रम्',
      'transforms-into':'transforms-into — परिणामः · सत्त्वम् → सात्त्विकं ज्ञानम्',
    },
    s_map_h:  'मानचित्रम्',
    s_map_b:  'द्वादश तिर्यक्-पट्ट्यः — परमार्थः शीर्षे, प्रतीकः अधःस्थः। प्रत्येकं सङ्कल्पनं स्व-स्तरे, प्रत्येकः सम्बन्धः स्व-प्रकारेण रञ्जितः। गीता-विचारस्य संरचना ऊर्ध्व-दृष्ट्या।',
    s_madh_h: 'माध्व-वैशिष्ट्यानि',
    s_madh_b: 'यत्र इदं पठनम् अद्वैतात् भिद्यते।',
    s_how_h:  'दर्शकस्य प्रयोगः',
    s_how_b:  '• Browse — स्तरानुसारं सर्वाणि सङ्कल्पनानि\n• Focus — श्लोक-आधारः, माध्व-टीका, सर्वे सम्बन्धाः\n• Map — द्वादशधा-वर्णिते पटे सर्वाणि ११२ सङ्कल्पनानि\nचतुर्लिपि-स्विच्: English · देवनागरी · हिंदी · ಕನ್ನಡ — एक-स्पर्शेन परिवर्तनम्।',
    s_src_h:  'मूलस्रोतांसि',
    s_src_lines:[
      'मूलः — भगवद्गीता (संस्कृत-श्लोकाः, प्रत्येकं सङ्कल्पनं श्लोके निबद्धम्)',
      'भाष्यम् — माध्वं गीता-भाष्यम्',
      'आधुनिक-व्याख्या — बन्नञ्जे गोविन्दाचार्यस्य गीता-भाष्यम् (४ खण्डाः)',
      'दार्शनिक-दृष्टिः — BNK शर्मा, श्री-मध्वाचार्य-दर्शनम्',
      'मानकः — प्रत्येकं सङ्कल्पनं श्लोके सम्प्रदाये च आधृतम्; न मनःकल्पनम्',
    ],
    s_stat_h: 'ग्राफे यत् किञ्चित्',
    s_stat_repo: 'github.com/kvinayakpai/Bhagavadgita',
    s_end_h:  'नमः पार्थसारथये',
    s_end_b:  'श्रीकृष्णार्पणमस्तु',
    tier_lead: 'मुख्य-सङ्कल्पनानि',
    callout_lead: 'माध्व-पठनम्',
    verse_lead: 'आधार-श्लोकः',
  },
  kn: {
    title:    'ಭಗವದ್ಗೀತಾ · ಪರಿಕಲ್ಪನಾ ಜ್ಞಾನ-ಪಟ',
    subtitle: 'ಮಧ್ವ-ಸಿದ್ಧಾಂತದ ಓದು',
    crumb:    'ಪರಿಕಲ್ಪನಾ ಗ್ರಾಫ್ · ಮಧ್ವ',
    namaskara:'ನಮಃ ಪಾರ್ಥಸಾರಥಯೇ',
    s_why_h:  'ಇದನ್ನು ಏಕೆ ರಚಿಸಿದ್ದು',
    s_why_b:  'ಗೀತೆಯ ೭೦೦ ಶ್ಲೋಕಗಳು ವಿಶ್ವ-ರಚನೆ, ಧರ್ಮ, ಆಧ್ಯಾತ್ಮಿಕ ತತ್ತ್ವಗಳನ್ನು ನೂರಾರು ಪರಿಕಲ್ಪನೆಗಳಲ್ಲಿ ಹೆಣೆದಿವೆ. ಒಮ್ಮೆ ಕ್ರಮವಾಗಿ ಓದಿದರೆ ಸಾಗುತ್ತದೆ, ಆದರೆ ಎಲ್ಲಾ ಯೋಗ, ದೋಷ, ಯಜ್ಞ, ಫಲಗಳ ನಡುವಿನ ರಚನಾತ್ಮಕ ಸಂಬಂಧಗಳು ಕಳೆದುಹೋಗುತ್ತವೆ. ಈ ಪರಿಕಲ್ಪನಾ ಜ್ಞಾನ-ಪಟವು ಇಡೀ ಜಾಲವನ್ನು ತೋರಿಸುತ್ತದೆ — ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಒಂದು ಶ್ಲೋಕದಲ್ಲಿ ಆಧಾರಿತ, ಪ್ರತಿ ಸಂಬಂಧ ವರ್ಗೀಕೃತ, ಮಧ್ವ-ಸಿದ್ಧಾಂತದ ದೃಷ್ಟಿಯಿಂದ ಓದಿದ್ದು.',
    s_tiers_h:'ಹನ್ನೆರಡು ಸ್ತರಗಳು',
    s_tiers_b:'ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಹನ್ನೆರಡು ತಾರತಮ್ಯ-ಸ್ತರಗಳಲ್ಲಿ ಜೋಡಿಸಲಾಗಿದೆ — ಪರಮಾರ್ಥದಿಂದ ಪ್ರತೀಕದವರೆಗೆ ಒಂದು ಸೋಪಾನ-ಪಂಕ್ತಿ. ಪ್ರತಿ ಸ್ತರವು ಒಂದೇ ಜಾತಿಯ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಒಗ್ಗೂಡಿಸುತ್ತದೆ. ಸಂಬಂಧಗಳು (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) ಶ್ಲೋಕದಿಂದ ಶ್ಲೋಕಕ್ಕೆ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಜೋಡಿಸುತ್ತವೆ.',
    s_tier_lead:'ಈ ಸ್ತರದ ಕಥೆ',
    s_edge_h: 'ಸಂಬಂಧ-ವರ್ಗಗಳು',
    s_edge_b: 'ಎಂಟು ವರ್ಗೀಕೃತ ಸಂಬಂಧಗಳು ಗೀತೆಯ ವಿಚಾರದ ರಚನೆಯನ್ನು ಹಿಡಿದಿಡುತ್ತವೆ —',
    s_edge: {
      'is-a':           'is-a — ಏಕವಿಷಯತ್ವ · ಬ್ರಹ್ಮ = ಪರಮಾತ್ಮ',
      'leads-to':       'leads-to — ಸಾಧನ → ಫಲ · ಕರ್ಮಯೋಗ → ಚಿತ್ತ-ಶುದ್ಧಿ',
      'antidote-to':    'antidote-to — ದೋಷ-ನಿವಾರಣ · ಜ್ಞಾನ → ಅಜ್ಞಾನ',
      'arises-from':    'arises-from — ಕಾರಣಜನ್ಯತೆ · ಕ್ರೋಧ ← ಕಾಮದಿಂದ',
      'opposite-of':    'opposite-of — ವಿಪರೀತತ್ವ · ಸತ್ತ್ವ ↔ ತಮಃ',
      'includes':       'includes — ಅಂಗ-ಸಮಾವೇಶ · ಕ್ಷೇತ್ರ → ಮಹಾಭೂತಗಳು',
      'predicates-on':  'predicates-on — ಆಶ್ರಯತ್ವ · ಕ್ಷೇತ್ರಜ್ಞ ← ಕ್ಷೇತ್ರ',
      'transforms-into':'transforms-into — ಪರಿಣಾಮ · ಸತ್ತ್ವ → ಸಾತ್ತ್ವಿಕ-ಜ್ಞಾನ',
    },
    s_map_h:  'ಪಟ',
    s_map_b:  'ಹನ್ನೆರಡು ಸಮಾನಾಂತರ ಪಟ್ಟಿಗಳು — ಪರಮಾರ್ಥ ಮೇಲೆ, ಪ್ರತೀಕ ಕೆಳಗೆ. ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ತನ್ನ ಸ್ತರದಲ್ಲಿ, ಪ್ರತಿ ಸಂಬಂಧ ತನ್ನ ವರ್ಗದ ಬಣ್ಣದಲ್ಲಿ. ಗೀತೆಯ ವಿಚಾರದ ರಚನೆಯನ್ನು ಮೇಲಿನಿಂದ ನೋಡಿದಂತೆ.',
    s_madh_h: 'ಮಧ್ವ-ವೈಶಿಷ್ಟ್ಯಗಳು',
    s_madh_b: 'ಈ ಓದು ಅದ್ವೈತದಿಂದ ಎಲ್ಲಿ ಭಿನ್ನವಾಗುತ್ತದೆ.',
    s_how_h:  'ವೀಕ್ಷಕನ ಬಳಕೆ',
    s_how_b:  '• Browse — ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಅದರ ಸ್ತರದಲ್ಲಿ\n• Focus — ಶ್ಲೋಕ-ಆಧಾರ, ಮಧ್ವ-ಟಿಪ್ಪಣಿ, ಎಲ್ಲಾ ಸಂಬಂಧಗಳು\n• Map — ೧೧೨ ಪರಿಕಲ್ಪನೆಗಳು ಒಂದೇ ಪಟದಲ್ಲಿ\nಚತುರ್-ಲಿಪಿ ಸ್ವಿಚ್: English · ದೇವನಾಗರೀ · ಹಿಂದೀ · ಕನ್ನಡ — ಒಂದು ಸ್ಪರ್ಶದಲ್ಲಿ ಬದಲಾವಣೆ.',
    s_src_h:  'ಮೂಲ-ಸ್ರೋತಗಳು',
    s_src_lines:[
      'ಮೂಲ — ಭಗವದ್ಗೀತಾ (ಸಂಸ್ಕೃತ ಶ್ಲೋಕ, ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಒಂದು ಶ್ಲೋಕದಲ್ಲಿ)',
      'ಭಾಷ್ಯ — ಮಧ್ವ ಗೀತಾ-ಭಾಷ್ಯ',
      'ಆಧುನಿಕ ವ್ಯಾಖ್ಯಾನ — ಬನ್ನಂಜೆ ಗೋವಿಂದಾಚಾರ್ಯ, ಗೀತಾ-ಭಾಷ್ಯ (೪ ಸಂಪುಟ)',
      'ತಾತ್ತ್ವಿಕ ದೃಷ್ಟಿ — BNK ಶರ್ಮಾ, Philosophy of Śrī Madhvācārya',
      'ಮಾನಕ — ಪ್ರತಿ ನೋಡ್ ಶ್ಲೋಕ + ಸಂಪ್ರದಾಯದಲ್ಲಿ ಆಧಾರಿತ; ಯಾವುದೇ ಮನಃಕಲ್ಪನೆ ಇಲ್ಲ',
    ],
    s_stat_h: 'ಗ್ರಾಫ್‌ನಲ್ಲಿ ಇರುವುದು',
    s_stat_repo: 'github.com/kvinayakpai/Bhagavadgita',
    s_end_h:  'ನಮಃ ಪಾರ್ಥಸಾರಥಯೇ',
    s_end_b:  'ಶ್ರೀಕೃಷ್ಣಾರ್ಪಣಮಸ್ತು',
    tier_lead: 'ಮುಖ್ಯ ಪರಿಕಲ್ಪನೆಗಳು',
    callout_lead: 'ಮಧ್ವ-ಓದು',
    verse_lead: 'ಆಧಾರ ಶ್ಲೋಕ',
  },
  hi: {
    title:    'भगवद्गीता · संकल्पना ज्ञान-ग्राफ',
    subtitle: 'मध्व-सिद्धांत के अनुसार पाठ',
    crumb:    'संकल्पना ग्राफ · मध्व',
    namaskara:'नमः पार्थसारथये',
    s_why_h:  'यह क्यों बनाया गया',
    s_why_b:  'गीता के ७०० श्लोक ब्रह्मांड, धर्म और तत्त्व-विद्या को सैकड़ों संकल्पनाओं में बुनते हैं। एक बार क्रम से पढ़ना तो हो जाता है, परंतु सभी योगों, दोषों, यज्ञों और फलों के बीच की रचनात्मक कड़ियाँ धुंधली पड़ जाती हैं। यह संकल्पना ज्ञान-ग्राफ पूरा जाल खोलकर रखता है — हर संकल्पना एक श्लोक से जुड़ी, हर संबंध वर्गीकृत और चिह्नित, और सबकुछ मध्व-सिद्धांत की दृष्टि से पढ़ा हुआ।',
    s_tiers_h:'बारह स्तर',
    s_tiers_b:'संकल्पनाओं को बारह तारतम्य-स्तरों में बाँटा गया है — परमार्थ से लेकर प्रतीक तक एक सीढ़ी। हर स्तर एक ही प्रकार की संकल्पनाओं को साथ लाता है। संबंध (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) उन्हें श्लोक-दर-श्लोक उसी ढंग से जोड़ते हैं जैसा गीता स्वयं करती है।',
    s_tier_lead:'इस स्तर की कहानी',
    s_edge_h: 'संबंधों की शब्दावली',
    s_edge_b: 'आठ वर्गीकृत संबंध गीता-विचार की रचना को थामे रखते हैं —',
    s_edge: {
      'is-a':           'is-a — एक विषय / सदस्यता · ब्रह्म = परमात्मा',
      'leads-to':       'leads-to — साधन → फल · कर्मयोग → चित्त-शुद्धि',
      'antidote-to':    'antidote-to — दोष का प्रतिकार · ज्ञान → अज्ञान',
      'arises-from':    'arises-from — कारण से उत्पन्न · क्रोध ← काम से',
      'opposite-of':    'opposite-of — विपरीत जोड़ी · सत्त्व ↔ तमस्',
      'includes':       'includes — अंग-समावेश · क्षेत्र → महाभूत',
      'predicates-on':  'predicates-on — आश्रित · क्षेत्रज्ञ ← क्षेत्र',
      'transforms-into':'transforms-into — रूपांतर · सत्त्व → सात्त्विक ज्ञान',
    },
    s_map_h:  'मानचित्र',
    s_map_b:  'बारह क्षैतिज पट्टियाँ — सबसे ऊपर परमार्थ, सबसे नीचे प्रतीक। हर नोड अपने स्तर पर, हर संबंध अपनी श्रेणी के रंग में। गीता-विचार की रचना को ऊपर से देखना।',
    s_madh_h: 'मध्व-विशिष्टताएँ',
    s_madh_b: 'जहाँ यह पाठ अद्वैत से अलग होता है।',
    s_how_h:  'व्यूअर का उपयोग',
    s_how_b:  '• Browse — हर संकल्पना अपने स्तर पर, जीवित खोज सहित\n• Focus — श्लोक-आधार, सिद्धांत-टिप्पणी, मध्व-टिप्पणी, सब संबंध\n• Map — सभी ११२ संकल्पनाएँ एक खगोलीय पट पर\nचार-लिपि स्विच: English · देवनागरी · हिंदी · ಕನ್ನಡ — एक स्पर्श में बदलाव।',
    s_src_h:  'स्रोत',
    s_src_lines:[
      'मूल — भगवद्गीता (संस्कृत श्लोक, हर संकल्पना श्लोक में आधारित)',
      'भाष्य — मध्व, गीता-भाष्य',
      'आधुनिक व्याख्या — बन्नंजे गोविंदाचार्य, गीता-भाष्य (४ खंड, कन्नड़)',
      'सिद्धांत-दृष्टि — BNK शर्मा, श्री-मध्वाचार्य का दर्शन',
      'मानदंड — हर नोड श्लोक + परंपरा पर आधारित; कोई संपादकीय कल्पना नहीं',
    ],
    s_stat_h: 'इस ग्राफ में क्या है',
    s_stat_repo: 'github.com/kvinayakpai/Bhagavadgita',
    s_end_h:  'नमः पार्थसारथये',
    s_end_b:  'श्रीकृष्णार्पणमस्तु',
    tier_lead: 'मुख्य संकल्पनाएँ',
    callout_lead: 'मध्व-पाठ',
    verse_lead: 'आधार-श्लोक',
  },
};

// =====================================================================
// Tier narrative — short story-paragraph per tier per language
// =====================================================================
const TIER_STORY = {
  paramartha: {
    en:  "Ultimate reality. The Gītā's topmost concept is not an impersonal absolute but Hari — Viṣṇu, the puruṣottama who stands beyond the kṣara (perishable jīvas) and the akṣara (the kūṭastha, Lakṣmī). Krishna names this in Ch 15 with the puruṣottama-yoga.",
    dev: 'परम-तत्त्वम्। गीतायाः शीर्ष-सङ्कल्पनं न तु निर्विशेषं ब्रह्म, अपि तु हरिः — विष्णुः, क्षरात् (नश्वर-जीवात्) अक्षरात् (कूटस्थात् लक्ष्म्याः) च परः पुरुषोत्तमः। पञ्चदशे अध्याये कृष्णः एतत् पुरुषोत्तम-योगेन उद्घोषयति।',
    kn:  'ಪರಮ ತತ್ತ್ವ. ಗೀತೆಯ ಉನ್ನತ ಪರಿಕಲ್ಪನೆ ನಿರ್ವಿಶೇಷ ಬ್ರಹ್ಮ ಅಲ್ಲ, ಬದಲಿಗೆ ಹರಿ — ವಿಷ್ಣು, ಕ್ಷರಕ್ಕಿಂತ (ನಶ್ವರ ಜೀವಗಳಿಂದ) ಮತ್ತು ಅಕ್ಷರಕ್ಕಿಂತ (ಕೂಟಸ್ಥ ಲಕ್ಷ್ಮಿಯಿಂದ) ಪರನಾದ ಪುರುಷೋತ್ತಮ. ಹದಿನೈದನೆಯ ಅಧ್ಯಾಯದಲ್ಲಿ ಕೃಷ್ಣ ಇದನ್ನು ಪುರುಷೋತ್ತಮ-ಯೋಗದಲ್ಲಿ ಪ್ರಕಟಿಸುತ್ತಾನೆ.',
    hi:  'परम तत्त्व। गीता की सबसे ऊँची संकल्पना कोई निर्विशेष निरपेक्ष नहीं, बल्कि हरि हैं — विष्णु, जो क्षर (नश्वर जीव) और अक्षर (कूटस्थ, लक्ष्मी) दोनों से परे पुरुषोत्तम हैं। कृष्ण पंद्रहवें अध्याय में इसे पुरुषोत्तम-योग के रूप में स्पष्ट करते हैं।',
  },
  tattva: {
    en:  'Metaphysical categories. The aparā prakṛti (eightfold material nature) and the parā prakṛti (jīva-bhūtā) lay out reality. Time, action, and svabhāva sit alongside them. Madhva keeps every category as a real, distinct ontological item — never collapsed into one Brahman.',
    dev: 'अधिभूतिक-वर्गाः। अष्टधा अपरा प्रकृतिः, जीव-भूता परा प्रकृतिः च तत्त्व-स्थापनं कुर्वन्ति। कालः, कर्म, स्वभावः च तेषु अन्तर्भूताः। मध्व-मते प्रत्येकं वर्गः वास्तविकं भिन्नं तत्त्वम् — न तु एकस्मिन् ब्रह्मणि लीयमानम्।',
    kn:  'ತತ್ತ್ವ-ವರ್ಗಗಳು. ಅಷ್ಟಾಂಗ ಅಪರಾ ಪ್ರಕೃತಿ ಮತ್ತು ಜೀವ-ಭೂತ ಪರಾ ಪ್ರಕೃತಿ ವಾಸ್ತವದ ರಚನೆಯನ್ನು ರೂಪಿಸುತ್ತವೆ. ಕಾಲ, ಕರ್ಮ, ಸ್ವಭಾವ ಸಹ ಅಲ್ಲಿಯೇ ಇವೆ. ಮಧ್ವ ಪ್ರತಿ ವರ್ಗವನ್ನು ವಾಸ್ತವಿಕ, ಪ್ರತ್ಯೇಕ ತತ್ತ್ವವಾಗಿ ಉಳಿಸುತ್ತಾನೆ — ಒಂದೇ ಬ್ರಹ್ಮದಲ್ಲಿ ಲಯ ಆಗಿಸುವುದಿಲ್ಲ.',
    hi:  'तत्त्व-श्रेणियाँ। आठ अंगों वाली अपरा प्रकृति और जीव-भूत परा प्रकृति — ये वास्तविकता के स्तंभ हैं। काल, कर्म और स्वभाव भी इन्हीं के साथ हैं। मध्व हर श्रेणी को वास्तविक, स्वतंत्र तत्त्व मानते हैं — किसी एक ब्रह्म में नहीं घोलते।',
  },
  kshetra: {
    en:  'Field & field-knower. The body is the field (kṣetra); the jīva inside it is the knower (kṣetrajña); and within every body Krishna himself stands as the highest kṣetrajña. The 24 elements of kṣetra and their seven vikāras are laid out in Ch 13.',
    dev: 'क्षेत्रं क्षेत्रज्ञश्च। शरीरं क्षेत्रम्, तत्र स्थितः जीवः क्षेत्रज्ञः, सर्व-क्षेत्रेषु च परमः कृष्णः क्षेत्रज्ञः। त्रयोदशे अध्याये क्षेत्रस्य चतुर्विंशति-तत्त्वानि सप्त-विकाराश्च निरूपिताः।',
    kn:  'ಕ್ಷೇತ್ರ ಮತ್ತು ಕ್ಷೇತ್ರಜ್ಞ. ಶರೀರ ಕ್ಷೇತ್ರ, ಜೀವ ಕ್ಷೇತ್ರಜ್ಞ, ಮತ್ತು ಎಲ್ಲಾ ಶರೀರಗಳಲ್ಲಿ ಪರಮ ಕ್ಷೇತ್ರಜ್ಞ ಸ್ವತಃ ಕೃಷ್ಣ. ಹದಿಮೂರನೆಯ ಅಧ್ಯಾಯದಲ್ಲಿ ಕ್ಷೇತ್ರದ ೨೪ ತತ್ತ್ವ ಮತ್ತು ೭ ವಿಕಾರಗಳನ್ನು ವಿವರಿಸಲಾಗಿದೆ.',
    hi:  'क्षेत्र और क्षेत्रज्ञ। शरीर क्षेत्र है; उसके भीतर का जीव क्षेत्रज्ञ है; और हर शरीर में परम क्षेत्रज्ञ स्वयं कृष्ण विराजते हैं। तेरहवें अध्याय में क्षेत्र के २४ तत्त्व और सात विकार स्पष्ट किए गए हैं।',
  },
  guna: {
    en:  'The three modes of prakṛti — sattva (clarity, knowledge), rajas (passion, action), tamas (inertia, delusion). Chapters 14, 17, 18 trace every action, food, sacrifice and knowledge back to its guṇa. Liberation is described as guṇātīta — going beyond all three.',
    dev: 'प्रकृतेः त्रयो गुणाः — सत्त्वं (प्रकाशः, ज्ञानम्), रजः (रागः, क्रिया), तमः (जाड्यम्, मोहः)। चतुर्दश-सप्तदश-अष्टादशेषु अध्यायेषु प्रत्येकं कर्म, आहारः, यज्ञः, ज्ञानं च तेषु एकेन गुणेन निरूप्यन्ते। मोक्षः गुणातीतत्वम् — त्रिगुणान् अतिक्रम्य अवस्थानम्।',
    kn:  'ಪ್ರಕೃತಿಯ ಮೂರು ಗುಣಗಳು — ಸತ್ತ್ವ (ಪ್ರಕಾಶ, ಜ್ಞಾನ), ರಜಸ್ (ರಾಗ, ಕ್ರಿಯೆ), ತಮಸ್ (ಜಡತೆ, ಮೋಹ). ೧೪, ೧೭, ೧೮ನೇ ಅಧ್ಯಾಯಗಳಲ್ಲಿ ಪ್ರತಿ ಕರ್ಮ, ಆಹಾರ, ಯಜ್ಞ, ಜ್ಞಾನವನ್ನು ಅದರ ಗುಣಕ್ಕೆ ತಲುಪಿಸಲಾಗಿದೆ. ಮೋಕ್ಷ ಗುಣಾತೀತತೆ — ಮೂರೂ ಗುಣಗಳಿಂದ ಆಚೆಗೆ.',
    hi:  'प्रकृति के तीन गुण — सत्त्व (प्रकाश, ज्ञान), रजस् (राग, क्रिया), तमस् (जड़ता, मोह)। १४, १७, १८वें अध्याय हर कर्म, आहार, यज्ञ और ज्ञान को इन्हीं तीन गुणों में पहचानते हैं। मोक्ष को गुणातीत कहा गया है — तीनों गुणों के पार।',
  },
  yoga: {
    en:  'The paths. Karma-yoga (selfless action), jñāna-yoga (knowledge), bhakti-yoga (devotion), dhyāna-yoga (meditation), sannyāsa (renunciation). For Madhva, bhakti is not one path among others — it is the indispensable means and a constituent of mokṣa itself.',
    dev: 'मार्गाः। कर्मयोगः, ज्ञानयोगः, भक्तियोगः, ध्यानयोगः, सन्न्यासश्च। मध्व-मते भक्तिः न केवलं मार्गान्तरम् — सा अनिवार्यं साधनं मोक्षस्य च घटकः।',
    kn:  'ಮಾರ್ಗಗಳು. ಕರ್ಮಯೋಗ, ಜ್ಞಾನಯೋಗ, ಭಕ್ತಿಯೋಗ, ಧ್ಯಾನಯೋಗ, ಸಂನ್ಯಾಸ. ಮಧ್ವರ ಪ್ರಕಾರ ಭಕ್ತಿ ಕೇವಲ ಒಂದು ಮಾರ್ಗ ಅಲ್ಲ — ಅದು ಅನಿವಾರ್ಯ ಸಾಧನವೂ, ಮೋಕ್ಷದ ಅಂಗವೂ ಆಗಿದೆ.',
    hi:  'मार्ग। कर्म-योग (निष्काम कर्म), ज्ञान-योग, भक्ति-योग, ध्यान-योग, संन्यास। मध्व के अनुसार भक्ति केवल एक मार्ग नहीं — वह अनिवार्य साधन है और मोक्ष का अंग भी है।',
  },
  sadhana: {
    en:  "Practices. Śraddhā (faith), vairāgya (dispassion), abhyāsa (steady practice), tapas, dāna, satsaṅga, japa, smaraṇa, śaraṇāgati. The Gītā treats these not as one's own doing but as means appointed by the Lord through which grace flows.",
    dev: 'साधनानि। श्रद्धा, वैराग्यम्, अभ्यासः, तपः, दानम्, सत्सङ्गः, जपः, स्मरणम्, शरणागतिः। गीता एतानि न तु स्व-कर्तृत्वेन ददाति — किन्तु भगवता विहितानि साधनानि येषु अनुग्रहः वहति।',
    kn:  'ಸಾಧನೆಗಳು. ಶ್ರದ್ಧಾ, ವೈರಾಗ್ಯ, ಅಭ್ಯಾಸ, ತಪಸ್, ದಾನ, ಸತ್ಸಂಗ, ಜಪ, ಸ್ಮರಣ, ಶರಣಾಗತಿ. ಗೀತೆ ಇವನ್ನು ಸ್ವ-ಕರ್ತೃತ್ವದಿಂದ ಅಲ್ಲ, ಭಗವಂತನಿಂದ ನಿಯೋಜಿತ ಸಾಧನಗಳಾಗಿ ಪ್ರಸ್ತುತಪಡಿಸುತ್ತದೆ — ಇವುಗಳ ಮೂಲಕ ಅನುಗ್ರಹ ಹರಿಯುತ್ತದೆ.',
    hi:  'साधनाएँ। श्रद्धा, वैराग्य, अभ्यास, तप, दान, सत्संग, जप, स्मरण, शरणागति। गीता इन्हें अपना कर्तृत्व नहीं मानती — ये भगवान् द्वारा नियत वे माध्यम हैं जिनसे अनुग्रह बहता है।',
  },
  antahkarana: {
    en:  'The inner instrument. Manas, buddhi, ahaṅkāra plus the eleven indriyas — sensory and motor. Krishna teaches their command in Ch 6 (saṃyama) and the danger of dragged indriyas in Ch 2.67.',
    dev: 'अन्तःकरणम्। मनः, बुद्धिः, अहङ्कारः च, एकादश इन्द्रियाणि (ज्ञान-कर्म) सह। षष्ठे अध्याये कृष्णः तेषां संयमं उपदिशति, द्वितीये (२।६७) च अनियन्त्रित-इन्द्रियाणां भयं प्रकटयति।',
    kn:  'ಅಂತಃಕರಣ. ಮನಸ್, ಬುದ್ಧಿ, ಅಹಂಕಾರ ಮತ್ತು ೧೧ ಇಂದ್ರಿಯಗಳು (ಜ್ಞಾನೇಂದ್ರಿಯ + ಕರ್ಮೇಂದ್ರಿಯ). ೬ನೇ ಅಧ್ಯಾಯದಲ್ಲಿ ಕೃಷ್ಣ ಇವುಗಳ ಸಂಯಮವನ್ನು, ೨.೬೭ರಲ್ಲಿ ಅನಿಯಂತ್ರಿತ ಇಂದ್ರಿಯಗಳ ಅಪಾಯವನ್ನು ತೋರಿಸುತ್ತಾನೆ.',
    hi:  'अंतःकरण। मन, बुद्धि, अहंकार और ग्यारह इंद्रियाँ (ज्ञान + कर्म)। छठे अध्याय में कृष्ण इनके संयम की बात करते हैं और २.६७ में अनियंत्रित इंद्रियों के खतरे को उजागर करते हैं।',
  },
  dharma: {
    en:  "Ethics. Svadharma (one's own duty), niṣkāma-karma (action without attachment to fruit), sthita-prajña (the established intellect), abhaya, ahiṃsā, sama-darśana. Dharma is not abandoned for mokṣa — it is the road to it.",
    dev: 'धर्मः। स्वधर्मः, निष्काम-कर्म, स्थित-प्रज्ञता, अभयम्, अहिंसा, सम-दर्शनम्। मोक्षाय धर्मः न त्यज्यते — स एव मोक्षमार्गः।',
    kn:  'ಧರ್ಮ. ಸ್ವಧರ್ಮ, ನಿಷ್ಕಾಮ-ಕರ್ಮ, ಸ್ಥಿತ-ಪ್ರಜ್ಞತೆ, ಅಭಯ, ಅಹಿಂಸಾ, ಸಮ-ದರ್ಶನ. ಮೋಕ್ಷಕ್ಕಾಗಿ ಧರ್ಮವನ್ನು ಬಿಡುವುದಿಲ್ಲ — ಅದೇ ಮೋಕ್ಷ-ಮಾರ್ಗ.',
    hi:  'धर्म। स्वधर्म, निष्काम-कर्म, स्थित-प्रज्ञता, अभय, अहिंसा, सम-दर्शन। मोक्ष के लिए धर्म छोड़ा नहीं जाता — वही मोक्ष का रास्ता है।',
  },
  dosha: {
    en:  'Defects. Kāma (desire), krodha (anger), lobha (greed) — the threefold gate to hell (16.21). Moha, ahaṅkāra-mamatā, asat-saṅga, asurī-sampad. The Gītā maps each doṣa with its arising-from cause and its antidote.',
    dev: 'दोषाः। कामः, क्रोधः, लोभः — त्रिविधं नरकद्वारम् (१६।२१)। मोहः, अहङ्कार-ममता, असत्सङ्गः, आसुरी-सम्पत् च। गीता प्रत्येकस्य दोषस्य कारणं प्रतिकारं च निरूपयति।',
    kn:  'ದೋಷಗಳು. ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ — ತ್ರಿವಿಧ ನರಕದ ದ್ವಾರ (೧೬.೨೧). ಮೋಹ, ಅಹಂಕಾರ-ಮಮತೆ, ಅಸತ್‍ಸಂಗ, ಆಸುರೀ-ಸಂಪತ್. ಗೀತೆ ಪ್ರತಿ ದೋಷದ ಮೂಲ ಮತ್ತು ಪ್ರತಿಕಾರವನ್ನು ತೋರಿಸುತ್ತದೆ.',
    hi:  'दोष। काम, क्रोध, लोभ — नरक के तीन द्वार (१६.२१)। मोह, अहंकार-ममता, असत्-संग, आसुरी-सम्पत्। गीता हर दोष के कारण और प्रतिकार को स्पष्ट करती है।',
  },
  phala: {
    en:  'Goals & states. Mokṣa, paramā-gati, brāhmī-sthiti, the four mukti-gradations (sālokya, sāmīpya, sārūpya, sāyujya). For Madhva, mokṣa is real but tāratamya-graded — not undifferentiated bliss.',
    dev: 'फलानि लक्ष्याणि च। मोक्षः, परमा गतिः, ब्राह्मी-स्थितिः, चतुर्विधा मुक्तिः (सालोक्य-सामीप्य-सारूप्य-सायुज्यम्)। मध्व-मते मोक्षः वास्तविकः किन्तु तारतम्य-युक्तः — न तु निर्विशेषानन्द-मात्रम्।',
    kn:  'ಫಲಗಳು ಮತ್ತು ಸ್ಥಿತಿಗಳು. ಮೋಕ್ಷ, ಪರಮಾ-ಗತಿ, ಬ್ರಾಹ್ಮೀ-ಸ್ಥಿತಿ, ನಾಲ್ಕು ಮುಕ್ತಿ-ಶ್ರೇಣಿಗಳು (ಸಾಲೋಕ್ಯ, ಸಾಮೀಪ್ಯ, ಸಾರೂಪ್ಯ, ಸಾಯುಜ್ಯ). ಮಧ್ವರ ಪ್ರಕಾರ ಮೋಕ್ಷ ವಾಸ್ತವಿಕ ಆದರೆ ತಾರತಮ್ಯ-ಯುಕ್ತ — ಯಾವುದೇ ನಿರ್ವಿಶೇಷ ಆನಂದ ಅಲ್ಲ.',
    hi:  'फल और अवस्थाएँ। मोक्ष, परमा-गति, ब्राह्मी-स्थिति, चार मुक्ति-श्रेणियाँ (सालोक्य, सामीप्य, सारूप्य, सायुज्य)। मध्व के अनुसार मोक्ष वास्तविक है पर तारतम्य-युक्त है — कोई एकसमान आनंद-मात्र नहीं।',
  },
  yajna: {
    en:  'Sacrifice. Dravya-yajña (substance offering), tapo-yajña, jñāna-yajña, svādhyāya-yajña, prāṇāyāma-yajña, indriya-saṃyama. Ch 4 turns every action into yajña when offered to Hari.',
    dev: 'यज्ञः। द्रव्य-यज्ञः, तपो-यज्ञः, ज्ञान-यज्ञः, स्वाध्याय-यज्ञः, प्राणायाम-यज्ञः, इन्द्रिय-संयमश्च। चतुर्थे अध्याये सर्वं कर्म हरि-अर्पणेन यज्ञ-रूपं भवति।',
    kn:  'ಯಜ್ಞ. ದ್ರವ್ಯ-ಯಜ್ಞ, ತಪೋ-ಯಜ್ಞ, ಜ್ಞಾನ-ಯಜ್ಞ, ಸ್ವಾಧ್ಯಾಯ-ಯಜ್ಞ, ಪ್ರಾಣಾಯಾಮ-ಯಜ್ಞ, ಇಂದ್ರಿಯ-ಸಂಯಮ. ೪ನೇ ಅಧ್ಯಾಯ ಎಲ್ಲಾ ಕರ್ಮವನ್ನು ಹರಿಗೆ ಅರ್ಪಿಸಿದರೆ ಯಜ್ಞವಾಗಿಸುತ್ತದೆ.',
    hi:  'यज्ञ। द्रव्य-यज्ञ, तपो-यज्ञ, ज्ञान-यज्ञ, स्वाध्याय-यज्ञ, प्राणायाम-यज्ञ, इंद्रिय-संयम। चौथे अध्याय में हरि को अर्पित किया गया हर कर्म यज्ञ बन जाता है।',
  },
  pratika: {
    en:  'Symbols & metaphors. Aśvattha (the inverted world-tree, Ch 15), ratha (the body-chariot — implicit from Kaṭha), praṇava (oṃ), gītā-māhātmya, vibhūti. The image-language through which abstract tattva enters the heart.',
    dev: 'प्रतीकानि उपमाश्च। अश्वत्थः (पञ्चदशे अध्यायेऽधोमुख-संसार-वृक्षः), रथः (कठ-उपनिषदः गूढ-उपमा), प्रणवः (ॐ), गीता-माहात्म्यम्, विभूतिः। येन प्रतिमा-भाषेण अभूत-तत्त्वं हृदयं प्रविशति।',
    kn:  'ಪ್ರತೀಕಗಳು ಮತ್ತು ಉಪಮೆಗಳು. ಅಶ್ವತ್ಥ (ತಲೆ-ಕೆಳಗಿನ ಸಂಸಾರ-ವೃಕ್ಷ, ೧೫), ರಥ (ಶರೀರ-ರಥ ಉಪಮೆ), ಪ್ರಣವ (ಓಂ), ಗೀತಾ-ಮಾಹಾತ್ಮ್ಯ, ವಿಭೂತಿ. ಅಮೂರ್ತ ತತ್ತ್ವ ಹೃದಯ ಸೇರಲು ಬಳಸುವ ಪ್ರತಿಮಾ-ಭಾಷೆ.',
    hi:  'प्रतीक और उपमाएँ। अश्वत्थ (पंद्रहवें अध्याय का उल्टा संसार-वृक्ष), रथ (शरीर-रथ), प्रणव (ॐ), गीता-माहात्म्य, विभूति। प्रतिमा की भाषा जिससे अमूर्त तत्त्व हृदय में प्रवेश करता है।',
  },
};

const HEADLINE_CALLOUTS = [
  'sarvottamatva',
  'pancha_bheda',
  'taratamya',
  'sarva_dharman_parityajya',
  'jiva',
];

function pickTierConcepts(tierId, n=4) {
  const inTier = NODES.filter(node => node.tier === tierId);
  const withCallout = inTier.filter(node => node.madhva);
  const rest = inTier.filter(node => !node.madhva);
  const picked = [...withCallout, ...rest].slice(0, n);
  return picked;
}

// =====================================================================
// Slide builders
// =====================================================================
function addCoverSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  slide.addText(l.title, {
    x: 0.5, y: 1.6, w: 12.3, h: 1.4,
    fontFace: F.head, fontSize: 48, bold: true,
    color: PALETTE.ink, align: 'center', valign: 'middle',
  });
  slide.addText(l.subtitle, {
    x: 0.5, y: 3.05, w: 12.3, h: 0.6,
    fontFace: F.body, fontSize: 22, italic: true,
    color: PALETTE.inkSoft, align: 'center', valign: 'middle',
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.65, y: 3.85, w: 2.0, h: 0.02,
    fill: { color: PALETTE.rule }, line: { color: PALETTE.rule, width: 0.5 },
  });
  slide.addText(l.crumb, {
    x: 0.5, y: 4.1, w: 12.3, h: 0.5,
    fontFace: F.body, fontSize: 14,
    color: PALETTE.inkFade, align: 'center', valign: 'middle',
  });
  slide.addText('Concept KG · ' + l.s_stat_repo, {
    x: 0.5, y: 6.85, w: 12.3, h: 0.4,
    fontFace: F.body, fontSize: 10,
    color: PALETTE.inkFade, align: 'center', valign: 'middle',
  });
}

function addHeader(slide, pres, lang, kicker, heading, accent) {
  const F = FONTS[lang];
  slide.addText(kicker, {
    x: 0.6, y: 0.35, w: 12.0, h: 0.35,
    fontFace: F.body, fontSize: 11, bold: true,
    color: accent || PALETTE.inkFade, align: 'left', valign: 'middle',
    charSpacing: 4, margin: 0,
  });
  slide.addText(heading, {
    x: 0.6, y: 0.7, w: 12.0, h: 0.85,
    fontFace: F.head, fontSize: 30, bold: true,
    color: PALETTE.ink, align: 'left', valign: 'middle', margin: 0,
  });
}

function addWhySlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '01', l.s_why_h);
  slide.addText(l.s_why_b, {
    x: 0.6, y: 1.75, w: 12.0, h: 4.5,
    fontFace: F.body, fontSize: 18, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 8,
  });
}

function addTiersOverviewSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '02', l.s_tiers_h);
  slide.addText(l.s_tiers_b, {
    x: 0.6, y: 1.75, w: 12.0, h: 1.3,
    fontFace: F.body, fontSize: 13, italic: true,
    color: PALETTE.inkSoft, align: 'left', valign: 'top', paraSpaceAfter: 4,
  });
  const colW = 5.95;
  const startY = 3.15;
  const rowH = 0.36;
  const startX1 = 0.6;
  const startX2 = 6.85;
  TIERS.forEach((tier, i) => {
    const col = i % 2 === 0 ? 0 : 1;
    const row = Math.floor(i / 2);
    const x = col === 0 ? startX1 : startX2;
    const y = startY + row * rowH;
    const color = tierHex(tier.id);
    slide.addShape(pres.shapes.OVAL, {
      x: x, y: y + 0.085, w: 0.18, h: 0.18,
      fill: { color }, line: { color, width: 0 },
    });
    slide.addText(loc(tier, lang), {
      x: x + 0.3, y: y, w: 1.85, h: rowH,
      fontFace: F.head, fontSize: 13, bold: true,
      color: PALETTE.ink, valign: 'middle', margin: 0,
    });
    slide.addText(tier.gloss, {
      x: x + 2.15, y: y, w: colW - 2.15, h: rowH,
      fontFace: 'Cormorant Garamond', fontSize: 11, italic: true,
      color: PALETTE.inkSoft, valign: 'middle', margin: 0,
    });
  });
}

function addTierStorySlide(pres, lang, tier) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  const accent = tierHex(tier.id);
  const tierName = loc(tier, lang);
  addHeader(slide, pres, lang, l.s_tier_lead.toUpperCase(), tierName, accent);
  const story = (TIER_STORY[tier.id] && TIER_STORY[tier.id][lang]) || '';
  slide.addText(story, {
    x: 0.6, y: 1.75, w: 5.4, h: 4.8,
    fontFace: F.body, fontSize: 13, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 6,
  });
  const picks = pickTierConcepts(tier.id, 4);
  let y = 1.75;
  const cardH = 1.18;
  const gap = 0.12;
  picks.forEach(node => {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.25, y: y, w: 6.5, h: cardH,
      fill: { color: PALETTE.paper }, line: { color: PALETTE.rule, width: 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 6.25, y: y, w: 0.08, h: cardH,
      fill: { color: accent }, line: { color: accent, width: 0 },
    });
    const titleField = node.title ? node.title : { en:node.en, dev:node.dev, kn:node.kn, hi:node.dev };
    slide.addText(loc(titleField, lang), {
      x: 6.45, y: y + 0.06, w: 5.0, h: 0.32,
      fontFace: F.head, fontSize: 13, bold: true,
      color: PALETTE.ink, valign: 'middle', margin: 0,
    });
    slide.addText(node.refs || '', {
      x: 11.5, y: y + 0.06, w: 1.2, h: 0.32,
      fontFace: 'Cormorant Garamond', fontSize: 9.5, italic: true,
      color: PALETTE.inkFade, align: 'right', valign: 'middle', margin: 0,
    });
    const noteText = loc(node.note, lang);
    const trimmed = noteText.length > 260 ? noteText.slice(0, 258) + '…' : noteText;
    slide.addText(trimmed, {
      x: 6.45, y: y + 0.36, w: 6.2, h: cardH - 0.42,
      fontFace: F.body, fontSize: 10.5, color: PALETTE.inkSoft,
      align: 'left', valign: 'top', margin: 0, paraSpaceAfter: 2,
    });
    y += cardH + gap;
  });
}

function addEdgeVocabularySlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '15', l.s_edge_h);
  slide.addText(l.s_edge_b, {
    x: 0.6, y: 1.75, w: 12.0, h: 0.55,
    fontFace: F.body, fontSize: 14, italic: true,
    color: PALETTE.inkSoft, align: 'left', valign: 'top', margin: 0,
  });
  const types = ['is-a','leads-to','antidote-to','arises-from','opposite-of','includes','predicates-on','transforms-into'];
  const EDGE_COLOR = {
    'is-a':'8B6914', 'leads-to':'3F7A4A', 'antidote-to':'7B8D2E', 'arises-from':'B85042',
    'opposite-of':'5A3E6A', 'includes':'2F6E7A', 'predicates-on':'3A4A7A', 'transforms-into':'C69E2A',
  };
  const colW = 5.95;
  const startY = 2.45;
  const rowH = 0.5;
  types.forEach((t, i) => {
    const col = i % 2 === 0 ? 0 : 1;
    const row = Math.floor(i / 2);
    const x = col === 0 ? 0.6 : 6.85;
    const y = startY + row * rowH;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: x, y: y + 0.12, w: 0.22, h: 0.22,
      fill: { color: EDGE_COLOR[t] || PALETTE.ink }, line: { color: EDGE_COLOR[t], width: 0 },
    });
    slide.addText(l.s_edge[t], {
      x: x + 0.4, y: y, w: colW - 0.4, h: rowH,
      fontFace: F.body, fontSize: 12.5, color: PALETTE.ink,
      valign: 'middle', margin: 0,
    });
  });
}

function addMapSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '16', l.s_map_h);
  slide.addText(l.s_map_b, {
    x: 0.6, y: 1.75, w: 6.5, h: 4.8,
    fontFace: F.body, fontSize: 13, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 6,
  });
  const mapX = 7.55;
  const mapY = 1.75;
  const mapW = 5.2;
  const mapH = 4.5;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: mapX, y: mapY, w: mapW, h: mapH,
    fill: { color: PALETTE.paper }, line: { color: PALETTE.rule, width: 0.5 },
  });
  TIERS.forEach((tier, i) => {
    const bandH = (mapH - 0.3) / 12;
    const bandY = mapY + 0.15 + i * bandH;
    const accent = tierHex(tier.id);
    slide.addText(loc(tier, lang), {
      x: mapX + 0.1, y: bandY, w: 1.8, h: bandH,
      fontFace: F.head, fontSize: 8, color: accent,
      valign: 'middle', margin: 0, bold: true,
    });
    const inTier = NODES.filter(n => n.tier === tier.id);
    const dotCount = Math.min(inTier.length, 10);
    for (let k = 0; k < dotCount; k++) {
      const dotX = mapX + 1.95 + k * 0.3;
      slide.addShape(pres.shapes.OVAL, {
        x: dotX, y: bandY + bandH/2 - 0.06, w: 0.12, h: 0.12,
        fill: { color: accent }, line: { color: accent, width: 0 },
      });
    }
  });
}

function addCalloutSlide(pres, lang, nodeId) {
  const l = L[lang]; const F = FONTS[lang];
  const node = NODES.find(n => n.id === nodeId);
  if (!node) return;
  const shloka = SHLOKAS[nodeId];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  const accent = tierHex(node.tier);
  const titleField = node.title ? node.title : { en:node.en, dev:node.dev, kn:node.kn, hi:node.dev };
  addHeader(slide, pres, lang, l.callout_lead.toUpperCase(), loc(titleField, lang), accent);

  slide.addText(loc(node.note, lang), {
    x: 0.6, y: 1.75, w: 7.6, h: 2.2,
    fontFace: F.body, fontSize: 13, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 6,
  });
  slide.addText(loc(node.madhva, lang), {
    x: 0.6, y: 4.05, w: 7.6, h: 1.8,
    fontFace: F.body, fontSize: 13, italic: true, color: accent,
    align: 'left', valign: 'top', paraSpaceAfter: 6,
  });
  if (shloka) {
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 8.5, y: 1.75, w: 4.25, h: 5.0,
      fill: { color: PALETTE.paper }, line: { color: PALETTE.rule, width: 0.5 },
    });
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 8.5, y: 1.75, w: 0.08, h: 5.0,
      fill: { color: accent }, line: { color: accent, width: 0 },
    });
    slide.addText(l.verse_lead, {
      x: 8.7, y: 1.85, w: 4.0, h: 0.3,
      fontFace: F.body, fontSize: 10, bold: true,
      color: PALETTE.inkFade, valign: 'middle', charSpacing: 3, margin: 0,
    });
    slide.addText(shloka.ref || (node.refs || ''), {
      x: 8.7, y: 2.15, w: 4.0, h: 0.3,
      fontFace: 'Cormorant Garamond', fontSize: 11, italic: true,
      color: PALETTE.inkSoft, valign: 'middle', margin: 0,
    });
    let verseText;
    if (lang === 'kn') verseText = shloka.kn || shloka.dev;
    else if (lang === 'en') verseText = shloka.iast || shloka.dev;
    else verseText = shloka[lang] || shloka.dev;
    slide.addText(verseText || '', {
      x: 8.7, y: 2.55, w: 4.0, h: 3.0,
      fontFace: F.head, fontSize: 12, color: PALETTE.ink,
      valign: 'top', align: 'left', paraSpaceAfter: 4,
    });
    slide.addText(node.refs || '', {
      x: 8.7, y: 6.25, w: 4.0, h: 0.35,
      fontFace: 'Cormorant Garamond', fontSize: 10, italic: true,
      color: PALETTE.inkFade, valign: 'middle', margin: 0,
    });
  }
}

function addHowToSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '22', l.s_how_h);
  slide.addText(l.s_how_b, {
    x: 0.6, y: 1.85, w: 12.0, h: 4.5,
    fontFace: F.body, fontSize: 15, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 8,
  });
}

function addSourcesSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '23', l.s_src_h);
  const lines = l.s_src_lines;
  const bullets = lines.map((text, i) => ({
    text, options: { bullet: true, breakLine: i < lines.length - 1 }
  }));
  slide.addText(bullets, {
    x: 0.6, y: 1.85, w: 12.0, h: 4.8,
    fontFace: F.body, fontSize: 14, color: PALETTE.ink,
    align: 'left', valign: 'top', paraSpaceAfter: 6,
  });
}

function addStatsSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  addHeader(slide, pres, lang, '24', l.s_stat_h);
  const stats = [
    { n: String(NODES.length),     k: 'Concepts' },
    { n: String(EDGES.length),     k: 'Relations' },
    { n: String(TIERS.length),     k: 'Tiers' },
    { n: String(Object.keys(SHLOKAS).length), k: 'Verse anchors' },
  ];
  const cardW = 2.9; const cardH = 2.2; const startX = 0.6; const startY = 2.0; const gap = 0.2;
  stats.forEach((s, i) => {
    const x = startX + i * (cardW + gap);
    slide.addShape(pres.shapes.RECTANGLE, {
      x, y: startY, w: cardW, h: cardH,
      fill: { color: PALETTE.paper }, line: { color: PALETTE.rule, width: 0.5 },
    });
    slide.addText(s.n, {
      x, y: startY + 0.25, w: cardW, h: 1.2,
      fontFace: 'Cormorant Garamond', fontSize: 60, bold: true,
      color: PALETTE.ink, align: 'center', valign: 'middle', margin: 0,
    });
    slide.addText(s.k, {
      x, y: startY + 1.45, w: cardW, h: 0.55,
      fontFace: F.body, fontSize: 13, color: PALETTE.inkSoft,
      align: 'center', valign: 'middle', charSpacing: 2, margin: 0,
    });
  });
  slide.addText(l.s_stat_repo, {
    x: 0.6, y: 5.0, w: 12.0, h: 0.5,
    fontFace: 'Cormorant Garamond', fontSize: 18, italic: true,
    color: PALETTE.inkSoft, align: 'center', valign: 'middle',
  });
  slide.addText('MIT · open source · build-decks.js generates this deck', {
    x: 0.6, y: 5.55, w: 12.0, h: 0.4,
    fontFace: 'Cormorant Garamond', fontSize: 11, italic: true,
    color: PALETTE.inkFade, align: 'center', valign: 'middle',
  });
}

function addEndSlide(pres, lang) {
  const l = L[lang]; const F = FONTS[lang];
  const slide = pres.addSlide(); slide.background = { color: PALETTE.bg };
  slide.addText(l.s_end_h, {
    x: 0.5, y: 2.5, w: 12.3, h: 1.0,
    fontFace: F.head, fontSize: 44, bold: true,
    color: PALETTE.ink, align: 'center', valign: 'middle',
  });
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 5.9, y: 3.65, w: 1.5, h: 0.02,
    fill: { color: PALETTE.rule }, line: { color: PALETTE.rule, width: 0.5 },
  });
  slide.addText(l.s_end_b, {
    x: 0.5, y: 3.85, w: 12.3, h: 0.7,
    fontFace: F.body, fontSize: 18, italic: true,
    color: PALETTE.inkSoft, align: 'center', valign: 'middle',
  });
}

// =====================================================================
// Build / Main
// =====================================================================
function buildDeck(lang) {
  const pres = new PptxGenJS();
  pres.layout = 'LAYOUT_WIDE';   // 13.3 × 7.5 inches
  pres.author = 'kvinayakpai';
  pres.company = 'Bhagavad Gītā Concept KG';
  pres.title = L[lang].title;
  pres.subject = 'Madhva siddhānta · concept knowledge graph of the BG';

  addCoverSlide(pres, lang);
  addWhySlide(pres, lang);
  addTiersOverviewSlide(pres, lang);
  TIERS.forEach(tier => addTierStorySlide(pres, lang, tier));
  addEdgeVocabularySlide(pres, lang);
  addMapSlide(pres, lang);
  HEADLINE_CALLOUTS.forEach(id => addCalloutSlide(pres, lang, id));
  addHowToSlide(pres, lang);
  addSourcesSlide(pres, lang);
  addStatsSlide(pres, lang);
  addEndSlide(pres, lang);

  const outFile = path.join(OUT_DIR, `Bhagavadgita_Concept_KG_${lang}.pptx`);
  return pres.writeFile({ fileName: outFile }).then(() => outFile);
}

async function main() {
  const langs = ['en', 'dev', 'kn', 'hi'];
  for (const lang of langs) {
    const outFile = await buildDeck(lang);
    const stat = fs.statSync(outFile);
    console.log(`wrote ${outFile}  (${stat.size} bytes)`);
  }
  console.log(`\nDone — 4 decks in ${OUT_DIR}/`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
