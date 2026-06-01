import re
import os

print("Adding dynamic map filtering, chapter slider, and dynamic verse selector to templates...")

# 1. Read viewer.html
with open("viewer.html", "r", encoding="utf-8") as f:
    viewer = f.read()

# 2. Add extra CSS styles for map controls, slider, and custom thumb
css_start = viewer.find("</style>")
if css_start == -1:
    raise Exception("Could not find </style> tag in viewer.html")

new_css = """
/* ============ MAP CONTROLS PANEL ============ */
.map-controls-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin: 12px 14px 16px;
  padding: 14px 18px;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.map-control-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.map-control-item.slider-item {
  flex: 1;
  min-width: 280px;
}
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  margin-bottom: 2px;
}
.map-control-label {
  font-weight: 600;
  color: var(--ink-soft);
  letter-spacing: .02em;
}
.map-ch-badge {
  font-size: 12px;
  font-weight: 700;
  color: var(--rust);
  background: var(--paper);
  padding: 3px 10px;
  border-radius: 20px;
  border: 1px solid var(--rule-soft);
}
.slider-row {
  display: flex;
  align-items: center;
  gap: 10px;
}
.slider-bound {
  font-size: 11px;
  color: var(--ink-fade);
  font-weight: 500;
}
.map-slider {
  flex: 1;
  -webkit-appearance: none;
  appearance: none;
  height: 6px;
  border-radius: 3px;
  background: var(--rule-soft);
  outline: none;
  cursor: pointer;
  transition: background .2s;
}
.map-slider:hover {
  background: var(--rule);
}
.map-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--rust);
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: transform .1s, background-color .1s;
}
.map-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
  background: var(--ink);
}
.map-slider::-moz-range-thumb {
  width: 18px;
  height: 18px;
  border: none;
  border-radius: 50%;
  background: var(--rust);
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.2);
  transition: transform .1s, background-color .1s;
}
.map-slider::-moz-range-thumb:hover {
  transform: scale(1.15);
  background: var(--ink);
}
"""

viewer = viewer[:css_start] + new_css + viewer[css_start:]
print("Added CSS styling successfully.")

# 3. Replace renderMap, renderMapHandLaid, and renderMapAuto in JavaScript
render_map_start = viewer.find("function renderMap(){")
if render_map_start == -1:
    render_map_start = viewer.find("function renderMap() {")
if render_map_start == -1:
    raise Exception("Could not locate renderMap block in viewer.html")

render_map_end = viewer.find("/* ---------- DISPATCH ---------- */", render_map_start)
if render_map_end == -1:
    raise Exception("Could not locate DISPATCH block in viewer.html")

