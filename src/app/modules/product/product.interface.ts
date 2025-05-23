import { Document } from "mongoose";

export interface IProduct extends Document {

  name: string;
  brand: string;
  price: number;
  description: string;
  category:'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  stock: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
};
