"""build-bundle.py — produce viewer-bundled.html: a single self-contained HTML
that opens cleanly from file:// (incl. on phones) with zero external file
dependencies. Inlines data.js and positions.js into the viewer in place of
the <script src="..."> tags.

Run:        python3 build-bundle.py

Out:        viewer-bundled.html
"""
import io, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))

def read(p):
    with open(os.path.join(ROOT,p), 'r', encoding='utf-8') as f:
        return f.read()

viewer = read('viewer.html')
data_js = read('data.js')
positions_js = read('positions.js')

# Strip CJS module.exports tails so the bundled scripts don't reference `module`
# in the browser (harmless, but clean).
def strip_cjs_export(s):
    marker = "if (typeof module !== 'undefined')"
    i = s.rfind(marker)
    return s[:i].rstrip() + '\n' if i != -1 else s

data_inline = strip_cjs_export(data_js)
positions_inline = strip_cjs_export(positions_js)

# Replace the two external <script src="..."> tags with inline <script> blocks.
def replace_tag(html, tag, inline):
    block = '<script>\n/* === inlined from ' + tag.split('"')[1] + ' === */\n' + inline + '\n</script>'
    if tag not in html:
        raise SystemExit(f"could not find tag in viewer.html: {tag}")
    return html.replace(tag, block, 1)

bundle = viewer

# Inline the optional private localized meaning scripts if they exist, or use null stubs.
lang_configs = [
    ('kn', 'BANNANJE_VERSE_MEANINGS'),
    ('en', 'BANNANJE_VERSE_MEANINGS_EN'),
    ('hi', 'BANNANJE_VERSE_MEANINGS_HI'),
    ('dev', 'BANNANJE_VERSE_MEANINGS_DEV')
]

for suffix, var_name in lang_configs:
    tag = f'<script src="bannanje_{suffix}.js" onerror="window.{var_name} = null;"></script>'
    path = os.path.join(ROOT, f'bannanje_{suffix}.js')
    if os.path.exists(path):
        inline = strip_cjs_export(read(f'bannanje_{suffix}.js'))
        block = f'<script>\n/* === inlined from bannanje_{suffix}.js === */\n{inline}\n</script>'
        bundle = bundle.replace(tag, block, 1)
    else:
        # Fallback to null stub if file is not found
        bundle = bundle.replace(tag, f'<script>window.{var_name} = null;</script>', 1)

bundle = replace_tag(bundle, '<script src="data.js"></script>', data_inline)
bundle = replace_tag(bundle, '<script src="positions.js"></script>', positions_inline)

# Ensure UTF-8 meta is in head (it already is, but assert).
assert '<meta charset="utf-8"' in bundle, "missing utf-8 charset meta"

out_name = 'viewer-bundled.html'
out = os.path.join(ROOT, out_name)
with open(out, 'w', encoding='utf-8') as f:
    f.write(bundle)

size = os.path.getsize(out)
print(f"wrote {out} ({size} bytes, {size/1024:.1f} KiB) [unified]")
