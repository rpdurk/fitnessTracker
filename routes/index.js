const router = require('express').Router();
const workoutRoutes = require('./workoutRoutes');
const viewRoutes = require('./viewRoutes');

router.use('/', viewRoutes);
router.use('/api/workouts', workoutRoutes);

module.exports = router;
