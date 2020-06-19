const User = require(`../../database/user`);

exports.findByEmail = (email, cb) => {
  new User({ email })
    .fetch()
    .then(function(model) {
      if (model === null) {
        cb({});
      } else {
        let item = model.attributes;
        cb(item);
      }
    })
    .catch(function(error) {
      console.log("we got an error: ", error);
    });
};

exports.findByUsername = (id, cb) => {
  new User({id})
    .fetch()
    .then(function(model) {
      if (model === null) {
        cb(null);
      } else {
        let user = model.attributes;
        cb(user);
      }
    })
    .catch(function(error) {
      console.log("we got an error: ", error);
    });
};

//Add new user
exports.insert = (user, cb) => {
  new User({})
    .save(user, { method: "insert" })
    .then(function(saveUser) {
      let userValue = saveUser.attributes;
      // console.log("after user insert  ", userValue);
      cb(userValue,{});
    })
    .catch(err => console.log(err));
  // exports.findByUsername(user['username'], result => {
  //   if (result !== null) {
  //     cb( null, { error: "User already exists" } );
  //   } else {
  //     new User({})
  //       .save(user, { method: "insert" })
  //       .then(function(saveUser) {
  //         let userValue = saveUser.attributes;
  //         // console.log("after user insert  ", userValue);
  //         cb(userValue,{});
  //       })
  //       .catch(err => console.log(err));
  //   }
  // });
};

exports.update = (id, data, cb) => {
  User
  .where({ id })
  .save(data,{patch: true})
  .then((model)=>{
      cb(model)
  })
  .catch(error => cb(error))
}

exports.all = (cb) => {
  User
  .fetchAll()
  .then(function(model) {
    let data = model.map((item)=>{
      delete item._previousAttributes.password;
      return item._previousAttributes;
    });

    return data
  }).then(function (data) {
    cb(data);
  })
  .catch(error => cb(error))
};