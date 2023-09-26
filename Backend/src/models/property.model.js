const mongoose=require('mongoose');

const propertySchemma=mongoose.Schema({
    name:{type:String, required:true},
    price:{type:String, required:true},
    city:{type:String, required:true},
    property_type:{type:String, required:true},
    available:{type:String, required:true},
    img:[{type:String, required:true}]
},
{
    versionKey:false,
    timestamps:true
})

module.exports=mongoose.model("property",propertySchemma )