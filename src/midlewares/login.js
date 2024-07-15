const Joi = require('joi');
const bcrypt = require('bcrypt');
const userService = require('../services/user');

const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.email': '"email" must be a valid email',
        'any.required': '"email" is required'
    }),
    password: Joi.string().min(6).required().messages({
        'string.min': '"password" length must be at least 6 characters long',
        'any.required': '"password" is required'
    }),
});

const validateLoginPassword = async (req, res, next) => {
    await loginSchema.validateAsync(req.body, { abortEarly: false });
    const { email, password } = req.body;
    const user = await userService.findByEmail(email)
    if (!user) {
        return res.status(400).json({ message: 'User not found!' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: 'Invalid password!' });
    }
    res.locals.user = user;
    next();
};

module.exports = { validateLoginPassword };