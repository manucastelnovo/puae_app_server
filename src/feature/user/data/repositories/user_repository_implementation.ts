import { User } from "feature/user/domain/models/User";
import { UserRepositories } from "./../../domain/repositories/user_repositories";
import { getSourceMapRange } from "typescript";

class userRepositoriesImplementation implements UserRepositories {
  async getUser(name?: string): Promise<User> {
    setTimeout(() => {
      console.log("Get request");
    }, 1000);
    let newUser = {
      userId: 1,
      name: "Juan",
      correo: "lala@gmail.com",
      password: 12312,
      userType: "admin",
    };
    return newUser as User;
  }

  async createdUser(user: User): Promise<Boolean> {
    setTimeout(() => {
      console.log("Post request");
    }, 1000);
    return true;
  }
  async updateUser(user: User): Promise<Boolean> {
    setTimeout(() => {
      console.log("update request");
    }, 1000);
    return true;
  }
  async deleteUser(user: User): Promise<Boolean> {
    setTimeout(() => {
      console.log("delete request");
    }, 1000);
    return true;
  }
}
export const userRepositoriesImplementationProvider =
  new userRepositoriesImplementation();
