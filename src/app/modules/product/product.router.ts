import express from 'express';
import { BicycleControllers } from './product.controller';

const router = express.Router();

router.get('/:productId', BicycleControllers.getSingleBicycle);
router.get('/', BicycleControllers.getAllBicycle);
router.post('/', BicycleControllers.createCycle);
router.put('/:productId', BicycleControllers.updatedBicycle);
router.delete('/:productId', BicycleControllers.deleteBicycle);

export const BicycleRoutes = router;
