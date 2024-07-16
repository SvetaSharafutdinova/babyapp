const conditionDAO = require("../../dao/condition.dao");

async function deleteConditionRecord(req, res) {
  const { index } = req.params;
  try {
    const deletedRecord = await conditionDAO.deleteConditionRecord(parseInt(index, 10));
    res.json({ message: 'Condition record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteConditionRecord;
