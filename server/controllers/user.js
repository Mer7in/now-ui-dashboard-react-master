const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

exports.all = (req, res) => {
  User.all( result => {
    if(result) {
      res.status(200).send(result);
    }
    else {
      res.status(400).send({message: "can't fetch user from the server retry"})
    }
  })
}

exports.findByEmail = (req, res) => {

  User.findByEmail( req.params.email, (result) => {
    if(result) {
      res.status(200).send(result);
    }
    else {
      res.status(400).send({message: result})
    }
  })
}