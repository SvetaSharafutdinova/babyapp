const growthDAO = require("../../DAO/growth.dao");

async function deleteGrowthRecord(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedRecord = await growthDAO.deleteGrowthRecord(id);
    res.json({ message: 'Growth record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteGrowthRecord;
