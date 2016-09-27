var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : '127.0.0.1',
    user     : 'root',
    password : '$Gflores016',
    database : 'mini_store',
    charset  : 'utf8'
  }
});

var bookshelf = require('bookshelf')(knex);

module.exports = bookshelf;