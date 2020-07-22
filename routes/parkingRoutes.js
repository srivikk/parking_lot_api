const express = require('express');
const router = express.Router();

const { getLot, getLotName, getBayName, getData } = require("../controllers/parkingController.js")

router.get('/lot',getLot)
router.get('/lot/:lot_name',getLotName)
router.get('/bay/:lot_name/:bay_name',getBayName)
router.post('/data',getData)

module.exports = router;