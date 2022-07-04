const mongoose = require('mongoose');
const URI = process.env.DB_URI;

async function connectDB() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB is connected');
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }
}

module.exports = connectDB;
