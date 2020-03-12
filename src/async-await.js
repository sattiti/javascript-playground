function myPromise(){
  return new Promise(function(resolve, reject){
    console.log(1)
    
    setTimeout(function(){
      resolve("aaa")
      console.log(2)
    }, 2000);
  })
}


// async function は非同期処理関数
(async function(){
  // myPromise 関数の処理が終わるまで待機する。
  return await myPromise()
})()

  // return しないと、次の then で使えなくなる。
  .then(function(v){
    console.log(v)
    console.log(3)
    return v
  })
  .then(function(v){
    console.log(v);
    console.log(4);
    return v
});