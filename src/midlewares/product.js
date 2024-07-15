const Joi = require('joi');

const productSchema = Joi.object({
    model: Joi.string(),
    brand: Joi.string(),
    color: Joi.string(),
    price: Joi.string(),
    operatingSystem: Joi.string(),
    operatingSystemVersion: Joi.string(),
    storage: Joi.string(),
    ram: Joi.string(),
    screenSize: Joi.string(),
    cameraResolution: Joi.string(),
    batteryCapacity: Joi.string(),
    connectivity: Joi.string(),
    physicalDimensions: Joi.string(),
    weight: Joi.string(),
})

const validateRequest = async (req, res, next) => {
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
        weight } = req.body;
    try {
        await productSchema.validateAsync({
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
            weight
        });
        next()
    }
    catch (err) {
        return res.status(400).json({ erro: err });
    }
}

module.exports = validateRequest;
