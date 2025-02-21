import { Schema, model } from 'mongoose';
import { Order } from './order.interface';

// Define the Order schema
const OrderSchema = new Schema<Order>(
  {
    email: {
      type: String,
      required:true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'Bicycle', // Reference to the Bicycle model
      required:true,
    },
    quantity: {
      type: Number,
      required:true,
 
    },
   

    totalprice: {
      type: Number,
      required:true,
     
    },
    
  },
  { timestamps: true },
);

// Create the Order model
const OrderModel = model('Order', OrderSchema);

export default OrderModel;
