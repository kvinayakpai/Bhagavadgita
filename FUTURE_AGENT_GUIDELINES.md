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

### D. Quote and Spacing Matches
* Ensure quotes are perfectly balanced inside JS strings (use escaped double quotes `\"` consistently rather than mixing single quotes `'` or double quotes).
* Spaces around parentheses must match the book's print layout exactly (e.g., `ಇಲ್ಲಿ\"ಏನಮ್\"(ನಿನ್ನ` with no spaces).

---

## 3. Strict Verification checklist before pushing
Before committing and pushing changes, you **MUST** run the following steps:
1. **Rebuild the Bundle**: Run `python build-bundle.py` to compile the JS files into the final `viewer.html` file.
2. **Synchronize Online Copy**: Copy the updated `viewer.html` to `viewer_online.html` (e.g. using `python -c "import shutil; shutil.copyfile('viewer.html', 'viewer_online.html')"`).
3. **Run Integrity Verification**: Run `python verify.py` to ensure that all 702 verse keys exist and parse correctly across all language files.
4. **Browser Testing (Playwright)**: Write and run a local Playwright script to load `viewer.html` locally using a `file:///` URL. Assert that:
   * There are no JavaScript console errors.
   * The page finishes loading completely.
   * Specific modified verse content matches the expected strings inside the browser state.
