const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('wp9p_user', {
    Id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    user_login: {
        type: Sequelize.STRING
    },
    user_pass: {
        type: Sequelize.STRING
    },
    user_nicename: {
        type: Sequelize.STRING
    },
    user_email: {
        type: Sequelize.STRING
    },
    user_registered: {
        type: Sequelize.DATE
    }, 
    user_activation_key: {
        type: Sequelize.STRING
    }, 
    display_name: {
        type: Sequelize.STRING
    }
})

module.exports = User;