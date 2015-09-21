var bookshelf = require('./orm');

var Project = bookshelf.Model.extend({
  tableName: 'projects'
})

var Projects = bookshelf.Collection.extend({
  model: Project
});


module.exports = Project
