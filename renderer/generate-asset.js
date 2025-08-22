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
    
    // Set viewport to match the PDF width exactly
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });
    
    // Emulate screen media type to ensure we get the same styles as the browser
    await page.emulateMediaType('screen');

    console.log(`Navigating to ${PREVIEW_URL}`);
    await page.goto(PREVIEW_URL, { waitUntil: 'networkidle0' });
    
    // Wait for Tailwind CSS to fully load and apply
    await page.waitForSelector('.grid-cols-3', { timeout: 5000 });
    
    // Force the grid to render properly by injecting CSS that ensures grid-cols-3 works
    await page.addStyleTag({
      content: `
        @media print {
          .grid-cols-3 {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          }
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `
    });
    
    await page.evaluateHandle('document.fonts.ready');

    const element = await page.$(selector);
    if (!element && (format === 'png' || format === 'jpeg' || format === 'webp' || format === 'svg')) {
        throw new Error(`Could not find element with selector "${selector}"`);
    }

    console.log(`🖨️ Generating ${format.toUpperCase()} asset...`);

    switch (format) {
      case 'pdf':
        await page.pdf({
          path: outputPath,
          width: '1200px',
          height: '1600px',
          printBackground: true,
          scale: 1,
          preferCSSPageSize: false,
          displayHeaderFooter: false,
          margin: { top: 0, right: 0, bottom: 0, left: 0 },
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
