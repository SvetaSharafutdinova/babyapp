const sleepDAO = require("../../dao/sleep.dao");

async function deleteSleepRecord(req, res) {
  const { index } = req.params;
  if (index === undefined) {
    return res.status(400).json({ error: "Index is required" });
  }
  
  try {
    const deletedRecord = await sleepDAO.deleteSleepRecord(parseInt(index, 10));
    res.json({ message: 'Sleep record deleted successfully', record: deletedRecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = deleteSleepRecord;
