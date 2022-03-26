const express = require('express');
const router = express.Router();
const {userAdd, userGet,updateOne, delUser} = require('../controller/user')
router.use('/useradd',userAdd)
// http://localhost:5000/user/userAdd
router.use('/userget',userGet)
// http://localhost:5000/user/userGet
router.use('/updateone',updateOne)
// http://localhost:5000/user/updateOne
router.use('/deluser/:_id',delUser)
// http://localhost:5000/user/deluser/xyz@gmail.com
module.exports = router

// {
//     "name": "",
//     "email": "req.body.email",
//     "fee": "req.body.fee",
//     "advance": "req.body.advance",
//     "mobileNo": "req.body.mobileNo",
//     "status": [1,2,3,4],
// }