const sleepABL = require('/Users/makar0ff/babyapp/ABL/sleepABL.js');

exports.recordSleep = async (req, res) => {
  const { date, duration } = req.body;
  try {
    await sleepABL.recordSleep(date, duration);
    res.status(200).json({ message: 'Sleep recorded successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchSleepRecords = async (req, res) => {
  try {
    const records = await sleepABL.fetchSleepRecords();
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSleepRecord = async (req, res) => {
  const { index } = req.params;
  try {
    await sleepABL.deleteSleepRecord(parseInt(index, 10));
    res.status(200).json({ message: 'Sleep record deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSleepRecord = async (req, res) => {
  const { index } = req.params;
  const updatedRecord = req.body;
  try {
    await sleepABL.updateSleepRecord(parseInt(index, 10), updatedRecord);
    res.status(200).json({ message: 'Sleep record updated successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
