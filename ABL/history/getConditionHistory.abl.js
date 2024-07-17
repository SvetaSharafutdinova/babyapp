const historyDAO = require("../../DAO/history.dao");

async function getConditionHistory(req, res) {
  try {
    const records = await historyDAO.fetchConditionHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getConditionHistory;
