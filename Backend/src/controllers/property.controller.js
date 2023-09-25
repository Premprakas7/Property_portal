const express=require("express");
const router=express.Router();
const Property=require("../models/property.model");

router.get("", async(req,res)=>{
    try {
        const property=Property.find().lean().exec();
        res.status(200).send(property)
    } catch (err) {
        res.status(400).send(err)
    }
})