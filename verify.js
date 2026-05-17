/* verify.js — consistency audit for the Gītā concept KG.
 *
 * Run: node verify.js
 *
 * Checks (existing):
 *  1. every NODE has id, tier, en/dev/kn, title, note, refs
 *  2. every NODE.tier exists in TIERS
 *  3. every EDGE.source and EDGE.target resolves to a NODE
 *  4. every NODE has either a SHLOKA entry OR refs explicitly say so
 *  5. every NODE that has KG_POSITIONS coord is also in NODES (and vice versa flagged)
 *  6. duplicate node ids
 *  7. unknown edge types
 *  8. tier coverage stats
 *
 * Checks (expanded — to catch the bug patterns we hit):
 *  9.  tri-script shape: NODE.title, NODE.note, NODE.madhva must each be
 *      {en, dev, kn} with all three keys present and non-empty.
 *  10. tri-script shape: EDGE.label, if present, must be {en, dev, kn} with
 *      all three keys present and non-empty.
 *  11. tri-script shape: SHLOKAS entries must be {dev, kn, iast, ...} with
 *      dev/kn/iast all present and non-empty.
 *  12. UI_STRINGS coverage: viewer.html UI_STRINGS literal extracted via
 *      regex; every entry must have non-empty en/dev/kn.
 *  13. file integrity: viewer.html / index.html / viewer-bundled.html each
 *      end with </html> (rstripped), and have matching counts of <script
 *      and </script>. viewer-bundled.html must have ≥3 script blocks.
 *  14. viewer.html ≡ index.html byte-identical.
 *
 * Exits 0 on clean audit, 1 on any error.
 */
const fs   = require('fs');
const path = require('path');
const { TIERS, NODES, EDGES, SHLOKAS } = require('./data.js');
let positions = null;
try { positions = require('./positions.js'); } catch (e) {}

const errors = [];
const warnings = [];

function err(msg){ errors.push(msg); }
function warn(msg){ warnings.push(msg); }

// Helper: assert tri-script shape on an object at a particular field path.
// Returns true if shape is OK, false otherwise (and pushes an err).
function assertTriScript(obj, owner, fieldName, opts){
  const STRICT_HI = process.env.STRICT_HI !== '0';
  let required = (opts && opts.required) || ['en','dev','kn','hi'];
  if (!STRICT_HI && !(opts && opts.required)) required = ['en','dev','kn'];
  if (obj === undefined || obj === null){
    if (opts && opts.optional) return true;
    err(`${owner}: ${fieldName} missing`);
    return false;
  }
  if (typeof obj !== 'object'){
    err(`${owner}: ${fieldName} is not an object (got ${typeof obj})`);
    return false;
  }
  let ok = true;
  required.forEach(k=>{
    if (!(k in obj)){
      err(`${owner}: ${fieldName}.${k} missing`);
      ok = false;
    } else if (typeof obj[k] !== 'string'){
      err(`${owner}: ${fieldName}.${k} not a string (got ${typeof obj[k]})`);
      ok = false;
    } else if (obj[k].trim() === ''){
      err(`${owner}: ${fieldName}.${k} is empty`);
      ok = false;
    }
  });
  return ok;
}

// 1 + 2 — node structure & tier validity
const TIER_IDS = new Set(TIERS.map(t=>t.id));
const seenIds = new Set();
NODES.forEach((n,i)=>{
  if (!n.id) return err(`NODE[${i}] missing id`);
  if (seenIds.has(n.id)) return err(`duplicate node id: ${n.id}`);
  seenIds.add(n.id);
  if (!TIER_IDS.has(n.tier)) err(`${n.id}: unknown tier "${n.tier}"`);
  ['en','dev','kn','title','note','refs'].forEach(k=>{
    if (!n[k]) err(`${n.id}: missing ${k}`);
  });

  // 9 — tri-script shape on title / note / madhva
  assertTriScript(n.title,  n.id, 'title');
  assertTriScript(n.note,   n.id, 'note');
  assertTriScript(n.madhva, n.id, 'madhva', { optional: true });
});

