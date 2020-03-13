const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

    date: {
        type: Date,
        default: Date.now
    },

    exercises: [{

        name: string,
        extype: string,
        weight: integer,
        sets: integer,
        reps: integer,
        duration: integer
    }]

});




const Workout = mongoose.model("Example", WorkoutSchema);

module.exports = Workout;