const Sequelize = require('sequelize');

const sequelize = new Sequelize('pitajucene', 'nativeuser', 'manutd95', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false
    },
    logging: false
});

module.exports = sequelize;