var db = require('../config.js');
var Affectation = require('../affectation.js');

var Affectations = new db.Collection();

Affectations.model = Affectation;

module.exports = Affectations;