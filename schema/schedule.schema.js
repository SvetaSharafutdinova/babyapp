const scheduleSchema = {
  type: "object",
  properties: {
    date: { type: "string", format: "date-time" },
    activity: { type: "string" },
    notes: { type: "string" }
  },
  required: ["date", "activity"],
  additionalProperties: false
};

module.exports = scheduleSchema;
