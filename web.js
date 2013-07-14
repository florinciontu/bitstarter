var express = require('express');
var fs=require('fs')
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  try{
  buffer=fs.readFileSync("index.html","utf-8");
  }catch(e){
  console.log("File not found");
  }
  text=buffer.toString("utf-8");
  console.log(text); 
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
