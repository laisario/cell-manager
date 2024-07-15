require('dotenv').config()
const jwt = require('jsonwebtoken');
const userService = require('../services/user');

const secret = process.env.JWT_SECRET;

const validateJWT = async (req, res, next) => {
    const { authorization: token } = req.headers;
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    try {
      const decoded = jwt.verify(token, secret);
      const { userEmail } = decoded;
      const user = await userService.findByEmail(userEmail);
      
      if (!user) {
        return res.status(401).json({ message: 'User not found' });
      }

      req.user = user;
      next();
    } catch (e) {
      console.log(e)
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = { validateJWT };