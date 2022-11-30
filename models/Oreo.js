const mongoose = require("mongoose") 
const oreoSchema = mongoose.Schema({ 
 flavour: {
    type:String,
    required:[true,"Flavour required"],
     }, 
 manufacturerlocation: {
    type:String,
    required:[true,"Manufacturer location needed"]
 }, 
 netweight: {
    type:Number,
    required:[true,"Netweight required"],
    min:0,
    max:1000
 } 
 
}) 
 
module.exports = mongoose.model("Oreo", oreoSchema) 