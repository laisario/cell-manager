const express = require('express');
const { create, findAll, findById, updateById, deleteById } = require('../controllers/product')
const router = express.Router();

router.post('/', create);
router.get('/', findAll);
router.get('/:id', findById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);

module.exports = router;