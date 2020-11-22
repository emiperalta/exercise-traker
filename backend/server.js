const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const usersRoute = require('./routes/user.routes');
const exercisesRoute = require('./routes/exercise.routes');

const app = express();
const port = process.env.PORT;
const uri = process.env.MONGO_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});
mongoose.connection.once('open', () =>
    console.log('MongoDB connection established successfully')
);

app.use(cors());
app.use(express.json());

app.use('/users', usersRoute);
app.use('/exercises', exercisesRoute);

app.listen(port, () => console.log(`Server running on port ${port}`));
