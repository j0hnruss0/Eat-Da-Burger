var express = require("express");
var path = require("path");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.get("/pic", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/img/burger-pic.png"));
});

router.get("/css", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/css/burger_style.css"));
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var burgerEaten = "id = " + req.params.id;
  
    console.log("burgerEaten", burgerEaten);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, burgerEaten, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router;
