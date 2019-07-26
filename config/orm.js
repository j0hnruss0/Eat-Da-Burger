var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  

function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        
        arr.push(key + "=" + value);
      }
    }
  
    return arr.toString();
}

var orm = {
    selectAll: function(table, callback) {
        var query = "SELECT * FROM " + table + ";";
        connection.query(query, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    insertOne: function(table, columns, values, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, values, function(err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    updateOne: function(table, values, foodId, callback) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(values);
        queryString += " WHERE ";
        queryString += foodId;

        console.log(queryString);
    
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            callback(result);
        });

    }
};

module.exports = orm;
  