const mongoose =  require('mongoose');

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    fee:{type:String},
    AdmassionDate:{type:String},
    advance:{type:String},
    mobileNo:{type:String},
    gymId:{type:String},
    status:{},
})

const userModel = mongoose.model("userData",userSchema);
module.exports = userModel;


// int id;
//   String name;
//   String email;
//   int fee;
//   int advance;
//   int mobileNumer;
//   bool status;
// isme status k andr or pechla record bhi ayega
// Status: [
// jan: true,
// feb: false,
// march: false
// ]