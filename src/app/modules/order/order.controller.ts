import { Request, Response } from "express";
import { OrderServices } from "./order.service";
import OrderValidationSchema from "./order.validation";

const createOrder =async (req :Request ,res:Response)=>{
    try{
        const{ order : orderData}=req.body;

    //will call service function to send this data
const zodParsedData =OrderValidationSchema.parse(orderData);
const result=await OrderServices.createOrderIntoDb( zodParsedData)

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
const getAllOrder=async (req : Request ,res : Response)=>{
 
  try{
 

  //will call service function to send this data
const result=await OrderServices.getAllOrderFromDb()

  //send response
  res.status(200).json({
      message:"Bicycles order successfully",
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
const calculateRevenue = async (req: Request, res: Response) => {
    try {
      const totalRevenue = await OrderServices.calculateTotalRevenue();
  
      res.status(200).json({
        message: "Revenue calculated successfully",
        status: true,
        data: {
          totalRevenue,
        },
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
        error
      });
    }
  };

  
export const OrderControllers ={
    createOrder,
    calculateRevenue,
    getAllOrder
}