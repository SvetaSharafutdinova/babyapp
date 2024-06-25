const fs = require('fs');
const path = require('path');

const feedingDataFilePath = path.join(__dirname, '../data/feeding.json');
const sleepDataFilePath = path.join(__dirname, '../data/sleep.json');
const growthDataFilePath = path.join(__dirname, '../data/growth.json');
const scheduleDataFilePath = path.join(__dirname, '../data/schedule.json');
const conditionDataFilePath = path.join(__dirname, '../data/condition.json');

function loadData(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return [];
        }
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        throw new Error(`Failed to load data from ${filePath}: ${error.message}`);
    }
}

async function fetchLatestFeedingRecord() {
    const data = loadData(feedingDataFilePath);
    return data.length > 0 ? data[data.length - 1] : null;
}

async function fetchLatestSleepRecord() {
    const data = loadData(sleepDataFilePath);
    return data.length > 0 ? data[data.length - 1] : null;
}

async function fetchLatestGrowthRecord() {
    const data = loadData(growthDataFilePath);
    return data.length > 0 ? data[data.length - 1] : null;
}

async function fetchLatestScheduleRecord() {
    const data = loadData(scheduleDataFilePath);
    return data.length > 0 ? data[data.length - 1] : null;
}

async function fetchLatestConditionRecord() {
    const data = loadData(conditionDataFilePath);
    return data.length > 0 ? data[data.length - 1] : null;
}

module.exports = {
    fetchLatestFeedingRecord,
    fetchLatestSleepRecord,
    fetchLatestGrowthRecord,
    fetchLatestScheduleRecord,
    fetchLatestConditionRecord,
};
