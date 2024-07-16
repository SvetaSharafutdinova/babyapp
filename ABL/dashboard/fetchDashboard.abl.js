const dashboardDAO = require("../../DAO/dashboard.dao");

async function fetchDashboard(req, res) {
  try {
    const sleep = await dashboardDAO.getLastSleepRecord();
    const feeding = await dashboardDAO.getLastFeedingRecord();
    const condition = await dashboardDAO.getLastConditionRecord();
    const growth = await dashboardDAO.getLastGrowthRecord();
    const schedule = await dashboardDAO.getLastScheduleRecord();

    res.json({ sleep, feeding, condition, growth, schedule });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchDashboard;
