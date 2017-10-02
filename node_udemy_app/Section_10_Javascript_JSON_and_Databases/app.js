
// ###
// J2 app.js && controllers(Folder) && public, views
// Node And My SQL
// ###


// var express = require('express');
// var app = express();
// //-----------
// var mysql = require('mysql');
// //-----------

// var apiController = require('./controllers/apiController');
// var htmlController = require('./controllers/htmlController');

// var port = process.env.PORT || 3000;


// // ### Static
// app.use('/assets', express.static(__dirname + '/public'));

// app.set('view engine', 'ejs');

// // ### Middleware
// app.use('/', function (req, res, next) {
//     console.log('Request Url



: ' + req.url);

//     var con = mysql.createConnection({
//         host: 'localhost',
//         user: 'root',
//         password: '',
//         database: 'my.addressbook'
//     });

//     con.query('SELECT people.ID, Firstname, Lastname, Address FROM people INNER JOIN personaddresses ON people.ID = personaddresses.PersonID INNER JOIN addresses ON personaddresses.AddressID = Addresses.ID',
//     function(err, rows){
//         if(err) throw err;
//         console.log(rows[0].Firstname);
//     })

//     next();
// });


// htmlController(app);
// apiController(app);

// app.listen(port);


// END I17




// ###
// J4 app.js && controllers(Folder) && public, views
// Mongo DB
// ###


var express = require('express');
var app = express();
//------------- ###
var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds139884.mlab.com:39884/addressbooknew');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    firstname: String,
    lastname: String,
    address: String
});

var Person = mongoose.model('Person', personSchema);

//****
var john = Person({
    firstname: 'John',
    lastname: 'Doe',
    address: '555 Main St.'
});
// save the user
john.save(function (err) {
    if (err) throw err;

    console.log('person saved!');
});


var jane = Person({
    firstname: 'Jane',
    lastname: 'Doe',
    address: ' 12 Main ST'
});
// save the user
jane.save(function (err) {
    if (err) throw err;

    console.log('person saved!');
});
//****

//-------------





var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

var port = process.env.PORT || 3000;

// ### Static
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');


// ### Middleware
app.use('/', function (req, res, next) {
    console.log('Request Url: ' + req.url);

    // get all the users
    Person.find({}, function (err, users) {
        // docs.forEach

        if (err) throw err;

        // object of all the users
        console.log(users[0].firstname);
    });

    next();
});


htmlController(app);
apiController(app);

app.listen(port);


// END I17