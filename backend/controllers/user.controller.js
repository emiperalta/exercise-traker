const User = require('../models/User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};

exports.addUser = async (req, res) => {
    try {
        const newUser = new User({ username: req.body.username });
        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(400).json('Error: ' + err);
    }
};
