const ajv = require('../utils/ajv.util');

const feedingSchema = {
    type: 'object',
    properties: {
        date: { type: 'string', format: 'date' },
        foodType: { type: 'string', minLength: 1 },
        quantity: { type: 'number', minimum: 0 },
    },
    required: ['date', 'foodType', 'quantity'],
    additionalProperties: false,
};

module.exports = ajv.compile(feedingSchema);
