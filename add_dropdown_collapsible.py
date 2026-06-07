import re

print("Adding chapters page selector dropdown and collapsible commentaries to template...")

# 1. Read viewer.html
with open("viewer.html", "r", encoding="utf-8") as f:
    viewer = f.read()

# 2. Add extra CSS styles for controls, dropdowns, and commentary toggles
css_start = viewer.find("</style>")
if css_start == -1:
    raise Exception("Could not find </style> tag in viewer.html")

new_css = """
/* ============ CHAPTER CONTROLS & COLLAPSIBLE COMMENTARY ============ */
.ch-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 14px 0 16px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--rule-soft);
}
.ch-select-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--ink-soft);
}
.sh-dropdown {
  padding: 6px 12px;
  border: 1px solid var(--rule);
  border-radius: 8px;
  background: var(--paper);
  color: var(--ink);
  font-family: inherit;
  font-size: 13.5px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
.ch-toggle-group {
  display: flex;
  background: var(--paper-2);
  border: 1px solid var(--rule);
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
}
.ch-toggle-btn {
  background: transparent;
  border: none;
  color: var(--ink-fade);
  padding: 6px 14px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 8px;
  transition: background .2s, color .2s;
  font-family: inherit;
}
.ch-toggle-btn.active {
  background: var(--rust);
  color: #fff;
}
.sl-toggle-btn {
  background: transparent;
  border: 1px solid var(--rule-soft);
  color: var(--rust);
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  cursor: pointer;
  letter-spacing: .04em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background .2s, border-color .2s;
  margin-top: 8px;
  font-family: inherit;
}
.sl-toggle-btn:hover {
  background: var(--paper-2);
  border-color: var(--rule);
}
.sl-meaning.collapsed {
  display: none;
}
"""

viewer = viewer[:css_start] + new_css + viewer[css_start:]
print("Added CSS styling successfully.")

# 3. Add translation keys to UI_STRINGS
ui_strings_marker = "const UI_STRINGS = {"
ui_start = viewer.find(ui_strings_marker)
if ui_start == -1:
    raise Exception("Could not find const UI_STRINGS literal")

new_ui_strings = """  jumpToVerse:     { en:'Jump to Verse:', dev:'श्लोकं गच्छतु:', kn:'ಶ್ಲೋಕಕ್ಕೆ ಹೋಗಿ:', hi:'श्लोक पर जाएँ:' },
  onlyShlokas:     { en:'Only Shlokas', dev:'केवल-श्लोकाः', kn:'ಕೇವಲ ಶ್ಲೋಕಗಳು', hi:'केवल श्लोक' },
  shlokasCommentary:{ en:'Shlokas + Commentary', dev:'स-भाष्य', kn:'ಶ್ಲೋಕ + ಭಾಷ್ಯ', hi:'श्लोक + भाष्य' },
  showCommentary:  { en:'Show Commentary ▾', dev:'भाष्यं दर्शयतु ▾', kn:'ವಿವರಣೆ ನೋಡಿ ▾', hi:'व्याख्या देखें ▾' },
  hideCommentary:  { en:'Hide Commentary ▴', dev:'भाष्यं गोपयतु ▴', kn:'ವಿವರಣೆ ಮುಚ್ಚಿ ▴', hi:'व्याख्या छुपाएं ▴' },
"""

viewer = viewer[:ui_start + len(ui_strings_marker)] + "\n" + new_ui_strings + viewer[ui_start + len(ui_strings_marker):]
print("Added UI_STRINGS translation mappings successfully.")

# 4. Modify renderChapters in JavaScript
# We will find the renderChapters function definition and completely replace it with our new, gorgeous collapsible dropdown version
render_chapters_start = viewer.find("function renderChapters() {")
render_chapters_end = viewer.find("function renderMap", render_chapters_start)
if render_chapters_start == -1 or render_chapters_end == -1:
    raise Exception("Could not locate renderChapters block in viewer.html")

