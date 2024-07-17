const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "schedule.json");

class ScheduleDao {
  constructor(dataPath) {
    this.scheduleDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createScheduleRecord(scheduleRecord) {
    const scheduleRecords = await this._loadScheduleRecords();
    scheduleRecord.id = uuidv4();
    scheduleRecords.push(scheduleRecord);

    await fs.writeFile(this.scheduleDataPath, JSON.stringify(scheduleRecords, null, 2));
    return scheduleRecord;
  }

  async _loadScheduleRecords() {
    try {
      const data = await fs.readFile(this.scheduleDataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateScheduleRecord(id, updatedRecord) {
    const scheduleRecords = await this._loadScheduleRecords();
    const index = scheduleRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      scheduleRecords[index] = { ...scheduleRecords[index], ...updatedRecord };
      await fs.writeFile(this.scheduleDataPath, JSON.stringify(scheduleRecords, null, 2));
      return scheduleRecords[index];
    } else {
      throw new Error("Record not found");
    }
  }

  async deleteScheduleRecord(id) {
    const scheduleRecords = await this._loadScheduleRecords();
    const index = scheduleRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      const deletedRecord = scheduleRecords.splice(index, 1);
      await fs.writeFile(this.scheduleDataPath, JSON.stringify(scheduleRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Record not found");
    }
  }
}

module.exports = new ScheduleDao();
