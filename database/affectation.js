const db = require('./config');
const Personelle = require('./personelle');

var Affectation = db.Model.extend({
  tableName: 'affectation',
  hasTimeStamps: false,
  Personelle:function(){
    return this.belongsTo(Personelle,'Personelle')
  }
});

module.exports = db.model('Affectation', Affectation);