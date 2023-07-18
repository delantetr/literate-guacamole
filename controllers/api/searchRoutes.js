const router = require('express').Router();

// Imports the operator method from Sequelize
const { Op } = require('sequelize');
const { Albums, Artists } = require('../../models');

// Search route
router.get('/', async (req, res) => {
    const { query } = req.query;
    console.log('Search query:', query);
    
    try {
    // Search for albums with matching artist name or album title
    const results = await Albums.findAll({
        include: [
            {  model: Artists },
          ],
          where: {
            [Op.or]: [
              { title: { [Op.like]: `%${query}%` } },
              { '$artist.name$': { [Op.like]: `%${query}%` } },
            ],
          },
        });

        console.log('Search result:', results);
        res.json(results);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).json({ error: 'Failed to perform search.' });
  }
});


module.exports = router;
