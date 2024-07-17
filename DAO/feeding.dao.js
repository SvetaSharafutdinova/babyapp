const fs = require("fs/promises");
const path = require("path");
const { v4: uuidv4 } = require("uuid");

const DEFAULT_DATA_PATH = path.join(__dirname, "..", "data", "feeding.json");

class FeedingDao {
  constructor(dataPath) {
    this.feedingDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createFeedingRecord(feedingRecord) {
    const feedingRecords = await this._loadFeedingRecords();
    feedingRecord.id = uuidv4();
    feedingRecords.push(feedingRecord);

    await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
    return feedingRecord;
  }

  async _loadFeedingRecords() {
    try {
      const data = await fs.readFile(this.feedingDataPath, "utf8");
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateFeedingRecord(id, updatedRecord) {
    const feedingRecords = await this._loadFeedingRecords();
    const index = feedingRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      feedingRecords[index] = { ...feedingRecords[index], ...updatedRecord };
      await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
      return feedingRecords[index];
    } else {
      throw new Error("Record not found");
    }
  }

  async deleteFeedingRecord(id) {
    const feedingRecords = await this._loadFeedingRecords();
    const index = feedingRecords.findIndex(record => record.id === id);
    if (index !== -1) {
      const deletedRecord = feedingRecords.splice(index, 1);
      await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Record not found");
    }
  }
}

module.exports = new FeedingDao();
