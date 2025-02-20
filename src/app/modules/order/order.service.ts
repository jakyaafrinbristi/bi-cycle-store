import { Order } from './order.interface';
import OrderModel from './order.model';

const createOrderIntoDb = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
const getAllOrderFromDb = async () => {
  const result = await OrderModel.find();
  return result;
};

const calculateTotalRevenue = async () => {
  const result = await OrderModel.aggregate([
    {
      $project: {
        totalRevenue: {
          $multiply: ['$quantity', '$totalprice'],
        },
      },
    },
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalRevenue' },
      },
    },
  ]);

  return result[0] ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  createOrderIntoDb,
  calculateTotalRevenue,
  getAllOrderFromDb,
};
// import { Order } from './order.interface';
// import OrderModel from './order.model';
// import ProductModel from '../product/product.model'; // Import Product model

// const createOrderIntoDb = async (order: Order) => {
//   const { productId, quantity } = order;

//   // Fetch product from database
//   const product = await ProductModel.findById(productId);
//   if (!product) {
//     throw new Error('Product not found');
//   }

//   // Check if stock is sufficient
//   if (product.quantity < quantity) {
//     throw new Error(`Insufficient stock. Only ${product.quantity} left.`);
//   }

//   // Deduct stock and update `inStock` status
//   product.quantity -= quantity;
//   product.inStock = product.quantity > 0;

//   // Save the updated product
//   await product.save();

//   // Create order
//   const result = await OrderModel.create(order);
//   return result;
// };

// const getAllOrderFromDb = async () => {
//   return await OrderModel.find();
// };

// const calculateTotalRevenue = async () => {
//   const result = await OrderModel.aggregate([
//     {
//       $project: {
//         totalRevenue: {
//           $multiply: ['$quantity', '$totalprice'],
//         },
//       },
//     },
//     {
//       $group: {
//         _id: null,
//         totalRevenue: { $sum: '$totalRevenue' },
//       },
//     },
//   ]);

//   return result[0] ? result[0].totalRevenue : 0;
// };

// export const OrderServices = {
//   createOrderIntoDb,
//   getAllOrderFromDb,
//   calculateTotalRevenue,
// };