// 3 + 7 + 10 — edge endpoints + tri-script label shape
const KNOWN_EDGE_TYPES = new Set([
  'is-a','includes','leads-to','opposite-of','antidote-to',
  'arises-from','predicates-on','transforms-into','grounded-in',
]);
EDGES.forEach((e,i)=>{
  if (!seenIds.has(e.source)) err(`EDGE[${i}] (${e.type}): unknown source "${e.source}"`);
  if (!seenIds.has(e.target)) err(`EDGE[${i}] (${e.type}): unknown target "${e.target}"`);
  if (!KNOWN_EDGE_TYPES.has(e.type)) warn(`EDGE[${i}]: unfamiliar type "${e.type}"`);
  // 10 — label is optional. If absent (null/undefined) it's fine. If
  // present and all three scripts are empty strings, treat as 'no label'
  // (a deliberate convention for edges whose type badge alone suffices).
  // Otherwise, all three scripts must be present and non-empty — this is
  // the silent-truncation pattern we want to catch.
  if (e.label !== undefined && e.label !== null){
    const L = e.label;
    const looksTriScript = typeof L === 'object' && ('en' in L || 'dev' in L || 'kn' in L);
    if (!looksTriScript){
      err(`EDGE[${i}] ${e.source}→${e.target}: label is not tri-script (got ${typeof L})`);
    } else {
      const langs = process.env.STRICT_HI === '0' ? ['en','dev','kn'] : ['en','dev','kn','hi'];
      const allEmpty = langs.every(k => typeof L[k] === 'string' && L[k].trim() === '');
      if (!allEmpty){
        assertTriScript(L, `EDGE[${i}] ${e.source}→${e.target}`, 'label');
      }
    }
  }
});

// 4 — shloka coverage
NODES.forEach(n=>{
  if (!SHLOKAS[n.id]) warn(`${n.id}: no shloka entry (refs: ${n.refs})`);
});

// 11 — shloka shape (dev, kn, iast all present + non-empty)
Object.keys(SHLOKAS).forEach(id=>{
  if (!seenIds.has(id)) err(`SHLOKAS["${id}"]: no matching node`);
  const s = SHLOKAS[id];
  const shlokaLangs = process.env.STRICT_HI === '0' ? ['dev','kn','iast'] : ['dev','kn','iast','hi'];
  shlokaLangs.forEach(k=>{
    if (typeof s[k] !== 'string' || s[k].trim() === ''){
      err(`SHLOKAS["${id}"].${k}: missing or empty`);
    }
  });
});

// 5 — position coverage
if (positions && positions.KG_POSITIONS){
  Object.keys(positions.KG_POSITIONS).forEach(id=>{
    if (!seenIds.has(id)) err(`KG_POSITIONS["${id}"]: no matching node`);
  });
  NODES.forEach(n=>{
    if (!positions.KG_POSITIONS[n.id]) warn(`${n.id}: no hand-laid position`);
  });
}

// 12 — UI_STRINGS coverage in viewer.html.
//
// We extract the UI_STRINGS literal by regex (no JS eval). Each entry is
// expected to be a single-line { en: '...', dev: '...', kn: '...' } object
// (matching the viewer.html convention). We assert every entry has all
// three scripts and that none is empty.
function checkUiStrings(){
  const viewerPath = path.join(__dirname, 'viewer.html');
  if (!fs.existsSync(viewerPath)){
    warn('viewer.html not found — skipping UI_STRINGS check');
    return;
  }
  const html = fs.readFileSync(viewerPath, 'utf8');
  // Match: const UI_STRINGS = { ... };
  const m = html.match(/const\s+UI_STRINGS\s*=\s*\{([\s\S]*?)\n\}\s*;/);
  if (!m){
    err('viewer.html: UI_STRINGS literal not found (regex miss)');
    return;
  }
  const body = m[1];
  // Match each key: { ... } entry. Key may be quoted or bare.
  // We grab the value object body and then inspect for en/dev/kn.
  const entryRe = /(?:^|[\s,])(?:'([^']+)'|"([^"]+)"|([A-Za-z_][\w-]*))\s*:\s*\{([^{}]*)\}/g;
  let entries = 0;
  let mm;
  while ((mm = entryRe.exec(body)) !== null){
    const key = mm[1] || mm[2] || mm[3];
    const valBody = mm[4];
    entries++;
    // For each lang, look for `<lang>:` (bare or quoted) followed by a
    // non-empty string literal.
    const uiLangs = process.env.STRICT_HI === '0' ? ['en','dev','kn'] : ['en','dev','kn','hi'];
    uiLangs.forEach(lang=>{
      const kre = new RegExp(`(?:^|[\\s,])(?:['"]?)${lang}(?:['"]?)\\s*:\\s*(['"\`])((?:\\\\.|(?!\\1).)*)\\1`);
      const km = valBody.match(kre);
      if (!km){
        err(`UI_STRINGS["${key}"]: ${lang} missing`);
      } else if (km[2].trim() === ''){
        err(`UI_STRINGS["${key}"]: ${lang} is empty`);
      }
    });
  }
  if (entries === 0){
    err('viewer.html: UI_STRINGS literal parsed but produced 0 entries');
  } else {
    uiStringsCount = entries;
  }
}
let uiStringsCount = 0;
checkUiStrings();

