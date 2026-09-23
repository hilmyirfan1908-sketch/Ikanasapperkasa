const fs = require('fs');
const path = require('path');
const basePath = '/Users/entrustinv278/Documents/Ikan Asap perkasa Website';
const pages = ['index.html', 'products.html', 'product-detail.html', 'kualitas.html'];

let cssExtracted = false;
let jsExtracted = false;

if (!fs.existsSync(path.join(basePath, 'css'))) {
  fs.mkdirSync(path.join(basePath, 'css'));
}
if (!fs.existsSync(path.join(basePath, 'js'))) {
  fs.mkdirSync(path.join(basePath, 'js'));
}

for (const page of pages) {
  const pagePath = path.join(basePath, page);
  if (fs.existsSync(pagePath)) {
    let html = fs.readFileSync(pagePath, 'utf8');

    // Extract CSS once
    if (!cssExtracted) {
      const cssMatch = html.match(/<style>\n([\s\S]*?)\n<\/style>/);
      if (cssMatch && cssMatch[1]) {
        fs.writeFileSync(path.join(basePath, 'css', 'style.css'), cssMatch[1]);
        cssExtracted = true;
      }
    }

    // Extract JS once
    if (!jsExtracted) {
      const jsMatch = html.match(/<script>\n([\s\S]*?)\n<\/script>/);
      if (jsMatch && jsMatch[1]) {
        // We'll write this back. Note: If user wanted the old app.js with fetch, we'd add it. 
        // But let's just write what was inlined first.
        fs.writeFileSync(path.join(basePath, 'js', 'app.js'), jsMatch[1]);
        jsExtracted = true;
      }
    }

    // Replace in HTML
    html = html.replace(/<style>\n[\s\S]*?\n<\/style>/, '<link rel="stylesheet" href="css/style.css">');
    html = html.replace(/<script>\n[\s\S]*?\n<\/script>/, '<script src="js/app.js"></script>');

    fs.writeFileSync(pagePath, html);
    console.log(`Reverted ${page}`);
  }
}
