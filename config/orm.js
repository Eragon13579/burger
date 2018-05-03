var connection = require("./connection.js");

var orm = {
  selectAll: function(tableName) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableName], function(err, result) {
      if (err) throw err;
      console.log(result);
      return result;
    });
  },
  insertOne: function(burger_name, devoured) {
    var queryString = "INSERT INTO burgers (burger_name) VALUES (??, ??)";

    connection.query(queryString, [burger_name, devoured], function(
      err,
      result
    ) {
      if (err) throw err;
      return result;
    });
  },
  updateOne: function(devoured, id) {
    var queryString = "UPDATE ?? FROM burgers WHERE id = ?";

    connection.query(queryString, [devoured, id], function(err, result) {
      if (err) throw err;
      return result;
    });
  },
};

module.exports = orm;
