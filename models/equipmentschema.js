const mongoose =  require('mongoose');

const equipmentSchema = mongoose.Schema({
    name:{type:String},
    image:{type:String},
    price:{type:String},
    condition:{type:String},
    date:{type:String},
    gymId:{type:String},
})

const equipmentModel = mongoose.model("equipmentData",equipmentSchema);
module.exports = equipmentModel;


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