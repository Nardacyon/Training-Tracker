const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        });
    });
    
    app.post("/api/workouts", function (req, res) {
        db.Workout.create({})
        .then(data => res.json(data))
        .catch(err => {
            if (err) throw err;
            res.json(err);
        });
    });
    
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(error => {
            res.json(error);
        });
    }); 
};