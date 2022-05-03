const { Schema, model } = require('mongoose');

const productSchema = Schema({
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        require: true
    },
    product_discount: {
        type: Number,
        required: true,
    },
    product_createdAt: {
        type: Date
    }
});

export const Product = model('product', productSchema);