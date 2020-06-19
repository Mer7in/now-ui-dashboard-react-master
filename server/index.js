require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const utils = require('./utils.js');
const path = require('path');

// const port = process.env.APP_PORT || 3500;

const orderStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/orders/')
  },
  filename: (req, file, cb) => {
    //const name = 'order'+Date.now() + file.originalname.split(' ').join('-');
    const name = 'order-' + Date.now() + file.originalname.split(' ').join('');
    cb(null,  name)
  }
});

const itemStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images/items/')
  },
  filename: (req, file, cb) => {
    //const name = 'order'+Date.now() + file.originalname.split(' ').join('-');
    const name = 'item-' + Date.now() + file.originalname.split(' ').join('');
    cb(null,  name)
  }
});

const orderMulter = multer({storage: orderStorage});
const itemMulter = multer({storage: itemStorage});

//import created function or models
const auth = require('./controllers/auth.js');
const personelle = require('./controllers/personelle.js');
const affectation = require('./controllers/affectation.js');
const notes = require('./controllers/note.js');
const mention = require('./controllers/mention.js')
const user = require('./controllers/user.js');

//token authorization
const {validation, authverify} = require("./middlewares/authorization.js");

const app = express();
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(req, res) {
  // res
  //   .status(200)
  //   .send({ vision_api: "Success" })
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

//Create endpoint authentication
// app.post('/api/signup', auth.signup);
// app.post('/api/signin', auth.signin);


// affectation test

app.get('/data/affectation', affectation.all);
app.get('/data/personelle', personelle.all);
app.get('/data/notes', notes.all);
app.get('/data/mention/:mention',mention.findByMention);
app.get('/data/mention',mention.all);
app.get('/data/affectation/lieu',affectation.findAffectation);
// users
// app.get('/api/users', user.all);
// app.get('/api/users/:email', user.findByEmail); 
// // endpoint about clients (CRUD)
// app.get('/api/clients', client.all);
// app.get('/api/clients/:id', client.find);
// app.post('/api/clients', client.insert);
// app.put('/api/clients/:id', client.update);
// app.delete('/api/clients/:id', client.delete);

// // endpoint about items (CRUD)
// app.get('/api/items', items.getItems);
// app.get('/api/items/:id', items.find);
// app.get('/api/itemsByname/:name', items.findName);
// app.get('/api/itemsByCode/:code', items.findCode);
// app.post('/api/items', itemMulter.any(), items.addItem);
// app.put('/api/items/:id', itemMulter.any(), items.update);
// app.delete('/api/items/:id', items.deleteItem);



app.listen(process.env.PORT || 5000, function() {
  console.log(`Vision Management Backend is listening to port heroku give port`);
});