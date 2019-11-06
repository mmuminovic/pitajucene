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
        type: Sequelize.STRING,
        allowNull: false,
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g
    },
    post_content: {
        type: Sequelize.STRING,
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
    
}, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  })

module.exports = Question;