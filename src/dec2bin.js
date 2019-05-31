const ip  = "192.168.0.1";
let   bip = [];
ip.split('.').forEach((o)=>{
  bip.push(parseInt(o).toString(2));
});
console.log(bip.join('.'));
