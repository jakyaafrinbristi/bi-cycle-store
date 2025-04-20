/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import config from "../../config";
import { UserRole } from "./user.constant";
import { IUser } from "./user.interface";
import User from "./user.model";
import jwt from "jsonwebtoken";


const registerUser = async (userData: IUser) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const loginUser = async (payload: IUser) => {
  const user = await User.findOne({ email: payload.email }).select(
    "password email role"
  );
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
      { expiresIn: config.jwt.access_expires_in }
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
}

export const UserService = {
  registerUser,
  loginUser,
  updateUserToAdmin,
  getAllUsers,
  refreshToken
};