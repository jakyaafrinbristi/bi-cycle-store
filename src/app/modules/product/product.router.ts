import express from 'express'
import { BicycleControllers } from './product.controller'

const router = express.Router()

router.post('/create-bicycle',BicycleControllers.createCycle);

export const BicycleRoutes = router