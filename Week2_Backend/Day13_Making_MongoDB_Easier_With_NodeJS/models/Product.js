const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name required'], // field required with custom error message
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Product price required'],
        min: [0, 'Price must be above 0'], // min value validation
    },
    category: {
        type: String,
        required: true,
        enum: ['electronics', 'furniture', 'books', 'other'], // only allows these values
    },
    tags: {
        type: [String] // array of strings
    },
    stock: {
        type: Number,
        default: 0,
    },
    onSale: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    lastUpdated: {
        type: Date,
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;