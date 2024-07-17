const conditionDAO = require("../../DAO/condition.dao");

async function updateConditionRecord(req, res) {
  const { id } = req.params;
  const updatedRecord = req.body;

  if (!id || !updatedRecord.date || !updatedRecord.condition) {
    return res.status(400).json({ error: "ID, date, and condition are required" });
  }

  try {
    const updated = await conditionDAO.updateConditionRecord(id, updatedRecord);
    res.json({ message: 'Condition record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateConditionRecord;
