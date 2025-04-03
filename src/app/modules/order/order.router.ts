import { Router } from "express";
import { orderController } from "./order.controller";
import { UserRole } from "../user/user.constant";
import auth from "../middlewares/auth";
// import auth from "../../middlewares/auth";


const orderRouter = Router();

// orderRouter.get("/verify", auth(UserRole.user), orderController.verifyPayment);

orderRouter
  .route("/")
  .post(auth(UserRole.customer), orderController.createOrder)
  .get(auth(UserRole.customer), orderController.getOrders);

export default orderRouter;