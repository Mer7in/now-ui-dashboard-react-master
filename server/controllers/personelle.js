const Personelle = require('../models/personelle.js');
const bcrypt = require('bcryptjs');

exports.all = (req, res) => {
  Personelle.all( result => {
    if(result) {
        res.type('json');
      res.status(200).send(result);
    }
    else {
      res.status(400).send({message: "can't fetch user from the server retry"})
    }
  })
}