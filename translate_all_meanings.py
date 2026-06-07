import os
import sys
import json
import time
import urllib.request
import urllib.parse
import concurrent.futures

# Set stdout to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.abspath(__file__))
INPUT_FILE = os.path.join(ROOT, '_extracted', 'clean_verses_700.json')

def load_verses():
    print(f"Reading {INPUT_FILE}...")
    with open(INPUT_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)

def split_text_into_chunks(text, max_len=300):
    lines = text.split('\n')
    chunks = []
    current_chunk = []
    current_len = 0
    for line in lines:
        if not line.strip():
            if current_chunk:
                chunks.append("\n".join(current_chunk))
                current_chunk = []
                current_len = 0
            chunks.append("")
            continue
            
        if len(line) > max_len:
            if current_chunk:
                chunks.append("\n".join(current_chunk))
                current_chunk = []
                current_len = 0
            words = line.split(' ')
            sub_chunk = []
            sub_len = 0
            for word in words:
                if sub_len + len(word) + 1 > max_len:
                    if sub_chunk:
                        chunks.append(" ".join(sub_chunk))
                        sub_chunk = []
                        sub_len = 0
                sub_chunk.append(word)
                sub_len += len(word) + 1
            if sub_chunk:
                chunks.append(" ".join(sub_chunk))
        else:
            if current_len + len(line) + 1 > max_len:
                chunks.append("\n".join(current_chunk))
                current_chunk = []
                current_len = 0
            current_chunk.append(line)
            current_len += len(line) + 1
            
    if current_chunk:
        chunks.append("\n".join(current_chunk))
    return chunks

def translate_chunk_api(text, target_lang):
    if not text or not text.strip():
        return text
    
    url = f"https://translate.googleapis.com/translate_a/single?client=gtx&sl=kn&tl={target_lang}&dt=t&q={urllib.parse.quote(text)}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    
    for attempt in range(4):
        try:
            with urllib.request.urlopen(req, timeout=15) as res:
                data = json.loads(res.read().decode('utf-8'))
                chunks = []
                if data and data[0]:
                    for chunk in data[0]:
                        if chunk and chunk[0]:
                            chunks.append(chunk[0])
                return "".join(chunks)
        except Exception as e:
            if attempt == 3:
                print(f"\n[Warning] Failed to translate chunk after 4 attempts (lang={target_lang}): {e}")
                return text  # Fallback
            time.sleep(0.5 * (attempt + 1))
    return text

def translate_full_text(text, target_lang):
    if not text or not text.strip():
        return text
    chunks = split_text_into_chunks(text, max_len=300)
    translated_chunks = []
    for chunk in chunks:
        if not chunk.strip():
            translated_chunks.append(chunk)
        else:
            translated_chunks.append(translate_chunk_api(chunk, target_lang))
    return "\n".join(translated_chunks)

def translate_verses(verses, target_lang):
    print(f"\nTranslating 702 meanings to '{target_lang}' in parallel (chunked)...")
    results = {}
    completed = 0
    total = len(verses)
    
    def worker(v):
        nonlocal completed
        key = f"{v['chapter']}.{v['verse']}"
        meaning_kn = v.get('meaning', '')
        if not meaning_kn:
            return key, ""
        
        translated = translate_full_text(meaning_kn, target_lang)
        completed += 1
        if completed % 50 == 0 or completed == total:
            print(f"Progress ({target_lang}): {completed}/{total} completed...", end="\r", flush=True)
        return key, translated

    # Use ThreadPoolExecutor to translate in parallel (limit max_workers to 15 to avoid rate limits)
    with concurrent.futures.ThreadPoolExecutor(max_workers=15) as executor:
        futures = {executor.submit(worker, v): v for v in verses}
        for future in concurrent.futures.as_completed(futures):
            key, trans = future.result()
            results[key] = trans
            
    print(f"\nTranslation to '{target_lang}' completed successfully.")
    return results

def main():
    verses = load_verses()
    
    # 1. Kannada Meanings (No translation needed, extract direct)
    print("\nExtracting Kannada meanings...")
    kn_meanings = {}
    for v in verses:
        key = f"{v['chapter']}.{v['verse']}"
        kn_meanings[key] = v.get('meaning', '')
    
    # 2. Translate in parallel
    en_meanings = translate_verses(verses, 'en')
    hi_meanings = translate_verses(verses, 'hi')
    dev_meanings = translate_verses(verses, 'sa') # Sanskrit/Devanagari
    
    # 3. Write JS files
    lang_mappings = [
        ('kn', kn_meanings, 'BANNANJE_VERSE_MEANINGS'),
        ('en', en_meanings, 'BANNANJE_VERSE_MEANINGS_EN'),
        ('hi', hi_meanings, 'BANNANJE_VERSE_MEANINGS_HI'),
        ('dev', dev_meanings, 'BANNANJE_VERSE_MEANINGS_DEV')
    ]
    
    for suffix, data, var_name in lang_mappings:
        out_file = os.path.join(ROOT, f'bannanje_{suffix}.js')
        print(f"Writing {out_file}...")
        meanings_json = json.dumps(data, indent=2, ensure_ascii=False)
        content = f"window.{var_name} = {meanings_json};\n\n"
        content += f"if (typeof module !== 'undefined') {{\n  module.exports = {{ {var_name} }};\n}}\n"
        with open(out_file, 'w', encoding='utf-8') as f:
            f.write(content)
            
    print("\nAll translation files generated successfully!")

if __name__ == '__main__':
    main()
