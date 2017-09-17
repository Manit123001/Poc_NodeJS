// ###
// H4 app.js
// init, nodemon, and package.json
// ###
// var monent = require('moment');
// console.log(monent().format('ddd, hA'));

// END H4



// ###
// H5 app.js && index.html
// Init Nodemon Packagejson Part2
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
        res.end('Page NotFound');
    }


}).listen(1337, '127.0.0.1');

// END G10