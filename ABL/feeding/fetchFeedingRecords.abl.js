const feedingDAO = require("../../DAO/feeding.dao");

async function fetchFeedingRecords(req, res) {
  try {
    const records = await feedingDAO._loadFeedingRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchFeedingRecords;
