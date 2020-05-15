const orm = require('../config/orm')

const burger = {
  //show all the burgers
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    
    //update burger to be devoured 
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    },
    
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;