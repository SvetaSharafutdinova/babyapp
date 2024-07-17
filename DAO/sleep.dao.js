const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "sleep.json");

class SleepDao {
  constructor(dataPath) {
    this.sleepDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createSleepRecord(sleepRecord) {
    const sleepRecords = await this._loadSleepRecords();
    sleepRecord.id = uuidv4();
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

  async updateSleepRecord(id, updatedRecord) {
    const sleepRecords = await this._loadSleepRecords();
    const index = sleepRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      sleepRecords[index] = { ...updatedRecord, id };
      await fs.writeFile(this.sleepDataPath, JSON.stringify(sleepRecords, null, 2));
      return sleepRecords[index];
    } else {
      throw new Error("Record not found");
    }
  }

  async deleteSleepRecord(id) {
    const sleepRecords = await this._loadSleepRecords();
    const index = sleepRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      const deletedRecord = sleepRecords.splice(index, 1);
      await fs.writeFile(this.sleepDataPath, JSON.stringify(sleepRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Record not found");
    }
  }
}

module.exports = new SleepDao();
