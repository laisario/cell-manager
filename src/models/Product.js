const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        brandId: {
            type: DataTypes.INTEGER, foreignKey: true,
        },
        operatingSystemId: {
            type: DataTypes.INTEGER, foreignKey: true,
        },
        userId: { type: DataTypes.INTEGER, foreignKey: true },
        model: DataTypes.STRING,
        price: DataTypes.STRING,
        color: DataTypes.STRING,
        storage: DataTypes.STRING,
        ram: DataTypes.STRING,
        screenSize: DataTypes.STRING,
        cameraResolution: DataTypes.STRING,
        batteryCapacity: DataTypes.STRING,
        connectivity: DataTypes.STRING,
        physicalDimensions: DataTypes.STRING,
        weight: DataTypes.STRING,
        image: DataTypes.BLOB,
        published: { type: DataTypes.DATE, defaultValue: new Date() },
        updated: { type: DataTypes.DATE, defaultValue: new Date() },
    }, {
        timestamps: false,
        tableName: 'products',
    });

    Product.associate = (models) => {
        Product.belongsTo(models.Brand, { foreignKey: 'brandId', as: 'brand' });
        Product.belongsTo(models.OperatingSystem, { foreignKey: 'operatingSystemId', as: 'operatingSystem' });
        Product.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
    }

    return Product;
};

module.exports = ProductModel;