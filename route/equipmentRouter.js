const express = require('express');
const router = express.Router();
const {equipmentAdd, equipmentGet,updateOne, delequipment} = require('../controller/equipment')
router.use('/equipmentadd',equipmentAdd)
// http://localhost:5000/equipment/equipmentAdd
router.use('/equipmentget',equipmentGet)
// http://localhost:5000/equipment/equipmentGet
router.use('/updateone',updateOne)
// http://localhost:5000/equipment/updateOne
router.use('/delequipment/:_id',delequipment)
// http://localhost:5000/equipment/delequipment/xyz@gmail.com
module.exports = router

// {
//     "name": "",
//     "email": "req.body.email",
//     "fee": "req.body.fee",
//     "advance": "req.body.advance",
//     "mobileNo": "req.body.mobileNo",
//     "status": [1,2,3,4],
// }