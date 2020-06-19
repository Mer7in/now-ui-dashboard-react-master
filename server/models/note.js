const Note = require('../../database/note.js');
const Personelle  =  require ('../../database/personelle.js');

exports.all=(cb)=>{
    Note
    .fetchAll()
    .then(function(model){
        cb(model);
    })
    .catch(error=>cb(error));
};

exports.findNoteMention = (cb) => {
    var arr = ['mention', 'nom', 'prenom'];
      Note
      .fetchAll()
      .then(function(model) {
        cb(model)
      })
      .catch(function(error) {
        console.log("we got an error: ", error);
      });
  };