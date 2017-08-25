// Import events modul
var events = require('events');

//Create an eventEmitter object
var eventEmitter = new events.EventEmitter();


// Create an event handler as follows
var connectHandler = function connected(){
    console.log('connection successful.');
    
    // Fire the data_received event  
    eventEmitter.emit('data_received')
}

// Bind the connection event with the handler 
eventEmitter.on('connection_called', connectHandler); 

// Bind the data_received event with the anonymous function 
eventEmitter.on('data_received', function(){ 
    console.log("+++"); 
    console.log('data received successfully.'); 
    console.log("+++"); 
}); 
  


 
 // Fire the connection event  
 console.log("-----"); 
 eventEmitter.emit('connection_called'); 
 console.log("-----"); 

 
 console.log("Program Ended."); 
 