import { BicycleModel } from '../product/product.model';
import { Order } from './order.interface';
import OrderModel from './order.model';

const createOrderIntoDb = async (payload: Order) => {
  const { product, quantity } = payload; 

  // Find bicycle by product ID
  const bicycle = await BicycleModel.findById(product);
  if (!bicycle) {
    throw new Error('Product not found');
  }

  // Check stock availability
  if (bicycle.quantity < quantity) {
    throw new Error(`Insufficient stock. Only ${bicycle.quantity} left.`);
  }

  // Calculate total price
  const totalprice = bicycle.price * quantity;

  // Deduct stock and update availability
  bicycle.quantity -= quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false; 
  }

  // Save updated bicycle stock
  await bicycle.save();

  // Create the order with calculated total price
  const orderData = { ...payload, totalprice };
  const result = await OrderModel.create(orderData);

  return result;
};

// Get all orders
const getAllOrderFromDb = async () => {
  return await OrderModel.find();
};

// Corrected revenue calculation
const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalprice' }
      },
    },
  ]);

  return result[0]?.totalRevenue || 0;
};

export const OrderServices = {
  createOrderIntoDb,
  calculateTotalRevenue,
  getAllOrderFromDb,
};
