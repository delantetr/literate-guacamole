const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const artistRoutes = require('./artistRoutes');
const albumRoutes = require('./albumRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);

module.exports = router;
