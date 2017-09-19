var bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function (app) {


    app.get('/', (req, res) => {
        res.render('index_i5');
    });


    app.get('/person/:id', function (req, res) {
        res.render('person', { ID: req.params.id, Qstr: req.query.qstr }); // http://localhost:3000/person/1?qstr=Hello
    });

    // // FORM Data (Post from Submit...)
    app.post('/person', urlencodedParser, function (req, res) {

        res.send('Thank you!! @');
        console.log(req.body.firstname);
        console.log(req.body.lastname);
    });

}