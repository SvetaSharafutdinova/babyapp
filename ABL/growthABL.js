const growthDAO = require('/Users/makar0ff/babyapp/DAO/growthDAO');
const ajv = require('../utils/ajv.util');
const schema = require('../schema/growth.schema');

async function recordGrowth(data) {
    try {
      const valid = ajv.validate(schema, data);
      if (!valid) {
        throw { status: 400, message: ajv.errors };
      }
    } catch (error) {
        throw new Error('Failed to record growth: ' + error.message);
    }
}

async function fetchGrowthRecords() {
    try {
        return await growthDAO.fetchGrowthRecords();
    } catch (error) {
        throw new Error('Failed to fetch growth records: ' + error.message);
    }
}

async function deleteGrowthRecord(index) {
    try {
        await growthDAO.deleteGrowthRecord(index);
    } catch (error) {
        throw new Error('Failed to delete growth record: ' + error.message);
    }
}

async function updateGrowthRecord(index, updatedRecord) {
    try {
        await growthDAO.updateGrowthRecord(index, updatedRecord);
    } catch (error) {
        throw new Error('Failed to update growth record: ' + error.message);
    }
}

module.exports = {
    recordGrowth,
    fetchGrowthRecords,
    deleteGrowthRecord,
    updateGrowthRecord,
};
