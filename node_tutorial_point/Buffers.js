// var buf = new Buffer(10);

// var buf = new Buffer([10, 20, 30, 40, 50]);

// var buf = new Buffer("Simply Easy Learning", "utf-8"); 


// var buf = new Buffer(256); 
// var len = buf.write("Simply Easy Learning"); 
 
// console.log("Octets written : "+  len); 


buf = new Buffer(26);

for(var i = 0; i < 26; i++){
    var x = buf[i]=i+97;
    //console.log(x +"__" +i);
}

console.log( buf.toString('ascii'));        
// outputs: abcdefghijklmnopqrstuvwxyz 
console.log( buf.toString('ascii',0,5));    
// outputs: abcde 
console.log( buf.toString('utf8',0,5));     
// outputs: abcde 
console.log( buf.toString(undefined,0,5));  
// encoding defaults to 'utf8', outputs abcd


// const buf = Buffer.from('hello world', 'ascii');

// // Prints: 68656c6c6f20776f726c64
// console.log(buf.toString('hex'));

// // Prints: aGVsbG8gd29ybGQ=
// console.log(buf.toString('base64'));