var conn = require('./dbConnection');

var dbPerson = {};

dbPerson.connection = conn;
conn.connect(function(err) { });

dbPerson.insert = function(person, callback) {
	var sql = 'INSERT INTO person SET ?';
	this.connection.query(sql, {number: person.number, name: person.name}, function (err, result) {
		callback(err);
	});
};

dbPerson.remove = function(idPerson, callback) {
	var sql = 'DELETE FROM person WHERE idPerson = ?';
	this.connection.query(sql, [idPerson], function (err, result) {
		callback(err);
	});
},

dbPerson.list = function(callback) {
	var sql = 'SELECT * FROM person';
	this.connection.query(sql, [], function (err, result) {
		if (err) {
			callback(null);
		} else {
			var people = [];
			result.forEach(function(res) {
				people.push({
					id : res.idperson,
					number : res.number,
					name : res.name
				});
			});
			callback(people);
		}
	});
}

module.exports = dbPerson;