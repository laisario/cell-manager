const Sequelize = require('sequelize');
const config = require('../config');
const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);


const ProductModel = require('../models/product');
const create = async (newProduct) => {
    const result = await sequelize.transaction(async (t) => {
        await ProductModel.create(newProduct, { transaction: t });
    });
    return result;
};

const findAll = async () => {
    const result = await ProductModel.findAll();
    return result;
};

const findById = async (id) => {
    const result = await ProductModel.findOne({ where: { id } });
    return result;
};

const updateById = async (id, newData) => {
    const result = await ProductModel.update(newData, {
        where: { id },
    });
    return result;
};

const deleteById = async (id) => ProductModel.destroy({ where: { id } });

module.exports = { create, findAll, findById, updateById, deleteById };
