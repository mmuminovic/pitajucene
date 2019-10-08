const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Question = sequelize.define('wp9p_post', {
    ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    post_title: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    post_content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    post_author: {
        type: Sequelize.INTEGER
    },
    post_parent: {
        type: Sequelize.BIGINT(20)
    },
    post_type: {
        type: Sequelize.STRING
    },
    post_date: {
        type: Sequelize.DATE
    },
    post_status: {
        type: Sequelize.STRING
    },
    comment_status: {
        type: Sequelize.STRING
    },
    post_name: {
        type: Sequelize.STRING
    }
    
})

module.exports = Question;