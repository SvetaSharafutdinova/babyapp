const fs = require('fs/promises');
const path = require('path');

const DEFAULT_DATA_PATH = path.join(__dirname, '..', 'data', 'feeding.json');

class FeedingDao {
  constructor(dataPath) {
    this.feedingDataPath = dataPath ? dataPath : DEFAULT_DATA_PATH;
  }

  async createFeedingRecord(feedingRecord) {
    const feedingRecords = await this._loadFeedingRecords();
    feedingRecords.push(feedingRecord);
    await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
    return feedingRecord;
  }

  async _loadFeedingRecords() {
    try {
      const data = await fs.readFile(this.feedingDataPath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        return [];
      } else {
        throw error;
      }
    }
  }

  async updateFeedingRecord(index, updatedRecord) {
    const feedingRecords = await this._loadFeedingRecords();
    if (index >= 0 && index < feedingRecords.length) {
      feedingRecords[index] = updatedRecord;
      await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
      return feedingRecords[index];
    } else {
      throw new Error("Invalid index");
    }
  }

  async deleteFeedingRecord(index) {
    const feedingRecords = await this._loadFeedingRecords();
    if (index >= 0 && index < feedingRecords.length) {
      const deletedRecord = feedingRecords.splice(index, 1);
      await fs.writeFile(this.feedingDataPath, JSON.stringify(feedingRecords, null, 2));
      return deletedRecord;
    } else {
      throw new Error("Invalid index");
    }
  }
}

module.exports = new FeedingDao();
