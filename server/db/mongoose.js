let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var mongoUrl = 'mongodb://admin:Linh1989@ds149742.mlab.com:49742/mongotest';
mongoose.connect(mongoUrl,{ useNewUrlParser: true });

module.exports = {mongoose};
