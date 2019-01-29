var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'student',
  database : 'birthday_reminder'
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM items', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var postAccounts = function(req, res, callback) {
  var owner_name = req.body.owner_name;
  var email = req.body.email;
  var pw = req.body.pw;
  var phone_number = req.body.phone_number;

  var sql = `INSERT INTO accounts (owner_name, email, pw, date_created, phone_number) VALUE (?, ?, ?, ?, ?)`;
  connection.query(sql, [owner_name, email, pw, 'DATETIME: Auto CURDATE()', phone_number], (err, results) => {
    if (err) {
      console.log("WALNUTS");
      callback(err, null);
    } else {
      callback(null, results);
    }
  })
}

module.exports.selectAll = selectAll;
module.exports.connection = connection;