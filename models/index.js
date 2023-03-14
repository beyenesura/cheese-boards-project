const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
// to add associations, use methods such as 
// belongsTo(), hasMany(), or belongsToMany()
Cheeses.schema.add({
  Board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  }
})
Board.schema.add({
  Cheeses: {
    type: Schema.Types.ObjectId,
    ref: 'Cheeses'
  }
})
// the Cheese model is singular
module.exports = { Cheeses, Board }
