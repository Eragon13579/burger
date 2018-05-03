var orm = require("../config/orm.js");

var burgerMethods = {
  selectAll: function(tableName) {
    orm.selectAll(this.tableName);
  },

  insertOne: function(burger_name, id) {
    orm.insertOne(this.burger_name, this.id);
  },

  updateOne: function(devoured, id) {
    orm.updateOne(this.devoured, this.id);
  },
};

module.exports = burgerMethods;
