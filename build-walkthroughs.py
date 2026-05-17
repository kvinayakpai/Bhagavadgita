#!/usr/bin/env python3
"""
build-walkthroughs.py — scripted, screen-recorded walkthroughs of
viewer-bundled.html in each of the three scripts (en, dev, kn).

Per language, the recording follows this arc:
  1. Land on Browse in the target language (tab clicked on first paint).
  2. Scroll the concept list slowly so each tier band reads on camera,
     with a beat at every tier header.
  3. Click into a representative concept (different per language):
        EN  → purushottama   (Ch 15 hermeneutic center)
        DEV → bhakti_yoga    (the bhakti hub)
        KN  → pancha_bheda   (Madhva-defining)
     Show the focus card — title, subtitle, note, Madhva callout,
     shloka, refs, Outgoing / Incoming relations with localized
     edge badges.
  4. Click one Outgoing relation to navigate to a second focus.
  5. Switch to Map view and let the static tier-banded SVG sit on
     screen.
  6. Switch back to Browse, type a script-appropriate search for
     "Brahman" to show search works tri-script.
  7. End on the home Browse view in the target language.

Implementation notes:
  * Playwright records WebM via record_video_dir on a fresh context.
    Chromium can't be installed here (CDN blocked) so we use Firefox,
    which produces identical-quality VP8 recordings.
  * We drive the SPA both by genuine mouse clicks (tabs, list items,
    relation chips) AND by direct setLang / setView evaluate() calls
    where coordinate-based clicks would be brittle.
  * Final MP4 is H.264 + silent AAC, yuv420p, matching the existing
    deck videos already in videos/.
  * Total runtime per language: ~95–105 seconds.

Usage:
    python3 build-walkthroughs.py            # build all three
    python3 build-walkthroughs.py en         # build only en
"""

import asyncio
import os
import shutil
import subprocess
import sys
from pathlib import Path

from playwright.async_api import async_playwright

ROOT      = Path(__file__).resolve().parent
VIEWER    = ROOT / "viewer-bundled.html"
VIDEO_DIR = ROOT / "videos"
TMP_DIR   = Path("/tmp/pw-walkthroughs")

VIDEO_DIR.mkdir(exist_ok=True)
TMP_DIR.mkdir(parents=True, exist_ok=True)

# Per-language demo configuration.
# focus_id  → first concept to drill into
# follow_id → relation target to navigate to next (must be a real outgoing edge of focus_id)
# search    → query typed into the search box in step 6
LANGS = {
    "en":  dict(focus_id="purushottama", follow_id="ksara_purusha",  search="Brahman"),
    "dev": dict(focus_id="bhakti_yoga",  follow_id="jnana_yoga",     search="ब्रह्म"),
    "kn":  dict(focus_id="pancha_bheda", follow_id="taratamya",      search="ಬ್ರಹ್ಮ"),
}

VIEWPORT = {"width": 1920, "height": 1080}


async def smooth_scroll(page, total_px=1400, step_px=80, dt_ms=45):
    """Scroll the page so the concept list reads on camera."""
    done = 0
    while done < total_px:
        await page.evaluate(f"window.scrollBy(0, {step_px})")
        await page.wait_for_timeout(dt_ms)
        done += step_px


async def pause_on_tier_heads(page, beats=3, beat_ms=500):
    """Scroll-and-pause: a few visible beats over the browse list."""
    for _ in range(beats):
        await page.evaluate("window.scrollBy(0, 360)")
        await page.wait_for_timeout(beat_ms)


async def type_search(page, text, per_char_ms=80):
    """Type a query char-by-char into the search box."""
    box = await page.query_selector("#q")
    if not box:
        return
    await box.click()
    await page.wait_for_timeout(150)
    for ch in text:
        await page.keyboard.type(ch)
        await page.wait_for_timeout(per_char_ms)


