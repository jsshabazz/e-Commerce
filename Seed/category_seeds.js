const { category } = require('../models');

const categoryData = [
  {
    category_name: 'Jerseys',
  },
  {
    category_name: 'Slacks',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Caps',
  },
  {
    category_name: 'Shoes',
  },
];

const seedCategories = () => category.bulkCreate(categoryData);

module.exports = seedCategories;
