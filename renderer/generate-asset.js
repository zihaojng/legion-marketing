import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs/promises';

const PORT = 5175;
const BASE_URL = `http://localhost:${PORT}`;
const PREVIEW_URL = `${BASE_URL}?preview=true`;

// --- Helper Functions ---
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getArgValue = (argName, defaultValue = null) => {
  const arg = process.argv.find(arg => arg.startsWith(`--${argName}=`));
  if (!arg) {
    if (defaultValue === null) {
      console.error(`❌ Error: Missing required argument. Please specify with --${argName}=<value>.`);
      process.exit(1);
    }
    return defaultValue;
  }
  return arg.split('=')[1];
};

const isServerReady = async (retries = 15, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) {
        console.log('✅ Server is ready.');
        return true;
      }
    } catch (error) { /* server not ready yet */ }
    console.log(`...waiting for server (${i + 1}/${retries})`);
    await sleep(delay);
  }
  return false;
};

// --- Main Execution ---
(async () => {
  const packageName = getArgValue('package');
  const format = getArgValue('format', 'pdf');
  const selector = getArgValue('selector', 'body'); // For screenshots/svg
  const outputPath = path.resolve(process.cwd(), `../${packageName}.${format}`);

  console.log(`▶️ Starting asset generation for package: ${packageName}`);
  console.log(`   Format: ${format}, Output: ${outputPath}`);

  const serverProcess = spawn('npm', ['run', 'dev', '--', '--port', PORT], {
    stdio: 'inherit',
    shell: true,
    env: { ...process.env, TARGET_PACKAGE: packageName },
  });

  let browser;
  try {
    if (!(await isServerReady())) {
      throw new Error('Server failed to start in time.');
    }

    console.log('🚀 Launching Puppeteer...');
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    
    // Set a viewport that matches A4 aspect ratio for PDF generation
    // A4 is 210mm x 297mm. Let's use a high-res version of that.
    await page.setViewport({ width: 1123, height: 1588, deviceScaleFactor: 2 });

    console.log(`Navigating to ${PREVIEW_URL}`);
    await page.goto(PREVIEW_URL, { waitUntil: 'networkidle0' });
    await sleep(1000);

    const element = await page.$(selector);
    if (!element && (format === 'png' || format === 'jpeg' || format === 'webp' || format === 'svg')) {
        throw new Error(`Could not find element with selector "${selector}"`);
    }

    console.log(`🖨️ Generating ${format.toUpperCase()} asset...`);

    switch (format) {
      case 'pdf':
        await page.pdf({
          path: outputPath,
          format: 'A4',
          printBackground: true,
          scale: 1,
        });
        break;

      case 'png':
      case 'jpeg':
      case 'webp':
        await element.screenshot({
          path: outputPath,
          type: format,
          omitBackground: true,
        });
        break;

      case 'svg':
        const svgContent = await element.evaluate(el => el.outerHTML);
        await fs.writeFile(outputPath, svgContent);
        break;

      default:
        throw new Error(`Unsupported format: ${format}. Supported formats are pdf, png, jpeg, webp, svg.`);
    }

    console.log(`✅ Asset successfully generated: ${path.basename(outputPath)}`);

  } catch (error) {
    console.error('❌ An error occurred during asset generation:', error);
    process.exitCode = 1;
  } finally {
    if (browser) await browser.close();
    if (serverProcess) serverProcess.kill();
    console.log('Cleanup complete.');
  }
})();
