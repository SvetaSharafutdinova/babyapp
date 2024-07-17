const express = require('express');
const router = express.Router();
const growthController = require('../controllers/growth.controller');

router.post('/create', growthController.recordGrowth);
router.get('/records', growthController.fetchGrowthRecords);
router.delete('/record/:id', growthController.deleteGrowthRecord);
router.put('/record/:id', growthController.updateGrowthRecord);

module.exports = router;
