const sleepDAO = require("../../DAO/sleep.dao");

async function deleteSleepRecord(req, res) {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedRecord = await sleepDAO.deleteSleepRecord(id);
    res.json({ message: 'Sleep record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteSleepRecord;
