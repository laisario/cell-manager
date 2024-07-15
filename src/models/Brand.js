const BrandModel = (sequelize, DataTypes) => {
    const Brand = sequelize.define('Brand', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        country: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'brands',
    });

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, { foreignKey: 'brandId', as: 'products' });
    }

    return Brand;
};

module.exports = BrandModel;