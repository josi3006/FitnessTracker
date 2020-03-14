const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        name: String,
        extype: String,
        weight: Number,
        sets: Number,
        reps: Number,
        duration: Number
    }]

});


const Workout = mongoose.model("Workout", WorkoutSchema);


module.exports = Workout;