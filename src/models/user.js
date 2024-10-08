const mongoose=require("mongoose")
const validator=require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


const userSchema= new mongoose.Schema({
    firstname:{
        type:String,
        maxlength:50
    },
    lastname:{type:String},
    password:{
        type:String,
        required:true,
        validate(value){
        if(!validator?.isStrongPassword(value)){
            throw new Error("plese enter strong password" + value)
        }
        }
    },
    gender:{
        type:String
    },
    age:{
        type:Number,
        min:18
    },
    email:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
        if(!validator.isEmail(value)){
            throw new Error("Email is invalid" + value)
        }
        }
    },
    skills:[String]
})
userSchema.methods.jwtToken= async function(){
    const user =this;
    var token = await jwt.sign({ _id: user._id }, "DevTinder@3654", { expiresIn: '1d' });
    return token
}
userSchema.methods.validatePassword = async function (passwordInputByUser) {
    const passwordHash=this.password
    const isPasswordValid= await bcrypt.compare(passwordInputByUser, passwordHash)
    return isPasswordValid
}
module.exports =mongoose.model("user",userSchema)