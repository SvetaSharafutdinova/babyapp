const feedingDAO = require("../../dao/feeding.dao");

async function createFeedingRecord(req, res) {
  const { date, foodType, quantity } = req.body;

  if (!date || !foodType || !quantity) {
    return res.status(400).json({ error: "Date, foodType, and quantity are required" });
  }

  const feedingRecord = { date, foodType, quantity };

  try {
    const newFeedingRecord = await feedingDAO.createFeedingRecord(feedingRecord);
    res.json(newFeedingRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createFeedingRecord;
