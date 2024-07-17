const express = require('express');
const router = express.Router();
const feedingController = require('../controllers/feeding.controller');

router.post('/create', feedingController.recordFeeding);
router.get('/records', feedingController.fetchFeedingRecords);
router.delete('/record/:id', feedingController.deleteFeedingRecord);
router.put('/record/:id', feedingController.updateFeedingRecord);

module.exports = router;
