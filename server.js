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

app.get('/standings/general', function (req, res){
    connection.query('SELECT * FROM standings2017_2018 WHERE games > 0 ORDER BY genRank',  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/standings/general/:division/:region', function (req, res){
    var sql = `
    SELECT *
    FROM (standings2017_2018 JOIN teams ON teamname = name)
    WHERE games > 0
    `;
    if (req.params.division != 'All'){
        var div = mysql.format('AND teams.division = ?',[req.params.division]);
        sql += div;
    }
    if (req.params.region != 'All'){
        var reg = mysql.format('AND region = ?',[req.params.region]);
        sql += reg;
    }
    sql += 'ORDER BY genRank ASC'
    connection.query(sql,  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/standings/atlarge/:division/:region', function (req, res){
    var sql = `
    SELECT *
    FROM (standings2017_2018 JOIN teams ON teamname = name)
    WHERE games > 0 AND qualified = 0
    `;
    if (req.params.division != 'All'){
        var div = mysql.format('AND teams.division = ?',[req.params.division]);
        sql += div;
    }
    if (req.params.region != 'All'){
        var reg = mysql.format('AND region = ?',[req.params.region]);
        sql += reg;
    }
    sql += 'ORDER BY genRank ASC'
    connection.query(sql,  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/teams', function (req, res){
    connection.query('SELECT * FROM teams ORDER BY name ASC',  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/teams/:team', function (req, res){
    connection.query('SELECT * FROM standings2017_2018 WHERE teamName = ?', [req.params.team], function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/teams/search/:term', function (req, res){
    connection.query('SELECT name FROM teams WHERE name LIKE ? ORDER BY name ASC LIMIT 5',['%' + req.params.term + '%'],  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.listen(port);