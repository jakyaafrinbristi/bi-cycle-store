/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from "../../config";
import AppError from "../../errors/AppError";
import { UserRole } from "./user.constant";
import { IUser } from "./user.interface";
import User from "./user.model";
import jwt from "jsonwebtoken";
import httpStatus from "http-status";
import bcrypt from "bcrypt";


const registerUser = async (userData: IUser) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const loginUser = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email }).select(
    "+password"
  );
  console.log("User password from DB:", user?.password);
  if (!user || !(await user.comparePassword(payload.password))) {
    throw new Error("Invalid email or password");
  }

  const accessToken = await user.generateToken();
  const refreshToken = user.generateRefreshToken();
  return { accessToken, refreshToken }
};
const refreshToken = async (refreshToken: string) => {
  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, config.jwt.refresh_secret!) as { email: string; role: string };

    // Find user by email (decoded from refresh token)
    const user = await User.findOne({ email: decoded.email });

    if (!user) {
      throw new Error("User not found");
    }

    // Generate a new access token using the decoded email and role
    const accessToken = jwt.sign(
      { email: decoded.email, role: decoded.role },
      config.jwt.access_secret,
      { expiresIn: config.jwt.access_expires_in } as jwt.SignOptions
    );

    return accessToken;
  } catch (err) {
    throw new Error("Invalid refresh token");
  }
};


const updateUserToAdmin = async(userId :string)=>{
  const user = await User.findById(userId);

  if(!user){
    throw new Error("User not Found")
  }
  user.role =UserRole.admin
  await user.save();
  return user;

};
const getAllUsers = async () => {
  return await User.find();
};

const updateUserProfile = async (email: string, updates: any) => {
  // Find user by email
  const user = await User.findOne({ email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  // Update user profile with the new details
  Object.assign(user, updates);
  await user.save();

  return user;  // Return the updated user
 
  
};
const changeUserPassword = async (email: string, currentPassword: string, newPassword: string) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  const isPasswordValid = await user.comparePassword(currentPassword);
  if (!isPasswordValid) {
    throw new AppError(httpStatus.BAD_REQUEST, "Current password is incorrect!");
  }

  // Only assign new password (let pre-save handle hashing)
  user.password = newPassword;
  await user.save();
};



export const UserService = {
  registerUser,
  loginUser,
  updateUserToAdmin,
  getAllUsers,
  refreshToken,
  updateUserProfile,
  changeUserPassword
};