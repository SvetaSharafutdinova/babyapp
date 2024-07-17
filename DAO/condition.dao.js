const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "condition.json");

class ConditionDao {
  constructor(dataPath) {
    this.conditionDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createConditionRecord(conditionRecord) {
    const conditionRecords = await this._loadConditionRecords();
    conditionRecord.id = uuidv4();
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

  async updateConditionRecord(id, updatedRecord) {
    const conditionRecords = await this._loadConditionRecords();
    const index = conditionRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      conditionRecords[index] = { ...conditionRecords[index], ...updatedRecord };
      await fs.writeFile(this.conditionDataPath, JSON.stringify(conditionRecords, null, 2));
      return conditionRecords[index];
    } else {
      throw new Error("Record not found");
    }
  }

  async deleteConditionRecord(id) {
    const conditionRecords = await this._loadConditionRecords();
    const index = conditionRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      const deletedRecord = conditionRecords.splice(index, 1);
      await fs.writeFile(this.conditionDataPath, JSON.stringify(conditionRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Record not found");
    }
  }
}

module.exports = new ConditionDao();
