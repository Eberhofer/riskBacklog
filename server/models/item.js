var bookshelf = require('./orm');

var Item = bookshelf.Model.extend({
  tableName: 'items'
})

var Items = bookshelf.Collection.extend({
  model: Item
});


module.exports = Item
