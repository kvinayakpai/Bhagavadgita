"""
fix_english_contamination.py
Removes/replaces English code-switches in bannanje_dev.js.
Uses bannanje_kn.js as source of truth for context.

Strategy:
- English words/phrases in the Devanagari commentary are code-switches from
  the original Kannada lecture (Bannanje spoke informally, mixing English).
- Google Translate preserved them verbatim instead of converting to Sanskrit.
- Fix: replace with contextually appropriate Sanskrit/Devanagari.
"""

import re, json, sys, os
sys.stdout.reconfigure(encoding='utf-8')

def load_var(filename, var_name):
    content = open(filename, encoding='utf-8').read()
    start = content.find(f'window.{var_name} =') + len(f'window.{var_name} =')
    rest = content[start:].strip()
    idx = rest.find('if (typeof module')
    if idx != -1: rest = rest[:idx].strip()
    if rest.endswith(';'): rest = rest[:-1]
    return json.loads(rest)

def save_var(filename, var_name, obj, module_export):
    """Write back JS file preserving structure."""
    content = open(filename, encoding='utf-8').read()
    start = content.find(f'window.{var_name} =') + len(f'window.{var_name} =')
    before = content[:start]
    after_raw = content[start:].strip()
    idx = after_raw.find('if (typeof module')
    after_suffix = '\n' + after_raw[idx:] if idx != -1 else ''
    new_json = json.dumps(obj, ensure_ascii=False, indent=2)
    new_content = before + '\n' + new_json + '\n' + after_suffix
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(new_content)

# ── Load data ──────────────────────────────────────────────────────────────────
dev = load_var('bannanje_dev.js', 'BANNANJE_VERSE_MEANINGS_DEV')
kn  = load_var('bannanje_kn.js',  'BANNANJE_VERSE_MEANINGS')

# ── Replacement rules ──────────────────────────────────────────────────────────
# Order matters: longer/more specific phrases first.
# Each tuple: (pattern, replacement)
# Replacement can be a string or callable(match, verse_text) -> str

