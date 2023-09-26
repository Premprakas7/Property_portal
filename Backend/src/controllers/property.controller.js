const express=require("express");
const router=express.Router();
const Property=require("../models/property.model");
const uploads = require("../middleware/uploads");

router.get("/list-properties", async(req,res)=>{
    try {
        const property=await Property.find().lean().exec();
        return res.status(200).send(property)
    } catch (err) {
       return res.status(400).send(err)
    }
})

router.post("/property", uploads.any(""),async(req,res)=>{
    try {
        const property = await Property.create({
            name:req.body.name,
            price:req.body.price,
            city:req.body.city,
            property_type:req.body.property_type,
            available:req.body.available,
            img:req.file.path
        })
      return  res.status(200).send(property);
    } catch (err){
      return  res.status(400).send(err);
    }
})

module.exports=router