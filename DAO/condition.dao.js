const fs = require("fs/promises");
const path = require("path");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "condition.json");

class ConditionDao {
  constructor(dataPath) {
    this.conditionDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createConditionRecord(conditionRecord) {
    const conditionRecords = await this._loadConditionRecords();
    conditionRecords.push(conditionRecord);

    await fs.writeFile(this.conditionDataPath, JSON.stringify(conditionRecords, null, 2));
    return conditionRecord;
  }

  async _loadConditionRecords() {
    try {
      const data = await fs.readFile(this.conditionDataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateConditionRecord(index, updatedRecord) {
    const conditionRecords = await this._loadConditionRecords();
    if (index >= 0 && index < conditionRecords.length) {
      conditionRecords[index] = updatedRecord;
      await fs.writeFile(this.conditionDataPath, JSON.stringify(conditionRecords, null, 2));
      return conditionRecords[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  async deleteConditionRecord(index) {
    const conditionRecords = await this._loadConditionRecords();
    if (index >= 0 && index < conditionRecords.length) {
      const deletedRecord = conditionRecords.splice(index, 1);
      await fs.writeFile(this.conditionDataPath, JSON.stringify(conditionRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = new ConditionDao();
