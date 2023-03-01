const sequelize = require('../index')
const { DataType }  = require('sequelize');

const Board = sequeliza.define('Board', {
  name: Datatype.STRING,
  email: Datatype.STRING
})

module.exports = User
