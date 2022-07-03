const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index.html');
});

app.get('/users', function(req, res) {
  let fileData = fs.readFileSync('./data/users.json');
  let users = JSON.parse(fileData);

  res.render('users.html', {users});
});

app.get('/users/:id', function(req, res) {
  res.render('user.html', {id: req.params.id});
});

app.listen(port);
console.log('Server started at http://localhost:' + port);