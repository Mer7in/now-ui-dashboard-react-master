Note =  require('../models/note.js');

exports.all = (req, res) =>{
    Note.all( result => {
        if(result) {
            res.type('json');
          res.status(200).send(result);
        }
        else {
          res.status(400).send({message: "can't fetch notes from the server retry"})
        }
      })
};

exports.findNoteMention= (req, res) =>{
    Note.findNoteMention( result => {
        if(result) {
            res.type('json');
          res.status(200).send(result);
        }
        else {
          res.status(400).send({message: "can't fetch notes from the server retry"})
        }
      })
};