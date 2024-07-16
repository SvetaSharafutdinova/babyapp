const conditionDAO = require("../../DAO/condition.dao");

async function fetchConditionRecords(req, res) {
  try {
    const records = await conditionDAO._loadConditionRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchConditionRecords;
