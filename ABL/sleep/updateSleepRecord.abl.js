const sleepDAO = require("../../DAO/sleep.dao");

async function updateSleepRecord(req, res) {
  const { index } = req.params;
  const { date, duration } = req.body;

  if (index === undefined || !date || !duration) {
    return res.status(400).json({ error: "Index, date, and duration are required" });
  }

  const updatedRecord = { date, duration };

  try {
    const updated = await sleepDAO.updateSleepRecord(parseInt(index, 10), updatedRecord);
    res.json({ message: 'Sleep record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateSleepRecord;
