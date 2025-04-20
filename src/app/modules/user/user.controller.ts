import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";
import httpStatus from "http-status";
import config from "../../config";

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
  const { accessToken, refreshToken } = await UserService.loginUser(req.body);

  // Refresh Token ke Cookie te store
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: config.NODE_ENV === "production",
    sameSite: "strict",
  });

  // Only Access Token pathabo response e
  sendResponse(res, {
    statusCode: httpStatus.ACCEPTED,
    success: true,
    message: "Logged in successfully",
    data: { accessToken },
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const { token } = req.body;
  const accessToken = await UserService.refreshToken(token);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "New access token generated successfully",
    data: { accessToken },
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
  getAllUsers,
  refreshToken
};

