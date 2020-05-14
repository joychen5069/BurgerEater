const connection = require("./connection.js");

const orm = {
  //view all the burgers
  selectAll: function(tableInput,cb) {
    const queryString = "SELECT * FROM "+ tableInput + ";";

    connection.query(queryString, 
       function(err, result) {
      if (err) throw err;
      console.log(result);

      cb(result)
      
    });
  },

  //add a burger
  insertOne: function(table, col, cb) {
    const queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);
    connection.query(queryString, {
      burger_name: col,
      devoured: false
    }, function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result)
    });
  },
  // updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
  //   const queryString =
  //     "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

  //   connection.query(
  //     queryString,
  //     [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     }
  //   );
  // }
};

module.exports = orm;
