const sleepDAO = require("../../dao/sleep.dao");

async function createSleepRecord(req, res) {
  const { date, duration } = req.body;

  if (!date || !duration) {
    return res.status(400).json({ error: "Date and duration are required" });
  }

  const sleepRecord = { date, duration };

  try {
    const newSleepRecord = await sleepDAO.createSleepRecord(sleepRecord);
    res.json(newSleepRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createSleepRecord;
