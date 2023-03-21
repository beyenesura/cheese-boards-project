const sequelize = require('../index')
const { DataType }  = require('sequelize');

// similar comments in Board.js - watch out for spelling of imports
const Cheese = sequeliza.define('Cheese', {
  title: Datatype.STRING,
  description: Datatype.STRING
})

module.exports = Cheese;
