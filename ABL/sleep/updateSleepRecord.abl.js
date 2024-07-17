const sleepDAO = require("../../DAO/sleep.dao");

async function updateSleepRecord(req, res) {
  const { id } = req.params;
  const updatedRecord = req.body;

  if (!id || !updatedRecord.date || !updatedRecord.duration) {
    return res.status(400).json({ error: "ID, date, and duration are required" });
  }

  try {
    const updated = await sleepDAO.updateSleepRecord(id, updatedRecord);
    res.json({ message: 'Sleep record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateSleepRecord;
