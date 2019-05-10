const path = require('path');
const file = path.resolve('../coffee/src/sample.coffee');
console.log(path.parse(file));
console.log(path.basename(file));
console.log(path.dirname(file));
console.log(path.isAbsolute(file));
