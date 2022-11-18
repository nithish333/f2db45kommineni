const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const passportLocalMongoose = require("passport-local-mongoose"); 
 
const accountSchema = new Schema({ 
    username: String, 
    password: String 
}); 
 
accountSchema.plugin(passportLocalMongoose); 
 
// We export the Schema to avoid attaching the model to the 
// default mongoose connection. 
var accountModel = mongoose.model("Account", accountSchema)
module.exports = accountModel; 