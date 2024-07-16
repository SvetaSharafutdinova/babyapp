const historyDAO = require("../../DAO/history.dao");

async function getSleepHistory(req, res) {
  try {
    const records = await historyDAO.getSleepHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getSleepHistory;
