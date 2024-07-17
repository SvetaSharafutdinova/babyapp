const getConditionHistory = require('../ABL/history/getConditionHistory.abl');
const getFeedingHistory = require('../ABL/history/getFeedingHistory.abl');
const getSleepHistory = require('../ABL/history/getSleepHistory.abl');
const getGrowthHistory = require('../ABL/history/getGrowthHistory.abl');
const getScheduleHistory = require('../ABL/history/getScheduleHistory.abl');

exports.fetchConditionHistory = async (req, res) => {
  try {
    await getConditionHistory(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchFeedingHistory = async (req, res) => {
  try {
    await getFeedingHistory(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchSleepHistory = async (req, res) => {
  try {
    await getSleepHistory(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchGrowthHistory = async (req, res) => {
  try {
    await getGrowthHistory(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchScheduleHistory = async (req, res) => {
  try {
    await getScheduleHistory(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
