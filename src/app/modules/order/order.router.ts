import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/order', OrderControllers.createOrder);
router.get('/', OrderControllers.getAllOrder);
router.get('/revenue', OrderControllers.calculateRevenue);
export const OrderRoutes = router;
