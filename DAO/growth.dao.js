const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require('uuid');

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "growth.json");

class GrowthDao {
  constructor(dataPath) {
    this.growthDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createGrowthRecord(growthRecord) {
    const growthRecords = await this._loadGrowthRecords();
    growthRecord.id = uuidv4();
    growthRecords.push(growthRecord);

    await fs.writeFile(this.growthDataPath, JSON.stringify(growthRecords, null, 2));
    return growthRecord;
  }

  async _loadGrowthRecords() {
    try {
      const data = await fs.readFile(this.growthDataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateGrowthRecord(id, updatedRecord) {
    const growthRecords = await this._loadGrowthRecords();
    const index = growthRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      growthRecords[index] = { ...growthRecords[index], ...updatedRecord };
      await fs.writeFile(this.growthDataPath, JSON.stringify(growthRecords, null, 2));
      return growthRecords[index];
    } else {
      throw new Error("Record not found");
    }
  }

  async deleteGrowthRecord(id) {
    const growthRecords = await this._loadGrowthRecords();
    const index = growthRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      const deletedRecord = growthRecords.splice(index, 1);
      await fs.writeFile(this.growthDataPath, JSON.stringify(growthRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Record not found");
    }
  }
}

module.exports = new GrowthDao();
