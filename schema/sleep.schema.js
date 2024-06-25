const ajv = require('../utils/ajv.util');

const sleepSchema = {
    type: "object",
  properties: {
    date: { type: "string", format: "date-time" },
    duration: { type: "number", minimum: 0 }
  },
  required: ["date", "duration"],
  additionalProperties: false
};

module.exports = ajv.compile(sleepSchema);
