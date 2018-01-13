var express = require('express');
var app = express()

var mysql = require('mysql');

var morgan = require('morgan');
var cors = require('cors')

var port = 8080;

var connection = mysql.createConnection({
    host     : 'awsquid.cbfnhixvsxgj.us-west-2.rds.amazonaws.com',
    user     : 'root',
    password : 'mypassword',
    database : 'quid'
});

connection.connect(function (err){
    if (err){
        console.log('Unable to connect to server try: sudo service mysql start');
        throw err;
    }
});

app.use(morgan('dev'));
app.use(cors());

app.get('/standings/general', function (req, res){
    connection.query('SELECT * FROM standings2017_2018 WHERE games > 0 ORDER BY genRank',  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

app.get('/standings/general/:division/:region/:sort/:cend', function (req, res){
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
    var ord = 'ORDER BY ' + req.params.sort + ' ' + req.params.cend;
    sql += ord;

    // console.log(sql);
    connection.query(sql,  function (error, results, fields) {
        if (error) throw error;
        res.send(results);
    });
});

app.get('/standings/atlarge/:division/:region/:sort/:cend', function (req, res){
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
    var ord = 'ORDER BY ' + req.params.sort + ' ' + req.params.cend;

    sql += ord;

    // console.log(sql);
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

app.get('/teams/:team/games', function (req, res){
    connection.query(`
    SELECT * FROM (((SELECT teamName, genRank AS rank1 from standings2017_2018) AS s1 JOIN games ON teamName = team1) 
    JOIN (SELECT s.teamName, s.genRank AS rank2 FROM standings2017_2018 AS s) AS s2 ON s2.teamName = team2) 
    WHERE team1 = ? OR team2 = ? ORDER BY gameDate DESC, event`, 
    [req.params.team, req.params.team], function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/teams/:team/events', function (req, res){
    connection.query(`SELECT event, max(gameDate) as gameDate FROM games WHERE team1 = ? OR team2 = ? GROUP BY event ORDER BY gameDate DESC`, [req.params.team, req.params.team], function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.get('/rank/:team', function (req, res){
    connection.query('SELECT genRank FROM standings2017_2018 where teamName = ?', [req.params.team], function (error, results, fields) {
        if (error) throw error;
        res.send(results);
      });
});

app.listen(port);