const historyDAO = require("../../DAO/history.dao");

async function getScheduleHistory(req, res) {
  try {
    const records = await historyDAO.getScheduleHistory();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = getScheduleHistory;
