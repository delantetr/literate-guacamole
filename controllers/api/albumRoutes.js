const router = require('express').Router();
const { Albums, Artists, Reviews, AlbumArt} = require('../../models');

// GET one album w/ review and artist info
router.get('/:id', async (req, res) => {
  try {
     // Must use album ID
    const albumId = req.params.id;

    const albumData = await Albums.findByPk(albumId, {
      include: [
        {
          model: Artists,
          attributes: ['name'],
        },
        {
          model: Reviews,
          attributes: ['review_content', 'id'],
        },
        {
          model: AlbumArt,
          attributes: ['id', 'file_path'],
        }
      ],
    });

    if (!albumData) {
      return res.status(404).send('Album not found');
    }

    const album = albumData.get({ plain: true });

    const dbAllArtistsData = await Artists.findAll({});
    const allArtists = dbAllArtistsData.map(allArtist => 
      allArtist.get({ plain: true })
    );

    res.render('album-details', { album, allArtists, loggedIn: req.session.loggedIn });

    
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// GET one album w/ review and artist info
// router.get('/:id', async (req, res) => {
//     try {
//         // Must use album ID
//       const dbAlbumData = await Albums.findByPk(req.params.id, {
//         include: [
//           {
//             model: Reviews,
//             attributes: ['review_content'],
//           },
//           {
//             model: Artists,
//             attributes: ['name'],
//           },
//         ],
//       });
  
//       const albums = dbAlbumData.get({ plain: true });

//       //Used for testing
//       res.json(albums) 

//     //Used for Front-End render
//     res.render('album', {albums});

//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });


module.exports = router;