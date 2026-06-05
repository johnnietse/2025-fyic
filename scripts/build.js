const { execSync } = require('child_process');

try {
  console.log('Running standard Next.js build...');
  execSync('npx next build', { stdio: 'inherit' });

  if (process.env.CF_PAGES === '1') {
    console.log('Detected Cloudflare Pages. Running next-on-pages...');
    execSync('npx @cloudflare/next-on-pages@1', { stdio: 'inherit' });
  } else if (process.env.VERCEL !== '1') {
    // We assume if it's not Vercel and not CF_PAGES, it could be Cloudflare Workers
    console.log('Running OpenNext build for Cloudflare Workers...');
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
