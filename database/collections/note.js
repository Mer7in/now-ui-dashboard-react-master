var db = require('../config.js');
var Note = require('../note.js');

var Notes = new db.Collection();

Notes.model = Note;

module.exports = Notes;