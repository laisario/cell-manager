const express = require('express');
const { create, findAll, findByEmail, updateByEmail, deleteByEmail } = require('../controllers/user')
const validateUser = require('../midlewares/user')
const { validateJWT } = require('../auth/validateJWT')
const router = express.Router();

router.post('/', validateUser, create);
router.get('/', validateJWT, findAll);
router.get('/email', validateJWT, findByEmail);
router.put('/', validateJWT, validateUser, updateByEmail);
router.delete('/', validateJWT, deleteByEmail);

module.exports = router;