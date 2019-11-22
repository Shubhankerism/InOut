const mysql2 = require('mysql2');
let con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "inout"
});

module.exports.con = con;

module.exports.connect = function() {
  con.connect();
}