const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleepController.js');

router.post('/record', sleepController.recordSleep);
router.get('/records', sleepController.fetchSleepRecords);
router.delete('/record/:index', sleepController.deleteSleepRecord);
router.put('/record/:index', sleepController.updateSleepRecord);

module.exports = router;
