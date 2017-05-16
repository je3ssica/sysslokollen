
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'sysslokollen',
  port: '8889',
  multipleStatements: true
});

connection.connect(function(err){
    if (err) {
        console.log(err);
    } else {
        console.log("connected");
    }
});

module.exports = {connection}
