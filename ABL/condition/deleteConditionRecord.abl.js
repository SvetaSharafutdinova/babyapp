const conditionDAO = require("../../DAO/condition.dao");

async function deleteConditionRecord(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedRecord = await conditionDAO.deleteConditionRecord(id);
    res.json({ message: 'Condition record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteConditionRecord;
