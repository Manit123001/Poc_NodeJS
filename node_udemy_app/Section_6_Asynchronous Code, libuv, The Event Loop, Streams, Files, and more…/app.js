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

var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet+'Sync');

var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function (err, data) {

    console.log(data);

});

console.log('Done!')
console.log(greet2);
// END F8
