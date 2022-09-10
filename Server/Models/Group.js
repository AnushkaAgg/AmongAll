const mongoose= require("mongoose")
const {ObjectId}=mongoose.Schema.Types

const groupSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true   
    },
    members:[{
        type:ObjectId,
        ref:"User" 
      }
    ]

})
