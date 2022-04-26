const { Schema, model } = require('mongoose');

const cartSchema = Schema({
    cart_user: {
        type: Schema.Types.ObjectId, 
        ref: 'user',
        unique: true
    },
    cart_products: [{
        type: Schema.Types.ObjectId, 
        ref: 'product' 
    }],
    product_createdAt: {
        type: Date
    }
});

export const Cart = model('cart', cartSchema);