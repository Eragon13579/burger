// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");

var source = {
  localhost: {
    port: 3307,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burger_DB",
  },
};

// Creating our connection
var connection = mysql.createConnection(source.localhost);

// Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
module.exports = connection;
