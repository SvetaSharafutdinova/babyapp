const fs = require('fs');
const path = require('path');

const feedingHistoryPath = path.join(__dirname, '../data/feedingHistory.json');
const sleepHistoryPath = path.join(__dirname, '../data/sleepHistory.json');
const conditionHistoryPath = path.join(__dirname, '../data/conditionHistory.json');
const scheduleHistoryPath = path.join(__dirname, '../data/scheduleHistory.json');

function loadData(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to load data: ${error.message}`);
    }
}

function saveData(filePath, data) {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(filePath, jsonData);
    } catch (error) {
        throw new Error(`Failed to save data: ${error.message}`);
    }
}

async function fetchFeedingHistory() {
    try {
        return loadData(feedingHistoryPath);
    } catch (error) {
        throw new Error(`Failed to fetch feeding history: ${error.message}`);
    }
}

async function fetchSleepHistory() {
    try {
        return loadData(sleepHistoryPath);
    } catch (error) {
        throw new Error(`Failed to fetch sleep history: ${error.message}`);
    }
}

async function fetchConditionHistory() {
    try {
        return loadData(conditionHistoryPath);
    } catch (error) {
        throw new Error(`Failed to fetch condition history: ${error.message}`);
    }
}

async function fetchScheduleHistory() {
    try {
        return loadData(scheduleHistoryPath);
    } catch (error) {
        throw new Error(`Failed to fetch schedule history: ${error.message}`);
    }
}

module.exports = {
    fetchFeedingHistory,
    fetchSleepHistory,
    fetchConditionHistory,
    fetchScheduleHistory,
};
