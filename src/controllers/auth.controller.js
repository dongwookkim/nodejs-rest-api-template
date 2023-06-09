const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const AppError = require('common/appError');

const createToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );
};

exports.login = async (req, res, next) => {
  try {
    const { userid, password } = req.body;

    if (!userid || !password) {
      return next(new AppError(404, 'fail', 'Please provide userid or password'), req, res, next);
    }

    let user = { id: 'admin' };

    const token = createToken(user.id);

    user.password = undefined;

    res.status(200).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

exports.signup = async (req, res, next) => {
  try {
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.role,
    };

    const token = createToken(user.id);

    user.password = undefined;

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};
