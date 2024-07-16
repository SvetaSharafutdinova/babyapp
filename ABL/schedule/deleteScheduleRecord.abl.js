const scheduleDAO = require("../../dao/schedule.dao");

async function deleteScheduleRecord(req, res) {
  const { index } = req.params;
  try {
    const deletedRecord = await scheduleDAO.deleteScheduleRecord(parseInt(index, 10));
    res.json({ message: 'Schedule record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteScheduleRecord;
