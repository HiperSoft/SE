var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var cors = require('cors');
var assert = require('assert');
// instanciar
var app = express();
var db;

app.use(cors());
app.options('*', cors());
MongoClient.connect('mongodb://snadmin12:admin12++@ds155674.mlab.com:55674/sn', (err, database) => {
    if (err) return console.log(err)
    db = database;
    // escuchar
    app.listen(9000);
})

//bd

// ruteo
app.get('/api/auth', function(req, res) {
    db.collection('users').find({ user: req.param('user'), password: req.param('password') }).toArray(function(err, results) {
        res.send(results[0]);
        // send HTML file populated with quotes here
    })
});
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

app.get('/api/curse', function(req, res) {
    db.collection('curse').find().toArray(function(err, result) {
        res.send(result);
    })
});

app.get('/api/consultors', function(req, res) {
    db.collection('users').find({ type: 1 }).toArray(function(err, result) {
        res.send(result);
    })
});

app.get('/api/consultors/add', function(req, res) {
    db.collection('users').insert(req.consultor, function(err, result) {
        assert.equal(err, null);
        res.send(true);
    });
});

app.get('/api/CE/add', function(req, res) {
    db.collection('CE').insert(req.CE, function(err, result) {
        assert.equal(err, null);
        res.send(true);
    });
});

app.get('/api/module', function(req, res) {
    //{ name: req.param('module') }
    db.collection('modules').find({ name: req.param('module') }).toArray(function(err, result) {
        res.send(result[0]);
    })
});

console.log("Servidor Express escuchando en modo %s", app.settings.env);