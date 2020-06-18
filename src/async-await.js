// async
// async 非同期処理を実行する関数定義。
// async 関数は自動的に Promise を返す。

// await
// await は Promise 処理の結果が返ってくるまで一時停止してくれる演算子。
// await は async で定義された関数の中だけでしか使えない。
// Promise.then(v=>{}) を簡略した書き方。
// Promise.then(v=>{}) を使わずに戻り値を取得することができる。
(async function(){
  return await (async (()=>{
    return 2
  })())
})()
.then((v)=>{
})
.catch((v)=>{
})

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



async function fn1(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log(1)
      resolve(2)
    }, 2000)
  })
}

async function main(){
  // f1 is 2
  let f1 = await fn1()
  console.log(f1)
  console.log(3)
}

main()