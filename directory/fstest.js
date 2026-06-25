// // import index from "./index.html"
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

import fs from 'node:fs';

fs.readFile('./index.html', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});


function access() {

  fs.accessSync('./index.html');
  fs.openSync('./index.html');
  // fs.rename('./index.html', './index1.html');
  console.log('donezo');
  
}

access();
