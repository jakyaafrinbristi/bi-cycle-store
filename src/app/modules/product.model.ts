import { Schema, model } from 'mongoose';
import { Bicycle } from './product/product.interface';

const bicycleSchema = new Schema<Bicycle>({
   
    name:{
        type: String,
        required :true,
        trim:true
    },
    brand:{
        type: String,
        required :true,
        trim:true
    },
    price:{
        type: String,
        required :true,
        trim:true
    },
    type: {
        type: String,
        enum: {
          values: ["Mountain", "Road", "Hybrid", "Electric"]
        
        },
        required:true,
        trim: true,
      },

    description:{
        type: String,
        required :true,
        trim:true
    },
    quantity:{
        type: Number,
        required :true,
        trim:true},
    inStock:{
        type:Boolean,
        required:true},

})

export const BicycleModel =model<Bicycle>('Bicycle',bicycleSchema)