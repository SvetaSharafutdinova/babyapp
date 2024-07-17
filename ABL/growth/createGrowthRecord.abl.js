const growthDAO = require("../../DAO/growth.dao");

async function createGrowthRecord(req, res) {
  const { date, weight, height } = req.body;

  if (!date || !weight || !height) {
    return res.status(400).json({ error: "Date, weight, and height are required" });
  }

  const growthRecord = { date, weight, height };

  try {
    const newGrowthRecord = await growthDAO.createGrowthRecord(growthRecord);
    res.json(newGrowthRecord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = createGrowthRecord;

