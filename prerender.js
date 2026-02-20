// prerender.js - SSG build script
// Runs after `vite build` to inject pre-rendered HTML into dist/index.html

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, 'dist');

async function prerender() {
    console.log('🚀 Starting SSG pre-render...');

    const { build } = await import('vite');

    // Build the SSR bundle
    await build({
        build: {
            ssr: 'src/entry-server.jsx',
            outDir: 'dist/server',
            rollupOptions: {
                output: {
                    format: 'esm',
                }
            }
        },
        ssr: {
            noExternal: ['react-helmet-async']
        }
    });

    // Load the SSR-built module using file:// URL (required on Windows)
    const serverEntryPath = path.resolve(distDir, 'server/entry-server.js');
    const serverEntryUrl = pathToFileURL(serverEntryPath).href;
    const { render } = await import(serverEntryUrl);

    // Read the client-built index.html template
    const templatePath = path.resolve(distDir, 'index.html');
    if (!fs.existsSync(templatePath)) {
        console.error('❌ dist/index.html not found. Run `vite build` first.');
        process.exit(1);
    }

    let template = fs.readFileSync(templatePath, 'utf-8');

    // Render the app
    const { html: appHtml, helmet } = render();

    // Inject helmet tags into <head>
    let headTags = '';
    if (helmet) {
        headTags = [
            helmet.title?.toString() || '',
            helmet.meta?.toString() || '',
            helmet.link?.toString() || '',
            helmet.script?.toString() || '',
        ].filter(Boolean).join('\n    ');
    }

    // Replace placeholders
    let finalHtml = template
        .replace('<!--helmet-tags-->', headTags)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Write the final pre-rendered HTML
    fs.writeFileSync(templatePath, finalHtml);
    console.log('✅ Pre-rendered HTML written to dist/index.html');
    console.log('🎉 SSG complete! Crawlers will see full HTML content.');
}

prerender().catch((err) => {
    console.error('❌ Pre-render failed:', err);
    process.exit(1);
});
