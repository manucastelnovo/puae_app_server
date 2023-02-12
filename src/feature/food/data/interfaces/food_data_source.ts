import { CreateFood,UpdateFood, Food,DeleteFood } from "feature/food/domain/models/food"; 


export interface FoodsDataSource{
    getAllFood(userId: number):Promise<Food[]>
    createFood(data: CreateFood): Promise<Food>;
    deleteFood(data: DeleteFood): Promise<Food>;
}