const sleepDAO = require("../../DAO/sleep.dao");

async function fetchSleepRecords(req, res) {
  try {
    const records = await sleepDAO._loadSleepRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchSleepRecords;
