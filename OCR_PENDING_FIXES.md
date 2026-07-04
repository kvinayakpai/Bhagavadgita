# Pending OCR Fixes — Requires Book Page Vision-Reading

**Created:** July 4, 2026  
**Context:** These 6 anvaya corruptions were identified in `bannanje_kn.js` during a systematic scan session. They require vision-reading the relevant `gita_pages/` PNGs to confirm the correct text before applying fixes. Do NOT apply fixes based on OCR or linguistic inference alone — book page is authoritative.

**Protocol:**
1. `view /home/claude/Bhagavadgita/gita_pages/page_NNNN.png` to read the page
2. Locate the anvaya (word-split Sanskrit between shloka and prose commentary)
3. Confirm the correct text
4. Apply fix with `str.replace()` in both `bannanje_kn.js` and `viewer.html`
5. Run JS parse validation
6. Commit and push

---

## 1. BG 2.38 — Severe garble at start of anvaya

**File:** `bannanje_kn.js`, key `"2.38"`  
**Book pages to read:** `page_0064.png` (book page 63)  
**Current corrupt text (line 1):** `ಛಿ ೫ 1 ಸ್ಯ`  
**Current corrupt text (line 2):** `ಸುಖ ದುಃಖೇ ಸಮೇ ಕೃತ್ವಾ ಲಾಭ ಅಲಾಭೌ ಜಯ ಅಜಯಾೌ |`  
**Note:** Line 1 `ಛಿ ೫ 1 ಸ್ಯ` appears between the shloka and the anvaya — it is a garble of what should be the first line of the anvaya. Line 2 also has `ಅಜಯಾೌ` (spurious ಆ) — should likely be `ಅಜಯೌ`. The shloka is:  
`ಸುಖದುಃಖೇ ಸಮೇ ಕೃತ್ವಾ ಲಾಭಾಲಾಭೌ ಜಯಾಜಯೌ | ತತೋ ಯುದ್ಧಾಯ ಯುಜ್ಯಸ್ವ ನೈವಂ ಪಾಪಮವಾಪ್ಸ್ಯಸಿ`  
**Expected anvaya (to confirm from page):** Something like `ಸುಖ ದುಃಖೇ ಸಮೇ ಕೃತ್ವಾ ಲಾಭ ಅಲಾಭೌ ಜಯ ಅಜಯೌ | ತತಃ ಯುದ್ಧಾಯ ಯುಜ್ಯಸ್ವ ನ ಏವಮ್‌ ಪಾಪಮ್‌ ಅವಾಪ್ಸ್ಯಸಿ`  
**What to fix:** Remove `ಛಿ ೫ 1 ಸ್ಯ` entirely (it is noise, not real anvaya text); fix `ಅಜಯಾೌ` → `ಅಜಯೌ` if confirmed.

---

## 2. BG 2.45 — Two corruptions in anvaya

**File:** `bannanje_kn.js`, key `"2.45"`  
**Book pages to read:** `page_0072.png` (book page 71)  
**Current corrupt text:** `ತ್ರೈಗುಣ್ಯ ವಿಷಯಾಃ ವೇದಾಃ ವಿಸ್ಟ $ಗುಣ್ಯಃ ಭವ ಅರ್ಜುನ | | ನಿರ್ದ್ವಂದ್ವಃ ನಿತ್ಯಸತ್ತ್ವಸ್ಛಃ ನಿರ್ಯೋಗಕ್ಷೇಮಃ ಆತ್ಮವಾನ್`  
**Corruption 1:** `ವಿಸ್ಟ $ಗುಣ್ಯಃ` — garble of `ನಿಸ್ತ್ರೈಗುಣ್ಯಃ` (the $ is an OCR artifact for ್ರೈ)  
**Corruption 2:** `ನಿತ್ಯಸತ್ತ್ವಸ್ಛಃ` — garble of `ನಿತ್ಯಸತ್ತ್ವಸ್ಥಃ` (ಛ vs ಥ)  
**The shloka is:** `ತ್ರೈಗುಣ್ಯವಿಷಯಾ ವೇದಾ ನಿಸ್ತ್ರೈಗುಣ್ಯೋ ಭವಾರ್ಜುನ | ನಿರ್ದ್ವಂದ್ವೋ ನಿತ್ಯಸತ್ತ್ವಸ್ಥೋ ನಿರ್ಯೋಗಕ್ಷೇಮ ಆತ್ಮವಾನ್`  
**What to fix:** `ವಿಸ್ಟ $ಗುಣ್ಯಃ` → `ನಿಸ್ತ್ರೈಗುಣ್ಯಃ`; `ನಿತ್ಯಸತ್ತ್ವಸ್ಛಃ` → `ನಿತ್ಯಸತ್ತ್ವಸ್ಥಃ` (confirm both from page)

---

## 3. BG 2.65 — Complete anvaya missing (OCR page bleed)

