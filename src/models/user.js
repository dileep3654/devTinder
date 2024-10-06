const mongoose=require("mongoose")
const userSchema= new mongoose.Schema({
    first_name:{type:String},
    last_name:{type:String},
    password:{type:String},
    gender:{type:String},
    age:{type:Number},
    email:{type:String}
})

module.exports =mongoose.model("user",userSchema)