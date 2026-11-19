import { mkdir, copyFile, readFile, rm, writeFile } from 'node:fs/promises';

await rm('dist', { recursive: true, force: true });
await mkdir('dist/src', { recursive: true });
await copyFile('src/main.js', 'dist/src/main.js');
await copyFile('src/pipeline.js', 'dist/src/pipeline.js');
await copyFile('src/style.css', 'dist/src/style.css');
const html = await readFile('index.html', 'utf8');
const productionHtml = html.replace('/src/main.js', './src/main.js');
await writeFile('dist/index.html', productionHtml);
console.log('Build completed: dist/ is ready.');
