var express = require('express');
var sys=require("sys"), fs = require("fs");
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    console.log(buffer.toString());
	response.send(buffer.toString());
});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
