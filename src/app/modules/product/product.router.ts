import express from 'express'
import { BicycleControllers } from './product.controller'

const router = express.Router()

router.post('/create-bicycle',BicycleControllers.createCycle);
router.get('/',BicycleControllers.getAllBicycle);

export const BicycleRoutes = router