const os = require('os');
console.log(os.type());
console.log(__dirname);
console.log(__filename);

const crypto = require('crypto');

const secret = "testest";
const hash = crypto.createHmac('sha512', secret).update("hello").digest('hex');
console.log(hash);
