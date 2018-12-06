var mongoose = require('mongoose');

//Set up connection to MongoDB
var mongoUrl = 'mongodb://admin:Linh1989@ds149742.mlab.com:49742/mongotest';
mongoose.connect(mongoUrl, { useNewUrlParser: true }, function (err,db) {
  if (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
  console.log("connecting to MongoDB");
});
var Schema = mongoose.Schema;

/* var TodoSchema = new Schema({
    text: String,
    completed: false
}); */
// var Todos = mongoose.model('Todos', TodoSchema );
/* Todos.create({ text: 'Something todo', completed: false}, function (err, result) {
    if (err) {
        return handleError(err)
    };
    console.log(JSON.stringify(result,undefined,2));// saved!
    
  }); */
 /*  Todos.find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
    // console.log(JSON.stringify(count,undefined,2));
  },(err)=>{
      console.log('unable to fetch',err);
  }); */

  var Schema = mongoose.Schema;

  var UserSchema = new Schema({
      name: String,
      age: Number,
      location: String
  });
  var Users = mongoose.model('Users', UserSchema );
  Users.find({name:'Andrew'}).then((docs)=>{
    console.log(`Todos`);
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('unable to fetch',err);
  });

/* var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    age: Number,
    location: String
});
var Users = mongoose.model('Users', UserSchema );
Users.create({name: 'Andrew', age: 25, location: 'Philadelphia' }, function (err, result) {
    if (err) {
        return console.log(err);
    };

    console.log(result);// saved!
    
  });  */