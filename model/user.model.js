let mongoose = require("mongoose")


let userSchema = new  mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        enum:["user","admin"],
        require:true,
    },
})
let users = mongoose.model("users",userSchema);
module.exports = users;


