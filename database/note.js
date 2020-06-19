const db = require('./config');
const Personnelle = require('./personelle');

var Note = db.Model.extend({
    tableName:'notes',
    Personnelle: function(){
        return this.belongs(Personnelle,'id2');
    }
});

module.exports = db.model('Note',Note);