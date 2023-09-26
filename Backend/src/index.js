const express=require("express");
const propertyController=require('./controllers/property.controller');

const app=express();
app.use(express.json());

app.use("/api",propertyController);


module.exports=app