const fs = require('fs');
const { join } = require('path');

const traverse = (dir) => {
  const subfolders = fs.statSync(dir).isDirectory() && fs.readdirSync(dir);

  if (subfolders) {
    subfolders.forEach((folderName) => {
      const fullPath = join(dir, folderName);

      if (folderName === 'node_modules') {
        fs.rmSync(join(dir, 'node_modules'), { recursive: true, force: true });
        return;
      }

      traverse(fullPath);
    });
  }
};

traverse(process.cwd());
