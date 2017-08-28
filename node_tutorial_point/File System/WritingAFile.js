var fs = require('fs');

console.log('Going to write into existing file');
fs.writeFile('inputs.txt', 'Simple Easy Learning! Hello Manit Cholpinyo I have written some text here', function (err) {
    if (err) {
        return console.error(err);
    }

    console.log('Data written successfully!');
    console.log('lets read newly written data');

    fs.readFile('inputs.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }

        console.log("Asynchronous read: " + data.toString())
    });
});