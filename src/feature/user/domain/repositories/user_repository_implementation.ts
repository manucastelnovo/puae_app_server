import { CreateUser, User } from "feature/user/domain/models/User";
import { UserRepositories } from "./user_repositories";
import { UsersDataSource } from "feature/user/data/interfaces/user_data_source";

export class UserRepositoriesImplementation implements UserRepositories {
  private usersDataSource: UsersDataSource;
  private constructor(dataSource: UsersDataSource) {
      this.usersDataSource = dataSource;
  }

  static instance: UserRepositories | null = null;

    static create(dataSource: UsersDataSource) {
        if (UserRepositoriesImplementation.instance == null) {
            UserRepositoriesImplementation.instance = new UserRepositoriesImplementation(dataSource);
        }
        return UserRepositoriesImplementation.instance;
    }

  async getUser(name: string): Promise<User>{
    return await this.callDataSource(async () => {
          return await this.usersDataSource.getUser(name);
  })
  }
  async createdUser(data: CreateUser): Promise<User> {
    return await this.callDataSource(() => this.usersDataSource.createUser(data));
  }
  updateUser(user: User): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }
  deleteUser(user: User): Promise<Boolean> {
    throw new Error("Method not implemented.");
  }

  private async callDataSource<T>(callback: Function): Promise<T> {
        try {
            return await callback();
        } catch (error) {
            throw error;
        }
    }
}




