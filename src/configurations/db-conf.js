const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'z5zm8hebixwywy9d.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'tqw0clj342gb97kj',
    password: 'fexp0oxnqclwwvwn',
    database: 'rsrxij6i4xpwem8k',
    multipleStatements: true
  });

  mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('Ahora estamos en Linea :D');
    }
  });

  module.exports = mysqlConnection;