const fs = require("fs/promises");
const path = require("path");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "sleep.json");

class SleepDao {
  constructor(dataPath) {
    this.sleepDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createSleepRecord(sleepRecord) {
    const sleepRecords = await this._loadSleepRecords();
    sleepRecords.push(sleepRecord);

    await fs.writeFile(this.sleepDataPath, JSON.stringify(sleepRecords, null, 2));
    return sleepRecord;
  }

  async _loadSleepRecords() {
    try {
      const data = await fs.readFile(this.sleepDataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateSleepRecord(index, updatedRecord) {
    const sleepRecords = await this._loadSleepRecords();
    if (index >= 0 && index < sleepRecords.length) {
      sleepRecords[index] = updatedRecord;
      await fs.writeFile(this.sleepDataPath, JSON.stringify(sleepRecords, null, 2));
      return sleepRecords[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  async deleteSleepRecord(index) {
    const sleepRecords = await this._loadSleepRecords();
    if (index >= 0 && index < sleepRecords.length) {
      const deletedRecord = sleepRecords.splice(index, 1);
      await fs.writeFile(this.sleepDataPath, JSON.stringify(sleepRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = new SleepDao();
