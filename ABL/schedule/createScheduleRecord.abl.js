const scheduleDAO = require("../../dao/schedule.dao");

async function createScheduleRecord(req, res) {
  const { date, activity } = req.body;

  if (!date || !activity) {
    return res.status(400).json({ error: "Date and activity are required" });
  }

  const scheduleRecord = { date, activity };

  try {
    const newScheduleRecord = await scheduleDAO.createScheduleRecord(scheduleRecord);
    res.json(newScheduleRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createScheduleRecord;
