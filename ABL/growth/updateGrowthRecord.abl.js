const growthDAO = require("../../dao/growth.dao");

async function updateGrowthRecord(req, res) {
  const { index } = req.params;
  const updatedRecord = req.body;

  if (!updatedRecord.date || updatedRecord.height === undefined || updatedRecord.weight === undefined) {
    return res.status(400).json({ error: "Date, height, and weight are required" });
  }

  try {
    const updated = await growthDAO.updateGrowthRecord(parseInt(index, 10), updatedRecord);
    res.json({ message: 'Growth record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateGrowthRecord;
