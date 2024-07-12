let { userSchema } = require("../model");

let register = (body) => {
    console.log("body", body);
    return userSchema.create(body);
}

let getuser = () => {
    return userSchema.find();
}
let finduser = (email)=>{
    return userSchema.findOne({email})
}
let deleteuser = (id) => {
    return userSchema.findByIdAndDelete();
}
let updatauser = (body, id) => {
    return userSchema.findByIdAndUpdate(body, id)
}
module.exports = { register, getuser, deleteuser, updatauser ,finduser}

