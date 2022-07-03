const express = require('express');
const path = require('path');
const { users } = require('./routes/users');

const app = express();
const port = process.env.PORT || 3001;

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
  res.render('index.html');
});

users(app);

app.listen(port);
console.log('Server started at http://localhost:' + port);
