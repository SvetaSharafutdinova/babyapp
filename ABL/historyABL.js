const historyDAO = require('/Users/makar0ff/babyapp/DAO/historyDAO');

async function fetchFeedingHistory() {
  try {
    return await historyDAO.fetchFeedingHistory();
  } catch (error) {
    throw new Error('Failed to fetch feeding history: ' + error.message);
  }
}

async function fetchSleepHistory() {
  try {
    return await historyDAO.fetchSleepHistory();
  } catch (error) {
    throw new Error('Failed to fetch sleep history: ' + error.message);
  }
}

async function fetchConditionHistory() {
  try {
    return await historyDAO.fetchConditionHistory();
  } catch (error) {
    throw new Error('Failed to fetch condition history: ' + error.message);
  }
}

async function fetchScheduleHistory() {
  try {
    return await historyDAO.fetchScheduleHistory();
  } catch (error) {
    throw new Error('Failed to fetch schedule history: ' + error.message);
  }
}

module.exports = {
  fetchFeedingHistory,
  fetchSleepHistory,
  fetchConditionHistory,
  fetchScheduleHistory,
};
