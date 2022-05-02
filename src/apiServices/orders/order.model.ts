const { Schema, model } = require('mongoose');

const orderSchema = Schema({
  order_envoice: {
    type: String,
  },
  order_buyer: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  order_Products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'product',
    },
  ],
  order_employeeDelivery: {
    type: Schema.Types.ObjectId,
    ref: 'employee',
  },
  order_employeeCreation: {
    type: Schema.Types.ObjectId,
    ref: 'employee',
  },
  order_status: {
    type: Boolean,
  },
  order_creationDay: {
    type: Date,
    require: true,
  },
  order_deliveryDay: {
    type: Date,
    require: true,
  },
  order_timeFinish: {
    type: Number,
  },
  order_methodPay: {
    type: String,
  },
  order_discountCode: {
    type: Number,
  },
  order_discountApplied: {
    type: Number,
  },
  order_addressClient: {
    type: String,
    require: true,
  },
});

export const Order = model('order', orderSchema);
