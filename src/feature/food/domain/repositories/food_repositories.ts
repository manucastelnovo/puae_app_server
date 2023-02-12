import { Food } from "feature/food/domain/models/food";

export interface FoodRepositories {
  getAllFood(userId: number): Promise<Food>;
  createFood(food: Food): Promise<Food>;
  updateFood(food: Food): Promise<Boolean>;
  deleteFood(food: Food): Promise<Boolean>;
}