REPLACEMENTS = [
    # ── Garbled OCR / nonsense ────────────────────────────────────────────────
    (re.compile(r'Aeeeeeeuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu\s*'), ''),
    (re.compile(r'WANTED AND SHAPING POTTER WANTED\s*'), ''),
    (re.compile(r'OCR mis\s+reads\s+phantoms\s*'), ''),
    (re.compile(r'MAMAKARAVU\s*'), ''),
    (re.compile(r'mbhuvana yantanya\s*'), ''),
    (re.compile(r'Hurupanna galee\s*'), ''),
    (re.compile(r'bhrantianne\s*'), ''),
    (re.compile(r'Abyakt Adini Bhutani\s*'), 'अव्यक्तादीनि भूतानि '),
    (re.compile(r'in Kritanjali language\s*'), ''),
    (re.compile(r'base To Sanatana Dharma and also to just blissful salvation\s*'), ''),
    (re.compile(r'born Within Ganapati\s*'), ''),
    (re.compile(r'Rthga\s*'), ''),
    (re.compile(r"AIHC\s*"), ''),
    (re.compile(r'Schlo\s*[-–]?\s*\d*\s*'), ''),
    (re.compile(r"St\s*\n"), '\n'),
    (re.compile(r"'V'\s*"), ''),
    (re.compile(r"free'\s*"), ''),
    (re.compile(r"Don'ts\s*"), 'निषेधाः '),
    (re.compile(r"Do's\s*"), 'विधयः '),
    (re.compile(r"Dos\s*"), 'विधयः '),
    (re.compile(r"(?<!\w)ga\s+"), ''),
    (re.compile(r"(?<!\w)ta\s+"), ''),
    (re.compile(r"(?<!\w)Gi\s+"), ''),
    (re.compile(r"(?<!\w)Ch\s+\d+\b"), ''),
    (re.compile(r"(?<!\w)MB\s*"), ''),
    (re.compile(r"(?<!\w)PDF\s*"), ''),
    (re.compile(r"(?<!\w)BG\s+\d+\.\d+\b"), lambda m: m.group(0).replace('BG', 'गी')),
    (re.compile(r"(?<!\w)BG\s*"), ''),
    (re.compile(r"Gi\s*\d+\.\d+\b"), ''),
    (re.compile(r"Press the\s+"), ''),
    (re.compile(r"Its for\s*"), 'तदर्थम् '),
    (re.compile(r"rjuna\b"), 'अर्जुनः'),
    (re.compile(r"bhajan\b"), 'भजनम्'),
    (re.compile(r"kah\b\s*"), ''),
    (re.compile(r"per mile\s*"), ''),
    (re.compile(r"(?<!\w)Vowels\s*"), 'स्वराः '),
    (re.compile(r"Spanning\s*"), ''),
    (re.compile(r"(?<!\w)St\b\s*"), ''),
    (re.compile(r"lace\b"), ''),
    (re.compile(r"tamas\b"), 'तमः'),
    (re.compile(r"hominy\b"), ''),
    (re.compile(r"savoir\s*faire\s*"), 'कुशलता '),
    (re.compile(r"complement Binge food\s*"), ''),
    (re.compile(r"tamas and rajas food\s*"), 'तामस-राजस-भोजनम् '),
    (re.compile(r"life of luxurious iciri\s*"), 'विलासजीवनम् '),
    (re.compile(r"(?<!\w)situated in 'yoga'\b\s*"), 'योगे स्थितः '),
    (re.compile(r"great Skipping Moha\s*"), 'महामोहातिक्रमः '),
    (re.compile(r"Random profit happy\s*"), ''),
    (re.compile(r"More research on this\s*"), ''),
    (re.compile(r"am in the air\s*"), 'वायुरूपेण अस्मि '),
    (re.compile(r"Proceeding from there\s*"), ''),
    (re.compile(r"(?<!\w)haunts Eighth Chapter\s*"), ''),
    (re.compile(r"creation that is lila\s*"), 'लीलात्मकसृष्टिः '),
    (re.compile(r"looks like This is\s*"), ''),
    (re.compile(r"thinking will do\s*"), ''),
    (re.compile(r"is But Lord is\s*"), ''),
    (re.compile(r"will end Proceeding from there\s*"), 'समाप्यते '),
    (re.compile(r"full of So\s*"), ''),
    (re.compile(r"meaning So\s*"), ''),
    (re.compile(r"can know Omkara\s*"), 'ओङ्कारं ज्ञातुं शक्यते '),
    (re.compile(r"(?<!\w)if worth\s*"), ''),
    (re.compile(r"has put Ishte\s*"), ''),
    (re.compile(r"like who\s+"), 'यादृशः '),
    (re.compile(r"don't want Unconcerned about good and bad\s*"), 'शुभाशुभनिरपेक्षः '),

    # ── Common code-switch phrases → Sanskrit ─────────────────────────────────
    (re.compile(r"we are Every one of\s*"), 'वयं सर्वे '),
    (re.compile(r"should have done\s*"), 'कर्तव्यम् आसीत् '),
    (re.compile(r"should be celebrated\s*"), 'उत्सवार्हम् '),
    (re.compile(r"should be done\s*"), 'करणीयम् '),
    (re.compile(r"should leave desire\s*"), 'कामं त्यजेत् '),
    (re.compile(r"should do\s*"), 'करणीयम् '),
    (re.compile(r"should be\s*"), 'भवेत् '),
    (re.compile(r"don't understand\s*"), 'न अवगच्छामः '),
    (re.compile(r"don't know\s*"), 'न जानीमः '),
    (re.compile(r"don't keep\s*"), 'न धारयतु '),
    (re.compile(r"dont think\s*"), 'न चिन्तयतु '),
    (re.compile(r"don't say\s*"), 'न वदेत् '),
    (re.compile(r"doesn't mean\s*"), 'न अर्थः '),
    (re.compile(r"can't catch\s*"), 'ग्रहीतुं न शक्यते '),
    (re.compile(r"can't kill\s*"), 'हन्तुं न शक्नोति '),
    (re.compile(r"can't find\s*"), 'प्राप्तुं न शक्यते '),
    (re.compile(r"can't get\s*"), 'लब्धुं न शक्यते '),
    (re.compile(r"can't see\s*"), 'द्रष्टुं न शक्यते '),
    (re.compile(r"can't\s*"), 'न शक्यते '),
    (re.compile(r"can be seen\s*"), 'दृश्यते '),
    (re.compile(r"can be found\s*"), 'प्राप्यते '),
    (re.compile(r"can reach\s*"), 'प्राप्तुं शक्यते '),
    (re.compile(r"can rise\s*"), 'उत्थातुं शक्यते '),
    (re.compile(r"can live\s*"), 'जीवितुं शक्यते '),
    (re.compile(r"can give\s*"), 'दातुं शक्यते '),
    (re.compile(r"can put For example\s*"), 'उदाहरणतः स्थापयेत् '),
    (re.compile(r"can get\s*"), 'लब्धुं शक्यते '),
    (re.compile(r"can do\s*"), 'कर्तुं शक्यते '),
    (re.compile(r"(?<!\w)can\s*"), 'शक्यते '),
    (re.compile(r"won't happen\s*"), 'न भविष्यति '),
    (re.compile(r"will move\s*"), 'गमिष्यति '),
    (re.compile(r"will know\s*"), 'ज्ञास्यति '),
    (re.compile(r"will get\s*"), 'लप्स्यते '),
    (re.compile(r"will play\s*"), 'क्रीडिष्यति '),
    (re.compile(r"will burn\s*"), 'दहिष्यति '),
    (re.compile(r"will do\s*"), 'करिष्यति '),
    (re.compile(r"will spend\s*"), 'व्यतिनेष्यति '),
    (re.compile(r"will live\s*"), 'जीविष्यति '),
    (re.compile(r"will accept\s*"), 'स्वीकरिष्यति '),
    (re.compile(r"will heal\s*"), 'स्वस्थं भविष्यति '),
    (re.compile(r"will come back\s*"), 'पुनरागमिष्यति '),
    (re.compile(r"was building\s*"), 'निर्मिमाण आसीत् '),
    (re.compile(r"was doing\s*"), 'कुर्वन् आसीत् '),
    (re.compile(r"was living\s*"), 'जीवन् आसीत् '),
    (re.compile(r"was achieving\s*"), 'प्राप्नुवन् आसीत् '),
    (re.compile(r"had not done\s*"), 'न अकरोत् '),
    (re.compile(r"have to\s*"), 'अवश्यं कर्तव्यम् '),
    (re.compile(r"have seen\s*"), 'दृष्टवान् '),
    (re.compile(r"have called\s*"), 'उक्तवान् '),
    (re.compile(r"has given\s*"), 'दत्तवान् '),
    (re.compile(r"has called\s*"), 'उक्तवान् '),
    (re.compile(r"has used\s*"), 'प्रयुक्तवान् '),
    (re.compile(r"are living\s*"), 'जीवन्ति '),
    (re.compile(r"are standing\s*"), 'तिष्ठन्ति '),
    (re.compile(r"are forgetting\s*"), 'विस्मरन्ति '),
    (re.compile(r"are filled\s*"), 'पूरिताः सन्ति '),
    (re.compile(r"(?<!\w)are\s*"), 'सन्ति '),
    (re.compile(r"(?<!\w)we are\s*"), 'वयम् '),
    (re.compile(r"(?<!\w)we\s*"), 'वयम् '),
    (re.compile(r"(?<!\w)is aware\s*"), 'जानाति '),
    (re.compile(r"(?<!\w)is getting\s*"), 'प्राप्नोति '),
    (re.compile(r"(?<!\w)is doing\s*"), 'करोति '),
    (re.compile(r"(?<!\w)is looking\s*"), 'पश्यति '),
    (re.compile(r"(?<!\w)is describing\s*"), 'वर्णयति '),
    (re.compile(r"(?<!\w)is shaking\s*"), 'कम्पते '),
    (re.compile(r"(?<!\w)is brewing\s*"), 'उद्भवति '),
    (re.compile(r"(?<!\w)is beautiful\s*"), 'सुन्दरम् अस्ति '),
    (re.compile(r"(?<!\w)is aware\s*"), 'जानाति '),
    (re.compile(r"(?<!\w)is\s*"), 'अस्ति '),
    (re.compile(r"(?<!\w)do it\s*"), 'कुरुत '),
    (re.compile(r"(?<!\w)doing\s*"), 'कुर्वन् '),
    (re.compile(r"(?<!\w)done\s*"), 'कृतम् '),
    (re.compile(r"(?<!\w)does\s*"), 'करोति '),
    (re.compile(r"who do\s*"), 'ये कुर्वन्ति '),
    (re.compile(r"will do\s*"), 'करिष्यति '),
    (re.compile(r"(?<!\w)do\s*"), 'कुरुत '),
    (re.compile(r"(?<!\w)am\s*"), 'अस्मि '),
    (re.compile(r"(?<!\w)to know\s*"), 'ज्ञातुम् '),
    (re.compile(r"(?<!\w)to decide\s*"), 'निर्णेतुम् '),
    (re.compile(r"(?<!\w)to make\s*"), 'कर्तुम् '),
    (re.compile(r"(?<!\w)to do\s*"), 'कर्तुम् '),
    (re.compile(r"(?<!\w)to be\s*"), 'भवितुम् '),
    (re.compile(r"(?<!\w)to experience\s*"), 'अनुभवितुम् '),
    (re.compile(r"(?<!\w)to hate\s*"), 'द्वेष्टुम् '),
    (re.compile(r"(?<!\w)to be seen\s*"), 'दृश्यते '),
    (re.compile(r"(?<!\w)to their\s*"), 'तेषाम् '),
    (re.compile(r"takes care of\s*"), 'पालयति '),
    (re.compile(r"get involved\s*"), 'संलग्नः भवतु '),
    (re.compile(r"give rise to\s*"), 'जनयति '),
    (re.compile(r"looks like\s*"), 'इव दृश्यते '),
    (re.compile(r"settle down\s*"), 'स्थिरः भव '),
    (re.compile(r"sit down\s*"), 'उपविशतु '),
    (re.compile(r"shut up\s*"), ''),
    (re.compile(r"move on\s*"), 'अग्रे गच्छतु '),
    (re.compile(r"grow up\s*"), 'वर्धते '),
    (re.compile(r"stop it\s*"), 'तत् रोधयतु '),
    (re.compile(r"run(?:ning)? out\s*"), 'क्षीयते '),
    (re.compile(r"took place\s*"), 'अभवत् '),
    (re.compile(r"won't happen\s*"), 'न भविष्यति '),
    (re.compile(r"how much\s*"), 'कियत् '),
    (re.compile(r"how are you\s*"), 'कथमस्ति भवान् '),
    (re.compile(r"in between\s*"), 'मध्ये '),

    # ── Single concept words ──────────────────────────────────────────────────
    (re.compile(r"\bmanages\b"), 'निर्वहति'),
    (re.compile(r"\bpsychology\b"), 'मनोविज्ञानम्'),
    (re.compile(r"\bproximity\b"), 'सान्निध्यम्'),
    (re.compile(r"\bflirting\b"), 'विलासः'),
    (re.compile(r"\bomen\b"), 'शकुनम्'),
    (re.compile(r"\bcalled\b"), 'उच्यते'),
    (re.compile(r"\bended\b"), 'समाप्तम्'),
    (re.compile(r"\bmagic\b"), 'माया'),
    (re.compile(r"\bused\b"), 'प्रयुक्तम्'),
    (re.compile(r"\bstarts\b"), 'आरम्भः'),
    (re.compile(r"\bpreaching\b"), 'उपदेशः'),
    (re.compile(r"\bproblem\b"), 'समस्या'),
    (re.compile(r"\bforever\b"), 'शाश्वतम्'),
    (re.compile(r"\breligion\b"), 'धर्मः'),
    (re.compile(r"\bpractice\b"), 'अभ्यासः'),
    (re.compile(r"\bfascination\b"), 'मोहः'),
    (re.compile(r"\bwasted\b"), 'व्यर्थः'),
    (re.compile(r"\bsubject\b"), 'विषयः'),
    (re.compile(r"\barrester\b"), 'निरोधकः'),
    (re.compile(r"\bwheel\b"), 'चक्रम्'),
    (re.compile(r"\blife\b"), 'जीवनम्'),
    (re.compile(r"\bfact\b"), 'वास्तवम्'),
    (re.compile(r"\bresponsibility\b"), 'दायित्वम्'),
    (re.compile(r"\bcomplement\b"), 'पूरकम्'),
    (re.compile(r"\bquestion\b"), 'प्रश्नः'),
    (re.compile(r"\bhometown\b"), 'स्वग्रामः'),
    (re.compile(r"\bhermit\b"), 'संन्यासी'),
    (re.compile(r"\bsettled\b"), 'स्थिरः'),
    (re.compile(r"\bintertwined\b"), 'परस्पराश्रितम्'),
    (re.compile(r"\bformed\b"), 'निर्मितम्'),
    (re.compile(r"\bsuitable\b"), 'उचितम्'),
    (re.compile(r"\bnature\b"), 'प्रकृतिः'),
    (re.compile(r"\bspeech\b"), 'वाक्'),
    (re.compile(r"\bsecret\b"), 'रहस्यम्'),
    (re.compile(r"\bworship\b"), 'पूजनम्'),
    (re.compile(r"\bsupport\b"), 'आश्रयः'),
    (re.compile(r"\bsays\b"), 'वदति'),
    (re.compile(r"\bcauses\b"), 'कारणम्'),
    (re.compile(r"\bdiscussion\b"), 'विवेचनम्'),
    (re.compile(r"\brhyme\b"), 'छन्दः'),
    (re.compile(r"\brefuge\b"), 'शरणम्'),
    (re.compile(r"\bcontroller\b"), 'नियन्ता'),
    (re.compile(r"\bbegging\b"), 'याचना'),
    (re.compile(r"\bsurplus\b"), 'आधिक्यम्'),
    (re.compile(r"\bpossible\b"), 'सम्भवम्'),
    (re.compile(r"\bpossibly\b"), 'सम्भवतः'),
    (re.compile(r"\bconfused\b"), 'भ्रान्तः'),
    (re.compile(r"\bessence\b"), 'सारम्'),
    (re.compile(r"\bworshiper\b"), 'भक्तः'),
    (re.compile(r"\bmobile\b"), 'चरम्'),
    (re.compile(r"\bstupid\b"), 'मूढः'),
    (re.compile(r"\bbrilliance\b"), 'तेजः'),
    (re.compile(r"\bknowable\b"), 'ज्ञेयम्'),
    (re.compile(r"\bimportant\b"), 'महत्त्वपूर्णम्'),
    (re.compile(r"\bdeformity\b"), 'विकृतिः'),
    (re.compile(r"\bmasculine\b"), 'पुरुषोचितम्'),
    (re.compile(r"\billuminates\b"), 'प्रकाशयति'),
    (re.compile(r"\battachment\b"), 'आसक्तिः'),
    (re.compile(r"\bchildren\b"), 'पुत्राः'),
    (re.compile(r"\blearned\b"), 'ज्ञातम्'),
    (re.compile(r"\bdangerous\b"), 'घातकम्'),
    (re.compile(r"\bdeadly\b"), 'घातकम्'),
    (re.compile(r"\bbad\b"), 'अशुभम्'),
    (re.compile(r"\bbond\b"), 'बन्धनम्'),
    (re.compile(r"\banger\b"), 'क्रोधः'),
    (re.compile(r"\batrocious\b"), 'क्रूरम्'),
    (re.compile(r"\bfood\b"), 'आहारः'),
    (re.compile(r"\bmemory\b"), 'स्मृतिः'),
    (re.compile(r"\bfeeling\b"), 'भावना'),
    (re.compile(r"\bdestiny\b"), 'भाग्यम्'),
    (re.compile(r"\berror\b"), 'दोषः'),
    (re.compile(r"\binterest\b"), 'रुचिः'),
    (re.compile(r"\bneed\b"), 'आवश्यकता'),
    (re.compile(r"\bseems\b"), 'प्रतीयते'),
    (re.compile(r"\bsymptom\b"), 'लक्षणम्'),
    (re.compile(r"\brelief\b"), 'विश्रान्तिः'),
    (re.compile(r"\bsaid\b"), 'उक्तम्'),
    (re.compile(r"\bsaying\b"), 'वदति'),
    (re.compile(r"\brepresents\b"), 'सूचयति'),
    (re.compile(r"\bsubordinate\b"), 'अधीनः'),
    (re.compile(r"\baccepts\b"), 'स्वीकरोति'),
    (re.compile(r"\baccept\b"), 'स्वीकुरु'),
    (re.compile(r"\bdedicate\b"), 'समर्पयतु'),
    (re.compile(r"\bjoins\b"), 'मिलति'),
    (re.compile(r"\bjoin\b"), 'मिलतु'),
    (re.compile(r"\bcarries\b"), 'वहति'),
    (re.compile(r"\bgives\b"), 'ददाति'),
    (re.compile(r"\bgive\b"), 'दद्यात्'),
    (re.compile(r"\bleaves\b"), 'त्यजति'),
    (re.compile(r"\breaks\b"), 'प्राप्नोति'),
    (re.compile(r"\bearns\b"), 'लभते'),
    (re.compile(r"\bsits\b"), 'उपविशति'),
    (re.compile(r"\bcomes\b"), 'आगच्छति'),
    (re.compile(r"\bgets\b"), 'प्राप्नोति'),
    (re.compile(r"\bmakes\b"), 'करोति'),
    (re.compile(r"\blooks\b"), 'पश्यति'),
    (re.compile(r"\bloses\b"), 'नश्यति'),
    (re.compile(r"\btravels\b"), 'गच्छति'),
    (re.compile(r"\breaches\b"), 'प्राप्नोति'),
    (re.compile(r"\bconstruction\b"), 'निर्माणम्'),
    (re.compile(r"\bwant\b"), 'इच्छति'),
    (re.compile(r"\bmust\b"), 'अवश्यम्'),
    (re.compile(r"\bonly\b"), 'केवलम्'),
    (re.compile(r"\btime\b"), 'समयः'),
    (re.compile(r"\bface\b"), 'सम्मुखम्'),
    (re.compile(r"\bgoes\b"), 'गच्छति'),
    (re.compile(r"\bsee\b"), 'पश्यतु'),
    (re.compile(r"\bSee\b"), 'पश्यतु'),
    (re.compile(r"\bknow\b"), 'जानातु'),
    (re.compile(r"\blive\b"), 'जीवतु'),
    (re.compile(r"\bleft\b"), 'शेषम्'),
    (re.compile(r"\bfeel\b"), 'अनुभवतु'),
    (re.compile(r"\bsex\b"), 'कामः'),
    (re.compile(r"\brearing\b"), 'पोषणम्'),
    (re.compile(r"\bvirtual celibacy\b"), 'मानसब्रह्मचर्यम्'),
    (re.compile(r"\bthe staircase\b"), 'सोपानम्'),
    (re.compile(r"\bthe grass\b"), 'तृणम्'),
    (re.compile(r"\bthe world\b"), 'जगत्'),
    (re.compile(r"\bthe mother\b"), 'माता'),
    (re.compile(r"\bthe nature\b"), 'प्रकृतिः'),
    (re.compile(r"\bthe man\b"), 'मनुष्यः'),
    (re.compile(r"\bthe truth\b"), 'सत्यम्'),
    (re.compile(r"\bthe word\b"), 'शब्दः'),
    (re.compile(r"\bthe veil\b"), 'आवरणम्'),
    (re.compile(r"\bthe eyes\b"), 'नेत्राणि'),
    (re.compile(r"\bthe army\b"), 'सेना'),
    (re.compile(r"\bthe gang\b"), 'समूहः'),
    (re.compile(r"\bthe horror\b"), 'भयम्'),
    (re.compile(r"\bthe supernatural\b"), 'अलौकिकम्'),
    (re.compile(r"\bthe moon\b"), 'चन्द्रः'),
    (re.compile(r"\bthe faces\b"), 'मुखानि'),
    (re.compile(r"\bthe victim\b"), 'पीडितः'),
    (re.compile(r"\bthe way\b"), 'मार्गः'),
    (re.compile(r"\bthan there function\b"), ''),
    (re.compile(r"\bfull cloud\b"), 'मेघम्'),
    (re.compile(r"\bfull of Shining in the eyes\b"), 'नेत्रदीप्तिः'),
    (re.compile(r"\bfull of\b"), 'पूर्णः'),
    (re.compile(r"\bno happiness\b"), 'सुखं नास्ति'),
    (re.compile(r"\ban illusion\b"), 'मायाजालम्'),
    (re.compile(r"\bgreat happiness\b"), 'महानन्दः'),
    (re.compile(r"\bbody man\b"), 'देहधारी'),
    (re.compile(r"\brelated to\b"), 'सम्बद्धम्'),
    (re.compile(r"\bgoing on\b"), 'चलति'),
    (re.compile(r"\bnon attachment\b"), 'अनासक्तिः'),
    (re.compile(r"\bof death\b"), 'मृत्योः'),
    (re.compile(r"\bfor something petty\b"), 'तुच्छार्थम्'),
    (re.compile(r"\bgreat sage\b"), 'महर्षिः'),
    (re.compile(r"\bgood and bad\b"), 'शुभाशुभम्'),
    (re.compile(r"\byou are my favorite\b"), 'त्वं मम प्रियः'),
    (re.compile(r"\bclosing Krishna says\b"), 'अन्ते कृष्णः वदति'),
    (re.compile(r"\bdeal with\b"), 'व्यवहरतु'),
    (re.compile(r"\bpeople\b"), 'जनाः'),
    (re.compile(r"\bshock\b"), 'आघातः'),
    (re.compile(r"\bpart\b"), 'भागः'),
    (re.compile(r"\bname\b"), 'नाम'),
    (re.compile(r"\bmatch\b"), 'सदृशम्'),
    (re.compile(r"\btend to\b"), 'प्रवृत्ताः सन्ति'),
    (re.compile(r"\bmay be\b"), 'भवेत्'),
    (re.compile(r"\babusers\b"), 'निन्दकाः'),
    (re.compile(r"\bwork\b"), 'कर्म'),
    (re.compile(r"\bown\b"), 'स्वकीयम्'),
    (re.compile(r"\bthat\b"), 'तत्'),
    (re.compile(r"\bwhat\b"), 'किम्'),
    (re.compile(r"\bwho\b"), 'यः'),
    (re.compile(r"\bYou\b"), 'भवान्'),
    (re.compile(r"\bAbout\b"), 'विषये'),
    (re.compile(r"\babout\b"), 'विषये'),
    (re.compile(r"\bAgain\b"), 'पुनः'),
    (re.compile(r"\band\b"), 'च'),
    (re.compile(r"\bof\b\s+"), ''),
    (re.compile(r"\bour\b"), 'अस्माकम्'),
    (re.compile(r"\bMy\b"), 'मम'),
    (re.compile(r"\bThis is\b"), 'एतत् अस्ति'),
    (re.compile(r"\bThis\b"), 'एतत्'),
    (re.compile(r"\bthrough\b"), 'माध्यमेन'),
    (re.compile(r"\bas element\b"), 'तत्त्वरूपेण'),
    (re.compile(r"\bgo\b\s+"), ''),

    # ── Residual simple words ──────────────────────────────────────────────────
    (re.compile(r"\b(?:the|a|an)\b\s*"), ''),
    (re.compile(r"\b(?:to|of|in|at|by|on|as|or)\b\s*"), ''),
    (re.compile(r"\b(?:did|had)\b\s*"), ''),
    (re.compile(r"\b(?:not)\b\s*"), 'न '),
    (re.compile(r"\b(?:for|from)\b\s*"), ''),
    (re.compile(r"\b(?:like)\b\s*"), 'इव '),
    (re.compile(r"\b(?:which one|which is)\b\s*"), 'यत् '),
    (re.compile(r"\b(?:how)\b\s*"), 'कथम् '),
    (re.compile(r"\b(?:some)\b\s*"), 'किञ्चित् '),
    (re.compile(r"\bwho am\b\s*"), 'अहं कः '),
    (re.compile(r"\bdid you\b\s*"), 'किं त्वम् '),
    (re.compile(r"\bdid\b\s*"), ''),
    (re.compile(r"\b(?:had)\b\s*"), ''),

    # ── Cleanup double spaces and stray punctuation ───────────────────────────
    (re.compile(r'[ \t]{2,}'), ' '),
    (re.compile(r'\n{3,}'), '\n\n'),
    (re.compile(r' \n'), '\n'),
    (re.compile(r'\n '), '\n'),
]


def fix_verse(text):
    """Apply all replacement rules to a verse text."""
    for pattern, replacement in REPLACEMENTS:
        if callable(replacement):
            text = pattern.sub(replacement, text)
        else:
            text = pattern.sub(replacement, text)
    return text.strip()


# ── Apply fixes ───────────────────────────────────────────────────────────────
ENGLISH = re.compile(r'[a-zA-Z]{2,}')
fixed_count = 0
still_contaminated = []
fixed_dev = dict(dev)  # copy

for key in dev:
    original = dev[key]
    if not ENGLISH.search(original):
        continue  # clean, skip

    fixed = fix_verse(original)
    fixed_dev[key] = fixed
    fixed_count += 1

    # Check if still has English
    remaining = ENGLISH.findall(fixed)
    if remaining:
        still_contaminated.append((key, remaining, fixed))

print(f"Fixed {fixed_count} verses")
print(f"Still contaminated after fix: {len(still_contaminated)}")
if still_contaminated:
    print("\nRemaining English words:")
    for k, words, text in still_contaminated[:20]:
        print(f"  {k}: {list(set(words))[:8]}")

# ── Sa