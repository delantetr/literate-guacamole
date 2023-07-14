const sequelize = require('../config/connection');
const seedArtists = require('./artistData');
const seedAlbums = require('./albumData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedArtists();

  await seedAlbums();

  process.exit(0);
};

seedAll();
