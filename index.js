var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();

app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var db = require('./config/dbPerson');


app.get('/process', function (req, res) {
	res.status(200).send(Boolean(process.stdout));
});

app.get('/', function(req, res) {
	// res.set('Content-Type', 'text/html; charset=utf-8');
	// res.write('<h1>Olá mundinho! xD @:D</h1>');
	// res.status(200).end();
	db.list(function(people) {
		res.render('base', {title: 'Oiis', people: people || []});
	});
});

app.post('/add', function (req, res) {
	var person = {
		number: parseInt(Math.random()*100) + 1,
		name: req.body.name
	};
	db.insert(person, function(err) {
		if (err) console.log(err);
		res.redirect('/');
	});
});

app.post('/remove', function (req, res) {
	db.remove(req.body.idPerson, function(err) {
		if (err) console.log(err);
		res.redirect('/');
	});
});

app.listen(3000, function() {
	//console.log('Servidor HTTP iniciado');
	process.stdout.write('Serviço HTTP iniciado!\n');
});
