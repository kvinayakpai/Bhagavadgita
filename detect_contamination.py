"""
Final precision contamination detector v3.
Key insight: न्ने in अन्ने is valid Sanskrit (food). 
The contamination pattern is: मम न्ने « or similar with « guillemet quotes 
which come from the Kannada commentary source (used as emphasis markers).

We detect:
1. Raw Kannada Unicode characters (ಕ-ೞ)  
2. Guillemet quotes « » (used only in the Kannada source text)
3. Specific Kannada-only words in Devanagari (with context to avoid false positives)
"""
import sys, json, re
sys.stdout.reconfigure(encoding='utf-8')

def load_var(filename, var_name):
    content = open(filename, encoding='utf-8').read()
    start = content.find(f'window.{var_name} =') + len(f'window.{var_name} =')
    rest = content[start:].strip()
    export_marker = 'if (typeof module'
    export_idx = rest.find(export_marker)
    if export_idx != -1:
        rest = rest[:export_idx].strip()
    if rest.endswith(';'):
        rest = rest[:-1]
    return json.loads(rest)

dev = load_var('bannanje_dev.js', 'BANNANJE_VERSE_MEANINGS_DEV')
kn  = load_var('bannanje_kn.js',  'BANNANJE_VERSE_MEANINGS')

# ── Precise patterns ──────────────────────────────────────────────────────────
PATTERNS = [
    # 1. Raw Kannada Unicode (U+0C80–U+0CFF)
    (re.compile(r'[\u0C80-\u0CFF]'), 'Raw Kannada Unicode characters'),
    # 2. Guillemet quotes (« ») — only exist in the Kannada source, never in Sanskrit
    (re.compile(r'[«»]'), 'Guillemet quote « or » (Kannada source artifact)'),
    # 3. Unambiguous Kannada-only words
    (re.compile(r'\bमत्तु\b'), 'mattu - "and" in Kannada (not Sanskrit)'),
    (re.compile(r'\bअवनु\b'), 'avanu - "he" in Kannada pronoun'),
    (re.compile(r'\bइल्ल\b'), 'illa - "not/no" in Kannada'),
    (re.compile(r'\bअल्ल\b'), 'alla - "not" in Kannada'),
    (re.compile(r'\bनोडु\b'), 'nooDu - "to see" in Kannada verb'),
    (re.compile(r'\bमाडु\b'), 'maadu - "to do" in Kannada verb'),
    (re.compile(r'\bहोगु\b'), 'hogu - "to go" in Kannada verb'),
    (re.compile(r'\bबेकु\b'), 'beku - "want/need" in Kannada'),
    (re.compile(r'\bनल्ल\b'), 'nalla - "good" in Kannada'),
    (re.compile(r'\bनम्म\b'), 'namma - "our" in Kannada'),
    (re.compile(r'\bऎंदु\b'), 'endu - Kannada'),
    (re.compile(r'\bहागे\b'), 'haage - Kannada'),
    (re.compile(r'\bआदरे\b'), 'aadare - "but" in Kannada'),
    # 4. मातु only when NOT part of मातुल (maternal uncle) compound
    (re.compile(r'\bमातु\b(?![ःलरण])'), 'maatu - "word/talk" in Kannada (not Sanskrit mātuh)'),
    # 5. नन्न as "nanna" (my - Kannada) but NOT part of nanna-varam etc.
    (re.compile(r'\bनन्न[ा\s]'), 'nanna - "my" in Kannada'),
]

# ── Scan ──────────────────────────────────────────────────────────────────────
sorted_keys = sorted(dev.keys(), key=lambda x: (int(x.split('.')[0]), int(x.split('.')[1])))
contaminated = {}
contaminated_detail = {}

for k in sorted_keys:
    text = dev.get(k, '')
    if not text:
        continue
    
    triggers = []
    details = []
    for (pat, desc) in PATTERNS:
        matches = list(pat.finditer(text))
        if matches:
            triggers.append(desc)
            for m in matches[:2]:  # show up to 2 examples
                s = max(0, m.start()-40)
                e = min(len(text), m.end()+40)
                details.append((desc, text[s:e]))
    
    if triggers:
        contaminated[k] = triggers
        contaminated_detail[k] = details

# ── Report ────────────────────────────────────────────────────────────────────
print(f"Total DEV entries: {len(dev)}")
print(f"Confirmed contaminated: {len(contaminated)}")
print()

chapters = {}
for k in contaminated:
    ch = k.split('.')[0]
    chapters.setdefault(ch, []).append(k)

print(f"{'Ch':>4} | {'Count':>5} | Shlokas")
print("-" * 70)
for ch in sorted(chapters.keys(), key=int):
    keys = sorted(chapters[ch], key=lambda x: int(x.split('.')[1]))
    shloka_list = ', '.join([k.split('.')[1] for k in keys])
    print(f"  {ch:>2}  | {len(keys):>5} | {shloka_list}")

print(f"\nTotal: {len(contaminated)} entries across {len(chapters)} chapters")

# Save contaminated key list
with open('contaminated_keys.json', 'w', encoding='utf-8') as f:
    json.dump(sorted(contaminated.keys(), 
                     key=lambda x: (int(x.split('.')[0]), int(x.split('.')[1]))), 
              f, ensure_ascii=False, indent=2)

print(f"\nSaved to contaminated_keys.json")

# ── Full detail dump ──────────────────────────────────────────────────────────
print("\n\n=== FULL CONTAMINATION DETAIL ===")
for k in sorted(contaminated.keys(), key=lambda x: (int(x.split('.')[0]), int(x.split('.')[1]))):
    print(f"\nShloka {k}:")
    for (desc, ctx) in contaminated_detail[k]:
        print(f"  ⚠ {desc}")
        print(f"    → ...{ctx}...")
