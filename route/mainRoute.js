const express = require('express');
const router = express.Router();
const authRouter = require('./authRoute')
const todoRouter = require('./todoRouter')
const userRouter = require('./userRouter')
const equipmentRouter = require('./equipmentRouter')
const feeRouter = require('./feeRouter')
router.use('/auth',authRouter)
router.use('/todo',todoRouter)
router.use('/user',userRouter)
router.use('/equipment',equipmentRouter)
router.use('/fee',feeRouter)


module.exports = router;