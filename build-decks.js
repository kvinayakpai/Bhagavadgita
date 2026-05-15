/* build-decks.js
 *
 * Generates three PptxGenJS decks (English / Devanāgarī / Kannada) from data.js.
 * Run:
 *   npm install pptxgenjs
 *   node build-decks.js
 * Outputs:
 *   dist/Bhagavadgita_Concept_KG_en.pptx
 *   dist/Bhagavadgita_Concept_KG_dev.pptx
 *   dist/Bhagavadgita_Concept_KG_kn.pptx
 *
 * The deck is the same 16-slide narrative used in the original Madhva-Library
 * PptxGenJS build, adapted to a CONCEPT graph (not a person graph):
 *   1.  Title
 *   2.  The Problem  — many ideas, one tāratamya backbone
 *   3.  Sources     — BG corpus + Bannanje
 *   4.  The Model   — 12 tiers, edge vocabulary
 *   5.  Navigation  — 3 views
 *   6.  View 1 · Browse
 *   7.  View 2 · Focus — Hero card
 *   8.  View 2 · Focus — Local relations
 *   9.  View 3 · The Whole Map
 *   10. Graph features
 *   11. Localization
 *   12. Verses · Three scripts (sampler)
 *   13. Source-grounded audit
 *   14. Capabilities at a glance
 *   15. Madhva distinctives
 *   16. How to navigate
 */
const PptxGenJS = require('pptxgenjs');
const path = require('path');
const fs = require('fs');
const { TIERS, NODES, EDGES, SHLOKAS } = require('./data.js');

const OUT_DIR = path.join(__dirname, 'dist');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const PALETTE = {
  bg:'F4EAD8', paper:'FBF5E6', ink:'1F1A13', inkSoft:'4A3F30', inkFade:'7A6C54',
  rule:'D6C599',
  // tier colors (hex, no #)
  paramartha:'8B1E1A', tattva:'A83F1A', kshetra:'B8702A', guna:'C69E2A',
  yoga:'7B8D2E', sadhana:'3F7A4A', antahkarana:'2F6E7A', dharma:'3A4A7A',
  dosha:'5A3E6A', phala:'7A1E5A', yajna:'6A2E2E', pratika:'3E3A32',
};

