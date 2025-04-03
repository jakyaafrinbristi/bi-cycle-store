import { Router } from "express";
import { testimonialController } from "./testimonial.controller";

const testimonialRouter = Router();
testimonialRouter.get("/",testimonialController.getAllTestimonial);
testimonialRouter.post("/create-testimonial",testimonialController.createTestimonial);

export default testimonialRouter;