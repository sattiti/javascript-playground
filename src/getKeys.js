let getKeys = (o)=>{
  let keys = [];
  for(k in o){
    if(o.hasOwnProperty(k)) keys.push(k);
  }
  return keys
};

const wday = {
  'sunday': 'sun',
  'monday': 'mon',
  'tsueday': 'tsu',
  'wednesday': 'wed',
  'thusday': 'thu',
  'friday': 'fri',
  'saturday': 'sat'
}

console.log(getKeys(wday));
