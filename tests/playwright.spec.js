// Basic E2E test for SyncSpeaker demo
const { test, expect } = require('@playwright/test');

test.describe('SyncSpeaker Demo', () => {
  test('should load the page and display title', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');
    
    // Check page title
    await expect(page).toHaveTitle('SyncSpeaker Demo');
    
    // Check main heading
    const heading = page.locator('h1');
    await expect(heading).toHaveText('SyncSpeaker Demo');
  });

  test('should have play and stop buttons', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');
    
    // Check buttons exist
    const playBtn = page.locator('#playBtn');
    const stopBtn = page.locator('#stopBtn');
    
    await expect(playBtn).toBeVisible();
    await expect(stopBtn).toBeVisible();
    
    // Stop button should be disabled initially
    await expect(stopBtn).toBeDisabled();
    await expect(playBtn).toBeEnabled();
  });

  test('should update status when play button is clicked', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');
    
    const status = page.locator('#status');
    const playBtn = page.locator('#playBtn');
    
    // Initial status
    await expect(status).toHaveText('Ready');
    
    // Click play button
    await playBtn.click();
    
    // Status should update to Playing
    await expect(status).toHaveText('Playing');
  });

  test('should update status when stop button is clicked', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');
    
    const status = page.locator('#status');
    const playBtn = page.locator('#playBtn');
    const stopBtn = page.locator('#stopBtn');
    
    // Click play then stop
    await playBtn.click();
    await expect(stopBtn).toBeEnabled(); // Wait for stop button to be enabled
    await stopBtn.click();
    
    // Status should be stopped
    await expect(status).toHaveText('Stopped');
  });

  test('should have video element with captions track', async ({ page }) => {
    await page.goto('http://localhost:8000/index.html');
    
    const video = page.locator('video');
    await expect(video).toBeVisible();
    
    // Check for track element
    const track = page.locator('track');
    await expect(track).toHaveCount(1);
    await expect(track).toHaveAttribute('src', 'media/sample.vtt');
  });
});
