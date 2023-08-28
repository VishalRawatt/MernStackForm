const mongoose = require('mongoose');

const DB = "mongodb+srv://Vishal:vishal@vishalrawat.m0jxh57.mongodb.net/Vishal";

mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>console.log("Database Connected"))
.catch((error)=> console.log(error.message));