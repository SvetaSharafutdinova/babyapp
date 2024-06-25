const dashboardDAO = require('/Users/makar0ff/babyapp/DAO/dashboardDAO');

async function fetchDashboardData() {
    try {
        const feeding = await dashboardDAO.fetchLatestFeedingRecord();
        const sleep = await dashboardDAO.fetchLatestSleepRecord();
        const growth = await dashboardDAO.fetchLatestGrowthRecord();
        const schedule = await dashboardDAO.fetchLatestScheduleRecord();
        const condition = await dashboardDAO.fetchLatestConditionRecord();

        return { feeding, sleep, growth, schedule, condition };
    } catch (error) {
        throw new Error('Failed to fetch dashboard data: ' + error.message);
    }
}

module.exports = {
    fetchDashboardData,
};
