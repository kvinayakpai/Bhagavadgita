import os

def patch_file(filename):
    print(f"Patching {filename}...")
    if not os.path.exists(filename):
        print(f"Error: {filename} not found.")
        return
        
    with open(filename, "r", encoding="utf-8") as f:
        content = f.read()
        
    target = """    // Language-aware meaning/commentary under the shloka directly
    let meaning = '';
    if (state.lang === 'kn') {
      meaning = (typeof BANNANJE_VERSE_MEANINGS !== 'undefined' && BANNANJE_VERSE_MEANINGS[key]) || '';
    } else if (state.lang === 'en') {
      meaning = (typeof BANNANJE_VERSE_MEANINGS_EN !== 'undefined' && BANNANJE_VERSE_MEANINGS_EN[key]) || '';
    } else if (state.lang === 'hi') {
      meaning = (typeof BANNANJE_VERSE_MEANINGS_HI !== 'undefined' && BANNANJE_VERSE_MEANINGS_HI[key]) || '';
    } else if (state.lang === 'dev') {
      meaning = (typeof BANNANJE_VERSE_MEANINGS_DEV !== 'undefined' && BANNANJE_VERSE_MEANINGS_DEV[key]) || '';
    }"""

    replacement = """    // Language-aware meaning/commentary under the shloka directly
    let meaning = '';
    if (state.lang === 'kn' && typeof BANNANJE_VERSE_MEANINGS !== 'undefined' && BANNANJE_VERSE_MEANINGS !== null) {
      meaning = BANNANJE_VERSE_MEANINGS[key] || '';
    } else if (state.lang === 'en' && typeof BANNANJE_VERSE_MEANINGS_EN !== 'undefined' && BANNANJE_VERSE_MEANINGS_EN !== null) {
      meaning = BANNANJE_VERSE_MEANINGS_EN[key] || '';
    } else if (state.lang === 'hi' && typeof BANNANJE_VERSE_MEANINGS_HI !== 'undefined' && BANNANJE_VERSE_MEANINGS_HI !== null) {
      meaning = BANNANJE_VERSE_MEANINGS_HI[key] || '';
    } else if (state.lang === 'dev' && typeof BANNANJE_VERSE_MEANINGS_DEV !== 'undefined' && BANNANJE_VERSE_MEANINGS_DEV !== null) {
      meaning = BANNANJE_VERSE_MEANINGS_DEV[key] || '';
    }"""

    if target in content:
        content = content.replace(target, replacement)
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Successfully patched {filename}!")
    else:
        print(f"Could not find target block in {filename} (it may already be patched or have a different format).")

if __name__ == "__main__":
    patch_file("viewer.html")
    patch_file("index.html")
