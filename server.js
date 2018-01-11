var express = require('express');
var app = express()

var mysql = require('mysql');

var morgan = require('morgan');
var cors = require('cors')

var port = 8080;

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'LuingusMansion64!',
    database : 'quiddb'
});

connection.connect();

app.use(morgan('dev'));
app.use(cors());

app.get('/', function (req, res){
    connection.query('SELECT * FROM standings2017_2018 WHERE games > 0 ORDER BY genRank',  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.listen(port);