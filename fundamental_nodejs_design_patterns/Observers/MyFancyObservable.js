// MyFancyObservable.js
var util = require('util');  
var EventEmitter = require('events').EventEmitter;

function MyFancyObservable() {  
  EventEmitter.call(this);
}



util.inherits(MyFancyObservable, EventEmitter);  



