let mongoose = require("mongoose")


let categorySchema  = new  mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
})
let category = mongoose.model("category",categorySchema );
module.exports = category;