// localization strings: title, section names, deck narrative bits
const L = {
  en: {
    title: 'Bhagavad Gītā · Concept KG',
    subtitle: 'Built on the Madhva siddhānta backbone',
    crumb: 'Concept Graph · Madhva',
    s2: { kicker:'THE PROBLEM', heading:'700 verses · 18 chapters · one tāratamya backbone',
      body:'The Bhagavad Gītā weaves cosmology, ethics, and metaphysics across hundreds of distinct concepts. Reading it linearly works once — but seeing how every yoga, doṣa, and yajña connects to the others requires a structural view the text itself never gives you.' },
    s3: { kicker:'SOURCES', heading:'Every concept anchored in a verse — and in Madhva commentary.',
      lines:['Primary text — Bhagavad Gītā (Sanskrit + English)','Secondary — Bannanje Govindacharya, Gītā-bhāṣya (4 vols, Kannada)','Reference — Mahābhārata Tātparya Nirṇaya (Madhva)','Doctrinal lens — sarvottama Hari, jīva-bheda, tāratamya'] },
    s4: { kicker:'THE MODEL', heading:'Twelve tiers of concepts.',
      body:'Each tier groups concepts of the same kind — tattvas, yogas, doṣas, phalas, yajñas, pratīkas. Edges (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) connect concepts the Gītā itself ties together verse by verse.' },
    s5: { kicker:'NAVIGATION', heading:'Three views · one dataset.',
      lines:['BROWSE — every concept under its tier','FOCUS — verse anchor + Madhva note + every relation','MAP — all concepts on one canvas'] },
    s6: { kicker:'VIEW 1 · BROWSE', heading:'A tier-aware index of every concept.', body:'Each tier opens with its color dot, English/Devanāgarī/Kannada name, gloss, and concept count. Live search filters across labels, titles, notes, and verse refs in any script.' },
    s7: { kicker:'VIEW 2 · FOCUS — Hero card', heading:'Every concept, anchored in a verse.', body:'The hero card carries (in order) the tier tag, the concept name in the active script, a one-line subtitle, a 2–3 sentence doctrinal note, the Madhva-distinctive callout where applicable, and the BG verse references.' },
    s8: { kicker:'VIEW 2 · FOCUS — Relations', heading:'Every connection, typed and labelled.', body:'Below the verse, outgoing and incoming relations are enumerated with their edge type (is-a, leads-to, etc.), edge label, and other endpoint. Tap any row to traverse.' },
    s9: { kicker:'VIEW 3 · MAP', heading:'All concepts on one canvas.', body:'Twelve horizontal bands — paramārtha at the top, pratīka at the bottom. Edges curve between concepts, color-coded by relation type. The structural shape of the Gītā\'s thought, seen from above.' },
    s10:{ kicker:'GRAPH · FEATURES', heading:'Tap, peek, traverse.', lines:['Tap any node to focus','Edge colors decode the relation type','Search re-filters all three views simultaneously','Switch language with one tap'] },
    s11:{ kicker:'LOCALIZATION', heading:'One ontology · three scripts.', lines:['English (IAST diacritics)','Devanāgarī (देवनागरी)','Kannada (ಕನ್ನಡ ಲಿಪಿ)'] },
    s12:{ kicker:'VERSES · THREE SCRIPTS', heading:'Each anchor verse in Devanāgarī, IAST, and Kannada.' },
    s13:{ kicker:'SOURCE-GROUNDED AUDIT', heading:'Every concept verified.', body:'Each concept node was anchored to at least one explicit BG verse (Sanskrit). Where Madhva\'s reading is distinctive — Brahman=Hari, akṣara=Lakṣmī, tāratamya in mokṣa, jīva-bheda, bhakti as constituent of mokṣa — the data file flags it.' },
    s14:{ kicker:'CAPABILITIES', heading:'What this artifact does, in one screen.' },
    s15:{ kicker:'MADHVA DISTINCTIVES', heading:'Where this reading parts company with Advaita.', lines:[
      'Brahman = Viṣṇu/Nārāyaṇa, not nirguṇa absolute',
      'Akṣara-puruṣa = Lakṣmī (jīva-gaṇa-mukhya), not impersonal',
      'Mokṣa has tāratamya — not undifferentiated bliss',
      'Jīva-bheda is real, eternal, plural',
      'Bhakti is both means and constituent of mokṣa',
      'Carama-śloka (BG 18.66) is the distilled mokṣa-upadeśa'] },
    s16:{ kicker:'A TYPICAL SESSION', heading:'How to navigate.', lines:[
      '1. Open in BROWSE',
      '2. Tap a concept (e.g. Sthita-prajña) → FOCUS',
      '3. Read the verse, the note, the Madhva callout',
      '4. Tap a related concept (e.g. Mokṣa) to traverse',
      '5. Switch to MAP to see where you are in the whole'] },
  },
  dev: {
    title: 'भगवद्गीता · सङ्कल्पन-ज्ञानवृत्तम्',
    subtitle: 'माध्वसिद्धान्तानुसारेण निर्मितम्',
    crumb: 'सङ्कल्पन-ग्राफः · माध्वम्',
    s2: { kicker:'समस्या', heading:'७०० श्लोकाः · १८ अध्यायाः · एकं तारतम्य-आधारम्',
      body:'भगवद्गीता विश्वरचनां, धर्मम्, अधिभूतिकं च बहुषु सङ्कल्पनेषु निबध्नाति। एकवारं क्रमेण अध्ययनं साधयति, परन्तु सर्वेषां योगानां, दोषाणां, यज्ञानां च परस्परं सम्बन्धं द्रष्टुं संरचनात्मकं दृश्यम् आवश्यकम्।' },
    s3: { kicker:'मूलस्रोतांसि', heading:'प्रत्येकं सङ्कल्पनं श्लोके माध्वभाष्ये च आधृतम्।',
      lines:['मूलग्रन्थः — भगवद्गीता (संस्कृत + आङ्ग्ल)','भाष्यम् — बन्नञ्जे गोविन्दाचार्यस्य गीताभाष्यम् (४ खण्डाः)','सन्दर्भः — महाभारत-तात्पर्य-निर्णयः (माध्वम्)','सैद्धान्तिकं दृष्टिकोणम् — सर्वोत्तमो हरिः, जीवभेदः, तारतम्यम्'] },
    s4: { kicker:'मॉडलम्', heading:'सङ्कल्पनानां द्वादश तारतम्य-स्तराः।',
      body:'प्रत्येकं स्तरः समानजातीयानि सङ्कल्पनानि सङ्गृह्णाति — तत्त्वानि, योगाः, दोषाः, फलानि, यज्ञाः, प्रतीकाः। सम्बन्धाः (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) श्लोकानुसारं सङ्कल्पनानां योजयन्ति।' },
    s5: { kicker:'दिशा-निर्देशनम्', heading:'त्रयो दृष्टयः · एकः आधारः।',
      lines:['BROWSE — स्तरानुसारं प्रत्येकं सङ्कल्पनम्','FOCUS — श्लोक-आधारः + माध्व-टीका + सर्वे सम्बन्धाः','MAP — सर्वाणि सङ्कल्पनानि एकस्मिन् पटे'] },
    s6: { kicker:'दृश्यम् १ · BROWSE', heading:'प्रत्येकस्य सङ्कल्पनस्य स्तरानुसारं अनुक्रमणिका।', body:'प्रत्येकः स्तरः स्ववर्णेन, त्रिलिपि-नाम्ना, सङ्क्षिप्त-व्याख्यया, सङ्कल्पन-सङ्ख्यया च आरभते। जीवित-अन्वेषणं सर्वत्र वर्तते।' },
    s7: { kicker:'दृश्यम् २ · FOCUS — मुख्य-पत्रिका', heading:'प्रत्येकं सङ्कल्पनं श्लोके निबद्धम्।', body:'मुख्य-पत्रिका क्रमेण ददाति — स्तरस्य चिह्नं, सक्रिय-लिप्यां सङ्कल्पन-नाम, एक-पङ्क्ति-उपशीर्षकम्, २–३ वाक्य-सिद्धान्त-टिप्पणी, माध्व-विशिष्ट-टिप्पणी (यदा प्रासङ्गिकं), श्लोक-सन्दर्भाश्च।' },
    s8: { kicker:'दृश्यम् २ · FOCUS — सम्बन्धाः', heading:'प्रत्येकः सम्बन्धः चिह्नितः, अङ्कितः।', body:'श्लोकस्य अधः बहिर्गामिनः अन्तर्गामिनश्च सम्बन्धाः सूचीकृताः — सम्बन्ध-प्रकारेण (is-a, leads-to इत्यादिभिः), सम्बन्ध-नाम्ना, अन्य-अन्ततया च।' },
    s9: { kicker:'दृश्यम् ३ · MAP', heading:'सर्वाणि सङ्कल्पनानि एकस्मिन् पटे।', body:'द्वादश तिर्यक्-पट्ट्यः — परमार्थः शीर्षे, प्रतीकः अधःस्थः। सम्बन्धाः सङ्कल्पनयोः मध्ये वक्रन्ति, प्रकार-अनुसारं वर्णिताः।' },
    s10:{ kicker:'ग्राफः · विशेषाः', heading:'स्पृश, अवलोकय, गच्छ।', lines:['स्पर्शेन सङ्कल्पन-केन्द्रीकरणम्','सम्बन्ध-वर्णैः प्रकार-निर्णयः','सर्वत्र युगपत् अन्वेषणम्','एक-स्पर्शेन भाषा-परिवर्तनम्'] },
    s11:{ kicker:'भाषा-अनुकूलनम्', heading:'एकं ज्ञानवृत्तम् · त्रिषु लिपिषु।', lines:['आङ्ग्लम् (IAST)','देवनागरी','कन्नड लिपिः'] },
    s12:{ kicker:'श्लोकाः · त्रिषु लिपिषु', heading:'प्रत्येकः आधार-श्लोकः देवनागर्याम्, IAST-इत्यां, कन्नड-लिप्यां च।' },
    s13:{ kicker:'मूल-आधारित-परीक्षणम्', heading:'प्रत्येकं सङ्कल्पनं प्रमाणितम्।', body:'प्रत्येकं सङ्कल्पन-स्थानं न्यूनातिन्यूनं एकेन स्पष्ट-गीता-श्लोकेन आधृतम्। यत्र माध्वस्य पठनं विशिष्टम् — ब्रह्म = हरिः, अक्षरः = लक्ष्मीः, मोक्षे तारतम्यम्, जीव-भेदः — तत्र दत्तांश-सञ्चिकायां चिह्नितम्।' },
    s14:{ kicker:'सामर्थ्यानि', heading:'अयं कृतिः किं करोति।' },
    s15:{ kicker:'माध्व-विशेषाः', heading:'यत्र अद्वैतात् पठनं भिन्नम्।', lines:[
      'ब्रह्म = विष्णुः/नारायणः, न निर्गुणं तत्त्वम्',
      'अक्षर-पुरुषः = लक्ष्मीः, न निर्व्यक्तिकम्',
      'मोक्षे तारतम्यम् — न अविभक्त-आनन्दः',
      'जीव-भेदः सत्यः, नित्यः, बहुधा',
      'भक्तिः मोक्षस्य साधनं तत्त्वं च',
      'चरम-श्लोकः (गी. १८.६६) मोक्षोपदेशस्य सारः'] },
    s16:{ kicker:'सामान्य-सत्रम्', heading:'कथं प्रचलितव्यम्।', lines:[
      '१. BROWSE-इत्यां प्रवेशः',
      '२. सङ्कल्पनम् (यथा स्थितप्रज्ञः) स्पृश्य → FOCUS',
      '३. श्लोकम्, टिप्पणीम्, माध्व-टिप्पणीं च पठ',
      '४. सम्बद्ध-सङ्कल्पनं (यथा मोक्षम्) स्पृश्य गच्छ',
      '५. MAP-इत्यां स्थानं द्रष्टुम्'] },
  },
  kn: {
    title: 'ಭಗವದ್ಗೀತಾ · ಪರಿಕಲ್ಪನಾ ಜ್ಞಾನ ಗ್ರಾಫ್',
    subtitle: 'ಮಾಧ್ವ ಸಿದ್ಧಾಂತಾನುಸಾರಿ',
    crumb: 'ಪರಿಕಲ್ಪನಾ ಗ್ರಾಫ್ · ಮಾಧ್ವ',
    s2: { kicker:'ಸಮಸ್ಯೆ', heading:'700 ಶ್ಲೋಕಗಳು · 18 ಅಧ್ಯಾಯಗಳು · ಒಂದು ತಾರತಮ್ಯ ಆಧಾರ',
      body:'ಭಗವದ್ಗೀತೆಯು ವಿಶ್ವರಚನೆ, ಧರ್ಮ, ಅಧ್ಯಾತ್ಮ — ಇವುಗಳನ್ನು ನೂರಾರು ಪರಿಕಲ್ಪನೆಗಳಲ್ಲಿ ಹಣೆಯುತ್ತದೆ. ಒಂದು ಬಾರಿ ಕ್ರಮವಾಗಿ ಓದಿದರೆ ಸಾಕು — ಆದರೆ ಪ್ರತಿ ಯೋಗ, ದೋಷ, ಯಜ್ಞಗಳ ನಡುವಿನ ಸಂಬಂಧ ಕಾಣಲು ಒಂದು ರಚನಾತ್ಮಕ ದೃಷ್ಟಿ ಬೇಕು — ಪಠ್ಯವೇ ನೀಡದ ದೃಷ್ಟಿ.' },
    s3: { kicker:'ಮೂಲಸ್ರೋತಗಳು', heading:'ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಶ್ಲೋಕದಲ್ಲಿ ಮತ್ತು ಮಾಧ್ವ ಭಾಷ್ಯದಲ್ಲಿ ನೆಲೆಗೊಂಡಿದೆ.',
      lines:['ಮೂಲ ಪಠ್ಯ — ಭಗವದ್ಗೀತಾ (ಸಂಸ್ಕೃತ + ಆಂಗ್ಲ)','ಭಾಷ್ಯ — ಬನ್ನಂಜೆ ಗೋವಿಂದಾಚಾರ್ಯ, ಗೀತಾ ಭಾಷ್ಯ (4 ಸಂಪುಟಗಳು, ಕನ್ನಡ)','ಸಂದರ್ಭ — ಮಹಾಭಾರತ ತಾತ್ಪರ್ಯ ನಿರ್ಣಯ (ಮಾಧ್ವ)','ಸೈದ್ಧಾಂತಿಕ ದೃಷ್ಟಿ — ಸರ್ವೋತ್ತಮ ಹರಿ, ಜೀವ ಭೇದ, ತಾರತಮ್ಯ'] },
    s4: { kicker:'ಮಾಡಲ್', heading:'ಪರಿಕಲ್ಪನೆಗಳ ಹನ್ನೆರಡು ತಾರತಮ್ಯ ಸ್ತರಗಳು.',
      body:'ಪ್ರತಿ ಸ್ತರವು ಸಮಾನ ಜಾತಿಯ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತದೆ — ತತ್ತ್ವಗಳು, ಯೋಗಗಳು, ದೋಷಗಳು, ಫಲಗಳು, ಯಜ್ಞಗಳು, ಪ್ರತೀಕಗಳು. ಸಂಬಂಧಗಳು (is-a, leads-to, antidote-to, arises-from, opposite-of, includes, predicates-on, transforms-into) ಶ್ಲೋಕದ ಪ್ರಕಾರ ಪರಿಕಲ್ಪನೆಗಳನ್ನು ಜೋಡಿಸುತ್ತವೆ.' },
    s5: { kicker:'ನ್ಯಾವಿಗೇಶನ್', heading:'ಮೂರು ದೃಷ್ಟಿಗಳು · ಒಂದು ಡೇಟಾಸೆಟ್.',
      lines:['BROWSE — ಸ್ತರಾನುಸಾರ ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ','FOCUS — ಶ್ಲೋಕ ಆಧಾರ + ಮಾಧ್ವ ಟಿಪ್ಪಣಿ + ಎಲ್ಲ ಸಂಬಂಧಗಳು','MAP — ಎಲ್ಲ ಪರಿಕಲ್ಪನೆಗಳು ಒಂದೇ ಚಿತ್ರಪಟದಲ್ಲಿ'] },
    s6: { kicker:'ದೃಷ್ಟಿ 1 · BROWSE', heading:'ಪ್ರತಿ ಪರಿಕಲ್ಪನೆಯ ಸ್ತರಾನುಸಾರ ಸೂಚಿ.', body:'ಪ್ರತಿ ಸ್ತರವು ತನ್ನ ವರ್ಣ ಚುಕ್ಕೆ, ತ್ರಿಲಿಪಿ ಹೆಸರು, ಸಂಕ್ಷಿಪ್ತ ವಿವರಣೆ, ಪರಿಕಲ್ಪನಾ ಸಂಖ್ಯೆಯೊಡನೆ ಆರಂಭವಾಗುತ್ತದೆ. ಲೈವ್ ಸರ್ಚ್ ಎಲ್ಲ ಲಿಪಿಗಳಲ್ಲಿಯೂ ಫಿಲ್ಟರ್ ಮಾಡುತ್ತದೆ.' },
    s7: { kicker:'ದೃಷ್ಟಿ 2 · FOCUS — ಹೀರೋ ಕಾರ್ಡ್', heading:'ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಒಂದು ಶ್ಲೋಕದಲ್ಲಿ ನೆಲೆಗೊಂಡಿದೆ.', body:'ಹೀರೋ ಕಾರ್ಡ್ ಕ್ರಮವಾಗಿ ತೋರಿಸುತ್ತದೆ — ಸ್ತರದ ಚಿಹ್ನೆ, ಸಕ್ರಿಯ ಲಿಪಿಯಲ್ಲಿ ಪರಿಕಲ್ಪನಾ ಹೆಸರು, ಒಂದು ಸಾಲಿನ ಉಪಶೀರ್ಷಿಕೆ, 2–3 ವಾಕ್ಯಗಳ ಸಿದ್ಧಾಂತ ಟಿಪ್ಪಣಿ, ಮಾಧ್ವ ವಿಶಿಷ್ಟ ಟಿಪ್ಪಣಿ, ಮತ್ತು ಶ್ಲೋಕ ಸಂದರ್ಭಗಳು.' },
    s8: { kicker:'ದೃಷ್ಟಿ 2 · FOCUS — ಸಂಬಂಧಗಳು', heading:'ಪ್ರತಿ ಸಂಬಂಧ ಚಿಹ್ನಿತ, ಲೇಬಲ್ಡ್.', body:'ಶ್ಲೋಕದ ಕೆಳಗೆ ಬಹಿರ್ಗಾಮಿ ಮತ್ತು ಅಂತರ್ಗಾಮಿ ಸಂಬಂಧಗಳು ಸೂಚಿಸಲ್ಪಡುತ್ತವೆ — ಸಂಬಂಧ ಪ್ರಕಾರ, ಲೇಬಲ್, ಇನ್ನೊಂದು ಕೊನೆಯ ಪರಿಕಲ್ಪನೆ. ಯಾವುದೇ ಸಾಲನ್ನು ಒತ್ತಿ ಮುಂದೆ ಸಾಗಿರಿ.' },
    s9: { kicker:'ದೃಷ್ಟಿ 3 · MAP', heading:'ಎಲ್ಲ ಪರಿಕಲ್ಪನೆಗಳು ಒಂದೇ ಚಿತ್ರಪಟದಲ್ಲಿ.', body:'ಹನ್ನೆರಡು ಅಡ್ಡ ಪಟ್ಟಿಗಳು — ಪರಮಾರ್ಥ ಮೇಲೆ, ಪ್ರತೀಕ ಕೆಳಗೆ. ಸಂಬಂಧಗಳು ಪರಿಕಲ್ಪನೆಗಳ ನಡುವೆ ಬಾಗುತ್ತವೆ, ಪ್ರಕಾರಾನುಸಾರ ಬಣ್ಣಿತ.' },
    s10:{ kicker:'ಗ್ರಾಫ್ · ವೈಶಿಷ್ಟ್ಯಗಳು', heading:'ಒತ್ತಿ, ನೋಡಿ, ಚಲಿಸಿ.', lines:['ಯಾವುದೇ ನೋಡ್ ಒತ್ತಿ ಫೋಕಸ್ ಪಡೆಯಿರಿ','ಎಡ್ಜ್ ಬಣ್ಣಗಳು ಸಂಬಂಧ ಪ್ರಕಾರ ತಿಳಿಸುತ್ತವೆ','ಸರ್ಚ್ ಎಲ್ಲ ಮೂರು ದೃಷ್ಟಿಗಳಲ್ಲಿಯೂ ಒಮ್ಮೆಲೆ','ಒಂದು ಒತ್ತಿನಿಂದ ಭಾಷಾ ಬದಲಾವಣೆ'] },
    s11:{ kicker:'ಭಾಷಾ ಸ್ಥಳೀಕರಣ', heading:'ಒಂದು ಜ್ಞಾನವೃತ್ತ · ಮೂರು ಲಿಪಿಗಳು.', lines:['ಆಂಗ್ಲ (IAST)','ದೇವನಾಗರಿ','ಕನ್ನಡ ಲಿಪಿ'] },
    s12:{ kicker:'ಶ್ಲೋಕಗಳು · ಮೂರು ಲಿಪಿಗಳಲ್ಲಿ', heading:'ಪ್ರತಿ ಆಧಾರ ಶ್ಲೋಕ ದೇವನಾಗರಿ, IAST, ಮತ್ತು ಕನ್ನಡ ಲಿಪಿಯಲ್ಲಿ.' },
    s13:{ kicker:'ಮೂಲ-ಆಧಾರಿತ ಪರೀಕ್ಷೆ', heading:'ಪ್ರತಿ ಪರಿಕಲ್ಪನೆ ಪರೀಕ್ಷಿತ.', body:'ಪ್ರತಿ ಪರಿಕಲ್ಪನಾ ನೋಡ್ ಕನಿಷ್ಠ ಒಂದು ಸ್ಪಷ್ಟ ಗೀತಾ ಶ್ಲೋಕದಲ್ಲಿ ನೆಲೆಗೊಂಡಿದೆ. ಮಾಧ್ವರ ವ್ಯಾಖ್ಯಾನ ವಿಶಿಷ್ಟವಿರುವ ಕಡೆ — ಬ್ರಹ್ಮ = ಹರಿ, ಅಕ್ಷರ = ಲಕ್ಷ್ಮಿ, ಮೋಕ್ಷದಲ್ಲಿ ತಾರತಮ್ಯ, ಜೀವ ಭೇದ — ಡೇಟಾ ಫೈಲ್ ಚಿಹ್ನಿಸಿದೆ.' },
    s14:{ kicker:'ಸಾಮರ್ಥ್ಯಗಳು', heading:'ಈ ಕೃತಿ ಏನು ಮಾಡುತ್ತದೆ — ಒಂದು ಪರದೆಯಲ್ಲಿ.' },
    s15:{ kicker:'ಮಾಧ್ವ ವಿಶೇಷಗಳು', heading:'ಅದ್ವೈತ ವ್ಯಾಖ್ಯಾನದಿಂದ ಎಲ್ಲಿ ಭಿನ್ನ.', lines:[
      'ಬ್ರಹ್ಮ = ವಿಷ್ಣು/ನಾರಾಯಣ, ನಿರ್ಗುಣ ಅಲ್ಲ',
      'ಅಕ್ಷರ ಪುರುಷ = ಲಕ್ಷ್ಮಿ, ನಿರ್ವ್ಯಕ್ತಿಕ ಅಲ್ಲ',
      'ಮೋಕ್ಷದಲ್ಲಿ ತಾರತಮ್ಯ — ಅಭಿನ್ನ ಆನಂದ ಅಲ್ಲ',
      'ಜೀವ ಭೇದ ಸತ್ಯ, ನಿತ್ಯ, ಬಹುಧಾ',
      'ಭಕ್ತಿ ಮೋಕ್ಷದ ಸಾಧನ ಮತ್ತು ತತ್ತ್ವ ಎರಡೂ',
      'ಚರಮ ಶ್ಲೋಕ (ಗೀ. 18.66) ಮೋಕ್ಷೋಪದೇಶದ ಸಾರ'] },
    s16:{ kicker:'ಸಾಮಾನ್ಯ ಸತ್ರ', heading:'ಹೇಗೆ ನ್ಯಾವಿಗೇಟ್ ಮಾಡುವುದು.', lines:[
      '1. BROWSE-ನಲ್ಲಿ ಆರಂಭ',
      '2. ಒಂದು ಪರಿಕಲ್ಪನೆ ಒತ್ತಿ (ಉದಾ. ಸ್ಥಿತಪ್ರಜ್ಞ) → FOCUS',
      '3. ಶ್ಲೋಕ, ಟಿಪ್ಪಣಿ, ಮಾಧ್ವ ಕಾಲ್‌ಔಟ್ ಓದಿ',
      '4. ಸಂಬಂಧಿತ ಪರಿಕಲ್ಪನೆ (ಉದಾ. ಮೋಕ್ಷ) ಒತ್ತಿ ಮುಂದೆ ಸಾಗಿ',
      '5. MAP-ನಲ್ಲಿ ನಿಮ್ಮ ಸ್ಥಾನ ನೋಡಿ'] },
  },
};

