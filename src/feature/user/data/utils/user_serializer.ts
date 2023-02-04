import { User } from "feature/user/domain/models/User"


export const userFromPG = (item: any): User => {
    return {
        userId: item.id,
        name: item.name,
        email: item.email,
        password: item.password,
        userType: item.user_type
    }
}