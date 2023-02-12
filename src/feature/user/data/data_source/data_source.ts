import { CustomError } from './../../../../core/error/custom_error';
import { DatabaseError } from './../../../../core/error/databases';
import { NotFoundError } from './../../../../core/error/not_fount_error';
import { CreateUser, User } from 'feature/user/domain/models/User';
import {Pool,PoolClient,QueryResult} from 'pg'; 
import { UsersDataSource } from '../interfaces/user_data_source';
import  {SELECT_USER_QUERY,INSERT_USER_QUERY}  from '../querys_scripts/queries';
import { userFromPG } from '../utils/user_serializer';

export class PGUsersDataSource implements UsersDataSource{
    private db: Pool;
    private constructor(db: Pool) {
        this.db = db;
    }
    async createUser(data: CreateUser): Promise<User> {
        return await this.callDataBase(INSERT_USER_QUERY, [data.name,data.email,data.password], (result) => {
            if (result.rowCount === 0) {
                throw new Error;
            }
            return userFromPG(result.rows[0]);
        });
    }

    static instance: PGUsersDataSource | null = null;

    static create(dataSource: Pool) {
        if (PGUsersDataSource.instance == null) {
            PGUsersDataSource.instance = new PGUsersDataSource(dataSource);
        }
        return PGUsersDataSource.instance;
    }

    async getUser(name: string): Promise<User> {
        return await this.callDataBase(SELECT_USER_QUERY, [name], (result) => {
            if (result.rowCount === 0) {
                throw new NotFoundError('User');
            }
            return userFromPG(result.rows[0]);
        });
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

