const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('common/appError');
const { Roles } = require('constants/common');

exports.validateToken = async (req, res, next) => {
  try {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next(new AppError(401, 'fail', 'You are not logged in! Please login in to continue'), req, res, next);
    }

    // Verify token
    const decode = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // const user = await User.findById(decode.id);
    // if (!user) {
    //   return next(new Error(401, 'fail', 'This user is no longer exist'), req, res, next);
    // }

    req.user = { id: decode.id, role: Roles.Admin }; //user;
    next();
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      return next(new AppError(419, 'fail', 'TOKEN_EXPIRED'), req, res, next);
    }
    next(err);
  }
};

exports.validateRole = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError(403, 'fail', 'You are not allowed to do this action'), req, res, next);
    }
    next();
  };
};
