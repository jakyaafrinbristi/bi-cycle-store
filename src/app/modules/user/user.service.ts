import { UserRole } from "./user.constant";
import { IUser } from "./user.interface";
import User from "./user.model";

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
  return  accessToken
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
  getAllUsers
};