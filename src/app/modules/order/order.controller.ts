import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { orderService } from "./order.service";
import httpStatus from "http-status";

const createOrder = catchAsync(async (req, res) => {
  const user = req.user;

  console.log(req.body);
  const order = await orderService.createOrder(user, req.body);

  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Order placed successfully',
    data:order,
  });
});

const getOrders = catchAsync(async (req, res) => {
  const user = req.user;
  const orders = await orderService.getOrders(user); 

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Orders retrieved successfully",
    data: orders,
  });
});


export const orderController = { createOrder,  getOrders };
