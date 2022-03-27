const mongoose =  require('mongoose');

const authSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String},
    phone_no:{type:String},
    joindate:{type:String},
    dayLimit:{type:String},
    gym_name:{type:String},
    gym_location:{type:String},
})

const authModel = mongoose.model("authData",authSchema);
module.exports = authModel;