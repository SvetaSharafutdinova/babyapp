const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/schedule.controller');

router.post('/create', scheduleController.recordSchedule);
router.get('/records', scheduleController.fetchScheduleRecords);
router.delete('/record/:id', scheduleController.deleteScheduleRecord);
router.put('/record/:id', scheduleController.updateScheduleRecord);

module.exports = router;
