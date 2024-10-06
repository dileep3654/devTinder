const express = require('express')
const app = express()
const { connectDb } = require("./config/database")

const userModel = require('./models/user')


app.post("/signUP", async (req, res) => {
    //create a new instance of user model
    const user = new userModel({
        first_name: "dhoni",
        last_name: "ms",
        email: "dhomi@gmail.com",
        password: "dhoni",
        age: 26
    })
    try {
        await user.save()
        res.send("user added successfully")

    } catch (err) {
        res.status(500).send("Error while saving the user" + err.message)
    }

})

connectDb()
    .then(() => {
        console.log('Data base connected is Successfully!')
        app.listen(5000, () => console.log("server is listing 5000"))
    })
    .catch(() => console.log("data is not connected"));