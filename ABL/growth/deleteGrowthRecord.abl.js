const growthDAO = require("../../DAO/growth.dao");

async function deleteGrowthRecord(req, res) {
  const { index } = req.params;
  try {
    const deletedRecord = await growthDAO.deleteGrowthRecord(parseInt(index, 10));
    res.json({ message: 'Growth record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteGrowthRecord;
