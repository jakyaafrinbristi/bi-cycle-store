import { z } from "zod";

export const bicycleValidationSchema = z.object({
  name: z.string().min(1, "Name is required").trim(),
  brand: z.string().min(1, "Brand is required").trim(),
  price: z.number().min(0, "Price must be a positive number"), 
  type: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
  description: z.string().min(1, "Description is required").trim(),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  inStock: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
  timestamps: z.boolean()
});

export default bicycleValidationSchema;
