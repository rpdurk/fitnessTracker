// const workoutRoutes = require('.')
const router = require('express').Router();
const Workout = require('../models/workout');
// index.js attaches appends api/workouts to beginning of this


// get last workout
router.get('api/workouts', (req, res) => {
    Workout.find({})
    .sort({ date: -1 })
    .then((lastWorkout) => {
        res.json(lastWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// get workouts from db
router.get('api/workouts', (req, res) => {
  Workout.find({})
  .then((lastWorkout) => {
      res.json(lastWorkout);
  })
  .catch((err) => {
      res.status(400).json(err);
  });
});

// add Workout to database
router.post('/api/workouts', ( req, res) => {
    Workout.create({})
    .then((newWorkout) => {
        res.json(newWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

// // create a workout
// router.post('/', ({ body }, res) => {
//     Workout.create(body)
//     .then((newWorkout) => {
//         res.json(newWorkout);
//     })
//     .catch((err) => {
//         res.status(400).json(err);
//     });
// });

// get workouts within last 7 days
router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).limit(7)
    .then((specificWorkout) => {
        res.json(specificWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
  )
    .then(updatedWorkout => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
  });
});

router.delete("/api/workouts", ({ body }, res) => {
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.status(400).json(err);
  });
});

module.exports = router;