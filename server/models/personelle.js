const Personelle =  require('../../database/personelle');
const Affectation = require('../../database/affectation');

exports.all = (cb) => {
    Personelle
    .fetchAll()
    .then(function(model) {
      cb(model);
    })
    .catch(error => cb(error))
  };