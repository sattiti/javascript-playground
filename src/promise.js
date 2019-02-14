// 非同期処理の操作可能
// 非同期処理の成功時(resolve)、失敗時(reject)
// 非同期処理を平行、直列に実行させることが出来る。

// resolve 成功時
// reject 失敗時
var p = new Promise(function(resolve, reject) {
  setTimeout(()=>{
    resolve('Success!');
  }, 1000);
});

// p.then(onFulfilled(VALUE)[, onRejected(REASON)]);
p.then(function(value) {
  // 成功時の処理
  console.log(value);
}).catch(()=>{
  // 失敗時の処理
  console.log(2);
});
