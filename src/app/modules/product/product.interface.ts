


export type Bicycle = {
   
    name: string;
    brand: string;
    price: string;
    type: "Mountain" | "Road" | "Hybrid" | "BMX" | "Electric"; 
    description:string;
    quantity:number;
    inStock:boolean | undefined;
  
    timestamps:boolean | undefined,
    createdAt?: Date;
    updatedAt?: Date;
    
} 

