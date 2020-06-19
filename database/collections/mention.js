var db = require('../config.js');
var Mention = require('../mention.js');

var Mentions = new db.Collection();

Mentions.model = Mention;

module.exports = Mentions;