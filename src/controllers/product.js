const productService = require('../services/product')

const create = async (req, res) => {
  const published = new Date();
  const updated = new Date();
  try {
    const product = await productService
      .create({
        ...req.body,
        published,
        userId: req.user.id,
        updated
      });

    return res.status(201).json(product);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const findAll = async (req, res) => {
  const products = await productService.findAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.findById(id);
    return res.status(200).json(product);

  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const updateById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await productService.updateById(id, {
      ...req.body,
      updated: new Date(),
    });
    return res.status(200).json(product);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await productService.deleteById(id);
    return res.status(204).end();
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};


module.exports = { create, findAll, findById, updateById, deleteById };