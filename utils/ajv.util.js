const Ajv = require("ajv").default;
const addFormats = require("ajv-formats");

const ajv = new Ajv({
  allErrors: true,
  useDefaults: true,
  coerceTypes: true,
  removeAdditional: true
});

addFormats(ajv);

module.exports = ajv;
