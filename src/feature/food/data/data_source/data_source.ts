import { CustomError } from './../../../../core/error/custom_error';
import { DatabaseError } from './../../../../core/error/databases';
import { NotFoundError } from './../../../../core/error/not_fount_error';
import { CreateFood, DeleteFood, Food } from 'feature/food/domain/models/food';
import {Pool,PoolClient,QueryResult} from 'pg'; 
import { FoodsDataSource } from '../interfaces/food_data_source';
import  {SELECT_ALL_FOOD_QUERY,INSERT_FOOD_QUERY}  from '../querys_scripts/queries';
import { foodFromPG } from '../utils/food_serializer';

export class PGFoodsDataSource implements FoodsDataSource{
    private db: Pool;
    private constructor(db: Pool) {
        this.db = db;
    }
    static instance: PGFoodsDataSource | null = null;

    static create(dataSource: Pool) {
        if (PGFoodsDataSource.instance == null) {
            PGFoodsDataSource.instance = new PGFoodsDataSource(dataSource);
        }
        return PGFoodsDataSource.instance;
    }

    async createFood(data: CreateFood): Promise<Food> {
        return await this.callDataBase(INSERT_FOOD_QUERY, [data.userId,data.foodName,data.profit,data.productionCost,data.description,data.foodType,data.image], (result) => {
            if (result.rowCount === 0) {
                throw new Error;
            }
            return foodFromPG(result.rows[0]);
        });
    }

    async getAllFood(userId: number): Promise<Food[]> {
        return await this.callDataBase(SELECT_ALL_FOOD_QUERY, [userId], (result) => {
            if (result.rowCount === 0) {
                throw new NotFoundError('Food');
            }
            return result.rows.map(row => foodFromPG(row));
        });
    }

    async deleteFood(data: DeleteFood): Promise<Food> {
        throw new Error('Method not implemented.');
    }
    

    private async callDataBase<T>(query: string, values: any[], callback: (result: QueryResult<any>) => T): Promise<T> {
        let client: PoolClient;
        client = await this.db.connect();
        try {
            const response = await client.query(query, values);
            return callback(response);
        } catch (error) {
            if (error instanceof CustomError) {
              throw error;
            }
            throw new DatabaseError(error as Error);
          } finally {
            if (client) {
              client.release();
            }
          }
        }
      }