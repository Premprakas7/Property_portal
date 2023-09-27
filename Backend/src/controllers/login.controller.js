const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user.models')
const secreteKey = 'secreteKey'

router.post('',async(req,res)=>{
    const {email,name} =req.body
    User.findOne({email:email},async(err,user)=>{
        if(user){
            if(name == user.name){
                jwt.sign({user},secreteKey,{expiresIn:'500s'},(err,token)=>{
                    res.send({token})
                })
            }
            else{
                res.send({message:"Name doesn't match"})
               }
        }
        else{
            res.send({message:"User not found"})
        }
    })
})
module.exports = router