let mongoose = require('mongoose');

let Users = mongoose.model('Users',{
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
 });
 
module.exports = {Users};
/*  let user = new Users({
     email: 'andrew@gmail.com  '
 });
 user.save().then((doc)=>{
    console.log(doc);
 },(e)=>{
     console.log('Unable to save user',e);
 });
 */