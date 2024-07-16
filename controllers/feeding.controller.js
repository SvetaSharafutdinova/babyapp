const ajv = require('../utils/ajv.util');
const feedingSchema = require('../schema/feeding.schema');
const createFeedingRecord = require('../abl/feeding/createFeedingRecord.abl');
const fetchFeedingRecords = require('../abl/feeding/fetchFeedingRecords.abl');
const updateFeedingRecord = require('../abl/feeding/updateFeedingRecord.abl');
const deleteFeedingRecord = require('../abl/feeding/deleteFeedingRecord.abl');

const validate = ajv.compile(feedingSchema);

exports.recordFeeding = async (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await createFeedingRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchFeedingRecords = async (req, res) => {
  try {
    await fetchFeedingRecords(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteFeedingRecord = async (req, res) => {
  try {
    await deleteFeedingRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateFeedingRecord = async (req, res) => {
  const updatedRecord = req.body;
  const valid = validate(updatedRecord);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await updateFeedingRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
