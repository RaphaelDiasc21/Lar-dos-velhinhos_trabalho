const mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'raphael',
    password:'none',
    database:'Teste'
});

conn.connect();

module.exports = conn;
