const sequelize = require('../index')
const { DataType }  = require('sequelize');

const Cheese = sequeliza.define('Cheese', {
  type: Datatype.STRING,
  description: Datatype.STRING,
  rating: Datatype.NUM
})

module.exports = Cheese;
