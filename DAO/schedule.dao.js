const fs = require("fs/promises");
const path = require("path");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "schedule.json");

class ScheduleDao {
  constructor(dataPath) {
    this.scheduleDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createScheduleRecord(scheduleRecord) {
    const scheduleRecords = await this._loadScheduleRecords();
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

  async updateScheduleRecord(index, updatedRecord) {
    const scheduleRecords = await this._loadScheduleRecords();
    if (index >= 0 && index < scheduleRecords.length) {
      scheduleRecords[index] = updatedRecord;
      await fs.writeFile(this.scheduleDataPath, JSON.stringify(scheduleRecords, null, 2));
      return scheduleRecords[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  async deleteScheduleRecord(index) {
    const scheduleRecords = await this._loadScheduleRecords();
    if (index >= 0 && index < scheduleRecords.length) {
      const deletedRecord = scheduleRecords.splice(index, 1);
      await fs.writeFile(this.scheduleDataPath, JSON.stringify(scheduleRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = new ScheduleDao();
