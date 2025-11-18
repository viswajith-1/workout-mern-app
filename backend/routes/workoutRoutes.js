const express = require('express');
const router = express.Router();

// Sample route for workouts
router.get('/', (req, res) => {
    res.send('List of workouts');
});

router.post('/', (req, res) => {
    res.send('Create a new workout');
});

router.get('/:id', (req, res) => {
    res.send(`Get workout with ID: ${req.params.id}`);
});

router.patch('/:id', (req, res) => {
    res.send(`Update workout with ID: ${req.params.id}`);
});

router.delete('/:id', (req, res) => {
    res.send(`Delete workout with ID: ${req.params.id}`);
});

module.exports = router;