const fs = require('fs');

function users(app) {
  app.get('/users', function(req, res) {
    let fileData = fs.readFileSync('./data/users.json');
    let users = JSON.parse(fileData);
  
    res.render('users.html', {users});
  });
  
  app.get('/users/:id', function(req, res) {
    res.render('user.html', {id: req.params.id});
  });
}

module.exports.users = users;