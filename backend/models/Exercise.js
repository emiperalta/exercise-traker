const mongoose = require('mongoose');

const ExerciseSquema = new mongoose.Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true, default: Date.now() }
}, {
    timestamps: true
});

module.exports = mongoose.model('Exercise', ExerciseSquema);