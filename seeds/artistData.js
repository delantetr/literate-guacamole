const { Artists } = require('../models');

const artistdata = [
    {
      name: 'Drake',    
    },
    {
      name: 'Dave Matthews Band',    
    },
    {
      name: 'Chris Stapleton',    
    },
];

const seedArtists = () => Artists.bulkCreate(artistdata);

module.exports = seedArtists;