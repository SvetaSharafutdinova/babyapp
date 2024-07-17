const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history.controller');

router.get('/condition', historyController.fetchConditionHistory);
router.get('/feeding', historyController.fetchFeedingHistory);
router.get('/sleep', historyController.fetchSleepHistory);
router.get('/growth', historyController.fetchGrowthHistory);
router.get('/schedule', historyController.fetchScheduleHistory);

module.exports = router;
