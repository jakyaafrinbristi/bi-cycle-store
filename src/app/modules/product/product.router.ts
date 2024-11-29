import express from 'express'
import { BicycleControllers } from './product.controller'

const router = express.Router()

router.get('/:id',BicycleControllers.getSingleBicycle)
router.get('/',BicycleControllers.getAllBicycle);
router.post('/create-bicycle',BicycleControllers.createCycle);
router.put('/:id',BicycleControllers.updatedBicycle)
router.delete('/:id',BicycleControllers.deleteBicycle)

export const BicycleRoutes = router