const express = require('express');
const User = require('../models/User');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

router.post('/add', async (req, res) => {
    try {
        const newUser = new User({ username: req.body.username });
        await newUser.save();
        res.json('User added!');
    } catch(err) {
        res.status(400).json('Error: ' + err);
    }
});

module.exports = router;