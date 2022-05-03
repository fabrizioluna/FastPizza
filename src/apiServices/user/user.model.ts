const { Schema, model } = require('mongoose');

const userSchema = Schema({
  user_name: {
    type: String,
    require: true,
    unique: true,
  },
  user_email: {
    type: String,
    require: true,
    unique: true,
  },
  user_password: {
    type: String,
    require: true,
  },
  user_adress: {
    type: String,
  },
  user_hasInitialDiscount: {
    type: Boolean,
  },
  user_verifiedEmail: {
    type: String,
  },
  user_imageProfile: {
    type: String,
  },
  user_role: {
    type: Schema.Types.ObjectId,
    ref: 'roles',
  },
  user_cart: {
    type: Schema.Types.ObjectId,
    ref: 'cart',
  },
  user_createdAt: {
    type: Date,
  },
});

export const User = model('user', userSchema);
