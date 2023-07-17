const router = require('express').Router();
const { Artists } = require('../../models');
const Artist = require('../../models/Artists');



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

  router.get('/:id', async (req, res) => {
    try {
        // Must use artist ID
      const dbArtistData = await Artist.findByPk(req.params.id, {
      });
  
      const artist = dbArtistData.get({ plain: true });

      //Used for testing
      res.json(artist) 

    //Used for Front-End render
    // res.render('album', { homepage, albums);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;