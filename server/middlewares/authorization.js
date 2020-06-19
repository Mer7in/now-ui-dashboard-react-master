const jwt = require('jsonwebtoken');

exports.validation = (req, res, next) => {
  const bearerHeader = req.headers.authorization;
  if(typeof bearerHeader !== 'undefined'){
    const token = bearerHeader.split(' ')[1];
    req.token = token;
    next();
  }else{
    //res.sendStatus(403)
    res.status(403).send('Need Token to access');
  }
};

exports.authverify = (req, res, next) => {
  jwt.verify(req.token, process.env.JWT_SECRET, (err, decoded)=> {
    if(err){
      res.status(403).json({message: 'Invalid token, login to get your token'});
    }else{
      req.decoded = decoded;
      next();
    }
  });
};
