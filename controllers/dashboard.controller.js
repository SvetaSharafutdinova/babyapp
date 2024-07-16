const fetchDashboard = require('../ABL/dashboard/fetchDashboard.abl');

exports.getDashboardData = async (req, res) => {
  try {
    await fetchDashboard(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
