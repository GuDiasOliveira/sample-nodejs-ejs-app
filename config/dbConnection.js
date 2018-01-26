var mysql = require('mysql');

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'a1234',
	database: 'testes'
});

module.exports = conn;