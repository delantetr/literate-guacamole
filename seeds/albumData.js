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
    {
      title: 'Take Care',
      review_id: Reviews.review_id,
      artist_id: 1  
    },
    {
      title: 'Nothing Was the Same',
      review_id: Reviews.review_id,
      artist_id: 1  
    },
    {
      title: 'Views',
      review_id: Reviews.review_id,
      artist_id: 1  
    },
    {
      title: 'Big Whiskey and the Groo Grux King',
      review_id: Reviews.review_id,
      artist_id: 2  
    },
    {
      title: 'Crash',
      review_id: Reviews.review_id,
      artist_id: 2  
    },
    {
      title: 'Before These Crowded Streets',
      review_id: Reviews.review_id,
      artist_id: 2  
    },
    {
      title: 'Away from the World',
      review_id: Reviews.review_id,
      artist_id: 2  
    },
    {
      title: 'From A Room Vol.1',
      review_id: Reviews.review_id,
      artist_id: 3  
    },
    {
      title: 'From A Room Vol.2',
      review_id: Reviews.review_id,
      artist_id: 3  
    },
    {
      title: 'Starting Over',
      review_id: Reviews.review_id,
      artist_id: 3  
    },
];

const seedAlbums = () => Albums.bulkCreate(albumdata);

module.exports = seedAlbums;