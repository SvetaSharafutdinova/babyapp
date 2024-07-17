const express = require('express');
const router = express.Router();
const conditionController = require('../controllers/condition.controller');

router.post('/create', conditionController.recordCondition);
router.get('/records', conditionController.fetchConditionRecords);
router.delete('/record/:id', conditionController.deleteConditionRecord);
router.put('/record/:id', conditionController.updateConditionRecord);

module.exports = router;
