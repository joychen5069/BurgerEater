const orm = require('../config/orm')

const burger = {
  //show all the burgers
    selectAll: (cb) => {
      orm.selectAll("burgers", (res) => {
        cb(res);
      });
    },

    //add a new burger into the to be eaten pile
    insertOne: (cols, vals, cb) => {
      orm.insertOne("burgers", cols, vals, (res) => {
        cb(res);
      });
    },
    
    //update burger to be devoured 
    updateOne: (objColVals, condition, cb) => {
      orm.updateOne("burgers", objColVals, condition, (res) => {
        cb(res);
      });
    },
    
  };
  
  // Export the database functions for the controller (burgersController.js).
  module.exports = burger;