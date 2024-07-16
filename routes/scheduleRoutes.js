const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule.controller');

router.post('/create', scheduleController.recordSchedule);
router.get('/records', scheduleController.fetchScheduleRecords);
router.delete('/record/:index', scheduleController.deleteScheduleRecord);
router.put('/record/:index', scheduleController.updateScheduleRecord);

module.exports = router;
