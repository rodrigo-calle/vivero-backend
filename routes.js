const user = require('./api/user');
const product = require('./api/product');
const upload = require('./api/upload');

function routes(app) {
    app.use('/api/users', user);
    app.use('/api/products', product);
    app.user('/api/upload', upload);
}

module.exports = routes;