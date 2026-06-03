/**
 * build_template_pptx.js
 * Builds: Local-Language PDF → Multilingual Solution — Project Pipeline Template
 * A reusable guide deck for future digitisation projects.
 */
const pptxgen = require("pptxgenjs");

const prs = new pptxgen();
prs.layout = "LAYOUT_16x9";
prs.author = "Vinayak Pai";
prs.title = "Local-Language PDF → Multilingual Solution: Project Pipeline Template";

// ── Palette ───────────────────────────────────────────────────────────────────
const C = {
  midnight:  "1A1A2E",   // deep navy – title/dark slides
  indigo:    "16213E",   // dark indigo – section covers
  teal:      "0F3460",   // teal blue – headings
  gold:      "E94560",   // accent crimson-gold
  cream:     "F5F0E8",   // warm cream – light bg
  sand:      "EDE0D0",   // sand – alternate light
  white:     "FFFFFF",
  slate:     "4A5568",   // body text
  light:     "94A3B8",   // captions
  green:     "22C55E",   // success/check
  orange:    "F59E0B",   // warning
  red:       "EF4444",   // danger
};

const FONT_H = "Georgia";
const FONT_B = "Calibri";

// ── Helper ────────────────────────────────────────────────────────────────────
function darkSlide(s) {
  s.background = { color: C.midnight };
}
function addLabel(s, num, text) {
  s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y: 0.25, w: 0.55, h: 0.35, fill: { color: C.gold }, line: { color: C.gold } });
  s.addText(String(num), { x: 0.35, y: 0.25, w: 0.55, h: 0.35, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s.addText(text, { x: 1.0, y: 0.28, w: 8, h: 0.32, fontSize: 11, color: C.light, fontFace: FONT_B, align: "left", valign: "middle", margin: 0 });
}
function addDivider(s, y, color) {
  s.addShape(prs.shapes.LINE, { x: 0.35, y, w: 9.3, h: 0, line: { color: color || C.gold, width: 1.5 } });
}
function phaseTag(s, label, color) {
  s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y: 0.22, w: 1.6, h: 0.32, fill: { color }, line: { color } });
  s.addText(label, { x: 0.35, y: 0.22, w: 1.6, h: 0.32, fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
}
function stepBox(s, x, y, w, h, icon, title, desc, bg) {
  s.addShape(prs.shapes.RECTANGLE, { x, y, w, h, fill: { color: bg || "F0F4FF" }, line: { color: "C7D2E0", width: 1 } });
  s.addText(icon, { x: x + 0.12, y: y + 0.12, w: 0.5, h: 0.4, fontSize: 18, align: "center", valign: "middle", margin: 0 });
  s.addText(title, { x: x + 0.65, y: y + 0.12, w: w - 0.75, h: 0.3, fontSize: 11, bold: true, color: C.teal, fontFace: FONT_H, margin: 0 });
  s.addText(desc, { x: x + 0.65, y: y + 0.45, w: w - 0.75, h: h - 0.55, fontSize: 9.5, color: C.slate, fontFace: FONT_B, margin: 0 });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 01 — Title
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  darkSlide(s);

  // decorative left bar
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: C.gold }, line: { color: C.gold } });

  s.addText("LOCAL-LANGUAGE PDF", { x: 0.55, y: 1.1, w: 9.1, h: 0.7, fontSize: 38, bold: true, color: C.white, fontFace: FONT_H, charSpacing: 2 });
  s.addText("→  MULTILINGUAL SOLUTION", { x: 0.55, y: 1.75, w: 9.1, h: 0.7, fontSize: 38, bold: true, color: C.gold, fontFace: FONT_H, charSpacing: 2 });
  addDivider(s, 2.55, C.gold);
  s.addText("Project Pipeline Template", { x: 0.55, y: 2.7, w: 9.1, h: 0.45, fontSize: 20, italic: true, color: C.light, fontFace: FONT_B });
  s.addText("A reusable 9-phase guide for digitising regional-language texts with legacy fonts into fully indexed,\nmultilingual, web-delivered knowledge products.", {
    x: 0.55, y: 3.25, w: 8.0, h: 0.8, fontSize: 13, color: C.light, fontFace: FONT_B, lineSpacingMultiple: 1.4
  });
  s.addText("Based on the Bhagavad Gītā · Bannanje Govindacharya Commentary digitisation — 2025–2026", {
    x: 0.55, y: 4.9, w: 9.1, h: 0.35, fontSize: 10, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 02 — What this template covers
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  addLabel(s, "OVERVIEW", "What This Template Covers");

  s.addText("9 Phases · From scanned book to live multilingual web app", {
    x: 0.35, y: 0.7, w: 9.3, h: 0.4, fontSize: 14, bold: true, color: C.teal, fontFace: FONT_H
  });
  addDivider(s, 1.18, C.teal);

  const phases = [
    ["0", "Setup", "Repo, folder structure, toolchain"],
    ["1", "PDF → OCR", "Legacy font handling, regional script extraction"],
    ["2", "OCR Cleaning", "Noise removal, verse segmentation, status tagging"],
    ["3", "Translation", "Source KN → EN / HI / DEV via API pipeline"],
    ["4", "Contamination", "Detect & repair code-switches, OCR artifacts, script bleed"],
    ["5", "Viewer", "Interactive SPA — Browse / Focus / Chapters / Map / Chat"],
    ["6", "Knowledge Graph", "Concept nodes, typed edges, tier architecture"],
    ["7", "Documents", "DOCX, PPTX, XLSX auto-built from single JSON source"],
    ["8", "QA & Deploy", "Verification scripts, GitHub Pages, bundle rebuild"],
  ];

  const cols = [[0,1,2,3,4], [5,6,7,8]];
  const xs = [0.35, 5.3];
  cols.forEach((idxs, col) => {
    idxs.forEach((i, row) => {
      const [num, title, desc] = phases[i];
      const y = 1.35 + row * 0.79;
      const x = xs[col];
      s.addShape(prs.shapes.RECTANGLE, { x, y, w: 0.38, h: 0.38, fill: { color: C.gold }, line: { color: C.gold } });
      s.addText(num, { x, y, w: 0.38, h: 0.38, fontSize: 12, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
      s.addText(title, { x: x + 0.48, y: y + 0.01, w: 4.0, h: 0.22, fontSize: 11, bold: true, color: C.teal, fontFace: FONT_H, margin: 0 });
      s.addText(desc,  { x: x + 0.48, y: y + 0.22, w: 4.0, h: 0.2, fontSize: 9.5, color: C.slate, fontFace: FONT_B, margin: 0 });
    });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 03 — Phase 0 · Project Setup
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  phaseTag(s, "PHASE 0", C.teal);
  s.addText("Project Setup", { x: 2.1, y: 0.22, w: 7.5, h: 0.35, fontSize: 18, bold: true, color: C.teal, fontFace: FONT_H });
  addDivider(s, 0.68, C.teal);

  stepBox(s, 0.35, 0.8,  4.5, 1.0, "📁", "Folder structure", "source/ · _extracted/ · gita_pages/ · decks/ · scripts/", "EEF2FF");
  stepBox(s, 5.0,  0.8,  4.7, 1.0, "🔧", "Toolchain", "Python 3.12 · Node.js 22 · pptxgenjs · docx · python-docx · git", "EEF2FF");
  stepBox(s, 0.35, 1.95, 4.5, 1.0, "📦", "Source PDF audit", "Check DPI (≥300), font embedding, page count, language mix, OCR readiness", "FFF7ED");
  stepBox(s, 5.0,  1.95, 4.7, 1.0, "🗂️", "JSON schema design", "Define verse key format (ch.verse), status flags, multilingual fields", "FFF7ED");
  stepBox(s, 0.35, 3.1,  4.5, 1.0, "🐙", "Git repo", "GitHub repo with Pages enabled · .gitignore for node_modules & large files", "F0FFF4");
  stepBox(s, 5.0,  3.1,  4.7, 1.0, "⚠️", "Key decision", "Legacy font or Unicode? — determines entire OCR strategy downstream", "FEF2F2");

  s.addText("Rule: Every output (docx, pptx, xlsx, viewer) must rebuild from ONE JSON source-of-truth file.", {
    x: 0.35, y: 4.3, w: 9.3, h: 0.32, fontSize: 10.5, italic: true, bold: true, color: C.gold, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 04 — Phase 1 · PDF → OCR
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  phaseTag(s, "PHASE 1", "7C3AED");
  s.addText("PDF → OCR: Handling Legacy Fonts & Regional Scripts", { x: 2.1, y: 0.22, w: 7.5, h: 0.35, fontSize: 16, bold: true, color: "7C3AED", fontFace: FONT_H });
  addDivider(s, 0.68, "7C3AED");

  // two columns
  s.addText("The Legacy Font Problem", { x: 0.35, y: 0.82, w: 4.4, h: 0.32, fontSize: 13, bold: true, color: C.teal, fontFace: FONT_H });
  s.addText([
    { text: "Pre-Unicode fonts (e.g. Nudi, Baraha for Kannada) encode glyphs in ASCII slots.", options: { breakLine: true } },
    { text: "Standard OCR reads them as garbled Latin characters.", options: { breakLine: true } },
    { text: "Solution: identify the font name from PDF metadata, then apply a transliteration map to convert ASCII-encoded bytes to Unicode before OCR.", options: {} },
  ], { x: 0.35, y: 1.2, w: 4.4, h: 1.3, fontSize: 10.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.4 });

  s.addText("OCR Pipeline", { x: 5.1, y: 0.82, w: 4.5, h: 0.32, fontSize: 13, bold: true, color: C.teal, fontFace: FONT_H });
  const steps = [
    "1  Extract pages as 300 DPI PNG (pdftoppm / ImageMagick)",
    "2  Font detection → apply legacy→Unicode map",
    "3  Tesseract OCR with regional language pack",
    "4  Save per-page text to _extracted/clean_ocr/p-NNN.txt",
    "5  Concatenate → clean_concat.txt for downstream parsing",
  ];
  s.addText(steps.map(t => ({ text: t, options: { breakLine: true } })), {
    x: 5.1, y: 1.2, w: 4.5, h: 1.4, fontSize: 10.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.5
  });

  addDivider(s, 2.7, "C4B5FD");

  s.addText("Verse Segmentation Logic", { x: 0.35, y: 2.85, w: 9.3, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: FONT_H });
  const seg = [
    ["Marker detection", "Identify chapter/verse boundaries from repeated structural patterns (shloka numbers, Sanskrit śloka lines)"],
    ["Key format", "\"ch.verse\" string (e.g. \"3.16\") — integer-sortable, consistent across all languages"],
    ["Status tagging", "Tag each extracted entry: clean | screenshot_patch | ocr_uncertain | missing"],
    ["Phantom rows", "Some verse numbers in the text don't map to real commentary — flag as phantoms, include in JSON with empty commentary"],
  ];
  seg.forEach(([t, d], i) => {
    const y = 3.22 + i * 0.54;
    s.addShape(prs.shapes.OVAL, { x: 0.35, y: y + 0.08, w: 0.22, h: 0.22, fill: { color: C.gold }, line: { color: C.gold } });
    s.addText(t, { x: 0.65, y, w: 2.4, h: 0.28, fontSize: 10.5, bold: true, color: C.teal, fontFace: FONT_H, margin: 0 });
    s.addText(d, { x: 3.15, y, w: 6.5, h: 0.28, fontSize: 10, color: C.slate, fontFace: FONT_B, margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 05 — Phase 2-3 · Cleaning & Translation
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };

  s.addText("Phase 2", { x: 0.35, y: 0.22, w: 1.3, h: 0.32, fontSize: 11, bold: true, color: C.white, align: "center", fontFace: FONT_B });
  s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y: 0.22, w: 1.3, h: 0.32, fill: { color: "059669" }, line: { color: "059669" } });
  s.addText("Phase 2", { x: 0.35, y: 0.22, w: 1.3, h: 0.32, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s.addText("OCR Cleaning  ·  Phase 3: Translation", { x: 1.75, y: 0.22, w: 7.8, h: 0.35, fontSize: 16, bold: true, color: C.teal, fontFace: FONT_H });
  addDivider(s, 0.68, "059669");

  s.addText("OCR Cleaning Checklist", { x: 0.35, y: 0.82, w: 4.4, h: 0.28, fontSize: 12, bold: true, color: C.teal, fontFace: FONT_H });
  const clean = [
    "Remove page headers/footers injected by OCR",
    "Normalize Unicode (NFC) — critical for Indic scripts",
    "Strip zero-width joiners where not needed",
    "Fix line-break artifacts mid-sentence",
    "Screenshot-patch: manually verify pages with poor OCR",
    "Build patched_refs.json to track manual corrections",
    "Final count: 702 entries with status ∈ {clean, patched}",
  ];
  clean.forEach((item, i) => {
    s.addText([
      { text: "✓  ", options: { bold: true, color: C.green } },
      { text: item, options: { color: C.slate } }
    ], { x: 0.45, y: 1.17 + i * 0.44, w: 4.2, h: 0.38, fontSize: 10.5, fontFace: FONT_B });
  });

  addDivider(s, 0.72, "059669");
  // Right column: translation
  s.addText("Translation Pipeline (KN → 3 languages)", { x: 5.0, y: 0.82, w: 4.7, h: 0.28, fontSize: 12, bold: true, color: C.teal, fontFace: FONT_H });

  const langs = [
    ["EN", "English",    "F0FFF4", "059669"],
    ["HI", "Hindi",      "FFF7ED", "F59E0B"],
    ["DEV","Devanagari", "F0F4FF", "3B82F6"],
  ];
  langs.forEach(([code, name, bg, accent], i) => {
    const y = 1.22 + i * 1.1;
    s.addShape(prs.shapes.RECTANGLE, { x: 5.0, y, w: 4.65, h: 1.0, fill: { color: bg }, line: { color: "D1D5DB", width: 1 } });
    s.addShape(prs.shapes.RECTANGLE, { x: 5.0, y, w: 0.55, h: 1.0, fill: { color: accent }, line: { color: accent } });
    s.addText(code, { x: 5.0, y, w: 0.55, h: 1.0, fontSize: 13, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(name, { x: 5.65, y: y + 0.08, w: 3.9, h: 0.28, fontSize: 11, bold: true, color: C.teal, fontFace: FONT_H, margin: 0 });
    const notes = {
      "EN":  "Google Translate gtx API · Manual review for critical theological terms",
      "HI":  "Same pipeline · Devanagari script · verify verb agreement",
      "DEV": "Sanskrit/Devanagari · Highest contamination risk — see Phase 4"
    };
    s.addText(notes[code], { x: 5.65, y: y + 0.4, w: 3.9, h: 0.5, fontSize: 9.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.3, margin: 0 });
  });

  s.addText("⚡ translate_all_meanings.py — batch API calls with rate limiting and retry logic", {
    x: 5.0, y: 4.6, w: 4.65, h: 0.3, fontSize: 9.5, italic: true, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 06 — Phase 4 · Contamination (THE KEY LESSON)
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  darkSlide(s);
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: C.red }, line: { color: C.red } });

  s.addText("PHASE 4", { x: 0.45, y: 0.2, w: 1.5, h: 0.32, fontSize: 11, bold: true, color: C.red, fontFace: FONT_B });
  s.addText("Contamination Detection & Repair", { x: 0.45, y: 0.52, w: 9.1, h: 0.45, fontSize: 22, bold: true, color: C.white, fontFace: FONT_H });
  addDivider(s, 1.08, C.red);

  s.addText("Three contamination classes — each needs a different detector and fix strategy", {
    x: 0.45, y: 1.18, w: 9.1, h: 0.3, fontSize: 12, color: C.light, fontFace: FONT_B
  });

  const classes = [
    {
      icon: "🔴", title: "Script bleed (Kannada characters in DEV file)",
      count: "390 verses", fix: "detect_contamination.py — regex on U+0C80–U+0CFF · Google Translate hallucination: ಅಲ್ಲ → अल्लाह → replace with न",
      bg: "3D1515"
    },
    {
      icon: "🟡", title: "Guillemet quotes « » (Kannada source artifact)",
      count: "33 verses", fix: "Simple regex strip — « and » never occur in Sanskrit/Devanagari commentary",
      bg: "3D2E00"
    },
    {
      icon: "🟠", title: "English code-switches (speaker mixed languages in lectures)",
      count: "281 verses / 800+ occurrences", fix: "Custom fix script — 346 unique phrase patterns → Sanskrit equivalents using KN source as ground truth. Remaining OCR garbles stripped.",
      bg: "3D2000"
    },
  ];

  classes.forEach(({ icon, title, count, fix, bg }, i) => {
    const y = 1.58 + i * 1.25;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.45, y, w: 9.1, h: 1.15, fill: { color: bg }, line: { color: "555", width: 1 } });
    s.addText(icon + "  " + title, { x: 0.6, y: y + 0.1, w: 6.0, h: 0.3, fontSize: 12, bold: true, color: C.white, fontFace: FONT_H, margin: 0 });
    s.addShape(prs.shapes.RECTANGLE, { x: 6.7, y: y + 0.1, w: 2.7, h: 0.28, fill: { color: C.gold }, line: { color: C.gold } });
    s.addText(count, { x: 6.7, y: y + 0.1, w: 2.7, h: 0.28, fontSize: 10, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText("Fix: " + fix, { x: 0.6, y: y + 0.47, w: 8.8, h: 0.6, fontSize: 9.5, color: C.light, fontFace: FONT_B, lineSpacingMultiple: 1.3, margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 07 — Phase 4 continued: Contamination workflow
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  phaseTag(s, "PHASE 4 cont.", C.red);
  s.addText("Contamination Repair Workflow", { x: 2.1, y: 0.22, w: 7.5, h: 0.35, fontSize: 16, bold: true, color: C.red, fontFace: FONT_H });
  addDivider(s, 0.68, C.red);

  const steps = [
    { icon: "🔍", t: "Detect",  d: "Run detect_contamination.py\nOutputs contaminated_keys.json + per-verse detail" },
    { icon: "📖", t: "Audit",   d: "Pair DEV verse with KN source\nIdentify English phrase → find Kannada context" },
    { icon: "🛠️", t: "Fix",     d: "Apply regex replacement dictionary\nSanskrit equivalents from linguistic knowledge" },
    { icon: "✅", t: "Verify",  d: "Re-run detector: target 0/702\nSpot-check 10+ formerly-contaminated verses" },
    { icon: "📤", t: "Commit",  d: "Git add · commit with descriptive message\nPush & verify on GitHub Pages" },
  ];

  steps.forEach(({ icon, t, d }, i) => {
    const x = 0.35 + i * 1.92;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 0.9, w: 1.75, h: 0.75, fill: { color: C.red }, line: { color: C.red } });
    s.addText(icon + " " + t, { x, y: 0.9, w: 1.75, h: 0.75, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    if (i < 4) s.addText("→", { x: x + 1.75, y: 1.15, w: 0.17, h: 0.3, fontSize: 16, bold: true, color: C.red, align: "center", margin: 0 });
    s.addText(d, { x, y: 1.72, w: 1.75, h: 0.85, fontSize: 9.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.4 });
  });

  addDivider(s, 2.72, C.red);

  s.addText("Key lessons from the Bhagavadgita project", { x: 0.35, y: 2.88, w: 9.3, h: 0.3, fontSize: 13, bold: true, color: C.teal, fontFace: FONT_H });
  const lessons = [
    "Google Translate preserves speaker code-switches verbatim — the API does NOT clean them",
    "Run detect_contamination.py AFTER every translation batch, not just at the end",
    "KN source file is ground truth — always pair contaminated DEV verse with its KN equivalent before fixing",
    "Build the replacement dictionary iteratively — start with the most common phrases first",
    "gita_pages/ images + _extracted/clean_ocr/ text = dual ground truth for any disputed verse",
  ];
  lessons.forEach((l, i) => {
    s.addText([
      { text: `${i+1}.  `, options: { bold: true, color: C.red } },
      { text: l, options: { color: C.slate } }
    ], { x: 0.45, y: 3.25 + i * 0.44, w: 9.1, h: 0.38, fontSize: 10.5, fontFace: FONT_B });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 08 — Phase 5 · Viewer Architecture
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  phaseTag(s, "PHASE 5", "0284C7");
  s.addText("Interactive Viewer Architecture", { x: 2.1, y: 0.22, w: 7.5, h: 0.35, fontSize: 16, bold: true, color: "0284C7", fontFace: FONT_H });
  addDivider(s, 0.68, "0284C7");

  const tabs = [
    { name: "Browse", desc: "All concepts under their tier\nLive search · click → Focus" },
    { name: "Focus",  desc: "Single verse: śloka + commentary\nin chosen language" },
    { name: "Chapters", desc: "All 18 chapters\nJump to verse · expand commentary" },
    { name: "Map",    desc: "Concept KG visualised\nFiltered by chapter/tier" },
    { name: "Chat",   desc: "Contextual Q&A over\nthe verse database" },
  ];
  tabs.forEach(({ name, desc }, i) => {
    const x = 0.35 + i * 1.92;
    s.addShape(prs.shapes.RECTANGLE, { x, y: 0.85, w: 1.75, h: 0.5, fill: { color: "0284C7" }, line: { color: "0284C7" } });
    s.addText(name, { x, y: 0.85, w: 1.75, h: 0.5, fontSize: 13, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(desc, { x, y: 1.42, w: 1.75, h: 0.75, fontSize: 9.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.3 });
  });

  addDivider(s, 2.35, "0284C7");

  s.addText("Data architecture", { x: 0.35, y: 2.5, w: 4.3, h: 0.28, fontSize: 12, bold: true, color: C.teal, fontFace: FONT_H });
  const dataFiles = [
    ["bannanje_kn.js", "702 entries · Kannada commentary (SOURCE OF TRUTH)"],
    ["bannanje_en.js", "702 entries · English translation"],
    ["bannanje_hi.js", "702 entries · Hindi translation"],
    ["bannanje_dev.js","702 entries · Sanskrit/Devanagari (contamination-cleaned)"],
    ["data.js",                "112 concept nodes · 124 typed edges · map coordinates"],
    ["positions.js",           "x/y layout positions for the concept map"],
  ];
  dataFiles.forEach(([f, d], i) => {
    s.addText(f, { x: 0.45, y: 2.85 + i * 0.42, w: 3.4, h: 0.35, fontSize: 9.5, bold: true, color: "0284C7", fontFace: "Courier New", margin: 0 });
    s.addText(d, { x: 3.95, y: 2.85 + i * 0.42, w: 5.6, h: 0.35, fontSize: 9.5, color: C.slate, fontFace: FONT_B, margin: 0 });
  });

  s.addText("Build: build-bundle.py → viewer-bundled.html (20 MB self-contained SPA)", {
    x: 0.35, y: 5.25, w: 9.3, h: 0.27, fontSize: 9.5, italic: true, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 09 — Phases 6-7 · Knowledge Graph & Documents
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };

  // Left: KG
  s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y: 0.18, w: 1.5, h: 0.38, fill: { color: "7C3AED" }, line: { color: "7C3AED" } });
  s.addText("PHASE 6", { x: 0.35, y: 0.18, w: 1.5, h: 0.38, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s.addText("Knowledge Graph", { x: 2.0, y: 0.2, w: 2.8, h: 0.35, fontSize: 14, bold: true, color: "7C3AED", fontFace: FONT_H });
  addDivider(s, 0.66, "7C3AED");

  const kgItems = [
    ["112 nodes", "Each = one doctrinal concept"],
    ["124 edges", "8 typed relations (includes, leads-to, contrasts, grounds…)"],
    ["12 tiers", "Paramārtha → Pratīka — vertical ladder of being"],
    ["data.js", "Single source for graph + PPTX concept slides"],
    ["Madhva lens", "Hierarchical ontology: Hari > jīva > jaḍa (5 bheda)"],
  ];
  kgItems.forEach(([t, d], i) => {
    const y = 0.85 + i * 0.59;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y: y + 0.06, w: 1.1, h: 0.32, fill: { color: "EDE9FE" }, line: { color: "7C3AED", width: 1 } });
    s.addText(t, { x: 0.35, y: y + 0.06, w: 1.1, h: 0.32, fontSize: 10, bold: true, color: "7C3AED", align: "center", valign: "middle", margin: 0 });
    s.addText(d, { x: 1.55, y: y + 0.08, w: 3.1, h: 0.3, fontSize: 10, color: C.slate, fontFace: FONT_B, margin: 0 });
  });

  // Divider
  s.addShape(prs.shapes.LINE, { x: 5.05, y: 0.2, w: 0, h: 5.2, line: { color: "D1D5DB", width: 1 } });

  // Right: Documents
  s.addShape(prs.shapes.RECTANGLE, { x: 5.2, y: 0.18, w: 1.5, h: 0.38, fill: { color: "D97706" }, line: { color: "D97706" } });
  s.addText("PHASE 7", { x: 5.2, y: 0.18, w: 1.5, h: 0.38, fontSize: 11, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
  s.addText("Document Generation", { x: 6.85, y: 0.2, w: 2.8, h: 0.35, fontSize: 14, bold: true, color: "D97706", fontFace: FONT_H });
  addDivider(s, 0.66, "D97706");

  const docs = [
    { icon: "📄", name: "CLEAN.docx", note: "build_docx.py · 703 tables, Kannada+Sanskrit per verse, colour-coded status" },
    { icon: "📊", name: "4× PPTX", note: "build-decks.js · EN/HI/DEV/KN · 26 slides · concept KG in chosen script" },
    { icon: "📑", name: "XLSX", note: "build_xlsx.py · all 702 verses × 4 languages in tabular form" },
    { icon: "📦", name: "Bundle", note: "build-bundle.py · 20 MB self-contained HTML · no server needed" },
  ];
  docs.forEach(({ icon, name, note }, i) => {
    const y = 0.85 + i * 1.13;
    s.addShape(prs.shapes.RECTANGLE, { x: 5.2, y, w: 4.45, h: 1.0, fill: { color: "FFFBEB" }, line: { color: "FCD34D", width: 1 } });
    s.addText(icon + " " + name, { x: 5.35, y: y + 0.1, w: 4.1, h: 0.3, fontSize: 11.5, bold: true, color: "D97706", fontFace: FONT_H, margin: 0 });
    s.addText(note, { x: 5.35, y: y + 0.45, w: 4.1, h: 0.48, fontSize: 9.5, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.3, margin: 0 });
  });

  s.addText("⚡ All 4 build scripts run from the same _extracted/clean_verses_700.json", {
    x: 5.2, y: 5.3, w: 4.45, h: 0.27, fontSize: 9, italic: true, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 10 — Phase 8 · QA & Deployment
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  phaseTag(s, "PHASE 8", "059669");
  s.addText("QA, Verification & Deployment", { x: 2.1, y: 0.22, w: 7.5, h: 0.35, fontSize: 16, bold: true, color: "059669", fontFace: FONT_H });
  addDivider(s, 0.68, "059669");

  const qa = [
    { script: "verify.py", lang: "Python", what: "Integrity — verse count, missing keys, schema compliance" },
    { script: "verify.js", lang: "Node", what: "JS structural audit — all 4 window.BANNANJE_* objects loadable" },
    { script: "detect_contamination.py", lang: "Python", what: "Final contamination scan — target 0/702 after each fix cycle" },
    { script: "fix_english_contamination.py", lang: "Python", what: "Regex replacement pass — 281 verses, 346 phrase patterns → Sanskrit" },
    { script: "verify_map_filtering.py", lang: "Python", what: "Concept map — all 112 nodes reachable, edges valid, no orphans" },
  ];
  qa.forEach(({ script, lang, what }, i) => {
    const y = 0.85 + i * 0.67;
    s.addShape(prs.shapes.RECTANGLE, { x: 0.35, y, w: 3.2, h: 0.55, fill: { color: "F0FFF4" }, line: { color: "6EE7B7", width: 1 } });
    s.addText(script, { x: 0.45, y: y + 0.04, w: 3.0, h: 0.26, fontSize: 10, bold: true, color: "065F46", fontFace: "Courier New", margin: 0 });
    s.addText(lang, { x: 0.45, y: y + 0.3, w: 3.0, h: 0.2, fontSize: 9, color: "059669", fontFace: FONT_B, margin: 0 });
    s.addText(what, { x: 3.65, y: y + 0.1, w: 6.0, h: 0.38, fontSize: 10, color: C.slate, fontFace: FONT_B, lineSpacingMultiple: 1.3, margin: 0 });
  });

  addDivider(s, 4.28, "059669");
  s.addText("Deployment", { x: 0.35, y: 4.42, w: 9.3, h: 0.28, fontSize: 12, bold: true, color: "059669", fontFace: FONT_H });
  s.addText([
    { text: "GitHub Pages", options: { bold: true, color: "059669" } },
    { text: " · Enable in repo Settings → Pages → branch: main, root /", options: { color: C.slate } },
    { text: "   |   ", options: { color: C.light } },
    { text: "index.html", options: { bold: true, color: "059669" } },
    { text: " serves individual JS files (always up-to-date after push)", options: { color: C.slate } },
  ], { x: 0.35, y: 4.76, w: 9.3, h: 0.38, fontSize: 10.5, fontFace: FONT_B });
  s.addText("viewer-bundled.html must be rebuilt (build-bundle.py) and pushed separately after each data update.", {
    x: 0.35, y: 5.2, w: 9.3, h: 0.28, fontSize: 10, italic: true, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 11 — Pitfalls & Lessons Learned
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  darkSlide(s);
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: C.orange }, line: { color: C.orange } });

  s.addText("TOP 10 PITFALLS", { x: 0.45, y: 0.2, w: 9.1, h: 0.38, fontSize: 22, bold: true, color: C.white, fontFace: FONT_H, charSpacing: 2 });
  addDivider(s, 0.68, C.orange);

  const pitfalls = [
    ["OCR", "Legacy fonts silently produce garbled Latin — always check font metadata first"],
    ["Translation", "Machine translation preserves code-switches — your DEV will contain English phrases"],
    ["Contamination", "Run the detector after EVERY batch, not just at the end of the project"],
    ["Git locks", "Sandbox processes leave .git/index.lock — delete manually before terminal commits"],
    ["Phantom rows", "Some verse numbers in the source have no commentary — flag as phantoms, don't delete"],
    ["Bundle staleness", "viewer-bundled.html embeds data at build time — always rebuild before publishing"],
    ["GitHub Pages CORS", "file:// URLs don't work in Chrome extension — serve via http.server for local testing"],
    ["API hallucinations", "Google Translate gtx: theological terms get mangled — build a correction dictionary"],
    ["Single source of truth", "Never edit data in DOCX/PPTX directly — always edit JSON then rebuild"],
    ["Incremental fixes", "Fix contamination in batches by chapter — easier to audit and revert if wrong"],
  ];
  pitfalls.forEach(([tag, text], i) => {
    const col = i < 5 ? 0 : 1;
    const row = i < 5 ? i : i - 5;
    const x = col === 0 ? 0.45 : 5.2;
    const y = 0.85 + row * 0.93;
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 0.7, h: 0.32, fill: { color: C.orange }, line: { color: C.orange } });
    s.addText(tag, { x, y, w: 0.7, h: 0.32, fontSize: 9, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(text, { x: x + 0.8, y: y + 0.02, w: 4.0, h: 0.3, fontSize: 10, color: C.light, fontFace: FONT_B, margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 12 — Reuse Checklist
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  s.background = { color: C.cream };
  s.addText("Starting a New Project?", { x: 0.35, y: 0.2, w: 9.3, h: 0.42, fontSize: 22, bold: true, color: C.teal, fontFace: FONT_H });
  addDivider(s, 0.73, C.teal);
  s.addText("Use this checklist before Phase 1", { x: 0.35, y: 0.82, w: 9.3, h: 0.3, fontSize: 13, italic: true, color: C.slate, fontFace: FONT_B });

  const checks = [
    { ph: "Setup",   c: "Identify source language, font encoding, verse/chapter structure" },
    { ph: "Setup",   c: "Create JSON schema: key format, required fields, status enum" },
    { ph: "OCR",     c: "Test OCR on 5 pages before full run — fix font map first" },
    { ph: "OCR",     c: "Screenshot-patch plan for low-confidence pages" },
    { ph: "Translate",c: "Translation API key + rate-limit handling + retry logic" },
    { ph: "Contaminate",c: "Write contamination detector BEFORE running translation" },
    { ph: "Viewer",  c: "Design data file names and window.* variable naming convention" },
    { ph: "Viewer",  c: "Decide: bundled SPA vs. individual JS files (affects deployment)" },
    { ph: "Docs",    c: "Write build scripts from JSON source, not from individual files" },
    { ph: "QA",      c: "Verification script runs as part of every commit (CI/CD)" },
    { ph: "Deploy",  c: "GitHub Pages enabled · index.html points to correct JS paths" },
    { ph: "Docs",    c: "HANDOFF.md updated after each session — session continuity" },
  ];

  const phColors = { Setup:"4F46E5", OCR:"7C3AED", Translate:"059669", Contaminate:"DC2626", Viewer:"0284C7", Docs:"D97706", QA:"065F46", Deploy:"1D4ED8" };

  checks.forEach(({ ph, c }, i) => {
    const col = i < 6 ? 0 : 1;
    const row = i < 6 ? i : i - 6;
    const x = col === 0 ? 0.35 : 5.1;
    const y = 1.28 + row * 0.7;
    const color = phColors[ph] || C.teal;
    s.addShape(prs.shapes.RECTANGLE, { x, y: y + 0.06, w: 0.8, h: 0.26, fill: { color }, line: { color } });
    s.addText(ph, { x, y: y + 0.06, w: 0.8, h: 0.26, fontSize: 8, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addShape(prs.shapes.RECTANGLE, { x: x + 0.88, y: y + 0.08, w: 0.22, h: 0.22, fill: { color: "F3F4F6" }, line: { color: "9CA3AF", width: 1 } });
    s.addText(c, { x: x + 1.2, y: y + 0.06, w: 3.5, h: 0.28, fontSize: 9.5, color: C.slate, fontFace: FONT_B, margin: 0 });
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 13 — Results snapshot (Bhagavadgita project)
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  darkSlide(s);
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: C.gold }, line: { color: C.gold } });

  s.addText("REFERENCE PROJECT", { x: 0.45, y: 0.2, w: 4.5, h: 0.32, fontSize: 12, bold: true, color: C.gold, fontFace: FONT_B, charSpacing: 2 });
  s.addText("Bhagavad Gītā · Bannanje Govindacharya", { x: 0.45, y: 0.52, w: 9.0, h: 0.42, fontSize: 20, bold: true, color: C.white, fontFace: FONT_H });
  addDivider(s, 1.06, C.gold);

  const stats = [
    ["576", "Source pages"],
    ["702", "Verses extracted"],
    ["4",   "Languages"],
    ["112", "Concept nodes"],
    ["124", "Graph edges"],
    ["0",   "Contaminated\nverses (post-fix)"],
  ];
  stats.forEach(([num, label], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.45 + col * 3.2;
    const y = 1.3 + row * 2.0;
    s.addShape(prs.shapes.RECTANGLE, { x, y, w: 2.9, h: 1.7, fill: { color: "1E2A4A" }, line: { color: C.gold, width: 1 } });
    s.addText(num, { x, y: y + 0.2, w: 2.9, h: 0.8, fontSize: 52, bold: true, color: C.gold, fontFace: FONT_H, align: "center", valign: "middle", margin: 0 });
    s.addText(label, { x, y: y + 1.05, w: 2.9, h: 0.5, fontSize: 11, color: C.light, fontFace: FONT_B, align: "center", lineSpacingMultiple: 1.2 });
  });

  s.addText("Live at: https://kvinayakpai.github.io/Bhagavadgita/", {
    x: 0.45, y: 5.25, w: 9.1, h: 0.27, fontSize: 10, color: C.light, fontFace: FONT_B
  });
}

// ══════════════════════════════════════════════════════════════════════════════
// SLIDE 14 — End
// ══════════════════════════════════════════════════════════════════════════════
{
  const s = prs.addSlide();
  darkSlide(s);
  s.addShape(prs.shapes.RECTANGLE, { x: 0, y: 0, w: 0.25, h: 5.625, fill: { color: C.gold }, line: { color: C.gold } });
  s.addText("This template is reusable for any regional-language text digitisation project.", {
    x: 0.55, y: 1.5, w: 8.5, h: 0.6, fontSize: 20, color: C.white, fontFace: FONT_H, lineSpacingMultiple: 1.4
  });
  addDivider(s, 2.3, C.gold);
  s.addText([
    { text: "Adapt:", options: { bold: true, color: C.gold } },
    { text: "  source language · verse key format · contamination patterns · translation API", options: { color: C.light } },
  ], { x: 0.55, y: 2.5, w: 8.5, h: 0.4, fontSize: 12, fontFace: FONT_B });
  s.addText([
    { text: "Keep:", options: { bold: true, color: C.gold } },
    { text: "   single JSON source-of-truth · verify-then-commit workflow · contamination detector", options: { color: C.light } },
  ], { x: 0.55, y: 3.05, w: 8.5, h: 0.4, fontSize: 12, fontFace: FONT_B });
  s.addText("श्री कृष्णार्पणमस्तु", { x: 0.55, y: 4.2, w: 8.5, h: 0.55, fontSize: 22, italic: true, color: C.gold, fontFace: FONT_H, align: "center" });
}

// ── Write ─────────────────────────────────────────────────────────────────────
const OUT = "/sessions/fervent-blissful-lovelace/mnt/Bhagavadgita/LocalLanguage_PDF_to_Multilingual_Solution_Template.pptx";
prs.writeFile({ fileName: OUT }).then(() => console.log("✅ PPTX written:", OUT)).catch(e => { console.error(e); process.exit(1); });
