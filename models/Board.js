const sequelize = require('../index')
const { DataType }  = require('sequelize');

const Board = sequeliza.define('Board', {
  type: Datatype.STRING,
  description: Datatype.STRING,
  rating: Datatype.NUM
})

module.exports = Board;