new_render_map = """function renderMap(){
  const root = document.getElementById('view-map');

  // Dynamic synchronization of map selection state with the Chapters view tab
  if (state.lastChapterSel !== state.chapterSel) {
    state.mapChapterSel = state.chapterSel || 0;
    state.mapVerseSel = ''; // Reset verse selection on map when chapter changes from chapters tab
    state.lastChapterSel = state.chapterSel;
  }
  if (state.mapChapterSel === undefined) {
    state.mapChapterSel = 0; // Default fallback to all chapters
  }

  const fontFam = state.lang==='hi'?'Tiro Devanagari Hindi':state.lang==='dev'?'Tiro Devanagari Sanskrit':state.lang==='kn'?'Tiro Kannada':'Cormorant Garamond';
  const chSel = state.mapChapterSel; // 0 to 18
  const vSel = state.mapVerseSel || ''; // 'ch.v' or ''
  
  const chTitle = {
    0:'All Chapters',
    1:'Arjuna-viṣāda', 2:'Sāṅkhya-yoga', 3:'Karma-yoga',
    4:'Jñāna-karma-sannyāsa', 5:'Karma-sannyāsa', 6:'Dhyāna-yoga',
    7:'Vijñāna-yoga', 8:'Akṣara-brahma', 9:'Rāja-vidyā-rāja-guhya',
    10:'Vibhūti-yoga', 11:'Viśvarūpa-darśana', 12:'Bhakti-yoga',
    13:'Kṣetra-kṣetrajña', 14:'Guṇa-traya-vibhāga', 15:'Puruṣottama',
    16:'Daivāsura-sampad-vibhāga', 17:'Śraddhā-traya-vibhāga',
    18:'Mokṣa-sannyāsa'
  };

  const allChaptersLabel = {
    en: 'All Chapters',
    dev: 'सर्वाध्यायाः',
    kn: 'ಎಲ್ಲಾ ಅಧ್ಯಾಯಗಳು',
    hi: 'सभी अध्याय'
  }[state.lang] || 'All Chapters';

  const chLabelText = chSel === 0 
    ? allChaptersLabel 
    : `${state.lang==='kn'?'ಅಧ್ಯಾಯ':'Chapter'} ${chSel} — ${chTitle[chSel]}`;

  // Generate Shloka dropdown choices for the active chapter
  let shlokaDropdown = '';
  if (chSel > 0) {
    const selStr = String(chSel);
    const verseKeys = Object.keys(FULL_GITA)
      .filter(k => k.split('.')[0] === selStr)
      .sort((a,b) => parseInt(a.split('.')[1]) - parseInt(b.split('.')[1]));

    const allShlokasLabel = {
      en: 'All Shlokas',
      dev: 'सर्व-श्लोकाः',
      kn: 'ಎಲ್ಲಾ ಶ್ಲೋಕಗಳು',
      hi: 'सभी श्लोक'
    }[state.lang] || 'All Shlokas';

    const shlokaOptions = verseKeys.map(k => 
      `<option value="${k}"${vSel===k?' selected':''}>BG ${k}</option>`
    ).join('');

    shlokaDropdown = `
      <div class="map-control-item">
        <label for="map-shloka-select" class="map-control-label">${{en:'Shloka:', dev:'श्लोकः:', kn:'ಶ್ಲೋಕ:', hi:'श्लोक:'}[state.lang]||'Shloka:'}</label>
        <select id="map-shloka-select" class="sh-dropdown" onchange="onMapShlokaChange(this.value)">
          <option value="">-- ${allShlokasLabel} --</option>
          ${shlokaOptions}
        </select>
      </div>
    `;
  }

  const filterLabel = {
    en: 'Chapter Filter:',
    dev: 'अध्याय-सूची:',
    kn: 'ಅಧ್ಯಾಯ ಶೋಧಕ:',
    hi: 'अध्याय फ़िल्टर:'
  }[state.lang] || 'Chapter Filter:';

  const controlPanelHtml = `
    <div class="map-controls-panel">
      <div class="map-control-item slider-item">
        <div class="slider-header">
          <span class="map-control-label">${filterLabel}</span>
          <span class="map-ch-badge">${escapeHtml(chLabelText)}</span>
        </div>
        <div class="slider-row">
          <span class="slider-bound">0</span>
          <input type="range" min="0" max="18" value="${chSel}" class="map-slider" id="map-ch-slider" oninput="onMapSliderChange(this.value)">
          <span class="slider-bound">18</span>
        </div>
      </div>
      ${shlokaDropdown}
    </div>
  `;

  // Filter nodes and edges based on selections
  let activeNodeIds = new Set();
  const conceptIdx = buildChapterIndex(); 
  const shlokaMap = buildShlokaChapterIndex(); 

  if (chSel === 0) {
    NODES.forEach(n => activeNodeIds.add(n.id));
  } else {
    if (vSel) {
      const list = shlokaMap[vSel] || [];
      list.forEach(e => activeNodeIds.add(e.nodeId));
    } else {
      const list = conceptIdx[chSel] || [];
      list.forEach(e => activeNodeIds.add(e.node.id));
    }
  }

  if (HAS_HANDLAID) {
    renderMapHandLaid(root, activeNodeIds, controlPanelHtml);
  } else {
    renderMapAuto(root, activeNodeIds, controlPanelHtml);
  }
}

function renderMapHandLaid(root, activeNodeIds, controlPanelHtml){
  const W = 1000, H = 1500;
  const showSet = (typeof KG_SHOW_EDGE_TYPES !== 'undefined') ? KG_SHOW_EDGE_TYPES : null;
  const fontFam = state.lang==='hi'?'Tiro Devanagari Hindi':state.lang==='dev'?'Tiro Devanagari Sanskrit':state.lang==='kn'?'Tiro Kannada':'Cormorant Garamond';
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;

  // tier bands
  KG_TIER_BANDS.forEach((band,bi)=>{
    const x = band.side ? 900 : (band.half==='right' ? W/2 : 0);
    const w = band.side ? 100 : (band.half ? W/2 : W);
    svg += `<rect x="${x}" y="${band.yTop}" width="${w}" height="${band.yBottom-band.yTop}" fill="${bi%2 ? 'rgba(214,197,153,.10)' : 'rgba(230,216,176,.18)'}"/>`;
    const tier = TIER_BY_ID[band.tier];
    if (!tier) return;
    const lab = state.lang==='hi'?(tier.hi||tier.dev):state.lang==='dev'?tier.dev:state.lang==='kn'?tier.kn:tier.en;
    svg += `<text x="${band.label.x}" y="${band.label.y}" font-family="${fontFam}" font-size="13" fill="var(--ink-soft)" font-weight="600">${escapeHtml(lab)}</text>`;
  });

  // edges (Only draw if both source and target endpoints are in activeNodeIds)
  EDGES.forEach(e=>{
    if (showSet && !showSet.has(e.type)) return;
    if (!activeNodeIds.has(e.source) || !activeNodeIds.has(e.target)) return;
    const a = KG_POSITIONS[e.source]; const b = KG_POSITIONS[e.target];
    if (!a || !b) return;
    const [ax,ay] = a, [bx,by] = b;
    const mx = (ax+bx)/2;
    const my = (ay+by)/2 - Math.abs(by-ay)*0.08;
    svg += `<path class="map-edge" d="M ${ax} ${ay} Q ${mx} ${my} ${bx} ${by}" stroke="var(--e-${e.type})" stroke-width="0.7"/>`;
  });

  // nodes (Only draw if present in activeNodeIds)
  NODES.forEach(n=>{
    if (!activeNodeIds.has(n.id)) return;
    const p = KG_POSITIONS[n.id]; if (!p) return;
    const [x,y,r] = p;
    const lab = labelOf(n);
    const maxLen = state.lang==='en' ? 16 : 12;
    const shown = lab.length > maxLen ? lab.slice(0,maxLen-1)+'…' : lab;
    svg += `<g class="map-node" data-id="${n.id}">
      <circle cx="${x}" cy="${y}" r="${r}" fill="var(--t-${n.tier})" fill-opacity="0.88" stroke="var(--t-${n.tier})" stroke-width="1.2"/>
      <text x="${x}" y="${y + r + 11}" font-family="${fontFam}" font-size="${state.lang==='en'?10:11}">${escapeHtml(shown)}</text>
    </g>`;
  });

  svg += `</svg>`;
  root.innerHTML = `
    ${controlPanelHtml}
    <div class="map-wrap">${svg}</div>
  `;
}

function renderMapAuto(root, activeNodeIds, controlPanelHtml){
  const W = 820, leftPad = 100, rightPad = 30;
  const tierGap = 84;
  const activeNodes = NODES.filter(n => activeNodeIds.has(n.id));
  const H = TIERS.length * tierGap + 80;
  const byTier = Object.fromEntries(TIERS.map(t=>[t.id,[]]));
  activeNodes.forEach(n => { if (byTier[n.tier]) byTier[n.tier].push(n); });
  const pos = {};
  TIERS.forEach((tier, ti)=>{
    const arr = byTier[tier.id];
    const usable = W - leftPad - rightPad;
    arr.forEach((n,i)=>{
      const x = leftPad + (arr.length===1 ? usable/2 : (i/(arr.length-1))*usable);
      const y = 40 + ti*tierGap + 22;
      pos[n.id] = { x, y, r:9 };
    });
  });
  const fontFam = state.lang==='hi'?'Tiro Devanagari Hindi':state.lang==='dev'?'Tiro Devanagari Sanskrit':state.lang==='kn'?'Tiro Kannada':'Cormorant Garamond';
  let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;
  TIERS.forEach((tier,ti)=>{
    const y = 40 + ti*tierGap;
    svg += `<rect x="0" y="${y-22}" width="${W}" height="${tierGap}" fill="${ti%2 ? 'rgba(214,197,153,.10)' : 'rgba(230,216,176,.18)'}"/>`;
    const lab = state.lang==='hi'?(tier.hi||tier.dev):state.lang==='dev'?tier.dev:state.lang==='kn'?tier.kn:tier.en;
    svg += `<text x="10" y="${y+4}" font-family="${fontFam}" font-size="12" fill="var(--ink-soft)" font-weight="600">${escapeHtml(lab)}</text>`;
  });
  EDGES.forEach(e=>{
    if (!activeNodeIds.has(e.source) || !activeNodeIds.has(e.target)) return;
    const a = pos[e.source]; const b = pos[e.target];
    if (!a || !b) return;
    const mx = (a.x+b.x)/2;
    const my = (a.y+b.y)/2 - Math.abs(b.y-a.y)*0.08;
    svg += `<path class="map-edge" d="M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}" stroke="var(--e-${e.type})" stroke-width="0.7"/>`;
  });
  activeNodes.forEach(n=>{
    const p = pos[n.id]; if (!p) return;
    const lab = labelOf(n);
    const maxLen = state.lang==='en' ? 14 : 10;
    const shown = lab.length > maxLen ? lab.slice(0,maxLen-1)+'…' : lab;
    svg += `<g class="map-node" data-id="${n.id}">
      <circle cx="${p.x}" cy="${p.y}" r="${p.r}" fill="var(--t-${n.tier})" fill-opacity="0.88" stroke="var(--t-${n.tier})" stroke-width="1.2"/>
      <text x="${p.x}" y="${p.y + p.r + 11}" font-family="${fontFam}" font-size="${state.lang==='en'?10:11}">${escapeHtml(shown)}</text>
    </g>`;
  });
  svg += `</svg>`;
  root.innerHTML = `
    ${controlPanelHtml}
    <div class="map-wrap">${svg}</div>
  `;
}

window.onMapSliderChange = function(val) {
  const ch = parseInt(val);
  state.mapChapterSel = ch;
  state.mapVerseSel = ''; // Reset shloka filter when chapter changes
  if (ch > 0) {
    state.chapterSel = ch; // Sync back to chapters tab!
  }
  state.lastChapterSel = ch; // Avoid circular dynamic resets
  renderMap();
};

window.onMapShlokaChange = function(val) {
  state.mapVerseSel = val;
  renderMap();
};

"""

viewer = viewer[:render_map_start] + new_render_map + viewer[render_map_end:]
print("Modified renderMap and helpers successfully.")

# 4. Save updated template files
with open("viewer.html", "w", encoding="utf-8") as f:
    f.write(viewer)
print("Updated viewer.html template!")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(viewer)
print("Updated index.html template!")

print("All modifications completed successfully!")
