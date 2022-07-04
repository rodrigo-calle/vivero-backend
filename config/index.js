require('dotenv').config();

const all = {
    env: process.env.NODE_ENV,
    
    port: process.env.PORT || 8080,
    
    expiresIn: '48h',


}

module.exports = all;
