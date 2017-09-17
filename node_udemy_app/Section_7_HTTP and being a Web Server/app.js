// ###
// G5 app.js
// Lets Build A Web Server
// ###

// var http = require('http');

// http.createServer(function (req, res) {

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello world\n');

// }).listen(1337, '127.0.0.1');

// END G5


// ###
// G6 app.js && index.html
// Outputting HTML And Templates
// ###

// var http = require('http');
// var fs = require('fs'); 

// http.createServer(function (req, res) {

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
//     var message = 'Hello World';


//     html = html.replace('{Message}', message);

//     res.end(html);

// }).listen(1337, '127.0.0.1');

// END G6


// ###
// G7 app.js && index.html
// Streams And Performance
// ###

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {

//     res.writeHead(200, { 'Content-Type': 'text/html' });

//     fs.createReadStream(__dirname + '/index.html').pipe(res);



// }).listen(1337, '127.0.0.1');

// END G7


// ###
// G9 app.js && index.html
// Outputting JSON
// ###

// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {

//     res.writeHead(200, { 'Content-Type': 'application/json' });

//     var obj = {
//         firstname: 'John',
//         lastname: 'Doe'
//     };
//     res.end(JSON.stringify(obj));

// }).listen(1337, '127.0.0.1');

// END G9


// ###
// G10 app.js && index.html
// Routing
// ###

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {


    if (req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }
    else if (req.url === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });

        var obj = {
            firstname: 'John',
            lastname: 'Doe'
        };
        res.end(JSON.stringify(obj));
    }
    else {
        res.writeHead(404);
        res.end();
    }


}).listen(1337, '127.0.0.1');

// END G10
