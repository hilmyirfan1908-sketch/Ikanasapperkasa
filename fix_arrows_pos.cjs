const fs = require('fs');

let file = fs.readFileSync('src/pages/Kualitas.jsx', 'utf8');

// Current:
//             </div>
//             <button ...>
//             <button ...>
//           </div>
//         </div>
//       </section>

// Want:
//             </div>
//           </div>
//           <button ...>
//           <button ...>
//         </div>
//       </section>

file = file.replace(
  /<\/div>\n            <button className="pdp-arrow prev"/,
  '</div>\n          </div>\n          <button className="pdp-arrow prev"'
);

file = file.replace(
  /<\/button>\n          <\/div>\n        <\/div>\n      <\/section>/,
  '</button>\n        </div>\n      </section>'
);

fs.writeFileSync('src/pages/Kualitas.jsx', file);
