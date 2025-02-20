import { Request, Response } from 'express';
import { BicycleServices } from './product.service';
import bicycleValidationSchema from './product.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from "http-status";

//post a bicycle
const createCycle = async (req: Request, res: Response) => {
  try {
    const { bicycle: bicycleData } = req.body;

    //will call service function to send this data
    const zodparsedData = bicycleValidationSchema.parse(bicycleData);

    const result = await BicycleServices.createCycleIntoDB(zodparsedData);

    //send response
    // res.status(200).json({
    //   message: 'Bicycle created successfully',
    //   success: true,
    //   data: result,
    // });
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Bicyle is Created succesfully',
      data:result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//get all bicycle
const getAllBicycle = async (req: Request, res: Response) => {
  try {
    //will call service function to send this data
    const result = await BicycleServices.getAllBicyclesFromDb();

    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Bicycles retrieved successfully',
      data:result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//get a bicycle
const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;
    const result = await BicycleServices.getSingleBicyclesFromDb(id);

    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Bicycles retrieved successfully',
      data:result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

//update user
const updatedBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    const { bicycle: bicycleData } = req.body;
    const result = await BicycleServices.updateBicyclesFromDb(id, bicycleData);

    //send response
    sendResponse(res,{
      statusCode:httpStatus.OK,
      success:true,
      message:'Bicycles updated successfully',
      data:result,
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};
//delete bicycle
const deleteBicycle = async (req: Request, res: Response) => {
  try {
    const id = req.params.productId;

    await BicycleServices.deleteBicyclesFromDb(id);

    //send response
    res.status(200).json({
      message: 'Bicycles deleted successfully',
      success: true,
      result: {},
    });
  } catch (error) {
    res.send({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

export const BicycleControllers = {
  createCycle,
  getAllBicycle,
  getSingleBicycle,
  updatedBicycle,
  deleteBicycle,
};
