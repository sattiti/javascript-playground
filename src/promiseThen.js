(function(){
  // fulfille 履行
  // reject   拒否
  let n = 0;

  new Promise(function(resolve, reject){
    // 成功
    resolve(`${n}: time then`);

    // 失敗
    reject('fail');
  })
  .then(
    // fulfille
    function(msg){
      console.log(msg);
      n = n + 1;
      return `${n}: time then`;
    },
    // rejected
    function(msg){
      console.log(msg);
    },

  )
  .then(function(msg){
    console.log(msg);
    n = n + 1;
    return `${n}: time then`;
  })
  .then(function(msg){
    console.log(msg);
  });
})();
