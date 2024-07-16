const growthSchema = {
    type: "object",
    properties: {
      date: { type: "string", format: "date-time" },
      height: { type: "number", minimum: 0 },
      weight: { type: "number", minimum: 0 }
    },
    required: ["date", "height", "weight"],
    additionalProperties: false
  };
  
  module.exports = growthSchema;
  