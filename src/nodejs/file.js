const fs       = require('fs');
const path     = require('path');
const readline = require('readline');

// fs.readFile(PATH, {ENCODING, FLAG}, (err, data)=>{});
// const buf = fs.readFileSync(PATH, {ENCODING, FLAG});

// read line by line
const filePath = 'domxss.js';
let count      = 0;

readline.createInterface({
  input: fs.createReadStream(filePath)
}).on('line', (line)=>{
  count += 1;
  console.log(`${count}: ${line}`);
});

