const { Albums, Artists, Reviews } = require('../models');

const albumdata = [
    {
      title: 'Thank Me Later', 
      review_id: Reviews.review_id,
      artist_id: 1,
      album_art_id: null,  
    },
    {
      title: 'Under the Table and Dreaming',
      review_id: Reviews.review_id,
      artist_id: 2
    },
    {
      title: 'Traveller',
      review_id: Reviews.review_id,
      artist_id: 3  
    },
];

const seedAlbums = () => Albums.bulkCreate(albumdata);

module.exports = seedAlbums;