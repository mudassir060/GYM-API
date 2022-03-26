const mongoose =  require('mongoose');

const authSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone_no:{type:String},
    gym_name:{type:String},
    gym_location:{type:String},
})

const authModel = mongoose.model("authData",authSchema);
module.exports = authModel;