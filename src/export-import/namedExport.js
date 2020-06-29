// 個々の機能のエクスポート
// export let name1, name2, nameN;
// export const name1=0, name2=1, nameN=2;
// export function functionName(){}
// export class ClassName {}

// Export List.
// export {
//   name1,
//   name2,
//   nameN,
//   alias1: name1,
//   alias2: name2
// }

// Renaming Exports.
// export {
//   var1 as name1,
//   var2 as name2
// };

// export const { name1, name2: bar } = o;

// Default Export.
// Default exports are useful to export only a SINGLE object, function, class, variable

// export default 0;
// export default{
//   a: 1,
//   b: 2,
//   c: function(){ console.log(1) }
// };

// Unnamed.
// export default function(){}
// export default class{}

// Named.
// export default function name1(){}
// export default class NAME1{}

// export { name1 as default };

// Re-export from a Module
// export * from 'MODULE_FILE.js';
// export { name1, name2, nameN } from 'MODULE_FILE.js';
// export { import1 as name1, import2 as name2, nameN } from 'MODULE_FILE.js';
// export { default } from 'MODULE_FILE.js';


let age = 20

function getAge(){
  return age
}

function setAge(a){
  age = a
}

export {
  getAge,
  setAge
}

// Alias
// export {
//   get_age: getAge,
//   set_age: setAge
// }
