const express= require('express')
const router=express.Router()
const mongoose= require('mongoose')
const Group= mongoose.model('Group')
const User= mongoose.model('User')


router('/myGroups')

router.post('/createGroup',(req,res)=>{
      const{name,members}=req.body
      
      const group=new Group({
        name,
        members
       })
       group.save()
       .then(group=>{
        Post.findByIdAndUpdate(req.user._id,{
            $push:{goups:group._id}
          },{
              new:true
          }).exec((err,result)=>
          {
              if(err)
                  res.status(422).json({error:err})
              
              else
                  res.json(result)
              
          })
       })
       .catch(err=>
        {console.log(err)
        }) 
})