// 13 — file integrity: each viewer HTML ends with </html> and has matching
// <script> open / </script> close counts. viewer-bundled.html must have
// at least 3 script blocks (data + positions + viewer logic).
function checkFileIntegrity(file, opts){
  const p = path.join(__dirname, file);
  if (!fs.existsSync(p)){
    err(`${file}: file does not exist`);
    return;
  }
  const text = fs.readFileSync(p, 'utf8');
  const rstripped = text.replace(/\s+$/, '');
  if (!rstripped.endsWith('</html>')){
    err(`${file}: does not end with </html> (likely truncated)`);
  }
  // Count <script (with or without attrs) and </script>
  const opens  = (text.match(/<script\b/g)  || []).length;
  const closes = (text.match(/<\/script>/g) || []).length;
  if (opens !== closes){
    err(`${file}: mismatched script tag counts — ${opens} <script, ${closes} </script>`);
  }
  if (opts && opts.minScripts && opens < opts.minScripts){
    err(`${file}: only ${opens} script blocks; expected ≥ ${opts.minScripts} (bundle should inline data + positions + viewer logic)`);
  }
  return { opens, closes, bytes: text.length };
}
const intViewer = checkFileIntegrity('viewer.html');
const intIndex  = checkFileIntegrity('index.html');
const intBundle = checkFileIntegrity('viewer-bundled.html', { minScripts: 3 });

// 14 — viewer.html ≡ index.html byte-identical
(function checkMirror(){
  const a = path.join(__dirname, 'viewer.html');
  const b = path.join(__dirname, 'index.html');
  if (!fs.existsSync(a) || !fs.existsSync(b)) return;
  const ba = fs.readFileSync(a);
  const bb = fs.readFileSync(b);
  if (ba.length !== bb.length){
    err(`viewer.html ≢ index.html (byte length differs: ${ba.length} vs ${bb.length})`);
    return;
  }
  if (!ba.equals(bb)){
    err('viewer.html ≢ index.html (same length, different bytes)');
  }
})();

// 8 — tier coverage stats
const byTier = {};
TIER_IDS.forEach(t=>byTier[t]=0);
NODES.forEach(n=>{ byTier[n.tier]=(byTier[n.tier]||0)+1; });

// Madhva-distinctive flag count
const madhvaCount = NODES.filter(n=>n.madhva).length;

// ====== Report ======
console.log('Bhagavad Gītā Concept KG — consistency audit\n');
console.log(`Nodes:      ${NODES.length}`);
console.log(`Edges:      ${EDGES.length}`);
console.log(`Shlokas:    ${Object.keys(SHLOKAS).length}`);
console.log(`Tiers:      ${TIERS.length}`);
console.log(`Madhva-distinctive callouts: ${madhvaCount}`);
console.log(`UI_STRINGS entries: ${uiStringsCount}`);
if (intViewer && intBundle){
  console.log(`viewer.html: ${intViewer.opens} script blocks · ${intViewer.bytes} bytes`);
  console.log(`viewer-bundled.html: ${intBundle.opens} script blocks · ${intBundle.bytes} bytes`);
}
console.log('');

console.log('Per-tier counts:');
TIERS.forEach(t=>{
  const lab = t.en.padEnd(18);
  console.log(`  ${lab} ${String(byTier[t.id]).padStart(3)}`);
});
console.log('');

if (errors.length){
  console.log(`❌ ${errors.length} error(s):`);
  errors.forEach(e=>console.log('  - '+e));
}
if (warnings.length){
  console.log(`\n⚠  ${warnings.length} warning(s):`);
  warnings.slice(0,20).forEach(w=>console.log('  - '+w));
  if (warnings.length > 20) console.log(`  ... and ${warnings.length-20} more`);
}
if (!errors.length){
  console.log(`✅ ${NODES.length} nodes · ${EDGES.length} edges · ${Object.keys(SHLOKAS).length} shlokas · ${uiStringsCount} UI strings — all consistent.`);
}

process.exit(errors.length ? 1 : 0);
