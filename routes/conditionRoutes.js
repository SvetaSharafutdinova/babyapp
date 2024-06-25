const express = require('express');
const router = express.Router();
const conditionController = require('../controllers/conditionController');

router.post('/record', conditionController.recordCondition);
router.get('/records', conditionController.fetchConditionRecords);
router.delete('/record/:index', conditionController.deleteConditionRecord);
router.put('/record/:index', conditionController.updateConditionRecord);

module.exports = router;
