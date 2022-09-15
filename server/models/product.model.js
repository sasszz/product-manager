const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title is required.'],
        minLength: [3, 'Title must be at least three characters.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: [3, 'Description must be at least three characters.']
    },
}, {timestamps: true});

productSchema.plugin(uniqueValidator);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;