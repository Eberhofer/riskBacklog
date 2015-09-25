var bookshelf = require('./orm');

var Mandate = bookshelf.Model.extend({
  tableName: 'mandates'
});

var Mandates = bookshelf.Collection.extend({
  model: Mandate
});


module.exports = Mandate
