const historyABL = require('../ABL/historyABL.js');

exports.fetchFeedingHistory = async (req, res) => {
  try {
    const history = await historyABL.fetchFeedingHistory();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchSleepHistory = async (req, res) => {
  try {
    const history = await historyABL.fetchSleepHistory();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchConditionHistory = async (req, res) => {
  try {
    const history = await historyABL.fetchConditionHistory();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchScheduleHistory = async (req, res) => {
  try {
    const history = await historyABL.fetchScheduleHistory();
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};