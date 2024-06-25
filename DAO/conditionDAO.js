const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/condition.json');

function loadData() {
    try {
        if (!fs.existsSync(dataFilePath)) {
            return [];
        }
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to load data: ${error.message}`);
    }
}

function saveData(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(dataFilePath, jsonData);
    } catch (error) {
        throw new Error(`Failed to save data: ${error.message}`);
    }
}

async function recordCondition(date, condition) {
    try {
        const data = loadData();
        const timestamp = new Date().toISOString();
        data.push({ date, condition,timestamp });
        saveData(data);
    } catch (error) {
        throw new Error(`Failed to record condition: ${error.message}`);
    }
}

async function fetchConditionRecords() {
    try {
        return loadData();
    } catch (error) {
        throw new Error(`Failed to fetch condition records: ${error.message}`);
    }
}

async function deleteConditionRecord(index) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to delete condition record: ${error.message}`);
    }
}

async function updateConditionRecord(index, updatedRecord) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data[index] = updatedRecord;
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to update condition record: ${error.message}`);
    }
}

module.exports = {
    recordCondition,
    fetchConditionRecords,
    deleteConditionRecord,
    updateConditionRecord,
};
