import { Router } from 'express';

import productRouter from '../modules/product/product.router';
import orderRouter from '../modules/order/order.router';
import userRouter from '../modules/user/user.router';
import testimonialRouter from '../modules/testimonial/testimonial.route';


const router = Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/product',
    route:productRouter,
  },
  {
    path: '/order',
    route: orderRouter,
  },
  {
    path: '/testimonial',
    route: testimonialRouter ,
  },


];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
