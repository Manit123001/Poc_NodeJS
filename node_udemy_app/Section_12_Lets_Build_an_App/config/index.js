var configValues = require('./config');

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds149724.mlab.com:49724/nodetodosample';
    }
}

