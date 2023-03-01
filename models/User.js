const sequelize = require('../index')
const { DataType }  = require('sequelize');

const User = sequeliza.define('User', {
  name: Datatype.STRING,
  email: Datatype.STRING
})

module.exports = User;
