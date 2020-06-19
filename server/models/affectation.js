const db = require('../../database/config')
const Affectation = require('../../database/affectation');

exports.all = (cb) => {
    Affectation
    .fetchAll()
    .then(function(model) {
      cb(model);
    })
    .catch(error => cb(error))
  };

  exports.findAffectation = (cb) => {
    let query = "SELECT count(*) as count, lieu from affectation GROUP BY lieu";

    db.knex.raw(query)
    .then(function(model){
      cb(model[0]);
    })
    .catch(error => cb(error))
  };