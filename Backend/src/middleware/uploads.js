const path = require("path")
const multer = require("multer");
const req = require("express/lib/request")

 const storage = multer.diskStorage({
   destination: function (req, file, cb){
     cb(null, path.join(__dirname,"../uploads"))
   },
   filename: function (req, file, cb) {
     const uniquePrefix = Date.now();
     cb(null, uniquePrefix + "-" + file.originalname);
   }
 })

 const fileFilter = (req, file, callback) => {
   if (file.mimetype === "/jpeg" || file.mimetype === "/png" ) {
     callback(null, true);
   } else {
     callback(new Error("Incorrect mime type"), false);
   }
 };
 

const options = {
   storage,
   fileFilter,
   limits:{
       fileSize:1024*1024*10
   }
};

const uploads=multer(options);
module.exports=uploads;