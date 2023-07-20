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
    {
      name: 'Beyonce',    
    },
    {
      name: 'Nicki Minaj',    
    },
    {
      name: "Lil' Wayne",    
    },
    {
      name: "Ice Spice",    
    },
    {
      name: "Luke Bryan",    
    },
    {
      name: "Red Hot Chili Peppers",    
    },
    {
      name: "Good Charlotte",    
    },
    {
      name: "System of A Down",    
    },
    {
      name: "Metallica",    
    },
    {
      name: "Charlie Parker",    
    },
    {
      name: "Bad Bunny",    
    },
    {
      name: "Deadmau5",    
    },
    {
      name: "Deadmau5",    
    },
];

const seedArtists = () => Artists.bulkCreate(artistdata);

module.exports = seedArtists;