const scheduleDAO = require("../../DAO/schedule.dao");

async function updateScheduleRecord(req, res) {
  const { index } = req.params;
  const updatedRecord = req.body;

  if (!updatedRecord.date || !updatedRecord.activity) {
    return res.status(400).json({ error: "Date and activity are required" });
  }

  try {
    const updated = await scheduleDAO.updateScheduleRecord(parseInt(index, 10), updatedRecord);
    res.json({ message: 'Schedule record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateScheduleRecord;
