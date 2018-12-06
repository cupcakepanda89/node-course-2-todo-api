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
  var TodoSchema = new Schema({
    text: String,
    completed: false
});
  var Todos = mongoose.model('Todos', TodoSchema );
  Todos.find().then((docs)=>{
    console.log(`Todos`);
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
      console.log('unable to fetch',err);
  });
});

