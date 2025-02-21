import { z } from 'zod';

export const bicycleCreateValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Bicycle Name must be a string',
      required_error: 'Name is required',
    }).trim(),

    brand: z.string({
      invalid_type_error: 'Brand must be a string',
      required_error: 'Brand is required',
    }).trim(),

    price: z.number({
      invalid_type_error: 'Bicycle Price must be a number',
      required_error: 'Price is required',
    }).min(1, 'Price must be a positive number'),

    type: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric'], {
      invalid_type_error: 'Type must be one of Mountain, Road, Hybrid, or Electric',
    }),

    description: z.string({
      invalid_type_error: 'Description must be a string',
      required_error: 'Description is required',
    }).trim(),

    quantity: z.number({
      invalid_type_error: 'Quantity must be a number',
      required_error: 'Quantity is required',
    }).min(1, 'Quantity must be at least 1'),
  }),
});
export const bicycleUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().trim().optional(),
    brand: z.string().trim().optional(),
    price: z.number().min(1, 'Price must be a positive number').optional(),
    type: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']).optional(),
    description: z.string().trim().optional(),
    quantity: z.number().min(1, 'Quantity must be at least 1').optional(),
    inStock: z.boolean().optional(),
  }),
});
export const bicycleValidationSchema = {
  bicycleCreateValidationSchema,
  bicycleUpdateValidationSchema
};
