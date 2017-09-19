// ###
// I1 app.js 
// Installing Express Web Server
// ###
// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// })

// app.listen(port);

// END I1


// ###
// I2 app.js
// Routing
// ###
// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.sendfile('index.html');
// });

// app.get('/person/:id', function (req, res) {
//     res.send('Person: ' + req.params.id)
// });


// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// });

// app.listen(port);
// END I2


// ###
// I3 app.js && public(Folder)
// Static And Middleware
// ###
// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// // ### Static
// app.use('/assets', express.static(__dirname + '/public'));

// // ### Middleware
// app.use('/', function (req, res, next) {
//     console.log('Request Url: ' + req.url);
//     next();
// });

// app.get('/', (req, res) => {
//     res.send('<html><head><link rel=stylesheet type=text/css href=assets/style.css /></head><body><b>Hellosss World!</b></body></html>');
// });

// app.get('/person/:id', function (req, res) {
//     res.send('Person: ' + req.params.id)
// });


// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// });

// app.listen(port);

// END I3



// ###
// I4 app.js && public , views (Folder)->index.ejs, person.ejs
// Templates And Template Engines
// ###
// var express = require('express');
// var app = express();

// var port = process.env.PORT || 3000;

// // ### Static
// app.use('/assets', express.static(__dirname + '/public'));

// //-------
// app.set('view engine', 'ejs');
// //-------

// // ### Middleware
// app.use('/', function (req, res, next) {
//     console.log('Request Url: ' + req.url);
//     next();
// });

// //-------
// app.get('/', (req, res) => {
//     res.render('index');    
// });


// app.get('/person/:id', function (req, res) {
//     res.render('person', { ID: req.params.id });
// });
// //-------

// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// });

// app.listen(port);
// END I4



// ###
// I5 app.js && public , views (Folder)->index_i5.ejs, person.ejs
// Querystrings And Post
// ###

// var express = require('express');
// var bodyParser = require('body-parser')

// var app = express();

// var port = process.env.PORT || 3000;

// //-------
// // create application/json parser
// var jsonParser = bodyParser.json();

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// //-------

// // ### Static
// app.use('/assets', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');


// // ### Middleware
// app.use('/', function (req, res, next) {
//     console.log('Request Url: ' + req.url);
//     next();
// });


// app.get('/', (req, res) => {
//     res.render('index_i5');
// });


// //------- Querystrings 
// app.get('/person/:id', function (req, res) {
//     res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); // http://localhost:3000/person/1?qstr=Hello
// });

// // FORM Data (Post from Submit...)
// app.post('/person', urlencodedParser, function (req, res) {

//     res.send('Thank you!! @');
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
// });

// // JSON Data (Post from JQUERY)
// app.post('/personjson', jsonParser, function (req, res) {

//     res.send('Thank you for The JSON Data!! @');
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
// });
// //-------


// app.get('/api', function (req, res) {
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// });

// app.listen(port);

// END I5



// ###
// I6 app.js && public , views (Folder)->index_i5.ejs, person.ejs
// RES Tand JSON
// ###

// var express = require('express');
// var bodyParser = require('body-parser')

// var app = express();

// var port = process.env.PORT || 3000;

// //-------
// // create application/json parser
// var jsonParser = bodyParser.json();

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// //-------

// // ### Static
// app.use('/assets', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');


// // ### Middleware
// app.use('/', function (req, res, next) {
//     console.log('Request Url: ' + req.url);
//     next();
// });


// app.get('/', (req, res) => {
//     res.render('index_i5');
// });


// app.get('/person/:id', function (req, res) {
//     res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); // http://localhost:3000/person/1?qstr=Hello
// });

// // FORM Data (Post from Submit...)
// app.post('/person', urlencodedParser, function (req, res) {

//     res.send('Thank you!! @');
//     console.log(req.body.firstname);
//     console.log(req.body.lastname);
// });


// //------- 
// app.get('/api/person/:id', function (req, res) {
//     // get that data from database
//     res.json({ firstname: 'John', lastname: 'Dossssse' });
// });

// app.post('/api/personjson', jsonParser, function (req, res) {
//     // save to the database
// });

// app.delete('/api/person/:id', function (req, res) {
//     // delete from the database
// })

// //-------


// app.listen(port);


// END I6




// ###
// I7 express-generator -> myapp
// Structuring Our App
// ###

// Express application generator

// Create Structuring Express

// npm install express-generator -g
// express myapp
// cd myapp
// npm install

// https://expressjs.com/en/starter/generator.html

var express = require('express');
var app = express();

var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;


// ### Static
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


// ### Middleware
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);
    next();
});


htmlController(app);
apiController(app);

app.listen(port);


// END I17