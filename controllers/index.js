const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const uploadRoutes = require('./uploads')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/uploads', uploadRoutes);

module.exports = router;
