var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var db = require('../database-mysql');
// var items = require('../database-mongo');
var bodyParser = require('body-parser')
var accountSid = 'AC27ad24fdd046ed21aa066e77910b626b';
var authToken = '96996d9569555d59622e213e3ac05b17';

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }   
  });
});

app.post('/accounts', (req, res) => {
  var owner_name = req.body.owner_name;
  var email = req.body.email;
  var pw = req.body.pw;
  var phone_number = req.body.phone_number;
  console.log(req.body);

  var sql = `INSERT INTO accounts (owner_name, email, pw, date_created, phone_number) VALUE (?, ?, ?, CURTIME(), ?)`;
    db.connection.query(sql, [owner_name, email, pw, phone_number], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    })

      
client.messages.create({
  body: 'Hello, your birthday reminder is now set up! You will be texted again on the date you specified!',
  to: phone_number,
  from: '+15716205653'
})
.then((message) => {
  console.log(message.sid)
});

});

app.post('/birthdays', (req, res) => {
  var friend_id = 1;
  var name = req.body.friend_name;
  var birthdate = req.body.birthdate;
  var accountid = 1;
  var reminder_timer1 = req.body.reminder1;
  var reminder_timer2 = req.body.reminder2;
  var reminder_timer3 = req.body.reminder3;
  console.log(req.body);
  var sql = `INSERT INTO birthdays (friend_id, friend_name, birthdate, account_id, reminder_timer1, reminder_timer2, reminder_timer3) VALUE (?, ?, ?, ?, ?, ?, ?)`;
    db.connection.query(sql, [friend_id, name, birthdate, accountid, reminder_timer1, reminder_timer2, reminder_timer3], (err, results) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        res.status(200).send(results);
      }
    })
});



app.listen(3333, function() {
  console.log('listening on port 3333!');
});

