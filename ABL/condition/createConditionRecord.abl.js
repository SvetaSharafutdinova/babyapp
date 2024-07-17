const conditionDAO = require("../../DAO/condition.dao");

async function createConditionRecord(req, res) {
  const { date, condition } = req.body;

  if (!date || !condition) {
    return res.status(400).json({ error: "Date and condition are required" });
  }

  const conditionRecord = { date, condition };

  try {
    const newConditionRecord = await conditionDAO.createConditionRecord(conditionRecord);
    res.json(newConditionRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createConditionRecord;
