import puppeteer from 'puppeteer';
import { spawn } from 'child_process';
import path from 'path';

const PORT = 5175; // Using a different port to avoid conflicts
const brochureUrl = `http://localhost:${PORT}`;

// --- Helper Functions ---
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const getPackageName = () => {
  const arg = process.argv.find(arg => arg.startsWith('--package='));
  if (!arg) {
    console.error('❌ Error: Missing package name. Please specify with --package=<name>.');
    console.error('Example: npm run generate-pdf -- --package=brochure-2025');
    process.exit(1);
  }
  return arg.split('=')[1];
};

const isServerReady = async (url, retries = 10, delay = 2000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        console.log('✅ Server is ready.');
        return true;
      }
    } catch (error) {
      // Server not ready yet
    }
    console.log(`...waiting for server (${i + 1}/${retries})`);
    await sleep(delay);
  }
  return false;
};

// --- Main Execution ---
(async () => {
  const packageName = getPackageName();
  const pdfPath = path.resolve(process.cwd(), `../${packageName}.pdf`);

  console.log(`▶️ Starting PDF generation for package: ${packageName}`);

  const serverProcess = spawn('npm', ['run', 'dev', '--', '--port', PORT], {
    stdio: 'inherit', // Show server output
    shell: true,
    env: {
      ...process.env,
      TARGET_PACKAGE: packageName, // Pass package name as environment variable
    },
  });

  let browser;
  try {
    if (!(await isServerReady(brochureUrl))) {
      throw new Error('Server failed to start in time.');
    }

    console.log('🚀 Launching Puppeteer...');
    browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 }); // Set a consistent viewport

    console.log(`Navigating to ${brochureUrl}`);
    await page.goto(brochureUrl, { waitUntil: 'networkidle0' });

    await sleep(1000); // Extra wait for fonts/animations

    console.log(`🖨️ Generating PDF at ${pdfPath}`);
    await page.pdf({
      path: pdfPath,
      width: '1200px',
      printBackground: true,
      scale: 1,
    });

    console.log(`✅ PDF successfully generated for ${packageName}!`);

  } catch (error) {
    console.error('❌ An error occurred during PDF generation:', error);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
      console.log('Browser closed.');
    }
    if (serverProcess) {
      console.log('Terminating server process...');
      serverProcess.kill();
    }
  }
})();
