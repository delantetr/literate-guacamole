const router = require('express').Router();

const userRoutes = require('./userRoutes');
const reviewRoutes = require('./reviewRoutes');
const artistRoutes = require('./artistRoutes');
const albumRoutes = require('./albumRoutes');
const searchRoutes = require('./searchRoutes');

router.use('/users', userRoutes);
router.use('/reviews', reviewRoutes);
router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);
router.use('/search', searchRoutes);

module.exports = router;
