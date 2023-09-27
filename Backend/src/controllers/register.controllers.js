const express = require('express')
const router = express.Router()
const User = require('../models/user.models')


router.post('' , async(req,res)=>{
    const {email,name} = req.body
    User.findOne({email:email}, async(err,user)=>{
        if(user){
            res.send({message:"User Already Registerd"})
        }else{
            const user = new User({
                email,
                name
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Sucessfully Registered"})
                }
            })
            
        }
    })

}) 
module.exports = router