// Required modules
var express = require('express');
var cors = require('cors');

// Create our simple express app
var app = express();

// Setup all middleware
app.use(cors());

app.use(express.static(process.cwd() + '/public'));

// Create a HTTP server on port 3000
var server = app.listen(3333, function() {
    console.log('Listening on port %d', server.address().port);
});

