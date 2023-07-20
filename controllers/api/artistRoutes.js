const router = require('express').Router();
const { Artists, Albums, Reviews } = require('../../models');



// GET all artists
router.get('/', async (req, res) => {
    try {
      const dbArtistData = await Artists.findAll();
  
      const artists = dbArtistData.map((artist) =>
        artist.get({ plain: true })
      );

      res.json(artists); //Used for testing
  
    //   res.render('homepage', {
    //     reviews,
    //     // loggedIn: req.session.loggedIn,
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET one artist
  router.get('/:id', async (req, res) => {
    try {
        // Must use artist ID
      const dbArtistData = await Artists.findByPk(req.params.id, {
        include: [
          {
            model: Albums,
            attributes: ['title', 'id'],
          },
        ],
      });
  
      if (!dbArtistData) {
        return res.status(404).json({ error: 'Artist not found' });
      }
      
      const artist = dbArtistData.get({ plain: true });

      const dbAllArtistsData = await Artists.findAll({});
      const allArtists = dbAllArtistsData.map(allArtist => 
        allArtist.get({ plain: true })
      );

    //Used for Front-End render
    res.render('artist-album', { artist: artist, allArtists, loggedIn: req.session.loggedIn });


    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;