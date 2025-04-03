import { Router } from "express";
import { UserController } from "./user.controller";


const userRouter = Router();

userRouter.post("/register", UserController.registerUser);
userRouter.post("/login", UserController.loginUser);
userRouter.patch("/update/:userId", UserController.updateToAdmin);
userRouter.get("/", UserController.getAllUsers);

export default userRouter;