const express = require('express');
const router = express.Router();
const authMiddleware = require('middlewares/auth');
const authController = require('controllers/auth.controller');
const sampleController = require('controllers/sample.controller');
const { Roles } = require('constants/common');

router.post('/login', authController.login);
router.post('/signup', authController.signup);

//////////////////////////////////////////////////////////
// Validate access token
router.use(authMiddleware.validateToken);

router.route('/').get(sampleController.search).post(sampleController.create);

//////////////////////////////////////////////////////////
// Validate access role
router.use(authMiddleware.validateRole(Roles.Admin));

router.route('/all').get(sampleController.all);

module.exports = router;
