const express = require('express');
const myapp = express();
require('dotenv').config();
let port = process.env.port || 8080;
const cors = require('cors');
require('./db/connection');
const route = require('./routes/route');

myapp.use(express.json());
myapp.use(cors()); //cors is used to make all ports into one port
myapp.use(route);


myapp.listen(port,()=>{
    console.log(`server is runing at: ${port}`);
})