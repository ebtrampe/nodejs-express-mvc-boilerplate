const express = require('express');

const app = express();

// MIDDLEWARES
app.use(express.json());

// IMPORT ROUTERS
const tourRoutes = require('./routes/tours');

// MOUNT ROUTERS TO BASE ROUTE
app.use('/api/v1/tours', tourRoutes);

module.exports = app;