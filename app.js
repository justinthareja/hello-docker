var express = require('express');
var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res) {
  res.send('my first docker container!');
});

app.listen(port);

console.log('listening on port...', port);


