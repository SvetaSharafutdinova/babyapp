const feedingABL = require('../ABL/feedingABL');

exports.recordFeeding = async (req, res) => {
  const { date, foodType, quantity } = req.body;
  try {
    await feedingABL.recordFeeding({ date, foodType, quantity });
    res.status(200).json({ message: 'Feeding recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchFeedingRecords = async (req, res) => {
  try {
    const records = await feedingABL.fetchFeedingRecords();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFeedingRecord = async (req, res) => {
  const { index } = req.params;
  try {
    await feedingABL.deleteFeedingRecord(parseInt(index, 10));
    res.status(200).json({ message: 'Feeding record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFeedingRecord = async (req, res) => {
  const { index } = req.params;
  const updatedRecord = req.body;
  try {
    await feedingABL.updateFeedingRecord(parseInt(index, 10), updatedRecord);
    res.status(200).json({ message: 'Feeding record updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