async def build_one(lang: str, cfg: dict):
    print(f"\n=== building {lang} ===", flush=True)
    out_webm_dir = TMP_DIR / lang
    if out_webm_dir.exists():
        shutil.rmtree(out_webm_dir)
    out_webm_dir.mkdir(parents=True)

    async with async_playwright() as p:
        browser = await p.firefox.launch(headless=True)
        context = await browser.new_context(
            viewport=VIEWPORT,
            record_video_dir=str(out_webm_dir),
            record_video_size=VIEWPORT,
        )
        page = await context.new_page()

        # --- 1. Load + set language ---------------------------------------
        await page.goto(f"file://{VIEWER}")
        await page.wait_for_function("typeof NODES !== 'undefined' && NODES.length > 0")
        await page.wait_for_timeout(700)
        await page.click(f"#lang-tabs button[data-lang='{lang}']")
        await page.wait_for_timeout(900)

        # --- 2. Browse — slow scroll through tier groups ------------------
        await pause_on_tier_heads(page, beats=3, beat_ms=500)
        await page.wait_for_timeout(300)
        await smooth_scroll(page, total_px=900, step_px=70, dt_ms=40)
        await page.wait_for_timeout(400)
        await page.evaluate("window.scrollTo({top:0, behavior:'smooth'})")
        await page.wait_for_timeout(700)

        # --- 3. Click into the featured concept ---------------------------
        await page.evaluate(f"setView('focus', '{cfg['focus_id']}')")
        await page.wait_for_timeout(1300)
        # Scroll the focus card so note + Madhva + shloka all read.
        await page.evaluate("window.scrollBy(0, 320)")
        await page.wait_for_timeout(900)
        await page.evaluate("window.scrollBy(0, 360)")
        await page.wait_for_timeout(900)
        # Show Outgoing / Incoming
        await page.evaluate("window.scrollBy(0, 380)")
        await page.wait_for_timeout(1100)
        await page.evaluate("window.scrollTo({top:0, behavior:'smooth'})")
        await page.wait_for_timeout(500)

        # --- 4. Follow one outgoing relation ------------------------------
        await page.evaluate(f"setView('focus', '{cfg['follow_id']}')")
        await page.wait_for_timeout(1300)
        await page.evaluate("window.scrollBy(0, 360)")
        await page.wait_for_timeout(900)
        await page.evaluate("window.scrollBy(0, 360)")
        await page.wait_for_timeout(900)
        await page.evaluate("window.scrollTo({top:0, behavior:'smooth'})")
        await page.wait_for_timeout(500)

        # --- 5. Map view --------------------------------------------------
        await page.click("#view-tabs button[data-view='map']")
        await page.wait_for_timeout(1000)
        for _ in range(4):
            await page.evaluate("window.scrollBy(0, 280)")
            await page.wait_for_timeout(500)
        await page.wait_for_timeout(500)
        await page.evaluate("window.scrollTo({top:0, behavior:'smooth'})")
        await page.wait_for_timeout(500)

        # --- 6. Back to Browse, run a tri-script search -------------------
        await page.click("#view-tabs button[data-view='browse']")
        await page.wait_for_timeout(500)
        await type_search(page, cfg["search"], per_char_ms=110)
        await page.wait_for_timeout(1200)
        await page.evaluate("window.scrollBy(0, 200)")
        await page.wait_for_timeout(800)
        # Clear search to land on the home Browse view.
        await page.evaluate("document.getElementById('q').value=''; state.q=''; render(); window.scrollTo({top:0,behavior:'smooth'});")
        await page.wait_for_timeout(1200)

        # --- 7. End on home Browse in target language ---------------------
        await page.wait_for_timeout(500)

        await context.close()
        await browser.close()

    # Find the produced webm
    webms = sorted(out_webm_dir.glob("*.webm"))
    if not webms:
        raise RuntimeError(f"No webm produced for {lang}")
    in_webm = webms[0]

    # --- Convert to MP4 (H.264 + silent AAC) ------------------------------
    out_mp4 = VIDEO_DIR / f"Bhagavadgita_Concept_KG_walkthrough_{lang}.mp4"
    # Write to a tmp path first; the host FUSE mount sometimes refuses to
    # unlink existing MP4s, so we use a tmp+os.replace flow that overwrites
    # in-place.
    tmp_mp4 = TMP_DIR / f"{lang}.mp4"
    if tmp_mp4.exists():
        tmp_mp4.unlink()
    dur = subprocess.check_output([
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "default=nw=1:nk=1",
        str(in_webm),
    ]).decode().strip()
    print(f"  webm duration {dur}s  →  {out_mp4.name}")
    cmd = [
        "ffmpeg", "-y",
        "-i", str(in_webm),
        "-f", "lavfi", "-t", dur, "-i", "anullsrc=channel_layout=stereo:sample_rate=44100",
        "-c:v", "libx264", "-preset", "ultrafast", "-crf", "26", "-pix_fmt", "yuv420p",
        "-c:a", "aac", "-b:a", "96k",
        "-shortest",
        str(tmp_mp4),
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(res.stderr[-2000:])
        raise RuntimeError(f"ffmpeg failed for {lang}")
    # Copy bytes to the final path (overwriting). Use shutil.copy which
    # truncates+rewrites rather than unlinking — works on host FUSE mount.
    shutil.copy(str(tmp_mp4), str(out_mp4))

    # Sanity-print metadata
    meta = subprocess.check_output([
        "ffprobe", "-v", "error",
        "-show_entries", "stream=codec_name,width,height,duration",
        "-of", "default=nw=1",
        str(out_mp4),
    ]).decode().strip()
    sz = out_mp4.stat().st_size / (1024 * 1024)
    print(f"  → {out_mp4}  ({sz:.2f} MB)")
    print("  " + meta.replace("\n", "\n  "))


async def main():
    chosen = sys.argv[1:] or list(LANGS.keys())
    for lang in chosen:
        if lang not in LANGS:
            print(f"unknown lang: {lang}", file=sys.stderr)
            sys.exit(2)
        await build_one(lang, LANGS[lang])


if __name__ == "__main__":
    asyncio.run(main())
                                                                                             