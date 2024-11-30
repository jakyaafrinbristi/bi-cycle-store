import { Request, Response } from "express";
import { OrderServices } from "./order.service";

const createOrder =async (req :Request ,res:Response)=>{
    try{
        const{ order : orderData}=req.body;

    //will call service function to send this data
const result=await OrderServices.createOrderIntoDb(orderData)

    //send response
    res.status(200).json({
        message:"Order created successfully",
        success:true,
        data:result
    })
    }
    catch (error) {
        
        res.send({
          success: false,
          message: 'Something went wrong',
          error,
        })
      }

}
export const OrderControllers ={
    createOrder
}