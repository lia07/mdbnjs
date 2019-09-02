var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var autoresSchema = new Schema({
	'nombre' : String,
	'libros' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'libros'
	}
});

module.exports = mongoose.model('autores', autoresSchema);
