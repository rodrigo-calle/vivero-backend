const express = require('express');

const expressConfig = require('./config/express');
const connectDB = require('./config/db');
const routes = require('./routes');

const app = express();

expressConfig(app);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    app.listen(PORT, () => {
        connectDB();
        routes(app);
        console.log("Server is running on port " + PORT);
    })
})

module.exports = app;
