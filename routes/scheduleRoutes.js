const express = require('express');
const router = express.Router();
const scheduleController = require('/Users/makar0ff/babyapp/controllers/scheduleController');

router.post('/record', scheduleController.recordSchedule);
router.get('/records', scheduleController.fetchScheduleRecords);
router.delete('/record/:index', scheduleController.deleteScheduleRecord);
router.put('/record/:index', scheduleController.updateScheduleRecord);

module.exports = router;
