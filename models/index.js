const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
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
module.exports = { Cheeses, Board }
