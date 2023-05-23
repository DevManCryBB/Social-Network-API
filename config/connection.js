const { connect, connection } = require('mongoose');

connect('mongodb://localhost/thoughtExample', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;