import { z } from 'zod';

export const bicycleCreateValidationSchema = z.object({
  // body: z.object({
    name: z.string(),
    brand: z.string(),
    price: z.number().min(1, 'Price must be a positive number'),
    type: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']),
    description: z.string(),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
    inStock: z.boolean(),
  })
// });
export const bicycleUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    brand: z.string().optional(),
    price: z.number().min(1, 'Price must be a positive number').optional(),
    type: z.enum(['Mountain', 'Road', 'Hybrid', 'Electric']).optional(),
    description: z.string().optional(),
    quantity: z.number().min(1, 'Quantity must be at least 1').optional(),
    inStock: z.boolean().optional(),
  }),
});
export const bicycleValidationSchema = {
  bicycleCreateValidationSchema,
  bicycleUpdateValidationSchema
};
