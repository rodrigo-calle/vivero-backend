const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    picture: {
        type: String,
        default: 'default_image_product'
    },
    price: {
        type: Number
    },
    
},{
    timestamps: true,
},);

module.exports = mongoose.model('Product', ProductSchema)