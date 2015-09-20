var sequence = require('when/sequence');

// requires you to save your model in a seperate file
var MandetsModel = require('./mandate');

var mandates = [
  {mandate: {type: 'string', maxlength: 40, nullable: false, unique: true},
    mandate_id: {type: 'integer', nullable: false, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    created_by: {type: 'integer', nullable: false},
    updated_at: {type: 'dateTime', nullable: true},
    updated_by: {type: 'integer', nullable: true}
  },
  {title: 'Title 1', html: '<p>Lorem ipsum dolor sit amet, graeco efficiendi ne nec, no cibo possit vix</p>'},
  {title: 'Title 2', html: '<p>Lorem ipsum dolor sit amet, graeco efficiendi ne nec, no cibo possit vix</p>'},
  {title: 'Title 3', html: '<p>Lorem ipsum dolor sit amet, graeco efficiendi ne nec, no cibo possit vix</p>'},
  {title: 'Title 4', html: '<p>Lorem ipsum dolor sit amet, graeco efficiendi ne nec, no cibo possit vix</p>'}
];


var operations = posts.map(function (post) {
  return function () {
  	return PostModel.forge(post).save();
  }
});


sequence(operations).then(function (createdModels) {
  console.log(createdModels);
})
.otherwise(function (error) {
  console.error(error.stack);
});
