import { Document } from "mongoose";

export interface IProduct extends Document {
  // name: string;
  // brand: string;
  // price: number;
  // type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  // description: string;
  // quantity: number;
  // inStock: boolean | undefined;
  // createdAt: Date;
  // updatedAt: Date;
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
