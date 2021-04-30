
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');


class product extends Model {}


product.init(
  {
    id: {
      type: inputTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    price: {
      type: inputTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true,
      },

      product_name: {
        type: inputTypes.STRING,
        allowNull: false,
      },

    },
    stock: {
      type: inputTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: inputTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = product;
