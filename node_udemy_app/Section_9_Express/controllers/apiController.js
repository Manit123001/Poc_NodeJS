
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

module.exports = function (app) {

    // // JSON Data (Post from JQUERY)
    app.post('/personjson', jsonParser, function (req, res) {

        res.send('Thank you for The JSON Data!! @');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });


    //------- 
    app.get('/api/person/:id', function (req, res) {
        // get that data from database
        res.json({ firstname: 'John', lastname: 'Dossssse' });
    });

    app.post('/api/personjson', function (req, res) {
        // save to the database
    });

    app.delete('/api/person/:id', function (req, res) {
        // delete from the database
    })

    //-------
}