Mention =  require('../models/mention.js');

exports.all = (req, res) =>{
    Mention.all( result => {
        if(result) {
            res.type('json');
          res.status(200).send(result);
        }
        else {
          res.status(400).send({message: "can't fetch notes from the server retry"})
        }
      })
};

exports.findByMention = (req, res) =>{
  Mention.findByMention(req.params.mention, (result) => {
      if(result) {
          res.type('json');
        res.status(200).send(result);
      }
      else {
        res.status(400).send({message: "can't fetch notes from the server retry"})
      }
    })
};