const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes('ease: "easeOut"')) {
    content = content.replace(/ease: "easeOut"/g, 'ease: "easeOut" as any');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
}
