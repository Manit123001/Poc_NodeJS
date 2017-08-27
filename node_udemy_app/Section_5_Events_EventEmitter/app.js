// ###
// E2 app.js
// First Class Functions Arrays
// ###

// object properties and methods
// var obj = {
//     greet: 'Hello',
//     aaa: 'Hello22222222'
// }

// console.log(obj.greet);
// console.log(obj.aaa);
// console.log(obj['greet']);
// var prop = 'greet';
// console.log(obj[prop]);

// // functions and arrays
// var arr = [];

// arr.push(function(){
//     console.log('Hello World 1');
// });
// arr.push(function(){
//     console.log('Hello World 2');
// });
// arr.push(function(){
//     console.log('Hello World 3');
// });

// arr.forEach(function(item){
//     item();
// });

// END E1



// ###
// E3 app.js && emitter.js
// Event Emitter Part 1
// ###

var Emitter = require('./emitter');

var emtr = new Emitter();


emtr.on('gege', function () {
    console.log('Somewhere, someone said hello.');
});

emtr.on('gege', function () {
    console.log('A greeting occurred!');
});
emtr.on('gege', function () {
    console.log('A greeting occurred!');
});
emtr.on('gege', function () {
    console.log('A greeting occurred!');
});
emtr.on('gege', function () {
    console.log('A greeting occurred!');
});


console.log('Hello!');
emtr.emit('gege');


// END E1
