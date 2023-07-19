const router = require('express').Router();
const { Albums, Reviews, Artists } = require('../models');

// Custom middleware for withAuth
// const withAuth = require('../utils/auth');

// GET one random album with artist for homepage
router.get('/', async (req, res) => {
  try {
  
    // Get count of all albums
    const { count, rows } = await Albums.findAndCountAll({});
  
    // Get random primary key to choose album to display on homepage
    const randomAlbumID = Math.floor((Math.random() * count) + 1);
    console.log("Album ID chosen: " + randomAlbumID);
  
    // Use random album ID to find album by primary key
    const dbAlbumData = await Albums.findByPk(randomAlbumID, {
      include: [
        {
          model: Reviews,
          attributes: ['id', 'review_content', 'album_id'],
        },
      ],
    });
  
    // Get artist ID for randomly selected album
    let artistID = dbAlbumData.artist_id;
  
    const albums = dbAlbumData.get({ plain: true });
  
    // Get artist data by using associated artist id from selected album
    const dbArtistData = await Artists.findByPk(artistID, {});
    const artist = dbArtistData.get({ plain: true });
  
    // Get all artists for nav area
    const dbAllArtistsData = await Artists.findAll({});
    const allArtists = dbAllArtistsData.map(allArtist => 
      allArtist.get({ plain: true })
    );
  
  // Will render artist, album, and review information on homepage for both hero area and nav
  res.render('homepage', {albums, artist, allArtists, loggedIn: req.session.loggedIn});
  
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// May not need these

// // GET one album for homepage
// router.get('/:id', async (req, res) => {
//   try {
//     // Must use album ID
//     const dbAlbumData = await Albums.findByPk(req.params.id, {
//       include: [
//         {
//           model: Reviews,
//           attributes: ['review_content'],
//         },
//       ],
//     });
  
//     const albums = dbAlbumData.get({ plain: true });

//     //Used for testing
//     res.json(albums) 

//   //Used for Front-End render
//   // res.render('album', { homepage, albums);

//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET all albums for homepage
// router.get('/', async (req, res) => {
//     try {
//       const dbAlbumData = await Albums.findAll({
//         include: [
//           {
//             model: Reviews,
//             attributes: ['review_content'],
//           },
//         ],
//       });
  
//       const albums = dbAlbumData.map((album) =>
//         album.get({ plain: true })
//       );

//       res.json(albums); //Used for testing
  
//     //   res.render('homepage', {
//     //     reviews,
//     //     // loggedIn: req.session.loggedIn,
//     //   });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

module.exports = router;