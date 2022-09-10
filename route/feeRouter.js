const express = require('express');
const router = express.Router();
const {feeAdd, feeGetOneUser, feeGetAllUser,updateOne, delfee} = require('../controller/fee')
router.use('/feeadd',feeAdd)
// http://localhost:5000/fee/feeAdd
router.use('/feegetoneuser',feeGetOneUser)
// http://localhost:5000/fee/feeGetOneUser
router.use('/feegetalluser',feeGetAllUser)
// http://localhost:5000/fee/feeGetAllUser
router.use('/updateone',updateOne)
// http://localhost:5000/fee/updateOne
router.use('/delfee/:_id',delfee)
// http://localhost:5000/fee/delfee/xyz@gmail.com
module.exports = router

