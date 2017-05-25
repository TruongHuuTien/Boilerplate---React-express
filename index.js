const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');


const app = express();
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var users = [];
var session = {};

app.get('/users', (req, res) => {
  var token = req.query.jwt;
  try {
    var decoded = jwt.verify(token, 'entrenous');
    var list = [];
    for (var i=0; i<users.length; i++) {
      list.push({
        email: users[i].email
      })
    }
    res.send(list);
  } catch(err) {
    res.status(401).send("wrong jwt");
  }

  return true;
});

app.post('/signup', (req, res) => {
  var user = req.body.user;
  users.push(user);
  res.send("OK");
  return true;
});

app.post('/login', (req, res) => {
  var user = req.body.user;
  var mailFound = false;
  for (var i=0; i<users.length; i++) {
    if (users[i].email === user.email) {
      mailFound = true;
      if (users[i].pwd === user.pwd) {

        // JWT
        var token = jwt.sign({ user: user.email }, 'entrenous');

        users[i].token = token;
        session[token] = users[i];
        res.send({jwt: token});
      } else {
        res.status(401).send("Wrong password");
      }
      return true;
    }
  }
  if (!mailFound) {
    res.status(401).send("No users with this email: "+ user.email);
  }
  return true;
});


// start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
