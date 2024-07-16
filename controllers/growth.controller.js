const ajv = require('../utils/ajv.util');
const growthSchema = require('../schema/growth.schema');
const createGrowthRecord = require('../ABL/growth/createGrowthRecord.abl');
const fetchGrowthRecords = require('../ABL/growth/fetchGrowthRecords.abl');
const updateGrowthRecord = require('../ABL/growth/updateGrowthRecord.abl');
const deleteGrowthRecord = require('../ABL/growth/deleteGrowthRecord.abl');

const validate = ajv.compile(growthSchema);

exports.recordGrowth = async (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await createGrowthRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchGrowthRecords = async (req, res) => {
  try {
    await fetchGrowthRecords(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteGrowthRecord = async (req, res) => {
  try {
    await deleteGrowthRecord(req, res);
  } catch (error) {
    res.status  (500).json({ error: error.message });
  }
};

exports.updateGrowthRecord = async (req, res) => {
  const updatedRecord = req.body;
  const valid = validate(updatedRecord);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await updateGrowthRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
