;(function(w,d){
  let a = prompt('amazon search','');
  if(a.length<0)return;
  a = encodeURIComponent(a);
  const u='https://www.amazon.co.jp/exec/obidos/external-search/?keyword='+a+'&emi=AN1VRQENFRJN5';
  w.location.replace(u);
})(window,document);