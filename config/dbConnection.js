var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'a12345',
	database: 'teste_nodejs'
});

module.exports = conn;