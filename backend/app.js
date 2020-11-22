const express = require('express');
const cors = require('cors');

const usersRoute = require('./routes/user.routes');
const exercisesRoute = require('./routes/exercise.routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRoute);
app.use('/exercises', exercisesRoute);

module.exports = app;
