const Affectation = require('../models/affectation');
const Personelle = require('../models/personelle');

exports.all = (req, res) => {
    Affectation.all( result => {
      if(result) {
          res.type('json');
        res.status(200).send(result);
      }
      else {
        res.status(400).send({message: "can't fetch user from the server retry"})
      }
    })
  }

  exports.findAffectation = (req, res) => {
    Affectation.findAffectation( result => {
      if(result) {
          res.type('json');
        res.status(200).send(result);
      }
      else {
        res.status(400).send({message: "can't fetch user from the server retry"})
      }
    })
  }