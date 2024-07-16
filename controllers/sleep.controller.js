const ajv = require('../utils/ajv.util');
const sleepSchema = require('../schema/sleepSchema');
const createSleepRecord = require('../ABL/sleep/createSleepRecord.abl');
const updateSleepRecord = require('../ABL/sleep/updateSleepRecord.abl');
const fetchSleepRecords = require('../ABL/sleep/fetchSleepRecords.abl');
const deleteSleepRecord = require('../ABL/sleep/deleteSleepRecord.abl');

const validate = ajv.compile(sleepSchema);

exports.recordSleep = async (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await createSleepRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchSleepRecords = async (req, res) => {
  try {
    await fetchSleepRecords(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSleepRecord = async (req, res) => {
  try {
    await deleteSleepRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateSleepRecord = async (req, res) => {
  const updatedRecord = req.body;
  const valid = validate(updatedRecord);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await updateSleepRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
