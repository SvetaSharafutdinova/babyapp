const sleepDAO = require("./sleep.dao");
const feedingDAO = require("./feeding.dao");
const conditionDAO = require("./condition.dao");
const growthDAO = require("./growth.dao");
const scheduleDAO = require("./schedule.dao");

class HistoryDao {
  async fetchSleepHistory() {
    return await sleepDAO._loadSleepRecords();
  }

  async fetchFeedingHistory() {
    return await feedingDAO._loadFeedingRecords();
  }

  async fetchConditionHistory() {
    return await conditionDAO._loadConditionRecords();
  }

  async fetchGrowthHistory() {
    return await growthDAO._loadGrowthRecords();
  }

  async fetchScheduleHistory() {
    return await scheduleDAO._loadScheduleRecords();
  }
}

module.exports = new HistoryDao();
