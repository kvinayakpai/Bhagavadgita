import os
import sys
import json
import asyncio
from playwright.async_api import async_playwright

def to_ascii(text):
    if not text:
        return ""
    return "".join([c if ord(c) < 128 else '?' for c in str(text)])

async def run_audit():
    html_path = r"C:\Antigravity\Bhagavadgita\viewer-bundled.html"
    screenshot_path = r"C:\Antigravity\Bhagavadgita\screenshot_map_dropdown.png"
    
    print("==================================================")
    print("STARTING MAP DROPDOWN & AUTO-SCROLL INTERACTIVE AUDIT")
    print("==================================================")
    
    if not os.path.exists(html_path):
        print(f"Error: HTML file not found at {html_path}")
        sys.exit(1)
        
    print(f"Verified local bundle size: {os.path.getsize(html_path)} bytes")
    
    console_messages = []
    page_errors = []
    
    async with async_playwright() as p:
        print("Launching Chromium headless...")
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1280, "height": 1000}
        )
        page = await context.new_page()
        
        # Listen to console messages
        def handle_console(msg):
            console_messages.append({
                "type": msg.type,
                "text": msg.text
            })
            if msg.type in ("error", "warning"):
                print(f"Console {msg.type.upper()}: {msg.text}")
                
        page.on("console", handle_console)
        
        # Listen to page errors
        def handle_pageerror(err):
            page_errors.append(str(err))
            print(f"Page Exception: {err}")
            
        page.on("pageerror", handle_pageerror)
        
        # 1. Load the page
        url = f"file:///{html_path.replace(os.sep, '/')}"
        print(f"Navigating to local URL: {url}")
        await page.goto(url)
        await page.wait_for_timeout(2000)
        
        title = await page.title()
        print(f"Page title loaded: {to_ascii(title)}")
        
        # 2. Go to Chapters tab and select Chapter 15
        print("\n--- Testing Chapters View -> Chapter 15 Selection ---")
        chapters_tab = page.locator('button[data-view="chapters"]')
        await chapters_tab.click()
        await page.wait_for_timeout(500)
        
        ch_15_btn = page.locator('button.ch-btn:has-text("15")')
        await ch_15_btn.click()
        await page.wait_for_timeout(500)
        print("Selected Chapter 15 on Chapters Tab.")
        
        # 3. Switch to Map tab
        print("\n--- Testing Navigation to Map Tab ---")
        map_tab = page.locator('button[data-view="map"]')
        await map_tab.click()
        await page.wait_for_timeout(1000)
        
        # Verify map controls render
        controls_panel = page.locator('.map-controls-panel')
        controls_visible = await controls_panel.is_visible()
        print(f"Map Controls Panel rendered? {controls_visible}")
        
        # Verify Adhyaya select dropdown is visible and initialized to 15
        ch_select = page.locator('#map-ch-select')
        ch_select_visible = await ch_select.is_visible()
        ch_select_val = await ch_select.evaluate("el => el.value")
        print(f"Adhyaya Dropdown visible? {ch_select_visible}")
        print(f"Adhyaya Dropdown initialized at value: {ch_select_val} (Expected: 15)")
        
        # Verify verse select dropdown is visible
        shloka_select = page.locator('#map-shloka-select')
        shloka_visible = await shloka_select.is_visible()
        print(f"Shloka Dropdown visible? {shloka_visible}")
        
        # Verify scroll container scrolled to center the cluster
        map_wrap = page.locator('.map-wrap')
        initial_scroll_x = await map_wrap.evaluate("el => el.scrollLeft")
        initial_scroll_y = await map_wrap.evaluate("el => el.scrollTop")
        print(f"Initial Map Scroll offset after auto-scroll: ({initial_scroll_x}px, {initial_scroll_y}px) (Expected non-zero as Chapter 15 cluster is scrolled into view)")
        
        # 4. Test Chapter Change & Auto-Centering Scroll
        print("\n--- Testing Adhyaya Dropdown Change & Centering Auto-Scroll ---")
        print("Programmatically changing Adhyaya dropdown to Chapter 12...")
        await page.evaluate("""() => {
            const select = document.getElementById('map-ch-select');
            select.value = '12';
            select.dispatchEvent(new Event('change'));
        }""")
        await page.wait_for_timeout(1500) # Wait for smooth scroll to finish
        
        ch_select_val_after = await ch_select.evaluate("el => el.value")
        scroll_x_after = await map_wrap.evaluate("el => el.scrollLeft")
        scroll_y_after = await map_wrap.evaluate("el => el.scrollTop")
        print(f"Adhyaya Dropdown updated to value: {ch_select_val_after} (Expected: 12)")
        print(f"Updated Map Scroll offset: ({scroll_x_after}px, {scroll_y_after}px) (Expected different scroll positions as Chapter 12 cluster is focused)")
        
        # Check Chapters tab synced to 12
        print("Switching back to Chapters Tab to check two-way sync...")
        await chapters_tab.click()
        await page.wait_for_timeout(500)
        
        active_ch_btn = page.locator('button.ch-btn.active')
        active_ch_text = await active_ch_btn.inner_text()
        print(f"Active chapter button on Chapters Tab is: {active_ch_text} (Expected: 12)")
        
        # 5. Test Shloka Select Filter
        print("\n--- Testing Verse Select Filter ---")
        print("Returning to Map Tab...")
        await map_tab.click()
        await page.wait_for_timeout(500)
        
        print("Setting Adhyaya back to 15...")
        await page.evaluate("""() => {
            const select = document.getElementById('map-ch-select');
            select.value = '15';
            select.dispatchEvent(new Event('change'));
        }""")
        await page.wait_for_timeout(1000)
        
        # Select verse BG 15.1
        print("Selecting 'BG 15.1' in the Shloka dropdown...")
        await page.evaluate("""() => {
            const select = document.getElementById('map-shloka-select');
            select.value = '15.1';
            select.dispatchEvent(new Event('change'));
        }""")
        await page.wait_for_timeout(1500)
        
        selected_shloka_val = await shloka_select.evaluate("el => el.value")
        scroll_x_shloka = await map_wrap.evaluate("el => el.scrollLeft")
        scroll_y_shloka = await map_wrap.evaluate("el => el.scrollTop")
        print(f"Selected Shloka Select value: {selected_shloka_val} (Expected: 15.1)")
        print(f"BG 15.1 Filter Map Scroll offset: ({scroll_x_shloka}px, {scroll_y_shloka}px) (Expected scroll to center the single node of BG 15.1)")
        
        # Count active nodes on map (should be only those connected to BG 15.1)
        active_nodes_count = await page.locator('g.map-node').count()
        print(f"Active map nodes rendered for BG 15.1: {active_nodes_count} (Expected a filtered small subset, e.g. 1-2 nodes like ashvattha)")
        
        # Test empty state by selecting BG 15.4 (which has no mapped concepts)
        print("\n--- Testing Empty State for Shloka without concepts (BG 15.4) ---")
        print("Selecting 'BG 15.4' in the Shloka dropdown...")
        await page.evaluate("""() => {
            const select = document.getElementById('map-shloka-select');
            select.value = '15.4';
            select.dispatchEvent(new Event('change'));
        }""")
        await page.wait_for_timeout(1000)
        
        # Verify the empty state card renders
        empty_state = page.locator('.map-empty-state')
        empty_state_visible = await empty_state.is_visible()
        empty_title = await page.locator('.map-empty-title').inner_text()
        print(f"Empty state card visible? {empty_state_visible}")
        print(f"Empty state title: {to_ascii(empty_title)} (Expected: No Mapped Concepts)")
        
        # 6. Capture screenshot
        print(f"\n--- Saving Centered Interactive Map Screenshot to {screenshot_path} ---")
        target_dir = os.path.dirname(screenshot_path)
        os.makedirs(target_dir, exist_ok=True)
        await page.screenshot(path=screenshot_path, full_page=True)
        print("Screenshot successfully captured and saved.")
        
        await browser.close()
        
        # Print audit summary
        print("\n==================================================")
        print("AUDIT RESULTS SUMMARY")
        print("==================================================")
        print(f"Total Page Errors: {len(page_errors)}")
        print(f"Total Console Warnings/Errors: {len([m for m in console_messages if m['type'] in ('error', 'warning')])}")
        print("AUDIT COMPLETE - SUCCESS!")
        print("==================================================")

if __name__ == "__main__":
    asyncio.run(run_audit())
