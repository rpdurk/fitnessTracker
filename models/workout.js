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
const Workout = model('workout', workoutSchema);

module.exports = Workout;
// example of what would be inserted into database
// let workoutSeed = [
//   {
//     day: new Date().setDate(new Date().getDate()-10),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Bicep Curl",
//         duration: 20,
//         weight: 100,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-7),
//     exercises: [
//       {
//         type: "cardio",
//         name: "Running",
//         duration: 25,
//         distance: 4
//       }
//     ]
//   }
// ];