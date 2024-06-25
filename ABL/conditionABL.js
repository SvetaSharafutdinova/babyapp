const conditionDAO = require('../dao/conditionDAO');
const ajv = require('../utils/ajv.util');
const schema = require('../schema/condition.schema');

async function recordCondition(data) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await conditionDAO.recordCondition(data.date, data.condition, data.notes);
  } catch (error) {
    throw new Error('Failed to record condition: ' + error.message);
  }
}

async function fetchConditionRecords() {
  try {
    return await conditionDAO.fetchConditionRecords();
  } catch (error) {
    throw new Error('Failed to fetch condition records: ' + error.message);
  }
}

async function deleteConditionRecord(index) {
  try {
    await conditionDAO.deleteConditionRecord(index);
  } catch (error) {
    throw new Error('Failed to delete condition record: ' + error.message);
  }
}

async function updateConditionRecord(index, updatedRecord) {
  const valid = ajv.validate(schema, updatedRecord);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await conditionDAO.updateConditionRecord(index, updatedRecord);
  } catch (error) {
    throw new Error('Failed to update condition record: ' + error.message);
  }
}

module.exports = {
  recordCondition,
  fetchConditionRecords,
  deleteConditionRecord,
  updateConditionRecord,
};
