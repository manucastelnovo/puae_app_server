export interface Food {
    id: number;
    userId:number;
    foodName:string;
    profit:number;
    productionCost:number;
    description:string;
    foodType:string;
    image:Buffer;
  }
  
  export interface CreateFood extends Omit<Food, "id"> {}
  
  export interface UpdateFood extends Partial<Food> {}
  
  export interface DeleteFood {
    id: number;
  }