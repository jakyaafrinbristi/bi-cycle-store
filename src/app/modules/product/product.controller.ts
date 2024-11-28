import { Request, Response } from "express";
import { BicycleServices } from "./product.service";


const createCycle =async (req : Request ,res : Response)=>{
 
    try{
        const{ bicycle : bicycleData}=req.body;

    //will call service function to send this data
const result=await BicycleServices.createCycleIntoDB(bicycleData)

    //send response
    res.status(200).json({
        message:"Bicycle created successfully",
        success:true,
        data:result
    })
    }
    catch(err){
     console.log(err)   
    }

}
const getAllBicycle =async (req : Request ,res : Response)=>{
 
    try{
   

    //will call service function to send this data
const result=await BicycleServices.getAllBicyclesFromDb()

    //send response
    res.status(200).json({
        message:"Bicycles retrieved successfully",
        success:true,
        data:result
    })
    }
    catch(err){
     console.log(err)   
    }

}
export const BicycleControllers ={
    createCycle,
    getAllBicycle
}