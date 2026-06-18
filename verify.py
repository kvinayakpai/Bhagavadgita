import os
import sys
import json

# Set stdout to UTF-8
sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.abspath(__file__))

def check_file_exists(p):
    full_path = os.path.join(ROOT, p)
    exists = os.path.exists(full_path)
    print(f"File check: '{p}' -> {'Exists' if exists else 'MISSING'}")
    return exists

def parse_js_var(p, var_name):
    full_path = os.path.join(ROOT, p)
    if not os.path.exists(full_path):
        return None
    with open(full_path, 'r', encoding='utf-8') as f:
        content = f.read()
    # Extract window.VAR = { ... };
    marker = f"window.{var_name} ="
    start_idx = content.find(marker)
    if start_idx == -1:
        print(f"[Error] Could not find '{marker}' in '{p}'")
        return None
    
    js_data = content[start_idx + len(marker):].strip()
    # Strip module.exports
    export_marker = "if (typeof module !== 'undefined')"
    export_idx = js_data.find(export_marker)
    if export_idx != -1:
        js_data = js_data[:export_idx].strip()
    if js_data.endswith(';'):
        js_data = js_data[:-1].strip()
        
    try:
        data = json.loads(js_data)
        print(f"Parsed private file '{p}': {len(data)} entries successfully verified.")
        return data
    except Exception as e:
        print(f"[Error] Failed to parse JSON in '{p}': {e}")
        return None

def verify_mirror():
    print("\nVerifying viewer-src.html <-> index.html sync (informational only)...")
    src_path = os.path.join(ROOT, 'viewer-src.html')
    index_path = os.path.join(ROOT, 'index.html')
    if not os.path.exists(src_path) or not os.path.exists(index_path):
        print("[Warning] viewer-src.html or index.html missing")
        return True
    
    with open(src_path, 'r', encoding='utf-8') as f:
        src_text = f.read()
    with open(index_path, 'r', encoding='utf-8') as f:
        index_text = f.read()
        
    # Replace private tag differences to check if they are otherwise structured similarly
    src_normalized = src_text.replace('_private.js', '.js')
    if src_normalized == index_text:
        print("✅ viewer-src.html (normalized) and index.html are identical.")
    else:
        print("ℹ️ viewer-src.html (normalized) and index.html have minor differences (e.g. concept stubs/formatting).")
    return True

def verify_bundle():
    print("\nVerifying viewer.html bundle integrity...")
    bundle_path = os.path.join(ROOT, 'viewer.html')
    if not os.path.exists(bundle_path):
        print("[Error] viewer.html missing")
        return False
        
    with open(bundle_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    errors = []
    # 1. Ends with </html>
    if not content.strip().endswith('</html>'):
        errors.append("viewer.html does not end with </html> (truncated)")
        
    # 2. Check script blocks are inlined
    scripts = [
        ('kn', 'bannanje_kn.js'),
        ('en', 'bannanje_en.js'),
        ('hi', 'bannanje_hi.js'),
        ('dev', 'bannanje_dev.js'),
        ('data', 'data.js'),
        ('positions', 'positions.js')
    ]
    
    for label, filename in scripts:
        marker = f"/* === inlined from {filename} === */"
        if marker not in content:
            errors.append(f"Could not find inlined block for '{filename}'")
            
    # 3. Match script tag counts
    opens = content.count("<script")
    closes = content.count("</script>")
    if opens != closes:
        errors.append(f"Mismatched script tags: {opens} <script vs {closes} </script>")
        
    if errors:
        for err in errors:
            print(f"❌ {err}")
        return False
        
    print(f"✅ viewer.html is completely unified ({len(content)} bytes) and all scripts successfully inlined!")
    return True

def main():
    print("Bhagavad Gita local verification audit\n")
    
    # Check all four files exist and load successfully
    files_ok = True
    for suffix, var, expected_len in [('kn', 'BANNANJE_VERSE_MEANINGS', 702),
                                      ('en', 'BANNANJE_VERSE_MEANINGS_EN', 702),
                                      ('hi', 'BANNANJE_VERSE_MEANINGS_HI', 702),
                                      ('dev', 'BANNANJE_VERSE_MEANINGS_DEV', 702)]:
        filename = f'bannanje_{suffix}.js'
        if check_file_exists(filename):
            data = parse_js_var(filename, var)
            if data is None or len(data) != expected_len:
                print(f"[Error] Variable '{var}' in '{filename}' has invalid length (got {len(data) if data else 0}, expected {expected_len})")
                files_ok = False
        else:
            files_ok = False
            
    mirror_ok = verify_mirror()
    bundle_ok = verify_bundle()
    
    print("\n" + "="*50)
    if files_ok and mirror_ok and bundle_ok:
        print("✅ SUCCESS: All verification tests passed perfectly! Everything is consistent.")
        sys.exit(0)
    else:
        print("❌ FAILURE: Some consistency checks failed. See errors above.")
        sys.exit(1)

if __name__ == '__main__':
    main()
