const historyDAO = require("../../DAO/history.dao");

async function getGrowthHistory(req, res) {
  try {
    const records = await historyDAO.getGrowthHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getGrowthHistory;
