const express=require("express");
const propertyController=require('./controllers/property.controller');
const userController=require("./controllers/user.controllers")

const app=express();
app.use(express.json());

app.use("/api",propertyController);
app.use("/users",userController)


module.exports=app