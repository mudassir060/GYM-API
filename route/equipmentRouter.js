const express = require('express');
const router = express.Router();
const {equipmentAdd,equipmentGet} = require('../controller/equipment')
router.use('/equipmentadd',equipmentAdd)
router.use('/equipmentget',equipmentGet)

module.exports = router