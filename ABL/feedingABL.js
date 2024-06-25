const feedingDAO = require('../dao/feedingDAO');
const ajv = require('../utils/ajv.util');
const schema = require('../schema/feeding.schema');

async function recordFeeding(data) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }
  
  try {
    await feedingDAO.recordFeeding(data.date, data.foodType, data.quantity);
  } catch (error) {
    throw new Error('Failed to record feeding: ' + error.message);
  }
}

async function fetchFeedingRecords() {
  try {
    return await feedingDAO.fetchFeedingRecords();
  } catch (error) {
    throw new Error('Failed to fetch feeding records: ' + error.message);
  }
}

async function deleteFeedingRecord(index) {
  try {
    await feedingDAO.deleteFeedingRecord(index);
  } catch (error) {
    throw new Error('Failed to delete feeding record: ' + error.message);
  }
}

async function updateFeedingRecord(index, updatedRecord) {
  const valid = ajv.validate(schema, updatedRecord);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await feedingDAO.updateFeedingRecord(index, updatedRecord);
  } catch (error) {
    throw new Error('Failed to update feeding record: ' + error.message);
  }
}

module.exports = {
  recordFeeding,
  fetchFeedingRecords,
  deleteFeedingRecord,
  updateFeedingRecord,
};
