/* verify.js — consistency audit for the Gītā concept KG.
 *
 * Run: node verify.js
 *
 * Checks:
 *  1. every NODE has id, tier, en/dev/kn, title, note, refs
 *  2. every NODE.tier exists in TIERS
 *  3. every EDGE.source and EDGE.target resolves to a NODE
 *  4. every NODE has either a SHLOKA entry OR refs explicitly say so
 *  5. every NODE that has KG_POSITIONS coord is also in NODES (and vice versa flagged)
 *  6. duplicate node ids
 *  7. unknown edge types
 *  8. tier coverage stats
 *
 * Exits 0 on clean audit, 1 on any error.
 */
const { TIERS, NODES, EDGES, SHLOKAS } = require('./data.js');
let positions = null;
try { positions = require('./positions.js'); } catch (e) {}

const errors = [];
const warnings = [];

function err(msg){ errors.push(msg); }
function warn(msg){ warnings.push(msg); }

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
});

// 3 — edge endpoints
const KNOWN_EDGE_TYPES = new Set([
  'is-a','includes','leads-to','opposite-of','antidote-to',
  'arises-from','predicates-on','transforms-into','grounded-in',
]);
EDGES.forEach((e,i)=>{
  if (!seenIds.has(e.source)) err(`EDGE[${i}] (${e.type}): unknown source "${e.source}"`);
  if (!seenIds.has(e.target)) err(`EDGE[${i}] (${e.type}): unknown target "${e.target}"`);
  if (!KNOWN_EDGE_TYPES.has(e.type)) warn(`EDGE[${i}]: unfamiliar type "${e.type}"`);
});

// 4 — shloka coverage
NODES.forEach(n=>{
  if (!SHLOKAS[n.id]) warn(`${n.id}: no shloka entry (refs: ${n.refs})`);
});
Object.keys(SHLOKAS).forEach(id=>{
  if (!seenIds.has(id)) err(`SHLOKAS["${id}"]: no matching node`);
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
  console.log(`✅ ${NODES.length} nodes · ${EDGES.length} edges · ${Object.keys(SHLOKAS).length} shlokas — all consistent.`);
}

process.exit(errors.length ? 1 : 0);
