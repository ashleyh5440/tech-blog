const router = require('express').Router();
const blogRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogs', blogRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;