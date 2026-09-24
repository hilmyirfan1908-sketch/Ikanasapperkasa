import re

with open('src/pages/Home.jsx', 'r') as f:
    content = f.read()

parts = content.split('      <section className="container" id="products"')
part1 = parts[0]
part2_and_rest = '      <section className="container" id="products"' + parts[1]

parts2 = part2_and_rest.split('      <section className="container" style={{paddingTop: \'24px\'}}>')
product_sec = parts2[0]
part3_and_rest = '      <section className="container" style={{paddingTop: \'24px\'}}>' + parts2[1]

parts3 = part3_and_rest.split('      <section className="container" style={{paddingTop: \'48px\', paddingBottom: \'24px\', position: \'relative\'}}>')
usp_sec = parts3[0]
testi_and_rest = '      <section className="container" style={{paddingTop: \'48px\', paddingBottom: \'24px\', position: \'relative\'}}>' + parts3[1]

# Adjust paddings
usp_sec = usp_sec.replace("style={{paddingTop: '24px'}}", "style={{paddingTop: '24px', paddingBottom: '24px'}}")
testi_and_rest = testi_and_rest.replace("style={{paddingTop: '48px', paddingBottom: '24px', position: 'relative'}}", "style={{paddingTop: '24px', paddingBottom: '24px', position: 'relative'}}")

new_content = part1 + usp_sec + product_sec + testi_and_rest

with open('src/pages/Home.jsx', 'w') as f:
    f.write(new_content)
