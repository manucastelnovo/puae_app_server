import { CreateFood, Food,UpdateFood,DeleteFood } from "feature/food/domain/models/food";
import { FoodRepositories } from "./food_repositories";
import { FoodsDataSource } from "feature/food/data/interfaces/food_data_source";
import { CustomError } from './../../../../core/error/custom_error';
import { GenericError } from "./../../../../core/error/generic_error";

export class FoodRepositoriesImplementation implements FoodRepositories {
  private foodsDataSource: FoodsDataSource;
  private constructor(dataSource: FoodsDataSource) {
      this.foodsDataSource = dataSource;
  }

  static instance: FoodRepositories | null = null;

    static create(dataSource: FoodsDataSource) {
        if (FoodRepositoriesImplementation.instance == null) {
            FoodRepositoriesImplementation.instance = new FoodRepositoriesImplementation(dataSource);
        }
        return FoodRepositoriesImplementation.instance;
    }

  async getAllFood(userId: number): Promise<Food>{
    return await this.callDataSource(async () => {
          return await this.foodsDataSource.getAllFood(userId);
  })
  }
  async createFood(data: CreateFood): Promise<Food> {
    return await this.callDataSource(() => this.foodsDataSource.createFood(data));
  }
  updateFood(food: Food): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  deleteFood(food: Food): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

  private async callDataSource<T>(callback: Function): Promise<T> {
        try {
            return await callback();
        } catch (error) {
          if (error instanceof CustomError) {
            throw error;
          }
            throw new GenericError("Food Repository error");
        }
    }
}