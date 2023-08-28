const express = require('express');
const route = express.Router();
const schima = require('../datapattern/schima');

route.get("/",(req,res)=>{
    res.send("welcome to express file");
});


route.get("/getdata",async(req,res)=>{
    const alldata = await schima.find();
    res.json(alldata);
    console.log(alldata);
});

route.post("/create",async(req,res)=>{
    const {fullname,email,comment,phone,gender} =  req.body ;
    const addUser = new schima({fullname,email,comment,phone,gender});
    await addUser.save();
    res.status(201).json(addUser);
    console.log(addUser);
});


module.exports = route

