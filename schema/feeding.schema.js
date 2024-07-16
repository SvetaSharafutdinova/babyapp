const feedingSchema = {
    type: "object",
    properties: {
      date: { type: "string", format: "date-time" },
      foodType: { type: "string" },
      quantity: { type: "number", minimum: 0 }
    },
    required: ["date", "foodType", "quantity"],
    additionalProperties: false
  };
  
  module.exports = feedingSchema;
  