let mongoose = require("mongoose")


let taskSchema = new  mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    dueDate:{
        type:Date,
         require:true,
    },
})
let task = mongoose.model("task",taskSchema);
module.exports = task;