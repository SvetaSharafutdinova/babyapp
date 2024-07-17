const growthDAO = require("../../DAO/growth.dao");

async function updateGrowthRecord(req, res) {
  const { id } = req.params;
  const updatedRecord = req.body;

  if (!id || !updatedRecord.date || !updatedRecord.weight || !updatedRecord.height) {
    return res.status(400).json({ error: "ID, date, weight, and height are required" });
  }

  try {
    const updated = await growthDAO.updateGrowthRecord(id, updatedRecord);
    res.json({ message: 'Growth record updated successfully', record: updated });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = updateGrowthRecord;

