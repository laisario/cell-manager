const { Product, Brand, OperatingSystem, sequelize, User } = require('../models');

const create = async (newProduct) => {
    const {
        model,
        brand,
        color,
        price,
        operatingSystem,
        operatingSystemVersion,
        storage,
        ram,
        screenSize,
        cameraResolution,
        batteryCapacity,
        connectivity,
        physicalDimensions,
        weight,
        published,
        updated,
        userId
    } = newProduct;

    const result = await sequelize.transaction(async (t) => {
        const [UserModel] = await User.findOrCreate({
            where: { id: userId },
            transaction: t,
        });
        const [brandModel] = await Brand.findOrCreate({
            where: { name: brand },
            defaults: {
                name: 'Samsung',
            },
            transaction: t,
        });
        const [operatingSystemModel] = await OperatingSystem.findOrCreate({
            where: { name: operatingSystem, version: operatingSystemVersion },
            defaults: {
                name: 'Android',
                version: '1.x'
            },
            transaction: t,
        });
        return Product.create({
            brandId: brandModel.id,
            operatingSystemId: operatingSystemModel.id,
            userId: UserModel.id,
            color,
            model,
            cameraResolution,
            price,
            storage,
            ram,
            screenSize,
            batteryCapacity,
            connectivity,
            physicalDimensions,
            weight,
            published,
            updated
        }, { transaction: t });
    });
    return result;
};

const findAll = async () => {
    const result = await Product.findAll();
    return result;
};

const findById = async (id) => {
    const result = await Product.findOne({ where: { id } });
    return result;
};

const updateById = async (id, newData) => {
    const {
        model,
        brand,
        country,
        color,
        price,
        operatingSystem,
        operatingSystemVersion,
        storage,
        ram,
        screenSize,
        cameraResolution,
        batteryCapacity,
        connectivity,
        physicalDimensions,
        weight,
        published,
        updated
    } = newData;
    
    const [brandModel, createdBrand] = await Brand.findOrCreate({
        where: { name: brand },
        defaults: {
            name: 'Samsung',
        },
    });
    if (!createdBrand) {
        await brandModel.update({ name: brand, country, }, {
            where: { id: brandModel.id },
        })
    }
    const [operatingSystemModel, createdOperantingSystem] = await OperatingSystem.findOrCreate({
        where: { name: operatingSystem, version: operatingSystemVersion },
        defaults: {
            name: 'Android',
            version: '1.x'
        },
    });

    if (!createdOperantingSystem) {
        await operatingSystemModel.update({ name: operatingSystem, version: operatingSystemVersion }, {
            where: { id: operatingSystemModel.id },
        })
    }
    const product = await findById(id)
    product.update({
        brand: brandModel.id,
        operatingSystem: operatingSystemModel.id,
        model,
        color,
        price,
        storage,
        ram,
        screenSize,
        cameraResolution,
        batteryCapacity,
        connectivity,
        physicalDimensions,
        weight,
        published,
        updated
    }, {
        where: { id },
    });
    await product.save();
    return product;

};

const deleteById = async (id) => Product.destroy({ where: { id } });

module.exports = { create, findAll, findById, updateById, deleteById };
