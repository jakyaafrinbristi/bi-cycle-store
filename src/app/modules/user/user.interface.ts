import { Document, Model } from "mongoose";
import { UserRole } from "./user.constant";

export interface TUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  address?: string;
  city?: string;
  // status: 'in-progress' | 'blocked';
  createdAt: Date;
  updatedAt: Date;
}

type TUserModel =Model<TUser>;
export default TUserModel;