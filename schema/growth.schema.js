const ajv = require('../utils/ajv.util');

const growthSchema = {
    type: 'object',
    properties: {
        date: { type: 'string', format: 'date-time' },
        value: { type: 'number', minimum: 0 },
        unit: { type: 'string' },
        notes: { type: 'string' },
    },
    required: ['date', 'value', 'unit'],
    additionalProperties: false,
};

module.exports = ajv.compile(growthSchema);