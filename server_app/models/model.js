var mongoose = require('mongoose');

var model = mongoose.Schema({
	who: {type: String, required: true},
	name: {type: String, required: true},
	created: {type: Date, default: Date.now},
	model: {type: Object, required: true},
	type: {type: String, required: true}
});

module.exports = mongoose.model('Model', model);