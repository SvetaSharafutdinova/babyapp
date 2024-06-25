const conditionABL = require('/Users/makar0ff/babyapp/ABL/conditionABL.js');


exports.recordCondition = async (req, res) => {
    const { date, condition } = req.body;
    try {
        await conditionABL.recordCondition(date, condition);
        res.status(200).json({ message: 'Condition recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.fetchConditionRecords = async (req, res) => {
    try {
        const records = await conditionABL.fetchConditionRecords();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteConditionRecord = async (req, res) => {
    const { index } = req.params;
    try {
        await conditionABL.deleteConditionRecord(parseInt(index, 10));
        res.status(200).json({ message: 'Condition record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateConditionRecord = async (req, res) => {
    const { index } = req.params;
    const updatedRecord = req.body;
    try {
        await conditionABL.updateConditionRecord(parseInt(index, 10), updatedRecord);
        res.status(200).json({ message: 'Condition record updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
