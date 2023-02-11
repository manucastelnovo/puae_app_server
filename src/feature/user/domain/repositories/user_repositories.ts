import { User } from "feature/user/domain/models/User";

export interface UserRepositories {
  getUser(name: string): Promise<User>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<Boolean>;
  deleteUser(user: User): Promise<Boolean>;
}
