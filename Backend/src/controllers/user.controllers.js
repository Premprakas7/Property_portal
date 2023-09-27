const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const User = require('../models/user.models')
const secreteKey = 'secreteKey'

router.get('',async(req,res)=>{
    try {
        const user = await User.find({}).lean().exec()
        res.status(200).send(user) 
    } catch (error) {
      res.status(401).send({message:error})        
    }
})

router.get('/:id',tokencheck,async(req,res)=>{
    try {
        jwt.verify(req.token,secreteKey,(err,user)=>{
            if(err){
                res.send({message:"Invalid Token"})
            }else{
                res.send(user)
            }
        })
    } catch (error) {
      res.status(401).send({message:error})        
    }
})

function tokencheck(req,res,next){
    const bearerHeader = req.headers['authorization']
    if(typeof bearerHeader !== undefined){
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        req.token = token
        next()
    }else{
        res.send({message:"Token is not valid"})
    }
}


module.exports=router;