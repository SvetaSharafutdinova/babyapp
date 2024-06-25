const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/data', dashboardController.fetchDashboardData);

module.exports = router;
