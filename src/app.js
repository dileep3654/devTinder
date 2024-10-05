const express=require('express')
const app=express()

app.use("/test",(req,res)=>{
    res.send("Hello from the server!!!!")
})

app.use("/hello",(req,res)=>{
    res.send("Hello hello hello!!!!")
})


app.listen(5000,()=> console.log("server is listing 5000"))