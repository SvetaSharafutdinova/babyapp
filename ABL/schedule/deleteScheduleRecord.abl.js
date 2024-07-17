const scheduleDAO = require("../../DAO/schedule.dao");

async function deleteScheduleRecord(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedRecord = await scheduleDAO.deleteScheduleRecord(id);
    res.json({ message: 'Schedule record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteScheduleRecord;
