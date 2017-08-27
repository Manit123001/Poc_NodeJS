// ###
// D2 app.js
// First Class Functions
// ###
// var a = 1;
// var b = 2;
// var c = a + b;
// console.log('hello node = '+ c );

// END D2

// ###
// D3 app.js && greet.js
// Let's Build a Module
// ###
// var greet = require('./greet.js');
// greet();

// END D3


// ###
// D4 app.js
// Object Literals
// ###
// var person = {
//     firstname: 'john',
//     lastname: 'Doe',
//     greet: function () {
//         console.log('hello, ' + this.firstname + ' ' +
//             this.lastname);
//     }
// };
// person.greet();
// console.log(person['firstname']);
// console.log(person.firstname);

// END D4


// ###
// D5 app.js
// Prototypal Inheritance
// ###
// function Person(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
// }

// Person.prototype.greet = function () {
//     console.log('Hello, ' +
//         this.firstname + ' ' +
//         this.lastname);
// }

// var john = new Person('john', 'Doe');
// john.greet();
// console.log(john.firstname);

// var jane = new Person('jane', 'Doe');
// jane.greet();

// console.log(john.__proto__);
// console.log(jane.__proto__);
// console.log(john.__proto__ === jane.__proto__);

// END D5 


// ###
// D6 app.js
// By Value By Reference
// ###
// // pass by value
// function change(b) {
//     b = 2;
// }

// var a = 1;
// change(a);
// console.log(a);

// // pass by reference
// function changeObject(d) {
//     d.prop1 = function () { };
//     d.prop2 = {}
//     d.prop3 = function () { };
//     d.prop4 = 20;
// }

// var c = {};
// console.log(c);
// c.prop1 = {};
// changeObject(c);
// console.log(c);

// END D6


// ###
// D7 app.js
// Javascript Aside: Immediately Invoked Function Expressions (IIFEs)
// ###
// var firstname = 'Jane';

// (function (lastname){
//     var firstname = 'John';
//     console.log(firstname);
//     console.log(lastname);
// }('Doe'));

// console.log(firstname);

// END D7


// ###
// D9 app.js
// Module Exports And Require
// ###
// var greet = require('./greet.js');
// greet();

// // EQUAL this code below...
// // var greet =  function () {
// //     console.log('hello' );
// // }
// // module.exports = greet;

// END D9


// ###
// JSON
// ###
// {
//     "firstname": "John",
//     "lastname": "Doe",
//     "address": {
//         "street": "101 Main St.",
//         "city": "New York",
//         "state": "NY"
//     }
// }

// END Tag JSON


// ###
// D10 app.js && Folder Greet -> index.js && english.js && spanish.js && greeting.json
// More On Require
// ###
// var greet = require('./greet/index.js')

// greet.english();
// greet.spanish();
// greet.xxx();
// END D10



// ###
// D11 app.js && greetD11.1.js && greetD11.2.js && greetD11.3.js && greetD11.4.js&& greetD11.5.js
// Module Patterns
// ###

// var greet = require('./greetD11.1');
// greet();

// var greet2 = require('./greetD11.2').greet;
// greet2();

// var greet3 = require('./greetD11.3');
// greet3.greet();
// greet3.greeting = "Changed hello world";

// var greet3b = require('./greetD11.3');
// greet3b.greet();


// var greet4 = require('./greetD11.4');
// var grtr = new greet4();
// grtr.greet();

// var greet5 = require('./greetD11.5').greet;
// greet5();

// END D11


// ###
// D12 app.js  && greetD12.1.js && greetD12.2.js
// Exports Vs Module Exports
// ###
// var greet = require('./greetD12.1'); // greet(); // error object is not function...
// var greet2 = require('./greetD12.2');
// greet2.greet();

// Mutate : to change something

// END D12


// ###
// D13 app.js 
// Requiring Core Modules
// ###
// var util = require('util');

// var name = 'Tony';
// var greeting = util.format('Hello, %s', name);
// util.log(greeting);

// END D13

