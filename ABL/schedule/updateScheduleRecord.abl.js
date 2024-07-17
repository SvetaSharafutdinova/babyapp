const scheduleDAO = require("../../DAO/schedule.dao");

async function updateScheduleRecord(req, res) {
  const { id } = req.params;
  const updatedRecord = req.body;

  if (!id || !updatedRecord.date || !updatedRecord.activity) {
    return res.status(400).json({ error: "ID, date, and activity are required" });
  }

  try {
    const updated = await scheduleDAO.updateScheduleRecord(id, updatedRecord);
    res.json({ message: 'Schedule record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateScheduleRecord;

