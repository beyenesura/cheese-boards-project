const sequelize = require('../index')
const { DataType }  = require('sequelize');

const Cheese = sequeliza.define('Cheese', {
  title: Datatype.STRING,
  description: Datatype.STRING
})

module.exports = Cheese;
