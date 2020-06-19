var db = require('../config.js');
var Personelle = require('../personelle.js');

var Personelles = new db.Collection();

Personelles.model = Personelle;

module.exports = Personelles;