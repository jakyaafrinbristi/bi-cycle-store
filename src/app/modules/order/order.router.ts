import express from 'express';
import { OrderControllers } from './order.controller';
import validateRequest from '../middlewares/validateRequest';
import { orderCreateValidationSchema } from './order.validation';

const router = express.Router();

router.post('/', validateRequest(orderCreateValidationSchema),OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrder);
router.get('/revenue', OrderControllers.calculateRevenue);
export const OrderRoutes = router;
