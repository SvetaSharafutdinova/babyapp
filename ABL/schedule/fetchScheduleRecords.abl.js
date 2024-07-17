const scheduleDAO = require("../../DAO/schedule.dao");

async function fetchScheduleRecords(req, res) {
  try {
    const records = await scheduleDAO._loadScheduleRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchScheduleRecords;

