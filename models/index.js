const {Board} = require('./Board')
const {Cheese} = require('./Cheese')
Cheeses.schema.add({
  Board: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  }
})
module.exports = { Board, Cheese }
