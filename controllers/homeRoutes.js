const router = require('express').Router();
const { Albums, Reviews } = require('../models');

// Custom middleware for withAuth
// const withAuth = require('../utils/auth');

// GET all albums for homepage
router.get('/', async (req, res) => {
    try {
      const dbAlbumData = await Albums.findAll({
        include: [
          {
            model: Reviews,
            attributes: ['review_content'],
          },
        ],
      });
  
      const albums = dbAlbumData.map((album) =>
        album.get({ plain: true })
      );

      res.json(albums); //Used for testing
  
    //   res.render('homepage', {
    //     reviews,
    //     // loggedIn: req.session.loggedIn,
    //   });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET one album for homepage
  router.get('/:id', async (req, res) => {
    try {
        // Must use album ID
      const dbAlbumData = await Albums.findByPk(req.params.id, {
        include: [
          {
            model: Reviews,
            attributes: ['review_content'],
          },
        ],
      });
  
      const albums = dbAlbumData.get({ plain: true });

      //Used for testing
      res.json(albums) 

    //Used for Front-End render
    // res.render('album', { homepage, albums);

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  module.exports = router;