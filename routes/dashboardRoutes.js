const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboard.controller');

router.get('/data', dashboardController.getDashboardData);

module.exports = router;
