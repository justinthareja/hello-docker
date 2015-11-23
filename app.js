var express = require('express');
var port = process.env.PORT || 1337;
var app = express();

app.get('/', function(req, res) { res.send('greetings from hookrunner'); });
app.get('/whale', function(req, res) { res.send('why you whaling on me?'); })

app.listen(port);

console.log('listening on port...', port);


