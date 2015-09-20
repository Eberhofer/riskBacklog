var sequence = require('when/sequence');

// requires you to save your model in a seperate file
var MandateModel = require('./mandate');

var mandates = [
  {mandate: 'first mandate'  },
  {mandate: 'second mandate'  },
  {mandate: 'third mandate'  }
];


var operations = mandates.map(function (mandate) {
  return function () {
  	return MandateModel.forge(mandate).save();
  }
});


sequence(operations).then(function (createdModels) {
  console.log(createdModels);
})
.otherwise(function (error) {
  console.error(error.stack);
});
