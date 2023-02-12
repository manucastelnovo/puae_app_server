import { pool } from '../../../core/service/database_service';
import { PGFoodsDataSource } from '../data/data_source/data_source';
import { FoodRepositoriesImplementation } from '../domain/repositories/food_repository_implementation';
import FoodsRouter from './food_router';

const foodsDataSource = PGFoodsDataSource.create(pool);
const foodsRespository = FoodRepositoriesImplementation.create(foodsDataSource);
export const foodsRouter = FoodsRouter(foodsRespository)
