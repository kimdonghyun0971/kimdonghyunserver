var express = require('express');
var ParseServer = require('parse-server').ParseServer;

var app = express();

var api = new ParseServer({
	databaseURI: 'mongodb+srv://kimdonghyun0971:ki4864265@cluster0-hagfi.mongodb.net/test?retryWrites=true',
	appId: 'kimdonghyun0971',
	masterKey: 'ki4864265',
	fileKey: 'ki4864265',
	serverURL: "http://localhost:1337/parse"
});

//server the Parse API on the .parse URL prefix
app.use('/parse', api);

var port = process.env.PORT || 1337;
app.listen(port, function() {
	console.log('parse-server running on port ' + port + '.');
});