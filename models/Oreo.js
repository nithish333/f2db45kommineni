const mongoose = require("mongoose") 
const oreoSchema = mongoose.Schema({ 
 flavour: String, 
 manufacturerlocation: String, 
 netweight: Number 
}) 
 
module.exports = mongoose.model("Oreo", oreoSchema) 