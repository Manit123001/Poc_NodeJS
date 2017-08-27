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

// END E2



// ###
// E3 app.js && emitter.js
// Event Emitter Part 1
// ###

// var Emitter = require('./emitter');

// var emtr = new Emitter();


// emtr.on('gege', function () {
//     console.log('Somewhere, someone said hello.');
// });
// emtr.on('gege', function () {
//     console.log('A greeting occurred!');
// });
// emtr.on('gege', function () {
//     console.log('A greeting occurred!');
// });
// emtr.on('gege', function () {
//     console.log('A greeting occurred!');
// });
// emtr.on('gege', function () {
//     console.log('A greeting occurred!');
// });

// console.log('Hello!');
// emtr.emit('gege');

// END E3


// ###
// E4 app.js && config.js && node/lib/events
// Event Emitter Part 2
// ###

// var Emitter = require('events');
// var eventConfig = require('./config').events;

// var emtr = new Emitter();


// emtr.on(eventConfig.GREET, function () {
//     console.log('Somewhere, someone said hello.');
// });

// emtr.on(eventConfig.GREET, function () {
//     console.log('A greeting occurred!');
// });


// console.log('Hello!');
// emtr.emit(eventConfig.GREET);

// END E4


// ###
// E5 app.js 
// Object Create And Prototypes
// ###

// var person = {
//     firsname: '',
//     lastname: '',
//     greet: function () {
//         return this.firsname + ' ' + this.lastname;
//     }
// }

// var john = Object.create(person);
// john.firsname = 'John';
// john.lastname = 'Doe';

// var jane = Object.create(person);
// jane.firsname = 'Jane';
// jane.lastname = 'Doe';


// console.log(john.greet());

// console.log(jane.greet());

// END E5


// ###
// E56app.js 
// Object Create And Prototypes
// ###

var EventEmitter = require('events');
var util = require('util');

function Greetr(){
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data){
    console.log(this.greeting + ': ' + data);
    this.emit('greet', data);
}


var greeter1 = new Greetr();

greeter1.on('greet', function(data){
    console.log('Someone greeted!: ' + data);
});

greeter1.on('greet', function(data){
    console.log('Someone greeted!222: ' + data);
});

greeter1.greet('Tody');

// END E5
