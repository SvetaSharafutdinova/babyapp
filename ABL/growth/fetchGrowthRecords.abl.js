const growthDAO = require("../../dao/growth.dao");

async function fetchGrowthRecords(req, res) {
  try {
    const records = await growthDAO._loadGrowthRecords();
    res.json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = fetchGrowthRecords;
