import { BicycleModel } from "../product.model";
import { Bicycle } from "./product.interface";

const createCycleIntoDB = async(bicycle : Bicycle )=>{
   const result= await BicycleModel.create(bicycle)
   return result;

};
const getAllBicyclesFromDb=async()=>{
    const result =await BicycleModel.find();
    return result;
}
export const BicycleServices =  {
  createCycleIntoDB,
  getAllBicyclesFromDb
}