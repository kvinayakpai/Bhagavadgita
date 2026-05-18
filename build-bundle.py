"""build-bundle.py — produce viewer-bundled.html: a single self-contained HTML
that opens cleanly from file:// (incl. on phones) with zero external file
dependencies. Inlines data.js and positions.js into the viewer in place of
the <script src="..."> tags.

Run:        python3 build-bundle.py            (public bundle, no Bannanje content)
            python3 build-bundle.py --private  (private bundle, inlines bannanje_kn_private.js)

Out:        viewer-bundled.html  (or viewer-bundled-private.html with --private)

The --private flag is for personal study only — `bannanje_kn_private.js`
(and `viewer-bundled-private.html`) are gitignored. Never push them.
"""
import io, os, sys

ROOT = os.path.dirname(os.path.abspath(__file__))
PRIVATE_MODE = '--private' in sys.argv

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
# Use the exact tag text from viewer.html.
def replace_tag(html, tag, inline):
    block = '<script>\n/* === inlined from ' + tag.split('"')[1] + ' === */\n' + inline + '\n</script>'
    if tag not in html:
        raise SystemExit(f"could not find tag in viewer.html: {tag}")
    return html.replace(tag, block, 1)

bundle = viewer
bundle = replace_tag(bundle, '<script src="data.js"></script>', data_inline)
bundle = replace_tag(bundle, '<script src="positions.js"></script>', positions_inline)

# Handle the optional Bannanje private companion.
bannanje_tag = '<script src="bannanje_kn_private.js" onerror="window.BANNANJE_KN_PRIVATE = null;"></script>'
bannanje_path = os.path.join(ROOT, 'bannanje_kn_private.js')

if PRIVATE_MODE:
    if not os.path.exists(bannanje_path):
        raise SystemExit("--private requested but bannanje_kn_private.js not found on disk")
    bannanje_inline = strip_cjs_export(read('bannanje_kn_private.js'))
    block = ('<script>\n/* === inlined from bannanje_kn_private.js — PRIVATE, '
             'PERSONAL STUDY ONLY, NOT FOR REDISTRIBUTION === */\n' + bannanje_inline + '\n</script>')
    if bannanje_tag in bundle:
        bundle = bundle.replace(bannanje_tag, block, 1)
    else:
        # Fallback: inject just before data.js script block
        marker = '<script>\n/* === inlined from data.js'
        bundle = bundle.replace(marker, block + '\n' + marker, 1)
    out_name = 'viewer-bundled-private.html'
else:
    # Public bundle: replace the bannanje script tag with a null stub so no fetch is attempted.
    null_stub = '<script>window.BANNANJE_KN_PRIVATE = null;</script>'
    if bannanje_tag in bundle:
        bundle = bundle.replace(bannanje_tag, null_stub, 1)
    out_name = 'viewer-bundled.html'

# Ensure UTF-8 meta is in head (it already is, but assert).
assert '<meta charset="utf-8"' in bundle, "missing utf-8 charset meta"

out = os.path.join(ROOT, out_name)
with open(out, 'w', encoding='utf-8') as f:
    f.write(bundle)

size = os.path.getsize(out)
mode = 'PRIVATE' if PRIVATE_MODE else 'public'
print(f"wrote {out} ({size} bytes, {size/1024:.1f} KiB) [{mode}]")