new_render_chapters = """function renderChapters() {
  const root = document.getElementById('view-chapters');
  const conceptIdx  = buildChapterIndex();       // ch → [{node, refsRaw}]
  const shlokaMap   = buildShlokaChapterIndex(); // "ch.v" → [{nodeId, s}]
  const chapters = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const sel = state.chapterSel || 2;
  const isKn = (state.lang === 'kn');

  const chTitle = {
    1:'Arjuna-viṣāda', 2:'Sāṅkhya-yoga', 3:'Karma-yoga',
    4:'Jñāna-karma-sannyāsa', 5:'Karma-sannyāsa', 6:'Dhyāna-yoga',
    7:'Vijñāna-yoga', 8:'Akṣara-brahma', 9:'Rāja-vidyā-rāja-guhya',
    10:'Vibhūti-yoga', 11:'Viśvarūpa-darśana', 12:'Bhakti-yoga',
    13:'Kṣetra-kṣetrajña', 14:'Guṇa-traya-vibhāga', 15:'Puruṣottama',
    16:'Daivāsura-sampad-vibhāga', 17:'Śraddhā-traya-vibhāga',
    18:'Mokṣa-sannyāsa'
  };

  const btnRow = chapters.map(ch =>
    `<button class="ch-btn${ch===sel?' active':''}" onclick="state.chapterSel=${ch};renderChapters()">${ch}</button>`
  ).join('');

  // ── Concepts section ──────────────────────────────────────────────────────
  const conceptRows = (conceptIdx[sel]||[]).map(({node:n, refsRaw}) =>
    `<div class="ch-concept-row">
      <span class="ch-concept-label" onclick="setView('focus','${n.id}')">${escapeHtml(labelOf(n))}</span>
      <span class="ch-verses">${escapeHtml(refsRaw)}</span>
    </div>`
  ).join('');
  const conceptsSection = conceptRows
    ? `<div class="ch-section-hd">Concepts</div>${conceptRows}`
    : '';

  // ── Full Shlokas section from FULL_GITA ───────────────────────────────────
  const selStr = String(sel);
  const verseKeys = Object.keys(FULL_GITA)
    .filter(k => k.split('.')[0] === selStr)
    .sort((a,b) => parseInt(a.split('.')[1]) - parseInt(b.split('.')[1]));

  /* Helper: given a "ch.v" key, return all NODES whose refs cover that verse */
  function linkedConceptsFor(ch, v) {
    const out = [], seen = new Set();
    function testNode(refsStr, nodeId, node) {
      if (seen.has(nodeId)) return;
      let lastCh = null;
      refsStr.split(/[·,]/).forEach(function(seg) {
        seg = seg.trim();
        var m = seg.match(/BG\s*(\d+)[\\u00b7](\d+)(?:[\\u2013\\-](\d+))?/);
        if (m) {
          lastCh = parseInt(m[1]);
          if (lastCh === ch) {
            var vs=parseInt(m[2]), ve=m[3]?parseInt(m[3]):vs;
            if (v>=vs && v<=ve && !seen.has(nodeId)) { out.push(node); seen.add(nodeId); }
          }
        } else if (lastCh !== null) {
          var m2 = seg.match(/(\d+)[\\u00b7](\d+)(?:[\\u2013\\-](\d+))?/);
          if (m2) {
            var ch2=parseInt(m2[1]);
            if (ch2===ch) {
              var vs2=parseInt(m2[2]), ve2=m2[3]?parseInt(m2[3]):vs2;
              if (v>=vs2 && v<=ve2 && !seen.has(nodeId)) { out.push(node); seen.add(nodeId); }
            }
            lastCh = ch2;
          }
        }
      });
    }
    (NODES||[]).forEach(function(n){ if(n.refs) testNode(n.refs+'', n.id, n); });
    Object.entries(SHLOKAS||{}).forEach(function(e){
      var id=e[0], s=e[1];
      if(!s.ref || seen.has(id)) return;
      var n=(NODES||[]).find(function(x){return x.id===id;});
      if(n) testNode(s.ref+'', id, n);
    });
    return out;
  }

  // Global toggle state
  const showAll = state.showAllCommentary || false;
  const collapsedClass = showAll ? '' : ' collapsed';
  const toggleText = showAll ? UI('hideCommentary') : UI('showCommentary');

  const shlokaCards = verseKeys.map(key => {
    const [chS, vS] = key.split('.');
    const chN = parseInt(chS), vN = parseInt(vS);
    const devText = FULL_GITA[key];
    // Render text
    let verse;
    if (isKn)                                       { verse = devToKn(devText); }
    else if (state.lang==='dev'||state.lang==='hi') { verse = devText; }
    else                                            { verse = devToIast(devText); }
    const verseHtml = verse
      ? `<div class="sl-verse${isKn?' kn':''}">${escapeHtml(verse)}</div>` : '';
    
    // Kannada meaning/commentary under the shloka directly
    const meaning = (typeof BANNANJE_VERSE_MEANINGS !== 'undefined' && BANNANJE_VERSE_MEANINGS[key]) || '';
    const meaningHtml = meaning ? `
      <button class="sl-toggle-btn" onclick="toggleCommentary('${key}')" id="btn-${key}">${toggleText}</button>
      <div class="sl-meaning${collapsedClass}" id="meaning-${key}">${escapeHtml(meaning)}</div>
    ` : '';

    // Concept chips
    const conceptNodes = linkedConceptsFor(chN, vN);
    const chips = conceptNodes.map(n =>
      `<span class="sl-concept-chip" onclick="setView('focus','${n.id}')">${escapeHtml(labelOf(n))}</span>`
    ).join('');
    return `<div class="sl-card" id="card-${key}">
      <div class="sl-ref">BG ${key}</div>
      ${verseHtml}
      ${meaningHtml}
      ${chips ? `<div class="sl-concepts">${chips}</div>` : ''}
    </div>`;
  }).join('');

  const shlokaSection = shlokaCards
    ? `<div class="ch-section-hd">Shlokas (${verseKeys.length})</div>${shlokaCards}`
    : `<p style="color:var(--ink-fade);font-size:14px;padding:6px 0">No shlokas for this chapter.</p>`;

  // Generate Dropdown select options
  const dropdownOptions = verseKeys.map(key => `<option value="${key}">BG ${key}</option>`).join('');

  root.innerHTML = `
    <div class="ch-grid">${btnRow}</div>
    <div class="ch-list-wrap">
      <div class="ch-hd">Chapter ${sel} — ${chTitle[sel]||''}</div>
      
      <!-- CONTROLS ROW -->
      <div class="ch-controls">
        <div class="ch-select-wrap">
          <span>${UI('jumpToVerse')}</span>
          <select class="sh-dropdown" onchange="if(this.value){document.getElementById('card-' + this.value).scrollIntoView({behavior:'smooth', block:'center'}); this.value='';}">
            <option value="">-- Select --</option>
            ${dropdownOptions}
          </select>
        </div>
        
        <div class="ch-toggle-group">
          <button class="ch-toggle-btn${!showAll?' active':''}" id="global-show-shlokas" onclick="setGlobalCommentary(false)">${UI('onlyShlokas')}</button>
          <button class="ch-toggle-btn${showAll?' active':''}" id="global-show-all" onclick="setGlobalCommentary(true)">${UI('shlokasCommentary')}</button>
        </div>
      </div>

      ${conceptsSection}
      ${shlokaSection}
    </div>`;
}

// Global functions for toggles
window.toggleCommentary = function(key) {
  const el = document.getElementById('meaning-' + key);
  const btn = document.getElementById('btn-' + key);
  if (el && btn) {
    const collapsed = el.classList.toggle('collapsed');
    btn.innerHTML = collapsed ? UI('showCommentary') : UI('hideCommentary');
  }
};

window.setGlobalCommentary = function(show) {
  const btnShlokas = document.getElementById('global-show-shlokas');
  const btnAll = document.getElementById('global-show-all');
  if (btnShlokas) btnShlokas.classList.toggle('active', !show);
  if (btnAll) btnAll.classList.toggle('active', show);
  
  state.showAllCommentary = show;
  
  document.querySelectorAll('.sl-meaning').forEach(el => {
    el.classList.toggle('collapsed', !show);
  });
  document.querySelectorAll('.sl-toggle-btn').forEach(btn => {
    btn.innerHTML = show ? UI('hideCommentary') : UI('showCommentary');
  });
};

"""

viewer = viewer[:render_chapters_start] + new_render_chapters + viewer[render_chapters_end:]
print("Modified renderChapters function successfully.")

# 5. Save updated template files
with open("viewer.html", "w", encoding="utf-8") as f:
    f.write(viewer)
print("Updated viewer.html template!")

with open("index.html", "w", encoding="utf-8") as f:
    f.write(viewer)
print("Updated index.html template!")

print("All modifications completed successfully!")
