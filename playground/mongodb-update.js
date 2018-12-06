var mongoose = require('mongoose');

//Set up connection to MongoDB
var mongoUrl = 'mongodb://admin:Linh1989@ds149742.mlab.com:49742/mongotest';
mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err,db) {
  if (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
  console.log("connecting to MongoDB");
  var Schema = mongoose.Schema;
/*   var TodoSchema = new Schema({
    text: String,
    completed: false
});
  var Todos = mongoose.model('Todos', TodoSchema );
  Todos.findOneAndUpdate({
      _id: '5c0893ae841d3246190fd9a9'
  },{
      $set: {
          completed: true
      }
  },{
      returnOriginal: false
  }).then((result)=>{
      console.log(result);
  });
   */
  var UserSchema = new Schema({
    name: String,
    age: Number,
    location: String
});
var Users = mongoose.model('Users', UserSchema );
Users.findOneAndUpdate({
    _id: '5c089462841d3246190fe48e'
},{
    $set: {
        name: 'Andrew'
    },
    $inc: {
        age: 1
    }
},{
    returnOriginal: false
}).then((result)=>{
    console.log(result);
});
});