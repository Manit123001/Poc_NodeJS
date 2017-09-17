// ###
// F6 app.js
// Buffers
// ###

// var buf = new Buffer('Hello', 'utf8');

// console.log(buf);
// console.log(buf.toString());
// console.log(buf.toJSON());
// console.log(buf[2]);


// buf.write('wo');
// console.log(buf.toString());

// END F6


// ###
// F6a app.js
// Typed Arrays
// ###

// var bufffer = new ArrayBuffer(8);
// var view = new Int32Array(bufffer);

// view[0] = 5;
// view[1] = 15;
// console.log(view);

// END 6a


// ###
// F7 app.js 
// Callbacks
// ###

// function greet(callback){
//     console.log('Hello!');

//     var data = {
//         name:'John Doe'
//     };
//     callback(data);
// }

// greet(function(data){
//     console.log('The callback was invoked!');
//     console.log(data);
// });

// greet(function(data){
//     console.log('A different callback was invoked!');
//     console.log(data.name);
// });

// END F7

// ###
// F8 app.js && greet.txt
// Files and fs
// ###

// var fs = require('fs');

// var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
// console.log(greet+'Sync');

// var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
// function (err, data) {
//     console.log(data + 'Async');
// });

// console.log('Done!');
// END F8


// ###
// F9 app.js && greet_F9.txt && greet_F9copy.txt
// Streams
// ###

// var fs = require('fs');

// var readable = fs.createReadStream(__dirname + '/greet_F9.txt', { encoding: 'utf8', highWaterMark: 1024});

// var writable = fs.createWriteStream(__dirname + '/greet_F9copy.txt');

// readable.on('data', function (chunk) {

//     console.log(chunk.length);
//     writable.write(chunk);
// });

// END F9


// ###
// F11 app.js && greet_F9.txt  && greet_F9copy.txt && greet.txt.gz
// Streams
// ###

var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet_F9.txt');

var writable = fs.createWriteStream(__dirname + '/greet_F9copy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet_F9copy.txt.gz');

var gzip = zlib.createGzip();


readable.pipe(writable);

readable.pipe(gzip).pipe(compressed);

// END F11
