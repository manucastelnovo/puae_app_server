type password = string | number;
type id = number;



export interface User {
  userId: number;
  name: string;
  email: string;
  password: password;
  userType: string;
}

export interface CreateUser extends Omit<User, 'userId'> {}

export interface UpdateUser extends Partial<User> {}
