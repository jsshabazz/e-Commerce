const seedGenre = require('./category-seeds');


const seedTracks = require('./tag-seeds');

const seedMerchandise = require('./product-seeds');


const seedMerchTracks = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedGenre();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  
  await seedTracks();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedMerchandise();
  console.log('\n----- PRODUCTS SEEDED -----\n');


  await seedMerchTracks();
  console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
