const AppError = require('common/appError');
const logger = require('common/logger');

exports.globalErrorHandler = (err, req, res, next) => {
  logger.error(err.message);
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: process.env.NODE_ENV == 'production' ? '' : err.stack,
  });
};

exports.notFoundErrorHandler = (req, res, next) => {
  const err = new AppError(404, 'fail', 'not found api ...');
  next(err, req, res, next);
};
