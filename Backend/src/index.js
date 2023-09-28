const express=require("express");
const propertyController=require('./controllers/property.controller');
const userController=require("./controllers/user.controllers")
const registerController=require("./controllers/register.controllers")
const loginController=require("./controllers/login.controller");
const mongoose=require("mongoose");
mongoose.set('strictQuery', true);
const app=express();
var cors = require('cors')

app.use(cors())
app.use(express.json());
app.use("/api",propertyController);
app.use("/users",userController)
app.use("/register", registerController)
app.use("/login",loginController)


module.exports=app