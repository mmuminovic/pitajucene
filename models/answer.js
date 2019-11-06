const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Answer = sequelize.define('wp9p_comments', {
    comment_ID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    comment_author: {
        type: Sequelize.STRING,
        allowNull: false,
        args: /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/g
    },
    comment_post_ID: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comment_content: {
        type: Sequelize.TEXT
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
}, {
    charset: 'utf8',
    collate: 'utf8_unicode_ci'
  })

module.exports = Answer;