import { CreateUser, User } from 'feature/user/domain/models/User';
import {Pool,PoolClient,QueryResult} from 'pg';
import { UsersDataSource } from '../interfaces/user_data_source';
// import  {SELECT_USER_QUERY}  from '../querys_scripts/queries';
import { userFromPG } from '../utils/user_serializer';

export class PGUsersDataSource implements UsersDataSource{
    private db: Pool;
    private constructor(db: Pool) {
        this.db = db;
    }
    async createUser(data: CreateUser): Promise<User> {
        return await this.callDataBase(`
        INSERT INTO puae.users (name, email, password, user_type)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
        `, [data.name,data.email,data.password,data.userType], (result) => {
            console.log(result);
            console.log('hola');
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

    async getUser(id: string): Promise<User> {
        return await this.callDataBase(`SELECT * FROM puae.users WHERE id = $1;`, [id], (result) => {
            console.log(result);
            console.log('hola');
            if (result.rowCount === 0) {
                throw new Error;
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
        } catch(err) {
            throw err;
        } finally {
            if (client){
                client.release()
            }
        }
    }

}

