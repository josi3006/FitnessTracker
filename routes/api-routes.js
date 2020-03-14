
const db = require("../models");



module.exports = function (app) {

    // GET route for getting all of the workouts

    app.get("/api/workouts", function (req, res) {
        db.Workout.find({})
            .then(function (workouts) {
                console.log('All workouts: ', workouts);
                res.json(workouts);
            });
    });




    // Get route for returning posts of a specific category

    //   app.get("/api/workouts/category/:category", function(req, res) {
    //     db.Post.findAll({
    //       where: {
    //         category: req.params.category
    //       }
    //     })
    //       .then(function(dbPost) {


    //         res.json(dbPost);
    //       });
    //   });



    // Get route for retrieving a single workout

    app.get("/api/workouts/:id", function (req, res) {
        db.Workout.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (workout) {
                res.json(workout);
            });
    });




    // POST route for saving a new workout

    app.post("/api/workouts", function (req, res) {
        console.log('Here is body: ', req.body);
        db.Workout.create(req.body)
            .then(function (workout) {
                console.log('New workout: ', workout);
                res.json(workout);
            });
    });



    // DELETE route for deleting workouts

    app.delete("/api/workouts/:id", function (req, res) {
        db.Workout.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(function (workout) {
                res.json(workout);
            });
    });



    // PUT route for updating workouts

    app.put("/api/workouts/:id", function (req, res) {
        db.Workout.updateOne(
            // { where: { id: req.params.id } },
            { _id: req.params.id },

            {
                $push:
                    { exercises: req.body }
            }
        )
            .then(function (workout) {
                res.json(workout);
            })
    })

}
