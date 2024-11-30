import { BicycleModel } from "../product.model";
import { Bicycle } from "./product.interface";


const createCycleIntoDB = async (bicycle: Bicycle) => {
  const newBicycle = new BicycleModel(bicycle);
  const result = await newBicycle.save();  
  return result;
};
const getAllBicyclesFromDb=async()=>{
    const result =await BicycleModel.find();
    return result;
};
const getSingleBicyclesFromDb=async(id:string)=>{
    const result =await BicycleModel.findById(id);
    return result;
}
const updateBicyclesFromDb = async (id: string, bicycle: Partial<Bicycle>) => {

  const result = await BicycleModel.findByIdAndUpdate(id,bicycle ,
     { new: true });

  return result;
};

const deleteBicyclesFromDb=async(id:string)=>{
  const result =await BicycleModel.findByIdAndDelete(id);
  return result;
}



export const BicycleServices =  {
  createCycleIntoDB,
  getAllBicyclesFromDb,
  getSingleBicyclesFromDb,
  updateBicyclesFromDb,
  deleteBicyclesFromDb ,

}