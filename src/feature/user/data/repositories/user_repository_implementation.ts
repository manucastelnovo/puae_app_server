import { User } from "feature/user/domain/models/User";
import { UserRepositories } from "./../../domain/repositories/user_repositories";
import { CustomErrorHandler } from '../../../error/error_handler'
import { getSourceMapRange } from "typescript";

class userRepositoriesImplementation implements UserRepositories {

  async getUser(name?: string): Promise<User> {
    return this._call(() => {
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
    }, "Couldn't get the user");
  }

  async createdUser(user: User): Promise<Boolean> {
    return this._call(() => {
      setTimeout(() => {
        console.log("Post request");
      }, 1000);
      return true;
    }, "Couldn't create the user");
  }

  async updateUser(user:User): Promise<Boolean> {
    return this._call(() => {
      setTimeout(() => {
        console.log("update request");
      }, 1000);
      return true;
    }, "Couldn't update the user")
  }

  async deleteUser(user: User): Promise<Boolean> {
    return this._call(() => {
      setTimeout(() => {
        console.log("delete request");
      }, 1000);
      return true;
    }, "Couldn't delete the user")
  }

  _call<Type>(callback: Function, errMessage: string): Promise<Type> {
    try {
        return callback();
    } catch (error) {
        console.log(errMessage);
        throw CustomErrorHandler.fromGenericError(error as Error);
    }
}
}
export const userRepositoriesImplementationProvider =
  new userRepositoriesImplementation();
