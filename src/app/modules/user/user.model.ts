// import { model, Schema } from "mongoose";
// import TUserModel, { TUser } from "./user.interface";

// import { UserRole } from "./user.constant";

// const UserSchema = new Schema<TUser , TUserModel>(
//     {
//         name:{
//           type:String,
//           required:true,
//           trim:true,
//         },
//         email:{
//           type:String,
//           required:true,
//           trim:true,
//           unique: true,
//           immutable: true,
//         },
//         password:{
//           type:String,
//           required:true,
//           trim:true,
         
//         },
//         role:{
//             type:String,
//             enum:Object.values(UserRole),
//             default:UserRole.customer,
//         },
//         phone: { 
//           type: String, 
//           default: "N/A"
//          },
//         address: { 
//           type: String,
//           default: "N/A"
//            },
//         city: { 
//           type: String, 
//           default: "N/A" },
//         // status:{
//         //   type:String,
//         //   enum:UserStatus,
//         //   default:'in-progress'
//         // }
//     },
//   {
//     timestamps:true,
//   }

// )
// export const User = model<TUser , TUserModel>("User",UserSchema);

