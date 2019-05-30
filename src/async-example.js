function a(){
  return new Promise((resolve, reject)=>{
    resolve();
    console.log('a');
  });
};

async function main(){
  for(let i=0; i<10; i++){
    await a();
    console.log(i);
  };
};

main();