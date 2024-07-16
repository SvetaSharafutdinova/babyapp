const fs = require("fs/promises");
const path = require("path");

const sleepDataPath = path.join(__dirname, "..", "data", "sleep.json");
const feedingDataPath = path.join(__dirname, "..", "data", "feeding.json");
const conditionDataPath = path.join(__dirname, "..", "data", "condition.json");
const growthDataPath = path.join(__dirname, "..", "data", "growth.json");
const scheduleDataPath = path.join(__dirname, "..", "data", "schedule.json");

class DashboardDao {
  async getLastRecord(dataPath) {
    try {
      const data = await fs.readFile(dataPath, "utf8");
      const records = JSON.parse(data);
      return records.length ? records[records.length - 1] : null;
    } catch (error) {
      if (error.code === 'ENOENT') {
        return null;
      } else {
        throw error;
      }
    }
  }

  async getLastSleepRecord() {
    return this.getLastRecord(sleepDataPath);
  }

  async getLastFeedingRecord() {
    return this.getLastRecord(feedingDataPath);
  }

  async getLastConditionRecord() {
    return this.getLastRecord(conditionDataPath);
  }

  async getLastGrowthRecord() {
    return this.getLastRecord(growthDataPath);
  }

  async getLastScheduleRecord() {
    return this.getLastRecord(scheduleDataPath);
  }
}

module.exports = new DashboardDao();
