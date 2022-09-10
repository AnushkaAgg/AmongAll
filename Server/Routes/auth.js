const express = require('express')
const router = express.Router()
const  mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt=require('bcryptjs')


router('/signup',(req,res)=>{
   const{name,email,password}=req.body
   if(!name||!email||!password){
        return res.status(422).json({error:"enter all the fields"})
   }
    User.findOne({email:email})
    bcrypt.hash(password,1)
        .then(hashedPassword=>{
           const user=new User({
            email,
            username,
            password:hashedPassword,
            name
           })
    
           user.save()
           .then(user=>{
                 res.json({message:"Saved successfully"})

           })
           .catch(err=>
            {console.log(err)
            }) 

    }) .catch(err=>{
        console.log(err)
})

})
