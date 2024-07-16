const growthDAO = require("../../dao/growth.dao");

async function createGrowthRecord(req, res) {
  const { date, height, weight } = req.body;

  if (!date || height === undefined || weight === undefined) {
    return res.status(400).json({ error: "Date, height, and weight are required" });
  }

  const growthRecord = { date, height, weight };

  try {
    const newGrowthRecord = await growthDAO.createGrowthRecord(growthRecord);
    res.json(newGrowthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createGrowthRecord;
