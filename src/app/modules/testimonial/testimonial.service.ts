import { ITestimonial } from "./testimonia.interface";
import Testimonial from "./testimonial.model";



const createTestimonialIntoDb = async(payload : ITestimonial)=>{
  const testimonial =await Testimonial.create(payload);
  return testimonial;
}

const getAllTestimonialFromDb = async()=>{
  const getTestimonial =await Testimonial.find();
  return getTestimonial;
}
export const testimonialService ={
  createTestimonialIntoDb,
  getAllTestimonialFromDb,

}