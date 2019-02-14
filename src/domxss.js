// DOM Based XSS
// 1. URL生成時は ^https?:\/\/ のみかつ同一ホストに制限。
// 2. 外部飛ばす場合、ホワイトリストを設ける。
// 3. html escape
// 4. location.href の代わりに、location.protocol + location.host + location.pathname を使う。
// 5. # 以降 (location.hash) が必要か否か。
// 6. ? 以降 (location.search) が必要か否か。
// 7. document.createTextNode() を使う。
// 8. 同一ドメインに制限。

// Check the url is save or not.
isSaveURL = (u, pattern)=>{
  protocol   = window.location.protocol;
  reProtocol = new RegExp('^https?:$');
  return (protocol.match(reProtocol) && u.match(new RegExp(pattern))) ? true : false;
}

// domain check
let base = location.origin + '/';
if(url.substring(0, base.length) === base){
  location.href = encodeURIComponent(url);
}
