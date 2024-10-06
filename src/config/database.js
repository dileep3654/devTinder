// Using Node.js `require()`
const mongoose = require('mongoose');

const connectDb= async ()=>{
    mongoose.connect('mongodb://localhost:27017/devTinder')
}

module.exports={connectDb}

