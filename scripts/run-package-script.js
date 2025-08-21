const { spawn } = require('child_process');

// The first argument passed after '--' will be the package name
const packageName = process.argv[2];
// The script name (e.g., 'dev', 'build') is derived from how npm runs scripts
const npmEvent = process.env.npm_lifecycle_event;

if (!packageName) {
  console.error('Error: No package name provided.');
  console.error('Usage: npm run <dev|build> -- <package-name>');
  console.error('Example: npm run dev -- brochure-reborn');
  process.exit(1);
}

if (!npmEvent) {
    console.error('Error: This script should be run via npm.');
    process.exit(1);
}

console.log(`Executing '${npmEvent}' for package '${packageName}'...`);

const child = spawn('npm', ['run', npmEvent, '-w', 'renderer'], {
  stdio: 'inherit',
  shell: true, // Use shell to handle npm command correctly on Windows
  env: {
    ...process.env,
    TARGET_PACKAGE: packageName,
  },
});

child.on('close', (code) => {
  if (code !== 0) {
    console.error(`Script '${npmEvent}' for package '${packageName}' failed with code ${code}`);
  }
  process.exit(code);
});
