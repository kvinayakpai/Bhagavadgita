/**
 * build_template_docx.js
 * Builds: Local-Language PDF → Multilingual Solution — Pipeline Template (DOCX)
 */
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, HeadingLevel, AlignmentType, BorderStyle, WidthType,
  ShadingType, TableOfContents, PageNumber, PageBreak, LevelFormat,
  ExternalHyperlink, VerticalAlign
} = require("docx");
const fs = require("fs");

// ── Constants ────────────────────────────────────────────────────────────────
const W = 9360; // content width in DXA (US Letter, 1" margins)
const BORDER = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const BORDERS = { top: BORDER, bottom: BORDER, left: BORDER, right: BORDER };
const NO_BORDER = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const NO_BORDERS = { top: NO_BORDER, bottom: NO_BORDER, left: NO_BORDER, right: NO_BORDER };

const COLOR = {
  teal:    "0F3460",
  gold:    "C8102E",
  green:   "065F46",
  orange:  "B45309",
  red:     "991B1B",
  purple:  "5B21B6",
  blue:    "1D4ED8",
  slate:   "374151",
  light:   "6B7280",
  cream:   "FFFBEB",
};

// ── Helpers ──────────────────────────────────────────────────────────────────
function h1(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun({ text, font: "Georgia" })] });
}
function h2(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun({ text, font: "Georgia" })] });
}
function h3(text) {
  return new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun({ text, font: "Georgia" })] });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { after: 160 },
    children: [new TextRun({ text, font: "Calibri", size: 22, color: COLOR.slate, ...opts })]
  });
}
function pRich(runs) {
  return new Paragraph({
    spacing: { after: 160 },
    children: runs.map(([text, opts = {}]) => new TextRun({ text, font: "Calibri", size: 22, color: COLOR.slate, ...opts }))
  });
}
function bullet(items, numbering) {
  return items.map(text => new Paragraph({
    numbering: { reference: numbering || "bullets", level: 0 },
    spacing: { after: 100 },
    children: [new TextRun({ text, font: "Calibri", size: 22, color: COLOR.slate })]
  }));
}
function numbered(items) {
  return items.map(text => new Paragraph({
    numbering: { reference: "numbers", level: 0 },
    spacing: { after: 100 },
    children: [new TextRun({ text, font: "Calibri", size: 22, color: COLOR.slate })]
  }));
}
function rule() {
  return new Paragraph({
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" } },
    spacing: { after: 200, before: 200 },
    children: []
  });
}
function callout(text, bg, borderColor) {
  return new Table({
    width: { size: W, type: WidthType.DXA },
    columnWidths: [W],
    rows: [new TableRow({ children: [new TableCell({
      borders: { top: { style: BorderStyle.SINGLE, size: 8, color: borderColor }, bottom: BORDER, left: { style: BorderStyle.SINGLE, size: 8, color: borderColor }, right: BORDER },
      shading: { fill: bg, type: ShadingType.CLEAR },
      margins: { top: 120, bottom: 120, left: 180, right: 180 },
      width: { size: W, type: WidthType.DXA },
      children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text, font: "Calibri", size: 21, color: COLOR.slate })] })]
    })]})],
  });
}
function twoCol(rows) {
  // Simple 2-column table
  const w1 = 2520, w2 = W - w1;
  return new Table({
    width: { size: W, type: WidthType.DXA },
    columnWidths: [w1, w2],
    rows: rows.map(([label, value]) => new TableRow({ children: [
      new TableCell({
        borders: BORDERS, width: { size: w1, type: WidthType.DXA },
        shading: { fill: "F3F4F6", type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: label, font: "Calibri", size: 22, bold: true, color: COLOR.teal })] })]
      }),
      new TableCell({
        borders: BORDERS, width: { size: w2, type: WidthType.DXA },
        margins: { top: 80, bottom: 80, left: 120, right: 120 },
        children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: value, font: "Calibri", size: 22, color: COLOR.slate })] })]
      }),
    ]}))
  });
}
function spacer() { return new Paragraph({ spacing: { after: 240 }, children: [] }); }
function pb() { return new Paragraph({ children: [new PageBreak()] }); }

