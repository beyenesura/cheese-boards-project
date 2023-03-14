const sequelize = require('../index')
// this import is called DataTypes
const { DataType }  = require('sequelize');

// sequelize spelling typo here
const Board = sequeliza.define('Board', {
  // watch out for capitalization in DataType
  type: Datatype.STRING,
  description: Datatype.STRING,
  rating: Datatype.NUM
})

module.exports = Board;
