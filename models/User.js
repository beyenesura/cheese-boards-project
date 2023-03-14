const sequelize = require('../index')
const { DataType }  = require('sequelize');

// similar comments in Board.js - watch out for spelling of imports
const User = sequeliza.define('User', {
  name: Datatype.STRING,
  email: Datatype.STRING
})

module.exports = User;
