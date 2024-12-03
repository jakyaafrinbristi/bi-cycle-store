
import { Order } from "./order.interface";
import OrderModel from "./order.model";




const createOrderIntoDb = async (order: Order) => {
  
  const result = await OrderModel.create(order);  
  return result;
};


const calculateTotalRevenue = async () => {
  
    const result = await OrderModel.aggregate([
      {
        $project: {
          totalRevenue: {
            $multiply: ["$quantity", "$totalprice"]  
          },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: "$totalRevenue" },  
        },
      },
    ]);

    
    return result[0] ? result[0].totalRevenue : 0;
  } 


export const OrderServices =  {
    createOrderIntoDb,
    calculateTotalRevenue
  
  
  }