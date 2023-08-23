import { pool } from "../../../core/service/database_service";
import { PGUsersDataSource } from "../data/data_source/data_source";
import { UserRepositoriesImplementation } from "../domain/repositories/user_repository_implementation";
import UsersRouter from "./user_router";

const usersDataSource = PGUsersDataSource.create(pool);
const usersRespository = UserRepositoriesImplementation.create(usersDataSource);
export const usersRouter = UsersRouter(usersRespository);
