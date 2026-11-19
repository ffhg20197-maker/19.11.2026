import { readdir } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

async function findJsFiles(folder) {
  const found = [];
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const path = resolve(folder, entry.name);
    if (entry.isDirectory()) found.push(...await findJsFiles(path));
    else if (entry.isFile() && path.endsWith('.js')) found.push(path);
  }
  return found;
}
const files = [...await findJsFiles('src'), ...await findJsFiles('tests'), ...await findJsFiles('scripts')];
let failed = false;
for (const file of files) {
  const check = spawnSync(process.execPath, ['--check', file], { encoding: 'utf8' });
  if (check.status !== 0) {
    failed = true;
    process.stderr.write(check.stderr || `Syntax check failed: ${file}\n`);
  } else {
    process.stdout.write(`PASS syntax: ${file}\n`);
  }
}
if (failed) process.exit(1);
process.stdout.write(`Lint passed: ${files.length} JavaScript files checked.\n`);
