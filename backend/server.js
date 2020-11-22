const app = require('./app');
require('./database');
require('dotenv').config();

app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);
