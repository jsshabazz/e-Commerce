const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'gansterrap music',
  },
  {
    tag_name: 'r&b music',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'black',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
