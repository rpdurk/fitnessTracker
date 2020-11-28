// const workoutRoutes = require('.')
const router = require('express').Router();
const Workout = require('../../models/workout');



// get last workout
router.get('/', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((lastWorkout) => {
        res.json(lastWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// addExercise
router.post('/:id', ({ body }, res) => {
    Workout.create(body)
    .then((newExercise) => {
        res.json(newExercise);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// create a workout
router.post('/', ({ body }, res) => {
    Workout.create(body)
    .then((newWorkout) => {
        res.json(newWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// get workouts within range
router.get('/range', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((specificWorkout) => {
        res.json(specificWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

module.exports = router;