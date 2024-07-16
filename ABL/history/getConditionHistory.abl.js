const historyDAO = require("../../dao/history.dao");

async function getConditionHistory(req, res) {
  try {
    const records = await historyDAO.getConditionHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getConditionHistory;
