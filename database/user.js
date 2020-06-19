const db = require('./config');

var User = db.Model.extend({
  tableName: 'users',
  hasTimeStamps: true
});

module.exports = db.model('User', User);
