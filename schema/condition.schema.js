const ajv = require('../utils/ajv.util');

const conditionSchema = {
    type: "object",
  properties: {
    date: { type: "string", format: "date-time" },
    condition: { type: "string" },
    notes: { type: "string" }
  },
  required: ["date", "condition"],
  additionalProperties: false
};

module.exports = ajv.compile(conditionSchema);