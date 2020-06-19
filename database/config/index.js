const path = require('path');

var knex = require('knex')({
  client:'mysql',
  connection: {
    port:'3308',
    host:'127.0.0.1',
        user:'root',
        password:'1234',
        database:'marine'
  },
  pool: {
    min: 10,
    max: 50
  },
});

var db = require('bookshelf')(knex);

db.plugin('registry');


module.exports = db;
