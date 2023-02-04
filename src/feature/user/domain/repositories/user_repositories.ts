import { User } from "feature/user/domain/models/User";

export interface UserRepositories {
  getUser(id?: string): Promise<User>;
  createdUser(user: User): Promise<User>;
  updateUser(user: User): Promise<Boolean>;
  deleteUser(user: User): Promise<Boolean>;
}
