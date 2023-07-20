const router = require('express').Router();

// Imports the operator method from Sequelize
const { Op } = require('sequelize');
const { Albums, Artists } = require('../../models');

// Search route
router.get('/', async (req, res) => {
  const { query } = req.query;
  console.log('Search query:', query);
  

  try {

    let results;
    let searchType;

    results = await Artists.findAll({
      where: {
        name: { [Op.like]: `%${query}%` },
      },
    });

    if (results.length > 0) {
      // const finalresults = results.map((result) => result.get({ plain: true }));
      searchType = 'artist';
    } else {
      results = await Albums.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${query}%` } },
          ],
        },
      });
      searchType = 'album';
    }

    console.log('Search result:', results);

    const searchData = results.map((result) => ({
      type: searchType,
      id: result.id,
    }));

    console.log(searchData);
    // console.log('Search type:', type);
    
    res.json(searchData);
    // res.render('artist-album', results);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Failed to perform search.' });
  }
});


module.exports = router;
