const feedingDAO = require("../../DAO/feeding.dao");

async function deleteFeedingRecord(req, res) {
  const { index } = req.params;
  try {
    const deletedRecord = await feedingDAO.deleteFeedingRecord(parseInt(index, 10));
    res.json({ message: 'Feeding record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteFeedingRecord;
