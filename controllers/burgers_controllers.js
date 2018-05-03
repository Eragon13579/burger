var express = require("express");
var models = require("../models/burger.js");

module.exports = function(app) {
  app.get("/api/burgers", function(req, res) {
    models.burgerMethods.selectAll(req.body.tableName).then(res.send(result));
  });

  app.post("/api/burgers", function(req, res) {
    models.burgerMethods.insertOne(req.body.burger_name).then(res.send(result));
  });

  app.put("/api/burger", function(req, res) {
    models.burgerMethods
      .updateOne(req.body.devoured, req.body.id)
      .then(res.send(result));
  });
};
