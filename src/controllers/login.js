require('dotenv').config()
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => { 
  const { user } = res.locals;
  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ userEmail: user.email, userId: user.id }, secret, jwtConfig);
  return res.status(200).json({ token });
};

const register = async (req, res) => {};

module.exports = { login, register };