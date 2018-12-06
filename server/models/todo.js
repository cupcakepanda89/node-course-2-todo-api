let mongoose = require('mongoose');

let Todo = mongoose.model('Todo',{
   text: {
       type: String,
       required: true,
       minlength: 1,
       trim: true
   },
   completed: {
        type: Boolean,
        default: false
   },
   completedAt: {   
        type: Number,
        default: null
   } 
});

module.exports = {Todo};
/* 
let newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc)=>{
    console.log('Save todo', doc);
},(e)=>{
    console.log('Unable to save todo');
});
 */
/* 
let otherTodo = new Todo({
    text: '   Edit this video  '
});
otherTodo.save().then((doc)=>{
    console.log('Save todo', JSON.stringify(doc,undefined,2));
},(e)=>{
    console.log('Unable to save todo',e);
}); 
 */