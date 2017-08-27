function Emitter() {
    this.events = {};
}

Emitter.prototype.on = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}


// Loop Show value in array
Emitter.prototype.emit = function (type) {
    if (this.events[type]) {

        this.events[type].forEach(function (listenerLoop) {
            listenerLoop();
        });
        console.log("end loop");
        
    }
}

module.exports = Emitter;

// get to es6

// class Emitter {
//     constructor() {
//         this.events = {};
//     }
//     on(type, listener) {
//         this.events[type] = this.events[type] || [];
//         this.events[type].push(listener);
//     }
//     emit(type) {
//         if (this.events[type]) {
//             this.events[type].forEach(function(listenerLoop) {
//                 listenerLoop();
//             });
//             console.log("End loop");
//         }
//         else {
//             console.log('Not Found');
//         }
//     }
// }




module.exports = Emitter;