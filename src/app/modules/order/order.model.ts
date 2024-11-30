import { Schema, model } from "mongoose";
import { Order } from "./order.interface";

// Define the Order schema
const OrderSchema = new Schema<Order>({
  email: {
    type: String,
    required: true,
  },
  product: {
    type:Schema.Types.ObjectId,
    ref: "Product", // Replace 'Product' with the actual model name for the product
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  totalprice: {
    type: Number,
    required: true,
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
},{ timestamps: true });

// Create the Order model
const OrderModel = model("Order", OrderSchema);

export default OrderModel;
