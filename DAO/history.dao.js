const fs = require("fs/promises");
const path = require("path");

const SLEEP_DATA_PATH = path.join(__dirname, "..", "data", "sleep.json");
const FEEDING_DATA_PATH = path.join(__dirname, "..", "data", "feeding.json");
const CONDITION_DATA_PATH = path.join(__dirname, "..", "data", "condition.json");
const GROWTH_DATA_PATH = path.join(__dirname, "..", "data", "growth.json");
const SCHEDULE_DATA_PATH = path.join(__dirname, "..", "data", "schedule.json");

class HistoryDao {
  async getSleepHistory() {
    return await this._loadRecords(SLEEP_DATA_PATH);
  }

  async getFeedingHistory() {
    return await this._loadRecords(FEEDING_DATA_PATH);
  }

  async getConditionHistory() {
    return await this._loadRecords(CONDITION_DATA_PATH);
  }

  async getGrowthHistory() {
    return await this._loadRecords(GROWTH_DATA_PATH);
  }

  async getScheduleHistory() {
    return await this._loadRecords(SCHEDULE_DATA_PATH);
  }

  async _loadRecords(filePath) {
    try {
      const data = await fs.readFile(filePath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }
}

module.exports = new HistoryDao();
