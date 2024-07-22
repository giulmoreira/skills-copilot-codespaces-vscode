// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var commentsPath = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

// Serve static files
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Get comments
app.get('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});

// Add comments
app.post('/api/comments', function(req, res) {
  fs.readFile(commentsPath, function(err, data) {
    if(err) {
      console.error(err);
      process.exit(1);
    }
    var comments = JSON.parse(data);
    var newComment = {
      id: Date.now(),