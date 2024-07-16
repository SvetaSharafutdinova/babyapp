const express = require('express');
const router = express.Router();
const historyController = require('../controllers/history.controller');

router.get('/sleep', historyController.getSleepHistory);
router.get('/feeding', historyController.getFeedingHistory);
router.get('/condition', historyController.getConditionHistory);
router.get('/growth', historyController.getGrowthHistory);
router.get('/schedule', historyController.getScheduleHistory);

module.exports = router;
