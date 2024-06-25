const dashboardABL = require('/Users/makar0ff/babyapp/ABL/dashboardABL.js');


exports.fetchDashboardData = async (req, res) => {
    try {
        const data = await dashboardABL.fetchDashboardData();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
