const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// ============ Require Routers ========================

// Require routers
const mainRouter = require('./routers/mainRouter.js');

// ============ Middleware =============================
// Body parser
app.use(express.json()) //accesses req.body

// ============ Define Endpoints/Routes ================
// Send bundle
app.use('/dist', express.static(path.join(__dirname, '../dist')));

// Send html
app.get('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// Post and get request (e.g. grabs data for the main page)
app.use('/api', mainRouter);

// =========== Unknown and Global Error Handler =========================
// Unknown route handler
app.use((req, res) => res.sendStatus(404));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {};
  defaultErr.log = 'Express error handler caught unknown middleware error';
  defaultErr.status = 400;
  defaultErr.message = {err: 'An error has occured'}

  const errorObj = Object.assign(defaultErr, err);
  console.log(defaultErr)
  console.log(errorObj)
  res.status(errorObj.status).json(errorObj.message);
});

// =========================================================================

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;

