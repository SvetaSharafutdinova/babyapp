const conditionDAO = require("../../DAO/condition.dao");

async function updateConditionRecord(req, res) {
  const { index } = req.params;
  const updatedRecord = req.body;

  if (!updatedRecord.date || !updatedRecord.condition) {
    return res.status(400).json({ error: "Date and condition are required" });
  }

  try {
    const updated = await conditionDAO.updateConditionRecord(parseInt(index, 10), updatedRecord);
    res.json({ message: 'Condition record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateConditionRecord;
