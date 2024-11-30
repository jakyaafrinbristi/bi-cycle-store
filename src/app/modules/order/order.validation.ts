import { z } from "zod";

// Define the Zod schema
const OrderValidationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Please provide a valid email address"),
  product: z
    .string({ required_error: "Product reference is required" })
    .regex(/^[0-9a-fA-F]{24}$/, "Invalid Product ID format"), // Validate MongoDB ObjectId
  quantity: z
    .number({ required_error: "Quantity is required" })
    .int()
    .min(1, "Quantity must be at least 1"),
  totalprice: z
    .number({ required_error: "Total price is required" })
    .min(0, "Total price cannot be negative"),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
    timestamps: z.boolean() 
});

// Export the schema
export default OrderValidationSchema;
