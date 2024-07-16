const fs = require("fs/promises");
const path = require("path");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "growth.json");

class GrowthDao {
  constructor(dataPath) {
    this.growthDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createGrowthRecord(growthRecord) {
    const growthRecords = await this._loadGrowthRecords();
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

  async updateGrowthRecord(index, updatedRecord) {
    const growthRecords = await this._loadGrowthRecords();
    if (index >= 0 && index < growthRecords.length) {
      growthRecords[index] = updatedRecord;
      await fs.writeFile(this.growthDataPath, JSON.stringify(growthRecords, null, 2));
      return growthRecords[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  async deleteGrowthRecord(index) {
    const growthRecords = await this._loadGrowthRecords();
    if (index >= 0 && index < growthRecords.length) {
      const deletedRecord = growthRecords.splice(index, 1);
      await fs.writeFile(this.growthDataPath, JSON.stringify(growthRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = new GrowthDao();
