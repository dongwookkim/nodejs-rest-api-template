const AppError = require('common/appError');
const logger = require('common/logger');
const sampleService = require('services/sample.service');

exports.all = async (req, res, next) => {
  try {
    let result = await sampleService.all(req.body.title);

    logger.error(result[0]);
    logger.log({
      level: 'info',
      message: result[0],
    });

    logger.info('test', result[0]);
    res.json(result);
  } catch (e) {
    next(e);
  }
};

exports.search = async (req, res, next) => {
  try {
    let result = await sampleService.search(req.body.name);
    res.json(result);
  } catch (e) {
    next(e);
  }
};

exports.create = async (req, res, next) => {
  const { user, content } = req.body;
  try {
    if (!user) {
      return next(new AppError(400, 'fail', 'user 필드는 필수값 입니다.'), req, res, next);
    }

    res.status(201).json({});
  } catch (e) {
    next(e);
  }
};
