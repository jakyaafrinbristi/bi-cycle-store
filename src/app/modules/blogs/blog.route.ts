import { Router } from "express";
import { getAllBlogs } from "./blog.controller";


const blogRouter = Router();
blogRouter.get("/",getAllBlogs);


export default blogRouter;