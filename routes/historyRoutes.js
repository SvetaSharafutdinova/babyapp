const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

router.get('/feeding', historyController.fetchFeedingHistory);
router.get('/sleep', historyController.fetchSleepHistory);
router.get('/condition', historyController.fetchConditionHistory);
router.get('/schedule', historyController.fetchScheduleHistory);

module.exports = router;
