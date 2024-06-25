const express = require('express');
const router = express.Router();
const growthController = require('../controllers/growthController');

router.post('/record', growthController.recordGrowth);
router.get('/records', growthController.fetchGrowthRecords);
router.delete('/record/:index', growthController.deleteGrowthRecord);
router.put('/record/:index', growthController.updateGrowthRecord);

module.exports = router;
