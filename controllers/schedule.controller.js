const ajv = require('../utils/ajv.util');
const scheduleSchema = require('../schema/schedule.schema');
const createScheduleRecord = require('../abl/schedule/createScheduleRecord.abl');
const fetchScheduleRecords = require('../abl/schedule/fetchScheduleRecords.abl');
const updateScheduleRecord = require('../abl/schedule/updateScheduleRecord.abl');
const deleteScheduleRecord = require('../abl/schedule/deleteScheduleRecord.abl');

const validate = ajv.compile(scheduleSchema);

exports.recordSchedule = async (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await createScheduleRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchScheduleRecords = async (req, res) => {
  try {
    await fetchScheduleRecords(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteScheduleRecord = async (req, res) => {
  try {
    await deleteScheduleRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateScheduleRecord = async (req, res) => {
  const updatedRecord = req.body;
  const valid = validate(updatedRecord);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await updateScheduleRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
