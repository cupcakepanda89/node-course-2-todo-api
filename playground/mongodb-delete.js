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

  var UserSchema = new Schema({
      name: String,
      age: Number,
      location: String
  });
  var Users = mongoose.model('Users', UserSchema );
//   Users.deleteMany({name:'Andrew'}).then((result)=>{
//     console.log(result);
// });
Users.findOneAndDelete({_id:'5c0886c817524f1edf7c8d81'}).then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
});
}) 
/* 
  var Schema = mongoose.Schema;
  var TodoSchema = new Schema({
    text: String,
    completed: false
});
  var Todos = mongoose.model('Todos', TodoSchema );
// deleteMany
Todos.deleteMany({text:'Eat lunch'}).then((result)=>{
    console.log(result);
});; 

// deleteOne
Todos.deleteOne({text:'Eat lunch'}).then((result)=>{
    console.log(result);
});

// findOneandDelete
Todos.findOneAndDelete({completed: false}).then((result)=>{
    console.log(result);
});
});
 */
