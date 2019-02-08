const app = require('express')();

app.get('/', (req, res)=>{
  doc = `<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" contnet="width=device-width">
    <title>HOME</title>
  </head>
  <body>
    <h1>hello world</h1>
  </body>
</html>`;

  res.send(doc);
});

app.listen(3000, ()=>{
  console.log('listening on port 3000');
});
