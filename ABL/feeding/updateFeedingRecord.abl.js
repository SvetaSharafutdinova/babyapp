const feedingDAO = require("../../DAO/feeding.dao");

async function updateFeedingRecord(req, res) {
  const { index } = req.params;
  const updatedRecord = req.body;

  if (!updatedRecord.date || !updatedRecord.foodType || !updatedRecord.quantity) {
    return res.status(400).json({ error: "Date, foodType, and quantity are required" });
  }

  try {
    const updated = await feedingDAO.updateFeedingRecord(parseInt(index, 10), updatedRecord);
    res.json({ message: 'Feeding record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateFeedingRecord;
