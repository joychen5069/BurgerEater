const connection = require("./connection.js");

const orm = {
  selectAll: function(tableInput,cb) {
    const queryString = "SELECT * FROM "+ tableInput + ";";

    connection.query(queryString, 
       function(err, result) {
      if (err) throw err;
      console.log(result);

      cb(result)
      
    });
  },
  // insertOne: function(whatToSelect, table, orderCol) {
  //   const queryString = "SELECT ?? FROM ?? ORDER BY ?? DESC";
  //   console.log(queryString);
  //   connection.query(queryString, [whatToSelect, table, orderCol], function(err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //   });
  // },
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
