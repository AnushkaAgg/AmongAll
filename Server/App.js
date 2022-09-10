const express = require('express');
const app= express();
const mongoose= require('mongoose');
const PORT=4000;
require('./Models/User')
require('./Models/Group')


app.use(require('./Routes/auth'))
app.use(require('./Routes/post'))

mongoose.connect()

mongoose.connection.on('connected',()=>
   console.log('Connected to mongo '))

mongoose.connection.on('error',(err)=>
   console.log(err))   


app.listen(PORT,()=>{
    console.log("serveris running",PORT);
})







