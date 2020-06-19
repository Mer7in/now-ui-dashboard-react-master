const db = require('./config');

var Mention = db.Model.extend({
    tableName:'mention_count'
});

module.exports = db.model('Mention',Mention);