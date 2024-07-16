const ajv = require('../utils/ajv.util');
const conditionSchema = require('../schema/condition.schema');
const createConditionRecord = require('../abl/condition/createConditionRecord.abl');
const fetchConditionRecords = require('../abl/condition/fetchConditionRecords.abl');
const updateConditionRecord = require('../abl/condition/updateConditionRecord.abl');
const deleteConditionRecord = require('../abl/condition/deleteConditionRecord.abl');

const validate = ajv.compile(conditionSchema);

exports.recordCondition = async (req, res) => {
  const data = req.body;
  const valid = validate(data);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await createConditionRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fetchConditionRecords = async (req, res) => {
  try {
    await fetchConditionRecords(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteConditionRecord = async (req, res) => {
  try {
    await deleteConditionRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConditionRecord = async (req, res) => {
  const updatedRecord = req.body;
  const valid = validate(updatedRecord);
  if (!valid) {
    return res.status(400).json({ error: validate.errors });
  }

  try {
    await updateConditionRecord(req, res);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
