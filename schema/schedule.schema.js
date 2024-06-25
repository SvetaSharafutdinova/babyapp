const ajv = require('../utils/ajv.util');

const scheduleSchema = {
    type: "object",
    properties: {
      date: { type: "string", format: "date-time" },
      activities: {
        type: "array",
        items: {
          type: "object",
          properties: {
            time: { type: "string", format: "time" },
            activity: { type: "string" },
            notes: { type: "string" }
          },
          required: ["time", "activity"],
          additionalProperties: false
        }
      }
    },
    required: ["date", "activities"],
    additionalProperties: false
  };

module.exports = ajv.compile(scheduleSchema);