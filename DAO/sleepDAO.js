const fs = require('fs').promises;
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/sleep.json');

async function loadData() {
    try {
        if (!(await fs.access(dataFilePath))) {
            return [];
        }
        const data = await fs.readFile(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to load data: ${error.message}`);
    }
}

async function saveData(data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(dataFilePath, jsonData);
    } catch (error) {
        throw new Error(`Failed to save data: ${error.message}`);
    }
}

async function recordSleep(date, duration) {
    try {
        const data = await loadData();
        const timestamp = new Date().toISOString();
        data.push({ date, duration, timestamp });
        await saveData(data);
        return data; 
    } catch (error) {
        throw new Error(`Failed to record sleep: ${error.message}`);
    }
}

async function fetchSleepRecords() {
    try {
        return await loadData();
    } catch (error) {
        throw new Error(`Failed to fetch sleep records: ${error.message}`);
    }
}

async function deleteSleepRecord(index) {
    try {
        const data = await loadData();
        if (index >= 0 && index < data.length) {
            data.splice(index, 1);
            await saveData(data);
            return data; 
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to delete sleep record: ${error.message}`);
    }
}

async function updateSleepRecord(index, updatedRecord) {
    try {
        const data = await loadData();
        if (index >= 0 && index < data.length) {
            data[index] = updatedRecord;
            await saveData(data);
            return data; 
        } else {
            throw new Error('Invalid index');
        }
    } catch (error) {
        throw new Error(`Failed to update sleep record: ${error.message}`);
    }
}

module.exports = {
    recordSleep,
    fetchSleepRecords,
    deleteSleepRecord,
    updateSleepRecord,
};
