const feedingDAO = require("../../DAO/feeding.dao");

async function deleteFeedingRecord(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedRecord = await feedingDAO.deleteFeedingRecord(id);
    res.json({ message: 'Feeding record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteFeedingRecord;
