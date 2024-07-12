const productService = require('../services/product.js')

const create = async (req, res) => {
  const {
    model,
    brand,
    color,
    price,
    operatingSystem,
    storage,
    ram,
    screenSize,
    mainCamera,
    frontCamera,
    batteryCapacity,
    connectivity,
    physicalDimensions,
    weight
  } = req.body;
  const published = new Date();
  const updated = new Date();

  const product = await productService
    .create({
      model,
      brand,
      color,
      price,
      operatingSystem,
      storage,
      ram,
      screenSize,
      mainCamera,
      frontCamera,
      batteryCapacity,
      connectivity,
      physicalDimensions,
      weight,
      published,
      updated
    });

  return res.status(201).json(product);
};

const findAll = async (req, res) => {
  const products = await productService.findAll();
  return res.status(200).json(products);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const product = await productService.findById(id);
  return res.status(200).json(product);
};

const updateById = async (req, res) => {
  const { title, content } = req.body;
  const { id } = req.params;

  const product = await productService.findById(id);
  product.set({
    title,
    content,
    updated: new Date(),
  });
  await product.save();
  return res.status(200).json(product);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  await productService.deleteproduct(id);
  return res.status(204).end();
};

module.exports = { create, findAll, findById, updateById, deleteById };