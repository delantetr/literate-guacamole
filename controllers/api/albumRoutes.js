const router = require('express').Router();
const { Albums, Artists, Reviews } = require('../../models');


// GET one album w/ review and artist info
router.get('/:id', async (req, res) => {
    try {
        // Must use album ID
      const dbAlbumData = await Albums.findByPk(req.params.id, {
        include: [
          {
            model: Reviews,
            attributes: ['review_content'],
          },
          {
            model: Artists,
            attributes: ['name'],
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