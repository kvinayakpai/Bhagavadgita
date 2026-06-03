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
    print("\nVerifying viewer.html <-> index.html mirror...")
    viewer_path = os.path.join(ROOT, 'viewer.html')
    index_path = os.path.join(ROOT, 'index.html')
    if not os.path.exists(viewer_path) or not os.path.exists(index_path):
        print("[Error] viewer.html or index.html missing")
        return False
    
    with open(viewer_path, 'rb') as f:
        v_bytes = f.read()
    with open(index_path, 'rb') as f:
        i_bytes = f.read()
        
    if v_bytes == i_bytes:
        print("✅ viewer.html and index.html are byte-identical.")
        return True
    else:
        print(f"❌ viewer.html and index.html are NOT byte-identical! ({len(v_bytes)} vs {len(i_bytes)} bytes)")
        return False

def verify_bundle():
    print("\nVerifying viewer-bundled.html bundle integrity...")
    bundle_path = os.path.join(ROOT, 'viewer-bundled.html')
    if not os.path.exists(bundle_path):
        print("[Error] viewer-bundled.html missing")
        return False
        
    with open(bundle_path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    errors = []
    # 1. Ends with </html>
    if not content.strip().endswith('</html>'):
        errors.append("viewer-bundled.html does not end with </html> (truncated)")
        
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
        
    print(f"✅ viewer-bundled.html is completely unified ({len(content)} bytes) and all scripts successfully inlined!")
    return True

def main():
    print("Bhagavad Gita local verification audit\n")
    
    # Check all four private files exist and load successfully
    files_ok = True
    for suffix, var in [('kn', 'BANNANJE_VERSE_MEANINGS'),
                         ('en', 'BANNANJE_VERSE_MEANINGS_EN'),
                         ('hi', 'BANNANJE_VERSE_MEANINGS_HI'),
                         ('dev', 'BANNANJE_VERSE_MEANINGS_DEV')]:
        filename = f'bannanje_{suffix}.js'
        if check_file_exists(filename):
            data = parse_js_var(filename, var)
            if data is None or len(data) != 702:
                print(f"[Error] Variable '{var}' in '{filename}' has invalid length (got {len(data) if data else 0}, expected 702)")
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
