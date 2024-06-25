const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/feeding.json');

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

async function recordFeeding(date, foodType, quantity) {
    try {
        const data = loadData();
        const timestamp = new Date().toISOString();
        data.push({ date, foodType, quantity, timestamp });
        saveData(data);
    } catch (error) {
        throw new Error(`Failed to record feeding: ${error.message}`);
    }
}

async function fetchFeedingRecords() {
    try {
        return loadData();
    } catch (error) {
        throw new Error(`Failed to fetch feeding records: ${error.message}`);
    }
}

async function deleteFeedingRecord(index) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to delete feeding record: ${error.message}`);
    }
}

async function updateFeedingRecord(index, updatedRecord) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data[index] = { ...updatedRecord };
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to update feeding record: ${error.message}`);
    }
}

module.exports = {
    recordFeeding,
    fetchFeedingRecords,
    deleteFeedingRecord,
    updateFeedingRecord,
};
