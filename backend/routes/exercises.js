const express = require('express');
const Exercise = require('../models/Exercise');
const { route } = require('./users');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const exercises = await Exercise.find();
        res.json(exercises);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newExercise = new Exercise({
            username: req.body.username,
            description: req.body.description,
            duration: Number(req.body.duration),
            date: Date.parse(req.body.date)
        });

        await newExercise.save();
        res.json('Exercise added!');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const exercise = await Exercise.findById(req.params.id);

        res.json(exercise);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.patch('/update/:id', async (req, res) => {
    try {
        let exercise = await Exercise.findById(req.params.id);

        if (!exercise) return res.status(400).json('The exercise with the given ID was not found.');

        exercise = await Exercise.findByIdAndUpdate(req.params.id, {
            username: req.body.username || exercise.username,
            description: req.body.description || exercise.description,
            duration: Number(req.body.duration) || exercise.duration,
            date: Date.parse(req.body.date) || exercise.date
        }, { new: true });        
        
        res.json(exercise);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Exercise.findByIdAndDelete(req.params.id);
        res.json('Exercise deleted.');
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
});
 
module.exports = router;