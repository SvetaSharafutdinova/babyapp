const express = require('express');
const router = express.Router();
const feedingController = require('../controllers/feedingController');

router.post('/record', feedingController.recordFeeding);
router.get('/records', feedingController.fetchFeedingRecords);
router.delete('/record/:index', feedingController.deleteFeedingRecord);
router.put('/record/:index', feedingController.updateFeedingRecord);

module.exports = router;
