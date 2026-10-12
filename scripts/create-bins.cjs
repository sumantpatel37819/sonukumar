const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const nodeModules = path.join(projectRoot, 'node_modules');
const binDir = path.join(nodeModules, '.bin');

if (!fs.existsSync(nodeModules)) {
  process.exit(0);
}

if (!fs.existsSync(binDir)) {
  fs.mkdirSync(binDir, { recursive: true });
}

function processPkg(pkgDir) {
  const pkgJsonPath = path.join(pkgDir, 'package.json');
  if (!fs.existsSync(pkgJsonPath)) return;
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
    if (pkg.bin) {
      const bins = typeof pkg.bin === 'string' ? { [pkg.name.split('/').pop()]: pkg.bin } : pkg.bin;
      for (const [name, relPath] of Object.entries(bins)) {
        const target = path.relative(binDir, path.join(pkgDir, relPath));
        const scriptPath = path.join(binDir, name);
        const scriptContent = `#!/bin/sh\nbasedir=$(dirname "$0")\nexec node "$basedir/${target}" "$@"\n`;
        fs.writeFileSync(scriptPath, scriptContent, { mode: 0o755 });
      }
    }
  } catch (e) {}
}

const entries = fs.readdirSync(nodeModules, { withFileTypes: true });
for (const entry of entries) {
  if (entry.isDirectory()) {
    if (entry.name.startsWith('@')) {
      const scopedEntries = fs.readdirSync(path.join(nodeModules, entry.name), { withFileTypes: true });
      for (const scoped of scopedEntries) {
        if (scoped.isDirectory()) processPkg(path.join(nodeModules, entry.name, scoped.name));
      }
    } else {
      processPkg(path.join(nodeModules, entry.name));
    }
  }
}
