import { Request, Response } from 'express';
import { BicycleServices } from './product.service';
// import bicycleValidationSchema from './product.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from "http-status";
import catchAsync from '../../utils/catchAsync';

//post a bicycle
const createCycle = catchAsync(async (req: Request, res: Response) => {
  
  const { bicycle: bicycleData } = req.body;

  //will call service function to send this data


  const result = await BicycleServices.createCycleIntoDB(bicycleData );


  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Bicyle is Created succesfully',
    data:result,
  });
}
);

//get all bicycle
const getAllBicycle = catchAsync(async (req: Request, res: Response) => {
  
  //will call service function to send this data
  const result = await BicycleServices.getAllBicyclesFromDb();

  //send response
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Bicycles retrieved successfully',
    data:result,
  });
})


//get a bicycle
const getSingleBicycle = catchAsync(async (req: Request, res: Response) => {
  
  const id = req.params.productId;
  const result = await BicycleServices.getSingleBicyclesFromDb(id);

  //send response
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:'Bicycles retrieved successfully',
    data:result,
  });
} 
);

//update user
const updatedBicycle = catchAsync(async (req: Request, res: Response) => {

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

});
//delete bicycle
const deleteBicycle = catchAsync(async (req: Request, res: Response) => {
  
  const id = req.params.productId;

  await BicycleServices.deleteBicyclesFromDb(id);

  //send response
  res.status(200).json({
    message: 'Bicycles deleted successfully',
    success: true,
    result: {},
  });
} 
)

export const BicycleControllers = {
  createCycle,
  getAllBicycle,
  getSingleBicycle,
  updatedBicycle,
  deleteBicycle,
};
