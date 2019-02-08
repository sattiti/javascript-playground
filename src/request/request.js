const req = require('request');

function getTest(){
  let url = '';

  req.get(url, {timeout: 1000})
  .on('response', function(res){
    console.log(res.statusCode);
  })
  .on('error', function(err){
    console.log(err.connect);
  });
}

function streamingTest(){
  const url = '';

  req.get(url, {timeout: 10000})
  .on('error', function(err){
    console.log(err.connect);
  })
  .pipe(fs.createWriteStream('a.png'));
}

streamingTest();
