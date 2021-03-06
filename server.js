#!/usr/bin/env node

// Required modules
var express = require('express'),
    cors = require('cors'),
    fs = require('fs'),
    bodyParser = require('body-parser');

// Create our simple express app
var app = express();

// Setup all middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public'));

app.post('/save', function(req, res) {
  if(/^[a-zA-Z0-9_-]+$/.test(req.body.id)) {
    fs.writeFile('save/' + req.body.id, JSON.stringify(req.body), function(err) {
      if(err) {
        res.send(500, "Error " + err);
      } else {
        res.send("Success");
      }
    });
  } else {
    res.send(401, "Error, bad ID");
  }
});

// Create a HTTP server on port 3000
var server = app.listen(3333, function() {
    console.log('Listening on port %d', server.address().port);
});

