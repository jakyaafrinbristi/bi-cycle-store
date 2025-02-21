import { z } from 'zod';

export const orderCreateValidationSchema = z.object({
  body: z.object({
    email: z.string({
      invalid_type_error: 'Email must be a string',
      required_error: 'Email is required',
    }).email('Invalid email format'), 
    product: z.string({
      invalid_type_error: 'Product ID must be a string',
      required_error: 'Product ID is required',
    }),

    quantity: z.number({
      invalid_type_error: 'Quantity must be a number',
      required_error: 'Quantity is required',
    }).min(1, 'Quantity must be at least 1'), 
    totalprice: z.number({
      invalid_type_error: 'Total Price must be a number',
      required_error: 'Total Price is required',
    }).min(1, 'Total Price must be at least 1'), 
  }),
});

export const orderValidationSchema = {
  orderCreateValidationSchema,
};
