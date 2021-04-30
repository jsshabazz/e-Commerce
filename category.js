const { Model, inputTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class category extends Model { }

category.init(
    {
        id: {
            type: inputTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
      allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category',
    }
);
module.exports = category;




