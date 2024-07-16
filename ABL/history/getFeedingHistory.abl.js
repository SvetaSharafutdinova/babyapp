const historyDAO = require("../../dao/history.dao");

async function getFeedingHistory(req, res) {
  try {
    const records = await historyDAO.getFeedingHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getFeedingHistory;