// ── Document ──────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "•", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "check",   levels: [{ level: 0, format: LevelFormat.BULLET, text: "☐", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  styles: {
    default: { document: { run: { font: "Calibri", size: 22, color: COLOR.slate } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 40, bold: true, font: "Georgia", color: COLOR.teal }, paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Georgia", color: COLOR.teal }, paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 26, bold: true, font: "Georgia", color: "374151" }, paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: { size: { width: 12240, height: 15840 }, margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } }
    },
    headers: {
      default: new Header({ children: [new Paragraph({
        border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" } },
        spacing: { after: 120 },
        children: [
          new TextRun({ text: "Local-Language PDF → Multilingual Solution  ·  Pipeline Template", font: "Calibri", size: 18, color: COLOR.light }),
          new TextRun({ text: "\t", font: "Calibri", size: 18 }),
          new TextRun({ text: "Page ", font: "Calibri", size: 18, color: COLOR.light }),
          new TextRun({ children: [PageNumber.CURRENT], font: "Calibri", size: 18, color: COLOR.light }),
        ],
        tabStops: [{ type: "right", position: W }],
      })] })
    },
    children: [
      // ── Cover ──────────────────────────────────────────────────────────────
      new Paragraph({ spacing: { before: 1440, after: 80 }, children: [new TextRun({ text: "PROJECT PIPELINE TEMPLATE", font: "Georgia", size: 52, bold: true, color: COLOR.teal })] }),
      new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: "Local-Language PDF → Multilingual Solution", font: "Georgia", size: 40, italic: true, color: COLOR.gold })] }),
      rule(),
      p("A reusable 9-phase guide for digitising regional-language texts with legacy fonts into fully indexed, multilingual, web-delivered knowledge products.", { size: 24, italic: true }),
      spacer(),
      twoCol([
        ["Source",        "Scanned book PDF · legacy/regional font encoding"],
        ["Target",        "Interactive multilingual SPA + DOCX + PPTX + XLSX"],
        ["Languages",     "Any regional source → English, Hindi, Devanagari, + source"],
        ["Reference",     "Bhagavad Gītā · Bannanje Govindacharya commentary (2025–26)"],
        ["Deliverables",  "9 build scripts · 4 language files · viewer · 4 document types"],
        ["Last updated",  "2026-06-03"],
      ]),
      pb(),

      // ── TOC ───────────────────────────────────────────────────────────────
      h1("Table of Contents"),
      new TableOfContents("Table of Contents", { hyperlink: true, headingStyleRange: "1-3" }),
      pb(),

      // ── Intro ─────────────────────────────────────────────────────────────
      h1("Introduction"),
      p("This template distils the complete pipeline used in the Bhagavad Gītā digitisation project into a reusable guide. The project converted a 576-page scanned Kannada book — typeset in a pre-Unicode legacy font — into a 702-verse multilingual database delivered as an interactive web application, four language decks, and a Word document, all rebuilt automatically from a single JSON source."),
      p("Every phase described here is battle-tested. The pitfalls section in particular reflects real failures encountered and corrected during the project."),
      spacer(),
      callout("Core rule: every output (DOCX, PPTX, XLSX, bundled viewer) must be rebuildable from ONE JSON source-of-truth file. Never edit data in the output documents — always edit the JSON and rebuild.", "FFFBEB", COLOR.gold),
      pb(),

      // ── Phase 0 ───────────────────────────────────────────────────────────
      h1("Phase 0 · Project Setup"),
      h2("Folder structure"),
      twoCol([
        ["source/",        "Original PDF(s) and any supplementary scan images"],
        ["gita_pages/",    "Per-page PNG exports from the PDF (300 DPI minimum)"],
        ["_extracted/",    "clean_ocr/ · clean_verses_NNN.json · patched_refs.json"],
        ["decks/",         "Output PPTX and PDF files"],
        ["scripts/",       "All build, verify, and fix scripts"],
        ["bannanje_*.js",  "Language data files (one per language, window.* namespace)"],
      ]),
      spacer(),
      h2("Toolchain"),
      ...bullet(["Python 3.12 — OCR cleanup, build scripts, contamination detection","Node.js 22 — pptxgenjs (decks), docx (Word documents), viewer bundle","Tesseract — OCR engine (install regional language pack)","pdftoppm / ImageMagick — PDF → PNG at 300 DPI","git + GitHub Pages — version control and hosting"]),
      spacer(),
      h2("Key decision: font encoding"),
      p("Before any OCR work, identify the font embedded in the PDF. Pre-Unicode fonts (Nudi, Baraha, ISM for Kannada/Telugu/Devanagari) encode glyphs in ASCII codepoints. Standard OCR will produce garbled Latin output. You must build a transliteration map (ASCII byte → Unicode codepoint) specific to that font before running Tesseract."),
      callout("If the PDF uses a Unicode-compliant font (most post-2010 documents), skip the transliteration step and go straight to Tesseract with the regional language pack.", "F0FFF4", COLOR.green),
      pb(),

      // ── Phase 1 ───────────────────────────────────────────────────────────
      h1("Phase 1 · PDF → OCR"),
      h2("Export pages"),
      ...numbered(["Run: pdftoppm -jpeg -r 300 source.pdf gita_pages/page", "Verify: spot-check pages 1, 50, 100, 200, 300, last — check clarity", "If DPI < 300 or images are blurry: rescan or use ImageMagick to upscale before OCR"]),
      spacer(),
      h2("OCR pipeline"),
      ...numbered(["Apply legacy→Unicode transliteration map (if pre-Unicode font)", "Run Tesseract with regional pack: tesseract page_NNNN.png out -l kan+eng", "Save output to _extracted/clean_ocr/p-NNN.txt (one file per page)", "Concatenate all pages: cat _extracted/clean_ocr/*.txt > _extracted/clean_concat.txt"]),
      spacer(),
      h2("Verse segmentation"),
      p("Parse clean_concat.txt to extract individual verse entries. Key decisions:"),
      ...bullet(["Key format — use 'ch.verse' string (e.g. '3.16'). Integer-sortable, consistent across all 4 language files.", "Status flags — assign each entry a status: clean | screenshot_patch | ocr_uncertain | missing.", "Phantom rows — some verse numbers in the source have no commentary. Include them in JSON with empty commentary field and status: phantom. Do NOT skip them.", "Screenshot patches — for pages with poor OCR, read the gita_pages/ PNG directly and transcribe manually. Record the verse key in patched_refs.json."]),
      callout("Lesson: Verse keys must be stable from this point. Changing the key format after translation has started requires re-running all 3 translation batches.", "FEF2F2", COLOR.red),
      pb(),

      // ── Phase 2 ───────────────────────────────────────────────────────────
      h1("Phase 2 · OCR Cleaning"),
      h2("Normalisation steps"),
      ...bullet(["unicodedata.normalize('NFC', text) — mandatory for Indic scripts; NFC resolves composed vs. decomposed forms", "Strip zero-width joiners (\\u200C, \\u200D) except where needed for Indic conjuncts", "Remove page headers/footers injected into OCR output", "Fix line-break artifacts mid-sentence (heuristic: line ending mid-word without punctuation)", "Normalise quotation marks and dashes to Unicode standard characters"]),
      spacer(),
      h2("Screenshot patching"),
      p("For any verse where OCR confidence is low, open the corresponding gita_pages/page_NNNN.png, read it visually, and transcribe into the JSON manually. Record the key in patched_refs.json with a note explaining the patch."),
      spacer(),
      h2("Final count audit"),
      ...bullet(["Expected: one JSON entry per verse key", "Verify: all chapter numbers (1–18) present, all verse numbers sequential (allowing for phantoms)", "Status distribution: count clean, screenshot_patch, missing — target < 1% missing"]),
      pb(),

      // ── Phase 3 ───────────────────────────────────────────────────────────
      h1("Phase 3 · Translation"),
      h2("Pipeline overview"),
      p("translate_all_meanings.py uses the Google Translate gtx API to batch-translate the Kannada (KN) source commentary into English (EN), Hindi (HI), and Devanagari/Sanskrit (DEV). Key parameters:"),
      twoCol([
        ["Batch size",     "50 verses per API call (avoid rate limits)"],
        ["Retry logic",    "Exponential backoff — 3 retries on HTTP 429/503"],
        ["Rate limit",     "1 second sleep between batches"],
        ["Output",         "bannanje_en.js · bannanje_hi.js · bannanje_dev.js"],
        ["Variable name",  "window.BANNANJE_VERSE_MEANINGS_EN / _HI / _DEV"],
        ["Completeness",   "Verify all keys present in output — missing = API error mid-run"],
      ]),
      spacer(),
      h2("Critical translation caveats"),
      ...bullet(["Machine translation PRESERVES speaker code-switches. If the original Kannada lecture contains English phrases, they will appear in the DEV output as English — not Sanskrit.", "Theological terms are frequently mis-translated. Build a correction dictionary for high-frequency terms before the translation run.", "Devanagari output quality is lower than English/Hindi — expect the most contamination in the DEV file.", "Translation does not preserve formatting (newlines, punctuation) consistently — add a post-processing normalisation step."]),
      callout("Do NOT assume the translation output is clean. Run the contamination detector (Phase 4) immediately after every translation batch.", "FEF2F2", COLOR.red),
      pb(),

      // ── Phase 4 ───────────────────────────────────────────────────────────
      h1("Phase 4 · Contamination Detection & Repair"),
      p("This is the most critical phase. Three distinct contamination classes exist, each requiring a different detector and fix strategy."),
      spacer(),
      h2("Class 1 — Script bleed (Kannada Unicode in DEV file)"),
      twoCol([
        ["Cause",    "Google Translate hallucination: Kannada negation particle ಅಲ್ಲ (alla) → अल्लाह (Arabic)"],
        ["Scale",    "390 verses affected in reference project"],
        ["Detector", "detect_contamination.py — regex on U+0C80–U+0CFF + guillemet quotes « »"],
        ["Fix",      "अल्लाह → न · इल्लाह → न विद्यते · guillemets → stripped"],
      ]),
      spacer(),
      h2("Class 2 — Guillemet quotes « »"),
      twoCol([
        ["Cause",    "Formatting artifact from original Kannada source text emphasis markers"],
        ["Scale",    "33 verses in reference project"],
        ["Detector", "Regex: [«»]"],
        ["Fix",      "Strip or replace with appropriate Sanskrit quotation convention"],
      ]),
      spacer(),
      h2("Class 3 — English code-switches (most common)"),
      twoCol([
        ["Cause",    "Speaker mixed English phrases in lectures; Google Translate preserved them verbatim"],
        ["Scale",    "281 verses / 800+ occurrences · 346 unique phrase patterns in reference project"],
        ["Detector", "Regex: [a-zA-Z]{2,} on Devanagari-expected file"],
        ["Fix",      "fix_english_contamination.py — phrase-level regex replacement dictionary"],
        ["Strategy", "Pair each contaminated DEV verse with KN source; derive correct Sanskrit from context"],
        ["Tools",    "gita_pages/ PNGs and _extracted/clean_ocr/ text as dual ground truth"],
      ]),
      spacer(),
      h2("Contamination repair workflow"),
      ...numbered(["Run detect_contamination.py → contaminated_keys.json", "For each key: read DEV text + KN text side-by-side", "Identify English phrase → find Kannada equivalent → derive Sanskrit replacement", "Add (regex_pattern, sanskrit_replacement) to fix_english_contamination.py", "Apply fixes → re-run detector → target 0/702", "Git add + commit + push → verify on live site"]),
      callout("Lesson: The existing detect_contamination.py catches Classes 1 & 2. English code-switches (Class 3) require a separate custom detector using /[a-zA-Z]{2,}/ regex on the DEV file specifically.", "FFF7ED", COLOR.orange),
      pb(),

      // ── Phase 5 ───────────────────────────────────────────────────────────
      h1("Phase 5 · Viewer Build"),
      h2("Architecture"),
      p("The viewer is a single-page application (SPA) served as static files from GitHub Pages. All data is loaded client-side from the bannanje_*.js files via script tags."),
      twoCol([
        ["viewer.html",                "Main SPA — loads all JS files individually (always up-to-date)"],
        ["viewer-bundled.html",        "Self-contained 20 MB bundle — must rebuild after each data update"],
        ["bannanje_kn.js",     "702 entries · Kannada source (SOURCE OF TRUTH)"],
        ["bannanje_en/hi/dev.js","702 entries each · translated languages"],
        ["data.js",                    "112 concept nodes · 124 typed edges · map positions"],
        ["positions.js",               "Concept map x/y layout coordinates"],
        ["build-bundle.py",            "Inlines all JS into viewer-bundled.html"],
      ]),
      spacer(),
      h2("Language toggle implementation"),
      p("All 4 language files export to window.BANNANJE_VERSE_MEANINGS, window.BANNANJE_VERSE_MEANINGS_EN, _HI, and _DEV. The viewer switches between them client-side on language button click — no server required."),
      spacer(),
      h2("Tabs"),
      twoCol([
        ["Browse",   "All concepts listed under their tier — live search — click → Focus"],
        ["Focus",    "Single verse: Sanskrit śloka + commentary in chosen language"],
        ["Chapters", "All 18 chapters — jump to verse — expandable commentary per verse"],
        ["Map",      "Concept Knowledge Graph visualised — filterable by chapter/tier/relation"],
        ["Chat",     "Contextual Q&A over the verse database"],
      ]),
      pb(),

      // ── Phase 6 ───────────────────────────────────────────────────────────
      h1("Phase 6 · Knowledge Graph"),
      h2("Structure"),
      twoCol([
        ["Nodes",      "112 — one per doctrinal concept"],
        ["Edges",      "124 — typed relations between concepts"],
        ["Tiers",      "12 horizontal bands — Paramārtha (top) to Pratīka (bottom)"],
        ["Ontology",   "Madhva siddhānta — strict hierarchy: Hari > jīva > jaḍa"],
        ["5 bhedas",   "Five real eternal differences encoded as edge types"],
        ["Source",     "data.js — single source for graph + PPTX concept slides"],
      ]),
      spacer(),
      h2("Edge vocabulary (8 typed relations)"),
      ...bullet(["includes — concept A contains concept B as a sub-category","leads-to — path from practice to outcome","contrasts — explicit doctrinal opposition","grounds — metaphysical foundation relationship","instantiates — concrete example of abstract principle","part-of — compositional relationship","precedes — temporal or logical ordering","expressed-by — ślokas that articulate the concept"]),
      pb(),

      // ── Phase 7 ───────────────────────────────────────────────────────────
      h1("Phase 7 · Document Generation"),
      p("All output documents rebuild from _extracted/clean_verses_NNN.json. Never edit documents directly."),
      h2("Build scripts"),
      twoCol([
        ["build_docx.py",      "Bhagavad_Gita_All_Verses_CLEAN.docx — 703 tables, one per verse, colour-coded status"],
        ["build-decks.js",     "4 × PPTX — EN/HI/DEV/KN — 26 slides — concept KG in chosen script"],
        ["build_xlsx.py",      "XLSX — 702 verses × 4 languages in tabular form"],
        ["build-bundle.py",    "viewer-bundled.html — 20 MB self-contained SPA"],
      ]),
      spacer(),
      h2("Path management"),
      callout("All build scripts hardcode absolute paths. When moving the project folder, update paths at the top of each script. In the reference project: C:\\Antigravity\\Bhagavadgita → C:\\Claude\\Bhagavadgita required updating 4 scripts.", "FEF2F2", COLOR.red),
      pb(),

      // ── Phase 8 ───────────────────────────────────────────────────────────
      h1("Phase 8 · QA & Deployment"),
      h2("Verification scripts"),
      twoCol([
        ["verify.py",                     "Verse count, missing keys, schema compliance, character encoding"],
        ["verify.js",                     "JS structural audit — all 4 window.BANNANJE_* loadable"],
        ["detect_contamination.py",        "Post-fix contamination scan — target 0/702"],
        ["fix_english_contamination.py",   "Regex replacement pass — run after each translation update"],
        ["verify_map_filtering.py",        "112 nodes reachable, all edges valid, no orphans"],
      ]),
      spacer(),
      h2("Deployment checklist"),
      ...bullet(["GitHub Pages enabled: Settings → Pages → branch: main, root /","index.html serves individual JS files (always current after push)","viewer-bundled.html rebuilt with build-bundle.py before every release","HANDOFF.md updated with session summary, current status, known issues","contaminated_keys.json committed (shows clean = []) as proof of QA pass"]),
      spacer(),
      callout("Local testing: file:// URLs do not work with the Chrome extension. Use python3 -m http.server 8080 and navigate to http://localhost:8080/viewer.html", "F0FFF4", COLOR.green),
      pb(),

      // ── Pitfalls ──────────────────────────────────────────────────────────
      h1("Top 10 Pitfalls"),
      new Table({
        width: { size: W, type: WidthType.DXA },
        columnWidths: [540, 2160, 6660],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: BORDERS, shading: { fill: COLOR.teal, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, width: { size: 540, type: WidthType.DXA }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "#", font: "Calibri", size: 20, bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: BORDERS, shading: { fill: COLOR.teal, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, width: { size: 2160, type: WidthType.DXA }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Phase", font: "Calibri", size: 20, bold: true, color: "FFFFFF" })] })] }),
            new TableCell({ borders: BORDERS, shading: { fill: COLOR.teal, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, width: { size: 6660, type: WidthType.DXA }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: "Pitfall & Lesson", font: "Calibri", size: 20, bold: true, color: "FFFFFF" })] })] }),
          ]}),
          ...([
            ["1", "OCR",         "Legacy fonts silently produce garbled Latin. Always check font metadata first and build a transliteration map before running Tesseract."],
            ["2", "Translation", "Machine translation preserves code-switches verbatim. Run the contamination detector after EVERY translation batch, not at the end."],
            ["3", "Contamination","Build the replacement dictionary iteratively — most-common phrases first. Do not attempt to fix all 346 patterns in one pass."],
            ["4", "Git",         "Sandbox processes leave .git/index.lock and .git/HEAD.lock stale. Delete manually (del .git/*.lock on Windows) before committing."],
            ["5", "Phantoms",    "Some verse numbers in the source have no commentary. Include in JSON with empty commentary + status:phantom. Deleting them breaks verse-count audits."],
            ["6", "Bundle",      "viewer-bundled.html embeds data at build time. Always rebuild with build-bundle.py before publishing — stale bundle serves old (contaminated) data."],
            ["7", "CORS",        "file:// URLs fail in Chrome extension for local testing. Use python3 -m http.server 8080 and navigate to localhost."],
            ["8", "API",         "Google Translate gtx hallucination: theological terms get mangled. Build a theological correction dictionary and apply post-translation."],
            ["9", "Source",      "Never edit data inside DOCX/PPTX/XLSX directly. Always edit JSON then rebuild. Editing documents creates drift between source and outputs."],
            ["10","Paths",       "All build scripts use hardcoded absolute paths. When the project folder moves, update path constants at the top of every script before running."],
          ]).map(([n, phase, text], i) => new TableRow({ children: [
            new TableCell({ borders: BORDERS, shading: { fill: i % 2 === 0 ? "F9FAFB" : "FFFFFF", type: ShadingType.CLEAR }, width: { size: 540, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ spacing: { after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: n, font: "Calibri", size: 21, bold: true, color: COLOR.teal })] })] }),
            new TableCell({ borders: BORDERS, shading: { fill: i % 2 === 0 ? "F9FAFB" : "FFFFFF", type: ShadingType.CLEAR }, width: { size: 2160, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text: phase, font: "Calibri", size: 21, bold: true, color: COLOR.orange })] })] }),
            new TableCell({ borders: BORDERS, shading: { fill: i % 2 === 0 ? "F9FAFB" : "FFFFFF", type: ShadingType.CLEAR }, width: { size: 6660, type: WidthType.DXA }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ spacing: { after: 0 }, children: [new TextRun({ text, font: "Calibri", size: 21, color: COLOR.slate })] })] }),
          ]}))
        ]
      }),
      pb(),

      // ── Checklist ─────────────────────────────────────────────────────────
      h1("New Project Checklist"),
      p("Use this before starting Phase 1. Check each item before proceeding."),
      spacer(),
      h3("Setup"),
      ...bullet(["Identify source language, font encoding, verse/chapter structure","Create JSON schema: key format, required fields, status enum","Enable GitHub Pages on the repository","Write HANDOFF.md template with project goal, status fields, known issues section"], "check"),
      h3("OCR"),
      ...bullet(["Test OCR on 5 representative pages before full run","Build legacy→Unicode transliteration map if pre-Unicode font detected","Screenshot-patch plan for low-confidence pages"], "check"),
      h3("Translation"),
      ...bullet(["Translation API key configured with rate-limit handling","Theological correction dictionary prepared","Post-translation contamination detector written and tested"], "check"),
      h3("Viewer"),
      ...bullet(["Data file naming convention: window.BRAND_VERSES_LANG","bannanje_*.js pattern with module.exports for Node.js compatibility","GitHub Pages URL tested in real browser"], "check"),
      h3("Documents"),
      ...bullet(["All build scripts reference single JSON source path","Path constants at top of each script (easy to update when folder moves)","Build order: JSON → DOCX → PPTX → XLSX → bundle"], "check"),
      h3("QA"),
      ...bullet(["verify.py runs clean before every commit","detect_contamination.py target: 0 contaminated entries","contaminated_keys.json committed as evidence"], "check"),
      pb(),

      // ── Reference project results ──────────────────────────────────────────
      h1("Reference Project Results"),
      p("Bhagavad Gītā · Bannanje Govindacharya Commentary · 2025–2026"),
      spacer(),
      twoCol([
        ["Source",                 "576-page scanned book, Kannada, pre-Unicode Nudi font"],
        ["Verses extracted",       "702 (all 18 chapters · Bannanje verse numbering)"],
        ["Languages",              "4 — Kannada (source) + English + Hindi + Devanagari"],
        ["Concept nodes",          "112 (Madhva siddhānta ontology)"],
        ["Typed edges",            "124 (8 relation types)"],
        ["DEV contamination",      "281/702 verses (40%) → 0/702 after fix"],
        ["KN contamination",       "33 guillemet verses → 0 after strip"],
        ["Viewer tabs",            "Browse · Focus · Chapters · Map · Chat"],
        ["Output documents",       "DOCX · 4 × PPTX · XLSX · 20 MB bundled HTML"],
        ["Live site",              "https://kvinayakpai.github.io/Bhagavadgita/"],
      ]),
      spacer(),
      new Paragraph({ spacing: { after: 0 }, alignment: AlignmentType.CENTER, children: [new TextRun({ text: "श्री कृष्णार्पणमस्तु", font: "Georgia", size: 28, italic: true, color: COLOR.teal })] }),
    ]
  }]
});

Packer.toBuffer(doc).then(buffer => {
  const OUT = "/sessions/fervent-blissful-lovelace/mnt/Bhagavadgita/LocalLanguage_PDF_to_Multilingual_Solution_Template.docx";
  fs.writeFileSync(OUT, buffer);
  console.log("✅ DOCX written:", OUT);
}).catch(e => { console.error(e); process.exit(1); });
