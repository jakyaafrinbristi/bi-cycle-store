import { model, Schema } from "mongoose";
import { ITestimonial } from "./testimonia.interface";

const testimonialSchema = new Schema<ITestimonial>(
    {
        name:{
          type:String,
          required:true  
        },
        image:{
          type:String,
          required:true  
        },
        email:{
          type:String,
          required:true  
        },
        message:{
          type:String,
          required:true  
        },
        rating:{
          type:Number,
          required:true ,
          min:1,
          max:5, 
        },
        createdAt:{
            type:Date,
            default:Date.now
        },
    },
    {
        timestamps:true
    }
);
const Testimonial = model<ITestimonial>("Testimonial",testimonialSchema);

export default Testimonial;
