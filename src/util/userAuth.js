const validate  =require('validator')

const validateSignupData = (req)=>{
    console.log("validating the signup data",req.body);
    
    const {firstname,lastname,email,password}=req.body

    if(!firstname || !lastname ){
        throw new Error ("invalid name")
    }else if(!validate.isEmail(email)){
        throw new Error ("invalid email")
    }else if(!validate.isStrongPassword(password)){
        throw new Error("please use strong password")
    }
}

module.exports={validateSignupData}