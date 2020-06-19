const User = require('../models/user.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

//Function to encrypt password
const hashPass = (pass, cb) => {
  bcrypt.hash(pass, 10, function(err, hash) {
    cb(hash);
  });
}

//Function to decrypt password
const decrypt = (password, hashPass, cb) => {
  bcrypt.compare(password, hashPass, function(err, res) {
      cb(res);
  });
}

// Signup method for user
exports.signup = (req, res) => {

  let data = req.body;
  // res.status(200).send(data);
  // console.log(req.body)

  User.insert(data, (user)  => {
    if (user) {
      delete user.password;
      res.status(200).send(user);
    } else {
      res.status(403).send({
        error: "Duplicate",
        message: "Already exist in the system"
      })
    }
  });

  // get the temporary location of the file
  // hashPass(data.password, (pass)=>{
  //   data.password = pass;
  //   console.log("where are u password: ", password);
  //   User.insert(data, (user)  => {
  //     if (user) {
  //       res.status(200).send(user);
  //     } else {
  //       res.status(403).send({
  //         error: "Duplicate",
  //         message: "Already exist in the system"
  //       })
  //     }
  //   });

  // });
}

// Create user signin process
exports.signin = (req, res) => {
  let data = null;

  if(req.query.hasOwnProperty("username")) {
    data = req.query
  }
  else {
    data = req.body;
  }

  User.findByUsername(data.username, userData => {
    let pass = data.password.toString();

    if (userData !== null &&  pass === userData.password) {

      delete userData.password;
      let userInfo = {
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        email: userData.email,
        phone: userData.phone,
        type: userData.type,
      }

      let token = jwt.sign(userInfo, 'secret', { expiresIn: '12h' });
      res.status(200).send({token, user: userInfo})
      // decrypt(data.password, userData.password, (response) => {
      //   if(response) {
      //       delete userData.password;
      //       let userInfo = {
      //         id: userData.id,
      //         first_name: userData.first_name,
      //         last_name: userData.last_name,
      //         username: userData.username,
      //         email: userData.email,
      //         phone: userData.phone,
      //         type: userData.type,
      //       }

      //       let token = jwt.sign(userInfo, process.env.JWT_SECRET, { expiresIn: '12h' });
      //       res.status(200).send({token, user: userInfo})
      //   }else {
      //     res.status(400).send({Message: 'Wrong user credentials'})
      //   }
      // })
    } else {
      res.status(400).send({Message: 'Wrong user credentials'})
    }
  });
}
