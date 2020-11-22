const mongoose = require('mongoose');
require('dotenv').config();

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

(async () => {
    await mongoose.connect(process.env.MONGO_URI, mongooseOptions, () =>
        console.log('Server running...')
    );
})();
