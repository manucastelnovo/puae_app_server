import { CreateUser,UpdateUser, User } from "feature/user/domain/models/User"; 


export interface UsersDataSource{
    getUser(id:string):Promise<User>
    createUser(data: CreateUser): Promise<User>;
    

}