const historyDAO = require("../../DAO/history.dao");

async function getFeedingHistory(req, res) {
  try {
    const records = await historyDAO.fetchFeedingHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getFeedingHistory;
