const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/growth.json');

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

async function recordGrowth(date, weight, height) {
    try {
        const data = loadData();
        const timestamp = new Date().toISOString()
        data.push({ date, weight, height,timestamp });
        saveData(data);
    } catch (error) {
        throw new Error(`Failed to record growth: ${error.message}`);
    }
}

async function fetchGrowthRecords() {
    try {
        return loadData();
    } catch (error) {
        throw new Error(`Failed to fetch growth records: ${error.message}`);
    }
}

async function deleteGrowthRecord(index) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to delete growth record: ${error.message}`);
    }
}

async function updateGrowthRecord(index, updatedRecord) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data[index] = updatedRecord;
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to update growth record: ${error.message}`);
    }
}

module.exports = {
    recordGrowth,
    fetchGrowthRecords,
    deleteGrowthRecord,
    updateGrowthRecord,
};
