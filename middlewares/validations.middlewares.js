const { body } = require('express-validator');
const { validationResult } = require('express-validator');

const createUserValidations = [
  body('name').notEmpty().withMessage('Name cannot be empty'),
  body('email')
    .notEmpty()
    .withMessage('Email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('password')
    .notEmpty()
    .withMessage('password cannot be empty')
    .isLength({ min: 8 })
    .withMessage('password must be at least 8 characters'),
];

const createRepairValidations = [
  body('date').notEmpty().withMessage('date cannot be empty'),
  body('computerNumber')
    .notEmpty()
    .withMessage('computerNumber cannot be empty')
    .isNumeric()
    .withMessage('must enter only numbers'),
  body('comments').notEmpty().withMessage('comments cannot be empty'),
];

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map(({ msg }) => msg);

    const errorMsg = messages.join('. ');

    return res.status(400).json({
      status: 'Error',
      message: errorMsg,
    });
  }
  next();
};

module.exports = {
  createUserValidations,
  checkValidations,
  createRepairValidations,
};
