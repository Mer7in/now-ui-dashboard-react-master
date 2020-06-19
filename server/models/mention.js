const Mention = require('../../database/mention.js');

exports.all=(cb)=>{
    Mention
    .fetchAll()
    .then(function(model){
        cb(model);
    })
    .catch(error=>cb(error));
};

exports.findByMention = (mention,cb)=>{
       // var arr = ['mention', '=', mention];
          Mention.where('mention', '=', mention)
          .fetchAll()
          .then(function(model) {
            cb(model)
          })
          .catch(function(error) {
            console.log("we got an error: ", error);
          });
};
