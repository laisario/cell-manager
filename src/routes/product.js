const express = require('express');
const { create, findAll, findById, updateById, deleteById } = require('../controllers/product')
const validateRequest = require('../midlewares/product')
const { validateJWT } = require('../auth/validateJWT')
const router = express.Router();

router.post('/', validateJWT, validateRequest, create);
router.get('/', validateJWT, findAll);
router.get('/:id', validateJWT, findById);
router.put('/:id', validateJWT, validateRequest, updateById);
router.delete('/:id', validateJWT, deleteById);

module.exports = router;