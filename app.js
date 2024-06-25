const express = require('express');
const bodyParser = require('body-parser');
const ajv = require('./utils/ajv.util');
const expressSanitizer = require('express-sanitizer');
const feedingRoutes = require('./routes/feedingRoutes');
const sleepRoutes = require('./routes/sleepRoutes');
const conditionRoutes = require('./routes/conditionRoutes');
const growthRoutes = require('./routes/growthRoutes');
const scheduleRoutes = require('/Users/makar0ff/babyapp/routes/scheduleRoutes.js');
const historyRoutes = require('./routes/historyRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(expressSanitizer());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function validate(schema) {
  return (req, res, next) => {
      const valid = schema(req.body);
      if (!valid) {
          return res.status(400).json({ error: ajv.errors });
      }
      next();
  };
}


app.use('/feeding', validate(require('./schema/feeding.schema')), feedingRoutes);
app.use('/sleep', validate(require('./schema/sleep.schema')), sleepRoutes);
app.use('/condition', validate(require('./schema/condition.schema')), conditionRoutes);
app.use('/schedule', validate(require('./schema/schedule.schema')), scheduleRoutes);
app.use('/growth', validate(require('./schema/growth.schema')), growthRoutes);


app.use('/dashboard', dashboardRoutes);
app.use('/history', historyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

