const scheduleABL = require('../ABL/scheduleABL');


exports.recordSchedule = async (req, res) => {
    const schedule = req.body;
    try {
        await scheduleABL.recordSchedule(schedule);
        res.status(200).json({ message: 'Schedule recorded successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.fetchScheduleRecords = async (req, res) => {
    try {
        const records = await scheduleABL.fetchScheduleRecords();
        res.status(200).json(records);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteScheduleRecord = async (req, res) => {
    const { index } = req.params;
    try {
        await scheduleABL.deleteScheduleRecord(parseInt(index, 10));
        res.status(200).json({ message: 'Schedule record deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateScheduleRecord = async (req, res) => {
    const { index } = req.params;
    const updatedRecord = req.body;
    try {
        await scheduleABL.updateScheduleRecord(parseInt(index, 10), updatedRecord);
        res.status(200).json({ message: 'Schedule record updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
