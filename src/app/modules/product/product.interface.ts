


export type Bicycle = {
   
    name: string;
    brand: string;
    price: string;
    type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric"; 
    description:string;
    quantity:number;
    inStock:boolean;
  
    timestamps:boolean,
    createdAt?: Date;
    updatedAt?: Date;
    
} 

