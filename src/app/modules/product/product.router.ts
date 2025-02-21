import express from 'express';
import { BicycleControllers } from './product.controller';
import validateRequest from '../middlewares/validateRequest';
import { bicycleCreateValidationSchema, bicycleUpdateValidationSchema } from './product.validation';

const router = express.Router();

router.get('/:productId', BicycleControllers.getSingleBicycle);
router.get('/', BicycleControllers.getAllBicycle);
router.post('/',validateRequest(bicycleCreateValidationSchema), BicycleControllers.createCycle);
router.put('/:productId',validateRequest( bicycleUpdateValidationSchema), BicycleControllers.updatedBicycle);
router.delete('/:productId', BicycleControllers.deleteBicycle);

export const BicycleRoutes = router;
