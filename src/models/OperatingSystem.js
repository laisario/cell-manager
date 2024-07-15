const OperatingSystemModel = (sequelize, DataTypes) => {
    const OperatingSystem = sequelize.define('OperatingSystem', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        version: DataTypes.STRING,
    }, {
        timestamps: false,
        tableName: 'operatingSystems',
    });

    OperatingSystem.associate = (models) => {
        OperatingSystem.hasMany(models.Product, { foreignKey: 'operatingSystemId', as: 'products' });
    }

    return OperatingSystem;
};

module.exports = OperatingSystemModel;