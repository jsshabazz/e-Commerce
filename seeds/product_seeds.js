const { product } = require('../models');

const productData = [
  {
    product_name: 'Throw-Back Jersey',
    price: 55.99,
    stock: 20,
    category_id: 1,
  },
  {
    product_name: 'Jordans',
    price: 190.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Fitted Cap',
    price: 25.99,
    stock: 13,
    category_id: 4,
  },
  {
    product_name: 'Ganster Rap',
    price: 15.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Steve Harvey Slacks',
    price: 39.99,
    stock: 23,
    category_id: 2,
  },
];

const seedProducts = () => product.bulkCreate(productData);

module.exports = seedProducts;
