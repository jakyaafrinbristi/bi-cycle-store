import { z } from 'zod';

// Regular expression to validate ObjectId format
const ObjectIdRegex = /^[0-9a-fA-F]{24}$/;

// Order validation schema
const OrderValidationSchema = z.object({
  email: z
    .string()
    .email('Invalid email address') // Validate email format
    .nonempty('Email is required'), // Ensure it's not empty

  product: z
    .string()
    .regex(ObjectIdRegex, 'Invalid Product ID format') // Ensure it's a valid ObjectId
    .min(1, 'Product reference is required'), // Ensure it's not empty
  quantity: z
    .number()
    .int('Quantity must be an integer') // Ensure quantity is an integer
    .min(1, 'Quantity must be at least 1') // Ensure quantity is at least 1
    .nonnegative('Quantity must not be negative'), // Additional safety check

  totalprice: z
    .number()
    .min(0, 'Total price must be a positive number') // Ensure total price is positive
    .nonnegative('Total price must not be negative'), // Additional safety check

  createdAt: z.date().optional(), // Optional field
  updatedAt: z.date().optional(), // Optional field
});

// Export the validation schema
export default OrderValidationSchema;
