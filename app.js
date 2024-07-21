const express = require('express');
const bodyParser = require('body-parser');
const expressSanitizer = require('express-sanitizer');
const ajv = require('./utils/ajv.util');

const feedingRoutes = require('./routes/feedingRoutes');
const sleepRoutes = require('./routes/sleepRoutes');
const conditionRoutes = require('./routes/conditionRoutes');
const growthRoutes = require('./routes/growthRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const historyRoutes = require('./routes/historyRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressSanitizer());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function validate(schema) {
  return (req, res, next) => {
    const validateFunction = ajv.compile(schema);
    const valid = validateFunction(req.body);
    if (!valid) {
      return res.status(400).json({ error: validateFunction.errors });
    }
    next();
  };
}

app.use((req, res, next) => {
  console.log('Request Body:', req.body);
  next();
});

app.post('/feeding', validate(require('./schema/feeding.schema')), feedingRoutes);
app.put('/feeding', validate(require('./schema/feeding.schema')), feedingRoutes);
app.post('/sleep', validate(require('./schema/sleepSchema')), sleepRoutes);
app.put('/sleep', validate(require('./schema/sleepSchema')), sleepRoutes);
app.post('/condition', validate(require('./schema/condition.schema')), conditionRoutes);
app.put('/condition', validate(require('./schema/condition.schema')), conditionRoutes);
app.post('/schedule', validate(require('./schema/schedule.schema')), scheduleRoutes);
app.put('/schedule', validate(require('./schema/schedule.schema')), scheduleRoutes);
app.post('/growth', validate(require('./schema/growth.schema')), growthRoutes);
app.put('/growth', validate(require('./schema/growth.schema')), growthRoutes);

app.use('/feeding', feedingRoutes);
app.use('/sleep', sleepRoutes);
app.use('/condition', conditionRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/growth', growthRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
