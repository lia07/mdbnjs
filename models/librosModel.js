var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var librosSchema = new Schema({
	'nombre' : String,
	'autores' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'autores'
	}
});

module.exports = mongoose.model('libros', librosSchema);
