
import { Order } from "./order.interface";
import OrderModel from "./order.model";



const createOrderIntoDb = async (order: Order) => {
  const newOrder = new OrderModel(order);
  const result = await newOrder.save();  
  return result;
};
export const OrderServices =  {
    createOrderIntoDb,
  
  
  }