const mysql2 = require('mysql2');
require('dotenv').config();

let con = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: process.env.db
});

module.exports.con = con;

module.exports.connect = function() {
  con.connect();
}