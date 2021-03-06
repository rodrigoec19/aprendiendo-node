var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: '13-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/ingresosDB'
  },

  test: {
    root: rootPath,
    app: {
      name: '13-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/13-mongodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '13-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/13-mongodb-production'
  }
};

module.exports = config[env];
