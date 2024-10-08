const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const app = express()
const { connectDb } = require("./config/database")

const User = require('./models/user')
const {validateSignupData}=require('./util/userAuth')
app.use(express.json())

app.post("/signUP", async (req, res) => {
    //create a new instance of user model
   
    try {
        validateSignupData(req)
        const {firstname,lastname,password,email}=req.body
        const hashpassword = await bcrypt.hash(password,10)
        const user = new User({
            firstname,
            lastname,
            password : hashpassword,
            email
        })
        await user.save()
        res.send("user added successfully")

    } catch (err) {
        res.status(500).send("Error while saving the user" + err.message)
    }

})
//get user by emailId
app.get("/user",async (req,res)=>{
    try{
     const user = await User.find({"email":req.body.email})
     res.send(user)
    }catch(err){
     res.status(400).send("something went wrong")
    }
})

//get all user
app.get("/usersList",async (req,res)=>{
    try {
        const usersList=await User.find({})
    } catch (error) {
        res.status(400).send("some went wrong")
    }
})

//delete user by id
app.delete('/deleteUser',async (req,res)=>{
    try {
        const user= await User.findByIdAndDelete(req.body.userId)
    } catch (error) {
        
    }
})

//login api

app.post("/login", async (req,res)=>{
    try {
        const {email, password}=req.body;
        const user = await User.findOne({email: email})
        const isPasswordValid= await user.validatePassword(password)
        if(user && isPasswordValid ){
            const token = await user.jwtToken();
            res.cookie("token",token)
            res.send("login sucessfully!!")
        }else{
            throw new Error("Invalid username and password!!")
        }
    } catch (error) {
        res.status(400).send("Error :: " + error.message)
    }
})

//updateUser

app.patch('/user/:userId',async (req,res)=>{
    try {
        const ALLOWED_UPDATES= ["photoUrl", "about","age","skills"]
        const isUpdateValid=Object.keys(req.body).every(k=> ALLOWED_UPDATES.includes(k))
        if(!isUpdateValid){
            throw new Error("update not allowed")
        }
        if(req.body?.skills?.length>10){
            throw new Error("SKILLS limit exceed")
        }
        const user= await User.findByIdAndUpdate({_id:req.params?.userId},req.body)
        res.send(user)
    } catch (error) {
        res.status(400).send("error occur "+ error.message)
    }
})

connectDb()
    .then(() => {
        console.log('Data base connected is Successfully!')
        app.listen(5000, () => console.log("server is listing 5000"))
    })
    .catch(() => console.log("data is not connected"));