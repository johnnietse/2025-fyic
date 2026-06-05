const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const wranglerPath = path.join(process.cwd(), 'wrangler.jsonc');

try {
  console.log('Running standard Next.js build...');
  execSync('npx next build', { stdio: 'inherit' });

  if (process.env.CF_PAGES === '1') {
    console.log('Detected Cloudflare Pages. Generating Pages wrangler.jsonc...');
    // Create a Pages-compatible wrangler.jsonc
    const pagesWranglerConfig = {
      "$schema": "node_modules/wrangler/config-schema.json",
      "name": "2025-fyic",
      "compatibility_date": "2026-06-05",
      "compatibility_flags": ["nodejs_compat"],
      "pages_build_output_dir": ".vercel/output/static",
      "observability": { "enabled": true }
    };
    fs.writeFileSync(wranglerPath, JSON.stringify(pagesWranglerConfig, null, 2));

    console.log('Running next-on-pages...');
    execSync('npx @cloudflare/next-on-pages@1', { stdio: 'inherit' });
  } else if (process.env.VERCEL !== '1') {
    console.log('Running OpenNext build for Cloudflare Workers...');
    
    // Create a Workers-compatible wrangler.jsonc
    const workersWranglerConfig = {
      "$schema": "node_modules/wrangler/config-schema.json",
      "name": "2025-fyic",
      "main": ".worker-next/index.mjs",
      "compatibility_date": "2026-06-05",
      "compatibility_flags": ["nodejs_compat"],
      "assets": {
        "binding": "ASSETS",
        "directory": ".worker-next/assets"
      },
      "observability": { "enabled": true }
    };
    fs.writeFileSync(wranglerPath, JSON.stringify(workersWranglerConfig, null, 2));

    try {
      execSync('npx @opennextjs/cloudflare build', { stdio: 'inherit' });
    } catch (e) {
      console.log('OpenNext build failed or skipped.');
    }
  }
} catch (error) {
  console.error('Build failed', error);
  process.exit(1);
}
