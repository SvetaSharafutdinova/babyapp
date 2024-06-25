const scheduleDAO = require('../dao/scheduleDAO');
const ajv = require('../utils/ajv.util');
const schema = require('../schema/schedule.schema');

async function recordSchedule(data) {
  const valid = ajv.validate(schema, data);
  if (!valid) {
    throw { status: 400, message: ajv.errors };
  }

  try {
    await scheduleDAO.recordSchedule(data.date, data.activities);
  } catch (error) {
    throw new Error('Failed to record schedule: ' + error.message);
  }
}

async function fetchScheduleRecords() {
  try {
    return await scheduleDAO.fetchScheduleRecords();
  } catch (error) {
    throw new Error('Failed to fetch schedule records: ' + error.message);
  }
}

module.exports = {
  recordSchedule,
  fetchScheduleRecords,
};
