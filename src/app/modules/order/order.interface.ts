import { Types } from "mongoose";

export type Order = {
  email: string;
  product: Types.ObjectId;
  quantity: number;
  totalprice: number;
  createdAt?: Date | undefined;
  updatedAt?: Date | undefined;
};
