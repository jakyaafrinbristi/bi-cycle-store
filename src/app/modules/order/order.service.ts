import { IUser } from "../user/user.interface";
import Order from "./order.model";
import Product from "../product/product.model";
import httpStatus from "http-status";
import AppError from "../../errors/AppError";


const createOrder = async (
  user: IUser,
  payload: { products: { product: string; quantity: number }[] },


) => {
  if (!payload?.products?.length)
    throw new AppError(httpStatus.NOT_ACCEPTABLE, "Order is not specified");

  const products = payload.products;

  let totalPrice = 0;
  const productDetails = await Promise.all(
    products.map(async (item) => {
      const product = await Product.findById(item.product);
      if (product) {
        const subtotal = product ? (product.price || 0) * item.quantity : 0;
        totalPrice += subtotal;
        return item;
      }
    })
  );

  const order = await Order.create({
    user: user._id,
    products: productDetails,
    totalPrice,
  });

return order

;
};
const getOrders = async (user: IUser) => {
  const orders = await Order.find({ user: user._id }).populate("products.product");
  if (!orders.length) {
    throw new AppError(httpStatus.NOT_FOUND, "No orders found");
  }
  return orders;
};

 

export const orderService = {
  createOrder,
  getOrders

};
