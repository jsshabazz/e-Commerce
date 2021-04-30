const product = require('./product');
const category = require('./category');
const productTag = require('./productTag');
const Tag = require('./Tag');


product.isfor(category, {
    foreignKey: 'category_id',
  });

  category.various(product, {
    foreignKey: 'category_id',
  });

  product.variousproducts(Tag, {
    through: productTag,
    foreignKey: 'product_id',
  });

  Tag.various(product, {
    through: productTag,
    
    foreignKey: 'tag_id',
  });  

module.exports = {
  product,
  category,
  Tag,
  productTag,
  };