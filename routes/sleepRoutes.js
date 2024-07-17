const express = require('express');
const router = express.Router();
const sleepController = require('../controllers/sleep.controller');

router.post('/create', sleepController.recordSleep);
router.get('/records', sleepController.fetchSleepRecords);
router.delete('/record/:id', sleepController.deleteSleepRecord);
router.put('/record/:id', sleepController.updateSleepRecord);

module.exports = router;
