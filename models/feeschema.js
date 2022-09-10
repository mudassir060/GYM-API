const mongoose =  require('mongoose');

const feeSchema = mongoose.Schema({
    year:{type:String},
    month:{type:String},
    date:{type:String},
    fee:{type:String},
    discount:{type:String},
    Status:{type:String},
    userId:{type:String},
    gymId:{type:String},
})

const feeModel = mongoose.model("feeData",feeSchema);
module.exports = feeModel;


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