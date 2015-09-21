var bookshelf = require('./orm');

var Task = bookshelf.Model.extend({
  tableName: 'tasks'
})

var Tasks = bookshelf.Collection.extend({
  model: Task
});


module.exports = Task
