import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.router';
import { BicycleRoutes } from '../modules/product/product.router';
import { OrderRoutes } from '../modules/order/order.router';


const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/products',
    route:BicycleRoutes,
  },
  {
    path: '/orders',
    route: OrderRoutes,
  },


];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
