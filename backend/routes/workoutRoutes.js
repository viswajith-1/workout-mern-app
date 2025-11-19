const express = require("express");
const router = express.Router();
const workoutController = require("../controllers/workoutController");

// Route for workouts
router.get("/", workoutController.getWorkouts);
router.post("/", workoutController.createWorkout);
router.get("/:id", workoutController.getWorkout);
router.patch("/:id", workoutController.updateWorkout);
router.delete("/:id", workoutController.deleteWorkout);

module.exports = router;
