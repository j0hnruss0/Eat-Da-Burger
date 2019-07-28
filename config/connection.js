require("dotenv").config();

var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.DB_PASSWORD,
    database: "burgers_db"
  })
};

// var { Client } = require("pg");

// var connection = new Client({connectionString: process.env.DATABASE_URL,
//   ssl: true,
// });

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as connection value  ", connection.threadId );
});


module.exports = connection;
