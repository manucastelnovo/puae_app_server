import { User } from "feature/user/domain/models/User";

export interface UserRepositories {
  getUser(name?: string): Promise<User>;
  createdUser(user: User): Promise<Boolean>;
  updateUser(user: User): Promise<Boolean>;
  deleteUser(user: User): Promise<Boolean>;
}
