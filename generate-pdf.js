import puppeteer from 'puppeteer';
import { exec } from 'child_process';

const PORT = 5173; // Make sure this matches the port your dev server is running on

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const isServerReady = async (url) => {
  try {
    const response = await fetch(url);
    return response.ok;
  } catch (error) {
    return false;
  }
};

(async () => {
  const brochureUrl = `http://localhost:${PORT}`;

  console.log('Checking if dev server is running...');
  const serverRunning = await isServerReady(brochureUrl);

  if (!serverRunning) {
    console.log('Dev server is not running. Please start it with "npm run dev" in a separate terminal.');
    process.exit(1);
  }

  console.log('Dev server is running. Launching Puppeteer...');
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  try {
    console.log(`Navigating to ${brochureUrl}`);
    await page.goto(brochureUrl, {
      waitUntil: 'networkidle0', // Wait for network to be idle
    });

    // Give some extra time for any final animations or scripts
    await sleep(2000);

    console.log('Generating PDF...');
    await page.pdf({
      path: 'legion-marketing-brochure.pdf',
      format: 'A4', // You can adjust the format
      printBackground: true,
      width: '1200px', // A custom width to ensure the layout is captured correctly
      scale: 1,
    });

    console.log('✅ PDF successfully generated: legion-marketing-brochure.pdf');
  } catch (error) {
    console.error('❌ An error occurred during PDF generation:', error);
  } finally {
    await browser.close();
    console.log('Browser closed.');
  }
})();
