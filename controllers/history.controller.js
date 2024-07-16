const getSleepHistory = require('../abl/history/getSleepHistory.abl');
const getFeedingHistory = require('../abl/history/getFeedingHistory.abl');
const getConditionHistory = require('../abl/history/getConditionHistory.abl');
const getGrowthHistory = require('../abl/history/getGrowthHistory.abl');
const getScheduleHistory = require('../abl/history/getScheduleHistory.abl');

exports.getSleepHistory = async (req, res) => {
  await getSleepHistory(req, res);
};

exports.getFeedingHistory = async (req, res) => {
  await getFeedingHistory(req, res);
};

exports.getConditionHistory = async (req, res) => {
  await getConditionHistory(req, res);
};

exports.getGrowthHistory = async (req, res) => {
  await getGrowthHistory(req, res);
};

exports.getScheduleHistory = async (req, res) => {
  await getScheduleHistory(req, res);
};
