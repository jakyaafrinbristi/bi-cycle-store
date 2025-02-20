import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

// Define the Order schema
const OrderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bicycle', // Reference to the Bicycle model
      required: [true, 'Product reference is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: 1,
    },
    totalprice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: 0,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

// Create the Order model
const OrderModel = model('Order', OrderSchema);

export default OrderModel;
