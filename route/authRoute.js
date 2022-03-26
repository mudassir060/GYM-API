const express = require('express');
const router = express.Router();
const {signUp,signIn,delUser} = require('../controller/auth')
router.use('/signup',signUp)
// http://localhost:5000/auth/signin
router.use('/signin',signIn)
// http://localhost:5000/auth/signup
router.use('/deluser/:_id',delUser)
// http://localhost:5000/auth/deluser/xyz@gmail.com
module.exports = router

// {
//     "name" : "Mudassir",
//     "email": "xyz@gmail.com",
//     "password": "qwerty",
//     "phone_no": "03454335400",
//     "gym_name": "Lovely",
//     "gym_location": "Lahore"
// }
