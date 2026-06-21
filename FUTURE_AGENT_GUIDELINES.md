# Guidelines for Future Agents — User Expectations & Verification

This document outlines user expectations, common pitfalls, and strict checklists for any future agents working on spelling fixes, book-alignment audits, or data correction tasks in this repository.

---

## 1. User Expectations & Philosophy
* **Perfect Alignment with the Book**: The sole source of truth is Bannanje Govindacharya's printed Kannada commentary book.
  * Any spelling, spacing, punctuation, or formatting deviation from the book is considered **contamination** and must be resolved.
  * Do not attempt to "normalize" or "correct" Sanskrit or Kannada words to standard forms if the book prints them differently. For example, if the shloka in the book has `ಪ್ರುಷ್ಣಾಮಿ` (with ra-vatthu) but the commentary has `ಪುಷ್ಣಾಮಿ` (without ra-vatthu), preserve both exactly as they are.
* **Perfection is the Only Standard**: Mismatched quotes (e.g. `\"` paired with `'`), missing punctuation marks, garbled characters, or stray spaces represent a failure of quality.

---

## 2. Common Challenges & OCR Pitfalls to Watch For

### A. OCR-Garbled Vowel Marks (Matras)
* When OCR parses Kannada script, vowel marks (like the `au` matra `ೌ`) sometimes lose their parent consonant and render as stand-alone symbols with a dotted circle or ZWNJ (e.g. `ಅಯಮ್‌ ೌ`).
* **Checklist**: Scan for detached matras or vowel signs (e.g. `ೌ`, `ೀ`, `ು`, `ೂ`) appearing immediately after spaces, punctuation, or ZWNJ. Compare them with the printed book to restore the missing letters (e.g. `ಅಸೌ`).

### B. Kakapada Subscripts (Caret Corrections)
* In the printed book, late corrections are sometimes inserted as subscripts (e.g. `ಕ` written under `ತ್ಮ` in `ಅಕೃತಾತ್ಮ` to make it `ಅಕೃತಾತ್ಮಕ`).
* **Checklist**: Pay close attention to subscripts in the scanned book. Translate carets into their semantic equivalent letters (e.g. adding `ಕ`) and preserve specific typographical separators like `=` instead of `-` (e.g. `(ಅಕೃತಾತ್ಮಕ=ಅಶುದ್ಧ ಬುದ್ಧಯಃ)-`).

### C. Shloka Transliteration Mapping
* Original Sanskrit shlokas are stored in Devanagari script inside the `FULL_GITA` map in [viewer-src.html](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/viewer-src.html). They are dynamically transliterated to Kannada using the `devToKn()` function.
* **Checklist**: If a Kannada shloka has a typesetting variation in the book (e.g. `ಪ್ರುಷ್ಣಾಮಿ` instead of `ಪುಷ್ಣಾಮಿ`), you must edit the Devanagari source word in `viewer-src.html` (e.g. changing `पुष्णामि` to `प्रुष्णामि`). Do not edit the generated Kannada output directly, as it will be overwritten during bundling.

### D. Variable Shadowing in `data.js`
* A major issue encountered earlier was that edits made to `bannanje_kn.js` were ignored by the browser. This was because `data.js` had a duplicate global definition of `BANNANJE_VERSE_MEANINGS` that shadowed/overwrote the loaded values.
* **Checklist**: Ensure no global variables in the bundled scripts (like `data.js`, `positions.js`, or the inlined `bannanje_*.js`) shadow each other.

### E. Scroll Restoration Bug
* On page refresh, the browser by default tries to restore the previous scroll position. Because the page is dynamically rendered, this was causing the viewport to snap to the bottom, giving the user the impression that the app was not loading.
* **Checklist**: Maintain the scroll-restore disable rule in `viewer-src.html` (`history.scrollRestoration = 'manual'`) and the explicit `window.scrollTo(0,0)` on initial page load.

---

## 3. Reference Validation Tools & Scripts Created
The following utility scripts have been created during this session and should be used to audit future changes:
* **[verify.py](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/verify.py)**: Checks database integrity, verify all 702 keys exist, and checks for parse errors.
* **[check_kn_leaks.py](file:///C:/Users/kalya/OneDrive/Documents/Vinayak/Antigravity/Bhagavadgita/check_kn_leaks.py)**: Script to detect verse boundary overlaps and cross-verse contamination.
* **[test_local_rendering.py](file:///C:/Users/kalya/.gemini/antigravity/brain/d4ee24fe-31b9-4a83-b7cb-fcb0bf7f56c6/scratch/test_local_rendering.py)**: Playwright verification script to open `viewer.html` in headless Chrome, test for console errors, and assert correct values.
* **[test_playwright_map.py](file:///C:/Users/kalya/.gemini/antigravity/brain/d4ee24fe-31b9-4a83-b7cb-fcb0bf7f56c6/scratch/test_playwright_map.py)**: Specifically verifies that the interactive Concept Map view renders nodes and edges correctly.

---

## 4. Strict Verification checklist before pushing
Before committing and pushing changes, you **MUST** run the following steps:
1. **Rebuild the Bundle**: Run `python build-bundle.py` to compile the JS files into the final `viewer.html` file.
2. **Synchronize Online Copy**: Copy the updated `viewer.html` to `viewer_online.html` (e.g. using `python -c "import shutil; shutil.copyfile('viewer.html', 'viewer_online.html')"`).
3. **Run Integrity Verification**: Run `python verify.py` to ensure that all 702 verse keys exist and parse correctly across all language files.
4. **Browser Testing (Playwright)**: Run a local Playwright script to verify no console errors, clean load, and target content presence.