function pickLabel(node, lang){ return lang==='dev' ? node.dev : lang==='kn' ? node.kn : node.en; }
function pickShlokaText(s, lang){ return s ? (lang==='dev' ? s.dev : lang==='kn' ? s.kn : s.iast) : ''; }

function buildDeck(lang){
  const pres = new PptxGenJS();
  pres.author = 'kvinayakpai';
  pres.company = 'Bhagavadgita Concept KG';
  pres.title = L[lang].title;
  pres.layout = 'LAYOUT_WIDE';   // 13.333 x 7.5

  const W = 13.333, H = 7.5;

  // Helper: parchment background rect
  function bg(slide){
    slide.background = { color: PALETTE.bg };
    slide.addShape(pres.ShapeType.rect, { x:0, y:0, w:W, h:0.55, fill:{color:PALETTE.bg}, line:{color:PALETTE.rule, width:0.5} });
    slide.addText(L[lang].crumb, { x:0.5, y:0.08, w:6, h:0.4,
      fontFace:'Arial', fontSize:10, color:PALETTE.inkFade, charSpacing:2, bold:false });
    slide.addText(L[lang].title, { x:6.5, y:0.08, w:6.3, h:0.4, align:'right',
      fontFace:'Arial', fontSize:11, color:PALETTE.inkSoft, italic:true });
  }
  function kicker(slide, text){
    slide.addText(text, { x:0.7, y:1.0, w:11.9, h:0.4,
      fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, charSpacing:3, bold:true });
  }
  function heading(slide, text, opts={}){
    slide.addText(text, { x:0.7, y:1.45, w:11.9, h:0.95,
      fontFace:opts.font||'Cambria', fontSize:opts.size||34, color:PALETTE.ink, bold:true, valign:'top' });
  }
  function body(slide, text, opts={}){
    slide.addText(text, { x:0.7, y:opts.y||2.6, w:opts.w||11.9, h:opts.h||3.5,
      fontFace:'Arial', fontSize:opts.size||16, color:PALETTE.inkSoft, valign:'top', paraSpaceAfter:6 });
  }
  function bullets(slide, lines, opts={}){
    slide.addText(lines.map(t=>({text:t,options:{bullet:{type:'bullet'}}})), {
      x:0.7, y:opts.y||2.6, w:opts.w||11.9, h:opts.h||4.0,
      fontFace:'Arial', fontSize:opts.size||18, color:PALETTE.inkSoft, valign:'top', paraSpaceAfter:8 });
  }

  // ===== Slide 1: Title =====
  let s = pres.addSlide();
  s.background = { color: PALETTE.bg };
  s.addText('A CONCEPT KNOWLEDGE GRAPH FOR THE', { x:0.7, y:2.4, w:12, h:0.5,
    fontFace:'Arial', fontSize:14, color:PALETTE.inkFade, charSpacing:4, bold:true });
  s.addText(L[lang].title, { x:0.7, y:2.95, w:12, h:1.7,
    fontFace:'Cambria', fontSize:60, color:PALETTE.ink, bold:true, italic:false });
  s.addText(L[lang].subtitle, { x:0.7, y:4.7, w:12, h:0.6,
    fontFace:'Cambria', fontSize:24, color:PALETTE.inkSoft, italic:true });
  s.addText(`${NODES.length} concepts · ${EDGES.length} relations · ${TIERS.length} tiers`, {
    x:0.7, y:6.7, w:12, h:0.4, fontFace:'Arial', fontSize:12, color:PALETTE.inkFade, charSpacing:2 });

  // ===== Slide 2: The Problem =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s2.kicker);
  heading(s, L[lang].s2.heading);
  body(s, L[lang].s2.body);

  // ===== Slide 3: Sources =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s3.kicker);
  heading(s, L[lang].s3.heading);
  bullets(s, L[lang].s3.lines);

  // ===== Slide 4: The Model — 12 tiers grid =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s4.kicker);
  heading(s, L[lang].s4.heading, {size:30});
  body(s, L[lang].s4.body, {y:2.5, h:1.6, size:14});
  // 12-tier grid
  const gridY=4.25, cellW=2.0, cellH=0.55, cols=4;
  TIERS.forEach((t,i)=>{
    const r = Math.floor(i/cols), c = i%cols;
    const x = 0.7 + c*(cellW+0.2);
    const y = gridY + r*(cellH+0.12);
    s.addShape(pres.ShapeType.rect, { x, y, w:cellW, h:cellH, fill:{color:PALETTE[t.id]||PALETTE.ink}, line:{color:PALETTE.rule, width:0.5} });
    const tlab = lang==='dev'?t.dev:lang==='kn'?t.kn:t.en;
    s.addText(tlab, { x, y, w:cellW, h:cellH, fontFace:'Cambria', fontSize:13, color:'FFFFFF', bold:true, align:'center', valign:'middle' });
  });

  // ===== Slide 5: Navigation =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s5.kicker);
  heading(s, L[lang].s5.heading);
  bullets(s, L[lang].s5.lines);

  // ===== Slide 6: View 1 — Browse =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s6.kicker);
  heading(s, L[lang].s6.heading, {size:28});
  body(s, L[lang].s6.body, {y:2.5, h:1.6});
  // mock: 3 example tier rows
  let y = 4.4;
  ['paramartha','yoga','phala'].forEach(tid=>{
    const tier = TIERS.find(t=>t.id===tid);
    s.addShape(pres.ShapeType.ellipse, {x:0.8, y:y+0.1, w:0.2, h:0.2, fill:{color:PALETTE[tid]}, line:{color:PALETTE[tid]}});
    const tlab = lang==='dev'?tier.dev:lang==='kn'?tier.kn:tier.en;
    s.addText(tlab, {x:1.15, y, w:3, h:0.4, fontFace:'Cambria', fontSize:16, color:PALETTE.ink, bold:true});
    s.addText(tier.gloss, {x:4.2, y:y+0.06, w:8.5, h:0.4, fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, italic:true});
    y += 0.6;
  });

  // ===== Slide 7: Focus — Hero card =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s7.kicker);
  heading(s, L[lang].s7.heading, {size:26});
  body(s, L[lang].s7.body, {y:2.5, h:1.4, size:14});
  // Example hero card mock — Sthitaprajna
  const ex = NODES.find(n=>n.id==='sthitaprajna') || NODES[0];
  const tier = TIERS.find(t=>t.id===ex.tier);
  s.addShape(pres.ShapeType.rect, {x:0.7, y:4.2, w:12, h:2.9, fill:{color:PALETTE.paper}, line:{color:PALETTE.rule}});
  const tlab = lang==='dev'?tier.dev:lang==='kn'?tier.kn:tier.en;
  s.addText('● '+tlab, {x:0.95, y:4.3, w:6, h:0.35, fontFace:'Arial', fontSize:10, color:PALETTE[ex.tier], charSpacing:3, bold:true});
  s.addText(pickLabel(ex, lang), {x:0.95, y:4.6, w:11.5, h:0.7, fontFace:'Cambria', fontSize:32, color:PALETTE.ink, bold:true});
  s.addText(ex.title, {x:0.95, y:5.3, w:11.5, h:0.4, fontFace:'Cambria', fontSize:14, color:PALETTE.inkSoft, italic:true});
  s.addText(ex.note, {x:0.95, y:5.75, w:11.5, h:1.0, fontFace:'Arial', fontSize:12, color:PALETTE.ink, paraSpaceAfter:4});
  s.addText(ex.refs, {x:0.95, y:6.8, w:11.5, h:0.3, fontFace:'Arial', fontSize:10, color:PALETTE.inkFade, charSpacing:2});

  // ===== Slide 8: Focus — Relations =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s8.kicker);
  heading(s, L[lang].s8.heading, {size:26});
  body(s, L[lang].s8.body, {y:2.5, h:1.4, size:14});
  // Sample relations table for sthitaprajna
  const exId = ex.id;
  const outs = EDGES.filter(e=>e.source===exId).slice(0,3);
  const ins  = EDGES.filter(e=>e.target===exId).slice(0,3);
  let ry = 4.2;
  outs.concat(ins).forEach((e,i)=>{
    const other = NODES.find(n=>n.id===(e.source===exId ? e.target : e.source));
    if (!other) return;
    s.addShape(pres.ShapeType.rect, {x:0.7, y:ry, w:1.6, h:0.36, fill:{color:'E0DAC6'}, line:{type:'none'}});
    s.addText(e.type, {x:0.7, y:ry, w:1.6, h:0.36, fontFace:'Arial', fontSize:10, color:PALETTE.ink, bold:true, align:'center', valign:'middle', charSpacing:2});
    s.addText(e.label||'—', {x:2.5, y:ry, w:5, h:0.36, fontFace:'Arial', fontSize:11, color:PALETTE.inkSoft, valign:'middle'});
    s.addText((e.source===exId ? '→ ' : '← ') + pickLabel(other, lang), {x:7.7, y:ry, w:5, h:0.36, fontFace:'Cambria', fontSize:13, color:PALETTE.ink, bold:true, valign:'middle'});
    ry += 0.45;
  });

  // ===== Slide 9: The Map =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s9.kicker);
  heading(s, L[lang].s9.heading, {size:30});
  body(s, L[lang].s9.body, {y:2.5, h:1.4, size:14});
  // simple tier-strip visualization
  let stripY = 4.2;
  TIERS.forEach((t,ti)=>{
    const stripX = 0.7 + ti*1.05;
    s.addShape(pres.ShapeType.rect, {x:stripX, y:stripY, w:0.95, h:2.5,
      fill:{color:PALETTE[t.id]}, line:{color:PALETTE[t.id]} });
    const tlab = lang==='dev'?t.dev:lang==='kn'?t.kn:t.en;
    s.addText(tlab, {x:stripX, y:stripY+0.15, w:0.95, h:2.0,
      fontFace:'Cambria', fontSize:11, color:'FFFFFF', bold:true, align:'center', valign:'middle',
      // vertical-ish: stack via line-break; just show short label
    });
    const cnt = NODES.filter(n=>n.tier===t.id).length;
    s.addText(String(cnt), {x:stripX, y:stripY+2.05, w:0.95, h:0.4,
      fontFace:'Arial', fontSize:14, color:'FFFFFF', align:'center', bold:true });
  });

  // ===== Slide 10: Graph features =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s10.kicker);
  heading(s, L[lang].s10.heading);
  bullets(s, L[lang].s10.lines);

  // ===== Slide 11: Localization =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s11.kicker);
  heading(s, L[lang].s11.heading);
  bullets(s, L[lang].s11.lines);

  // ===== Slide 12: Verses — three scripts (sample: purushottama) =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s12.kicker);
  heading(s, L[lang].s12.heading, {size:24});
  const sample = SHLOKAS['purushottama'];
  if (sample){
    s.addText(sample.dev, {x:0.7, y:2.4, w:12, h:1.5, fontFace:'Sanskrit Text', fontSize:18, color:PALETTE.ink, valign:'top'});
    s.addText(sample.iast, {x:0.7, y:4.1, w:12, h:1.4, fontFace:'Cambria', fontSize:18, color:PALETTE.ink, italic:true, valign:'top'});
    s.addText(sample.kn, {x:0.7, y:5.65, w:12, h:1.4, fontFace:'Tunga', fontSize:18, color:PALETTE.ink, valign:'top'});
    s.addText('— '+sample.ref, {x:0.7, y:7.0, w:12, h:0.3, fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, align:'right'});
  }

  // ===== Slide 13: Source-grounded audit =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s13.kicker);
  heading(s, L[lang].s13.heading);
  body(s, L[lang].s13.body);
  // big numbers
  s.addText(String(NODES.length), {x:0.7, y:5.6, w:3, h:1.4, fontFace:'Cambria', fontSize:64, color:PALETTE.paramartha, bold:true, align:'center'});
  s.addText('concepts grounded', {x:0.7, y:6.85, w:3, h:0.4, fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, align:'center', charSpacing:2});
  s.addText(String(Object.keys(SHLOKAS).length), {x:4.8, y:5.6, w:3, h:1.4, fontFace:'Cambria', fontSize:64, color:PALETTE.yoga, bold:true, align:'center'});
  s.addText('verses in tri-script', {x:4.8, y:6.85, w:3, h:0.4, fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, align:'center', charSpacing:2});
  s.addText(String(EDGES.length), {x:9.0, y:5.6, w:3, h:1.4, fontFace:'Cambria', fontSize:64, color:PALETTE.dharma, bold:true, align:'center'});
  s.addText('typed relations', {x:9.0, y:6.85, w:3, h:0.4, fontFace:'Arial', fontSize:11, color:PALETTE.inkFade, align:'center', charSpacing:2});

  // ===== Slide 14: Capabilities =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s14.kicker);
  heading(s, L[lang].s14.heading);
  const caps = [
    `${NODES.length} concept nodes`,
    `${EDGES.length} typed relations`,
    `${TIERS.length} tāratamya tiers`,
    `${Object.keys(SHLOKAS).length} anchor verses · tri-script`,
    `${NODES.filter(n=>n.madhva).length} Madhva-distinctive callouts`,
    `3 scripts: IAST · Devanāgarī · Kannada`,
  ];
  bullets(s, caps);

  // ===== Slide 15: Madhva distinctives =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s15.kicker);
  heading(s, L[lang].s15.heading);
  bullets(s, L[lang].s15.lines);

  // ===== Slide 16: How to navigate =====
  s = pres.addSlide(); bg(s);
  kicker(s, L[lang].s16.kicker);
  heading(s, L[lang].s16.heading);
  bullets(s, L[lang].s16.lines);

  const outFile = path.join(OUT_DIR, `Bhagavadgita_Concept_KG_${lang}.pptx`);
  return pres.writeFile({ fileName: outFile }).then(()=>{
    console.log(`✓ ${outFile}`);
    return outFile;
  });
}

(async ()=>{
  await buildDeck('en');
  await buildDeck('dev');
  await buildDeck('kn');
  console.log('Done.');
})();