**File:** `bannanje_kn.js`, key `"2.65"`  
**Book pages to read:** `page_0089.png` (book page 88)  
**Current corrupt text:** `೫. 8` (entire anvaya replaced by a page-number OCR artifact)  
**The shloka is:** `ಪ್ರಸಾದೇ ಸರ್ವದುಃಖಾನಾಂ ಹಾನಿರಸ್ಯೋಪಜಾಯತೇ | ಪ್ರಸನ್ನಚೇತಸೋ ಹ್ಯಾಶು ಬುದ್ಧಿಃ ಪರ್ಯವತಿಷ್ಠತಿ`  
**Expected anvaya (to confirm from page):** `ಪ್ರಸಾದೇ ಸರ್ವ ದುಃಖಾನಾಮ್‌ ಹಾನಿಃ ಅಸ್ಯ ಉಪಜಾಯತೇ | ಪ್ರಸನ್ನಚೇತಸಃ ಹಿ ಆಶು ಬುದ್ಧಿಃ ಪರಿ ಅವತಿಷ್ಠತಿ`  
**What to fix:** Replace `೫. 8` with the full correct anvaya read from the book page.

---

## 4. BG 3.40 — Garbled word at start of second anvaya line

**File:** `bannanje_kn.js`, key `"3.40"`  
**Book pages to read:** Search pages around `page_0140.png`–`page_0145.png` (book pages 139–144)  
**Current corrupt text (line 2):** `ಎತ್ಯಃ ವಿಮೋಹಯತಿ ಏಷಃ ಜ್ಞಾನಮ್‌ ಆವೃತ್ಯ ದೇಹಿನಮ್‌`  
**Corruption:** `ಎತ್ಯಃ` — garble of `ಏತೈಃ` (the instrumental plural matching `ಇಂದ್ರಿಯಾಣಿ ಮನಃ ಬುದ್ಧಿಃ` from line 1)  
**The shloka is:** `ಇಂದ್ರಿಯಾಣಿ ಮನೋ ಬುದ್ಧಿರಸ್ಯಾಧಿಷ್ಠಾನಮುಚ್ಯತೇ | ಏತೈರ್ವಿಮೋಹಯತ್ಯೇಷ ಜ್ಞಾನಮಾವೃತ್ಯ ದೇಹಿನಮ್`  
**What to fix:** `ಎತ್ಯಃ` → `ಏತೈಃ` (confirm from page)

---

## 5. BG 13.24 — Garbled phrase in anvaya

**File:** `bannanje_kn.js`, key `"13.24"`  
**Book pages to read:** Search pages around `page_0451.png`–`page_0456.png` (book pages 450–455)  
**Current corrupt text (line 1):** `ಧ್ಯಾನೇನ ಆತ ಟಿ ಪಶ್ಯಂತಿ ಕೇಚಿತ್‌ ಆತ್ಮಾನಮ್‌ ಆತ್ಮನಾ |`  
**Corruption:** `ಆತ ಟಿ` — garble of `ಆತ್ಮನಿ` (locative: "in the self")  
**The shloka is:** `ಧ್ಯಾನೇನಾತ್ಮನಿ ಪಶ್ಯಂತಿ ಕೇಚಿದಾತ್ಮಾನಮಾತ್ಮನಾ | ಅನ್ಯೇ ಸಾಂಖ್ಯೇನ ಯೋಗೇನ ಕರ್ಮಯೋಗೇನ ಚಾಪರೇ`  
**What to fix:** `ಆತ ಟಿ` → `ಆತ್ಮನಿ` (confirm from page)

---

## 6. BG 17.9 — Garbled word in anvaya (also in BG 17.8)

**File:** `bannanje_kn.js`, key `"17.9"` (and check `"17.8"`)  
**Book pages to read:** Search pages around `page_0543.png`–`page_0548.png` (book pages 542–547)  
**Current corrupt text:** `ರಸ್ಯಾಃ ಸ್ನಿಗ್ಗಾಃ ನ್ಠಿರಾ ಹೃದ್ಯಾಃ ಆಹಾರಾಃ ಸಾತ್ವಿಕ ಪ್ರಿಯಾಃ`  
**Corruption:** `ನ್ಠಿರಾ` — garble of `ಸ್ಥಿರಾ` (stable/firm — describing food quality)  
**Note:** The same corruption `ನ್ಠಿರಾ` also appears in `"17.8"` — check and fix both.  
**The shloka is:** `ಆಯುಃಸತ್ತ್ವಬಲಾರೋಗ್ಯಸುಖಪ್ರೀತಿವಿವರ್ಧನಾಃ | ರಸ್ಯಾಃ ಸ್ನಿಗ್ಧಾಃ ಸ್ಥಿರಾ ಹೃದ್ಯಾ ಆಹಾರಾಃ ಸಾತ್ತ್ವಿಕಪ್ರಿಯಾಃ`  
**What to fix:** `ನ್ಠಿರಾ` → `ಸ್ಥಿರಾ` in both `"17.8"` and `"17.9"` (confirm from page); also `ಸ್ನಿಗ್ಗಾಃ` → `ಸ್ನಿಗ್ಧಾಃ` if confirmed.

---

## Session Notes

- Image rendering was broken in the session these were identified (July 4 2026 evening session)
- OCR was attempted but unreliable — all fixes must come from vision-reading `gita_pages/` PNGs
- Page number offset: `page_NNNN.png` = book page `N-1` (e.g. `page_0064.png` = book page 63)
- After fixing, run: `node -e "const s=require('fs').readFileSync('bannanje_kn.js','utf-8'); try{new Function(s.replace('window.BANNANJE_KN','const X'));console.log('OK');}catch(e){console.error('FAIL',e.message);}"`
- Apply every fix to both `bannanje_kn.js` AND `viewer.html`
