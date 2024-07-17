const feedingDAO = require("../../DAO/feeding.dao");

async function updateFeedingRecord(req, res) {
  const { id } = req.params;
  const updatedRecord = req.body;

  if (!id || !updatedRecord.date || !updatedRecord.foodType || !updatedRecord.quantity) {
    return res.status(400).json({ error: "ID, date, foodType, and quantity are required" });
  }

  try {
    const updated = await feedingDAO.updateFeedingRecord(id, updatedRecord);
    res.json({ message: 'Feeding record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateFeedingRecord;
