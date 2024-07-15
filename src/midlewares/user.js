const Joi = require('joi');
const userService = require('../services/user');

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
    'any.required': '"email" is required'
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': '"password" length must be at least 6 characters long',
    'any.required': '"password" is required'
  }),
  name: Joi.string().required().messages({
    'any.required': '"name" is required'
  })
});

const validateUser = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body, { abortEarly: false });
    const { email } = req.body;
    const user = await userService.findByEmail(email);
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }
    next();
  } catch (error) {
    return res.status(400).json({ erro: error });
  }
};

module.exports = validateUser;
