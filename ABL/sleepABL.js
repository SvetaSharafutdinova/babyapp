const sleepDAO = require('../dao/sleepDAO');
const ajv = require('../utils/ajv.util');
const schema = require('../schema/sleep.schema');

async function recordSleep(data) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await sleepDAO.recordSleep(data.date, data.duration);
  } catch (error) {
    throw new Error('Failed to record sleep: ' + error.message);
  }
}

async function fetchSleepRecords() {
  try {
    return await sleepDAO.fetchSleepRecords();
  } catch (error) {
    throw new Error('Failed to fetch sleep records: ' + error.message);
  }
}

async function deleteSleepRecord(index) {
  try {
    await sleepDAO.deleteSleepRecord(index);
  } catch (error) {
    throw new Error('Failed to delete sleep record: ' + error.message);
  }
}

async function updateSleepRecord(index, updatedRecord) {
  const valid = ajv.validate(schema, updatedRecord);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await sleepDAO.updateSleepRecord(index, updatedRecord);
  } catch (error) {
    throw new Error('Failed to update sleep record: ' + error.message);
  }
}

module.exports = {
  recordSleep,
  fetchSleepRecords,
  deleteSleepRecord,
  updateSleepRecord,
};
