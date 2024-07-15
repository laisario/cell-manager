const express = require('express');
const { login } = require('../controllers/login');
const { validateLoginPassword } = require('../midlewares/login')

const router = express.Router();
router.post('/', validateLoginPassword, login);

module.exports = router;