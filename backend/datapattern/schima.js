const mongoose = require('mongoose');
const mypattern = new mongoose.Schema({
    fullname:{
        type:String  
    },
    phone:{
        type:Number
    },
    email:{
        type:String
    },
    comment:{
        type:String
    },
    gender:{
        type:String
    }
})

var mydata = new mongoose.model("Vishal",mypattern);

module.exports= mydata;


