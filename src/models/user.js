const { Sequelize } = require('sequelize');
const sequelize = require('sequelize')
const database = require('../database/conexao');

const user = database.define('user_rafael', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true  
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    active: {
        type: Sequelize.BOOLEAN,
        default: true,
    },
    createAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    updateAt: {
        type: Sequelize.DATE,
    }

}, {
    createdAt: false,
    updatedAt: false,
    timestamps: false,
    modelName: 'user_rafael', freezeTableName: true
})

module.exports = user;