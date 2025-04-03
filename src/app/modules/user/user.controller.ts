import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
import httpStatus from "http-status";

const registerUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.registerUser(req.body);
  sendResponse(res,{
    statusCode:httpStatus.CREATED,
    success:true,
    message:"Registered successfully",
    data,
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.loginUser(req.body);
  sendResponse(res,{
    statusCode:httpStatus.ACCEPTED,
    success:true,
    message:"Logged in successfully",
    data,
  });
});

const updateToAdmin = catchAsync(async (req: Request, res: Response) => {
  const { userId} =req.params;
  const data = await UserService.updateUserToAdmin(userId);
  sendResponse(res,{
    statusCode:httpStatus.OK,
    success:true,
    message:"Admin Login Successfull",
    data,
  });
});
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const data = await UserService.getAllUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users fetched successfully",
    data,
  });
});


export const UserController = {
  registerUser,
  loginUser,
  updateToAdmin ,
  getAllUsers
};

