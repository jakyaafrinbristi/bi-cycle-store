import { Schema, model } from 'mongoose';
import { Bicycle } from './product.interface';

const bicycleSchema = new Schema<Bicycle>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum:['Mountain', 'Road', 'Hybrid', 'Electric'],
      trim: true,
      },

    
    description: {
      type: String,
      required: true,
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    inStock: {
      type: Boolean,
      default: true,
    },
    
  },
  { timestamps: true },
);

export const BicycleModel = model<Bicycle>('Bicycle', bicycleSchema);
