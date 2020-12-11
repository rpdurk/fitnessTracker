const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: 
    {
      type: Date,
      default: () => new Date(),
    },

    exercises: [ 
    {
      type: {
      type: String,
      trim: true,
      required: 'Please enter the type of exercise.',
      },
      name: {
      type: String,
      trim: true,
      required: 'Please enter the exercise name.',
    },
      duration: {
        type: Number,
        required: 'Please enter the duration of exercise.'
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    }
  ]
  }
)
const Workout = mongoose.model('workout', workoutSchema);

module.exports = Workout;