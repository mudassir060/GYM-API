const mongoose =  require('mongoose');

const equipmentSchema = mongoose.Schema({
    equipmentName:{type:String},
})

const equipmentModel = mongoose.model("equipmentData",equipmentSchema);
module.exports = equipmentModel;