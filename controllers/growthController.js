const growthABL = require('/Users/makar0ff/babyapp/ABL/growthABL.js');


exports.recordGrowth = async (req, res) => {
    const { date, weight, height } = req.body;
    try {
        await growthABL.recordGrowth(date, weight, height);
        res.status(200).json({ message: 'Growth recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.fetchGrowthRecords = async (req, res) => {
    try {
        const records = await growthABL.fetchGrowthRecords();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteGrowthRecord = async (req, res) => {
    const { index } = req.params;
    try {
        await growthABL.deleteGrowthRecord(parseInt(index, 10));
        res.status(200).json({ message: 'Growth record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateGrowthRecord = async (req, res) => {
    const { index } = req.params;
    const updatedRecord = req.body;
    try {
        await growthABL.updateGrowthRecord(parseInt(index, 10), updatedRecord);
        res.status(200).json({ message: 'Growth record updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
