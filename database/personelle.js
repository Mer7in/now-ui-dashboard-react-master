const db = require('./config');

db.plugin('bookshelf-virtuals-plugin');

var Personelle = db.Model.extend({
    tableName: 'personelle',
    idAttribute:'id'

});

module.exports = db.model('Personelle',Personelle);