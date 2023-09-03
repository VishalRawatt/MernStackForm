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
})

//get single api data
route.get("/view/:id",async(req,res)=>{
    console.log(req.params);
    const {id} = req.params;
    const singleUser = await schima.findById({_id:id});
    console.log(singleUser);
    res.status(201).json(singleUser);
});

// delete api
route.delete("/deletedata/:id",async(req,res)=>{
    const {id} = req.params;
    const a = await schima.findByIdAndDelete({_id:id})
    console.log(a);
    res.status(201).json(a);
});

module.exports = route ;

