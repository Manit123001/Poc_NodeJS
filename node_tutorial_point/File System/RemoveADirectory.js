var fs = require("fs");
console.log("Going to delete directory /xxxxxMKDIR/New folder");
fs.rmdir("xxxxxMKDIR/New folder", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("Going to read directory /xxxxxMKDIR");
    fs.readdir("xxxxxMKDIR/", function (err, files) {
        if (err) {
            return console.error(err);
        }
        files.forEach(function (file) {
            console.log(file);
        });
    });
});
