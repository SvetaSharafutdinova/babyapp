const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/schedule.json');

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

async function recordSchedule(schedule) {
    try {
        const data = loadData();
        const timestamp = new Date().toISOString();
        data.push({ schedule, timestamp: new Date().toISOString() });
        saveData(data);
    } catch (error) {
        throw new Error(`Failed to record schedule: ${error.message}`);
    }
}

async function fetchScheduleRecords() {
    try {
        return loadData();
    } catch (error) {
        throw new Error(`Failed to fetch schedule records: ${error.message}`);
    }
}

async function deleteScheduleRecord(index) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to delete schedule record: ${error.message}`);
    }
}

async function updateScheduleRecord(index, updatedRecord) {
    try {
        const data = loadData();
        if (index >= 0 && index < data.length) {
            data[index].schedule = updatedRecord;
            data[index].timestamp = new Date().toISOString(); 
            saveData(data);
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to update schedule record: ${error.message}`);
    }
}

module.exports = {
    recordSchedule,
    fetchScheduleRecords,
    deleteScheduleRecord,
    updateScheduleRecord,
};
