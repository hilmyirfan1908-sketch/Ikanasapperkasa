const fs = require('fs');
const html = fs.readFileSync('.legacy_backup/index.html', 'utf8');

const uspStart = html.indexOf('<!-- DETAILED USPS -->');
const faqStart = html.indexOf('<!-- FAQ');
const content = html.substring(uspStart, faqStart);

// Convert to JSX
let jsx = content
  .replace(/class=/g, 'className=')
  .replace(/style="([^"]+)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(rule => {
      const parts = rule.split(':');
      if (parts.length === 2) {
        const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        styleObj[key] = parts[1].trim();
      }
    });
    return `style={${JSON.stringify(styleObj)}}`;
  })
  .replace(/<img(.*?)>/g, '<img$1 />')
  .replace(/<!--.*?-->/g, '')
  .replace(/<i data-lucide="([^"]+)"><\/i>/g, '') // Remove icons as they need import
  ;

fs.writeFileSync('output.jsx', jsx);
