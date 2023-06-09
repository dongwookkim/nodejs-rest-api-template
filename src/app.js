const express = require('express');
const morgan = require('morgan');
const logger = require('common/logger');
const routes = require('routes');
const cors = require('cors');
const { notFoundErrorHandler, globalErrorHandler } = require('middlewares/error');

const app = express();

app.use(
  morgan('tiny', {
    stream: logger.stream,
    skip: (req, res) => req.url === '/healthz',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get('/healthz', (req, res) => res.send('App is working'));
app.use(process.env.APP_BASE || '/', routes);

// handle undefined Routes
app.use('*', notFoundErrorHandler);

app.use(globalErrorHandler);

module.exports = app;
