var db = require('../config.js');
var user = require('../user.js');

var Users = new db.Collection();

Users.model = User;

module.exports = Users;