import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

import httpStatus from "http-status";
import { Request, Response } from "express";
import { testimonialService } from "./testimonial.service";

const createTestimonial = catchAsync(async(req:Request, res:Response)=>{
    const testimonialData = req.body;
    const newTestimonial = await testimonialService.createTestimonialIntoDb(testimonialData);
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Testimonial created successfully',
        data: newTestimonial,
      });
})
const getAllTestimonial = catchAsync(async(req:Request, res:Response)=>{
 
    const testimonial = await testimonialService.getAllTestimonialFromDb();
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:'Testimonial retreived successfully',
        data: testimonial,
      });
})
export const testimonialController={
    createTestimonial,
    getAllTestimonial
}